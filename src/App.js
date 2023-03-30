import React from "react";
import { RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import Router from "./routes/Routes";

function App() {
  return (
    <Box>
      <RouterProvider router={Router} />
    </Box>
  );
}

export default App;
