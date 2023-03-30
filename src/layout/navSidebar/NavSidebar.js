import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleDrawerClose } from "../../reducer/NavSidebarSlice";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Box } from "@mui/material";

export default function NavSidebar() {
  const dispatch = useDispatch();
  const vw = Math.max(document.clientWidth || 0, window.innerWidth || 0);

  useEffect(() => {
    if (vw < 800) {
      dispatch(handleDrawerClose());
    }
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
    </Box>
  );
}
