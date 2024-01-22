import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { BsPersonVcardFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdRecommend } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

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
        >
          <BottomNavigationAction
            label="About me"
            icon={<BsPersonVcardFill />}
            sx={{ fontSize: "30px" }}
            onClick={(e) => {
              const el = document.getElementsByClassName("header-content")[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <BottomNavigationAction
            label="Why join Stellar?"
            icon={<CiStar />}
            sx={{ fontSize: "30px" }}
            onClick={() => {
              const el = document.getElementsByClassName(
                "about-stellar-content"
              )[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <BottomNavigationAction
            label="Recommendations"
            icon={<MdRecommend />}
            sx={{ fontSize: "30px" }}
            onClick={() => {
              const el = document.getElementsByClassName(
                "recommendations-content"
              )[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<MdOutlineConnectWithoutContact/>}
            sx={{ fontSize: "30px" }}
            onClick={() => {
              const el = document.getElementsByClassName("contacts-content")[0];
              el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
