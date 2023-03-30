import React from "react";
import { Box } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

const Errorpage = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "10%" }}>
      <ReportGmailerrorredIcon sx={{ fontSize: "100px" }} />

      <h1 style={{ marginBottom: "15px", color: "red" }}>404 Error</h1>
      <h2>Page Not Found</h2>
    </Box>
  );
};

export default Errorpage;
