import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import { BsPersonVcardFill } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdRecommend } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

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
      ref={ref}
    >
      <CssBaseline />
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
          />
          <BottomNavigationAction
            label="Why join Stellar?"
            icon={<CiStar />}
            sx={{ fontSize: "30px" }}
          />
          <BottomNavigationAction
            label="Recommendations"
            icon={<MdRecommend />}
            sx={{ fontSize: "30px" }}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<MdOutlineConnectWithoutContact/>}
            sx={{ fontSize: "30px" }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
