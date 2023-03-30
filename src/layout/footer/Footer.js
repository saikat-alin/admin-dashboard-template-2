import { Box } from "@mui/material";
import React from "react";
import "./footer.scss";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <Box className="footer" >
            <Box>© Copyright {year} All rights reserved by Saikat Das Alin |</Box>
            <Box display="flex" alignItems="center" gap="6px">
                Developed by 
                <img
                    src={`${process.env.PUBLIC_URL}/assets/ati-logo.png`}
                    alt="ATI"
                    style={{ maxHeight: "30px", cursor: "pointer" }}
                    onClick={() => window.open("https://www.atilimited.net/", "_blank")}
                />
            </Box>
        </Box>
    );
}

export default Footer;