import { Box, Typography } from "@mui/material";
import React from "react";

function Takeoff() {
    return (
        <>
            <section className="Takeoff">
                <div className="container">
                    <Box sx={{ textAlign: "center" }}>
                        <img src="../img/Takeoff.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            marginTop: "15px",
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "28px",
                            fontWeight: "600",
                        }}
                    >
                        LAUNCHING YOUR NFT PROJECT
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "28px",
                            fontFamily: "llp",
                            fontWeight: "600",
                        }}
                    >
                        Is as easy as 1,2,3
                    </Typography>
                    <Typography
                        sx={{
                            color: "#FFF",
                            textAlign: "center",
                            fontFamily: "llp",
                        }}
                    >
                        <img src="../img/down.png" alt="" />
                    </Typography>
                </div>
            </section>
        </>
    );
}

export default Takeoff;
