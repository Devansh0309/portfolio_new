"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { BsPersonVcardFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdRecommend } from "react-icons/md";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        display: {
          lg: "none",
          xl: "none",
          xs: "block",
          sm: "block",
          md: "none",
        },
        pb: 7,
      }}
    >
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ background: "#2f4f4f", "& .MuiBottomNavigationAction-root, .Mui-selected, svg": {
            color: "#fff"
          } }}
        >
          <BottomNavigationAction
            label="About me"
            icon={<BsPersonVcardFill style={{ background: "#0a66c2", borderRadius:"50%", padding:"2px" }}  />}
            sx={{ fontSize: "30px", color: "#fff" }}
            onClick={(e) => {
              const el = document.getElementsByClassName("header-content")[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <BottomNavigationAction
            label="Why join Stellar?"
            icon={<CiStar style={{ background: "red",borderRadius:"50%", padding:"2px" }} />}
            sx={{ fontSize: "30px", color: "#fff" }}
            onClick={() => {
              const el = document.getElementsByClassName(
                "about-stellar-content"
              )[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <BottomNavigationAction
            label="Recommendations"
            icon={<MdRecommend style={{ background: "#0a66c2",borderRadius:"50%", padding:"2px" }} />}
            sx={{ fontSize: "30px", color: "#fff" }}
            onClick={() => {
              const el = document.getElementsByClassName(
                "recommendations-content"
              )[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
