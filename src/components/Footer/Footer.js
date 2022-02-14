import React from "react";
import { Typography, Box } from "@mui/material";
function Footer() {
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    background: "url(../img/footer.png)",
                    backgroundRepeat: "no-repeat",
                    paddingBottom: "80px",
                    paddingTop: "40px",
                    backgroundPosition: "bottom",
                    backgroundSize: "100%",
                }}
            >
                <img src="../img/logo.png" alt="" />
            </Box>
        </>
    );
}

export default Footer;
