import React from "react";
import { Typography, Box } from "@mui/material";
function Footer() {
    return (
        <>
            <Box
                id="footer"
                sx={{
                    textAlign: "center",
                    background: "url(../img/footer.png)",
                    backgroundRepeat: "no-repeat",
                    paddingBottom: "80px",
                    paddingTop: "40px",
                    backgroundPosition: "bottom",
                    backgroundSize: "100%",
                    "@media(max-width:767px)": {
                        paddingBottom: "40px",
                    },
                }}
            >
                <img src="../img/logo.png" alt="" width={100} />
            </Box>
        </>
    );
}

export default Footer;
