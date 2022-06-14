import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignInPage() {
  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
   )
}
