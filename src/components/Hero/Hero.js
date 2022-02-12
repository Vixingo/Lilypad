import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Hero() {
    return (
        <>
            <section className="Hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center">
                            <Typography
                                sx={{ color: "#fff", fontSize: "40px" }}
                            >
                                <span style={{ fontWeight: "bold" }}>
                                    The leading revenue sharing
                                </span>
                                <br />
                                launchpad for Solana NFT projects!
                            </Typography>
                            <Box sx={{ margin: "10px auto" }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#fff",
                                        borderColor: "#76A43F",
                                        backgroundColor: "#76A43F",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        fontFamily: "Archivo",
                                        transition: "0.2s",
                                        margin: "0 5px",
                                        dropShadow:
                                            "0px 7px 8px rgba(118, 164, 63, 0.17)",
                                        borderRadius: "0",
                                        ":hover": {
                                            borderColor: "#7da275",
                                            color: "#7da275",
                                            backgroundColor: "#fff",
                                            boxShadow: " 0 0 20px #fff",
                                        },
                                    }}
                                >
                                    <i class="fa-brands fa-discord"></i> &nbsp;
                                    DISCORD
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "#fff",
                                        borderColor: "#76A43F",
                                        backgroundColor: "#76A43F",
                                        fontWeight: "bold",
                                        fontSize: "16px",
                                        fontFamily: "Archivo",
                                        transition: "0.2s",
                                        margin: "0 5px",
                                        dropShadow:
                                            "0px 7px 8px rgba(118, 164, 63, 0.17)",
                                        borderRadius: "0",
                                        ":hover": {
                                            borderColor: "#7da275",
                                            color: "#7da275",
                                            backgroundColor: "#fff",
                                            boxShadow: " 0 0 20px #fff",
                                        },
                                    }}
                                >
                                    <i class="fa-brands fa-twitter"></i> &nbsp;
                                    TWITTER
                                </Button>
                            </Box>
                        </div>
                        <div className="col-md-5">
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <img
                                    src="../img/hero.png"
                                    alt=""
                                    style={{ width: "100%" }}
                                />
                            </Box>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
