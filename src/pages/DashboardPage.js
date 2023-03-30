import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "../style/App.scss";
import Dashboard from "../components/dashboard/Dashboard";

function Dashboardpage() {
  const open = useSelector((state) => state.NavSidebar.open);
  const vw = Math.max(document.clientWidth || 0, window.innerWidth || 0)

  return (
    <Box className="pageHeight">
      <Box className={(vw > 700 && open ? 'content-open' : 'content-close')} >
        <Dashboard />
      </Box>
    </Box>
  )
}

export default Dashboardpage