import { Typography } from "@mui/material";
import React from "react";

export default function UserName(props: { userName: string }) {
  return (
    <Typography
      component="div"
      variant="h4"
      sx={{
        bgcolor: "secondary.main",
        px: 2,
        py: 1,
        border: 1,
        borderColor: "#000",
        borderRadius: "10px",
      }}
    >
      {props.userName}
    </Typography>
  );
}
