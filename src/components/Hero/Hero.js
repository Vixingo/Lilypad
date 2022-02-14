import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "animate.css";

function Hero() {
    return (
        <>
            <section className="Hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center animate__animated animate__fadeInLeft">
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "40px",
                                    marginTop: "-100px",
                                    "@media(max-width:1199px)": {
                                        fontSize: "30px",
                                    },
                                    "@media(max-width:991px)": {
                                        fontSize: "24px",
                                    },
                                    "@media (max-width:767px)": {
                                        marginTop: "30px",
                                        textAlign: "center",
                                    },
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    The leading revenue sharing
                                </span>
                                <br />
                                launchpad for Solana NFT projects!
                            </Typography>
                            <Box
                                sx={{
                                    margin: "10px auto",
                                    "@media (max-width:767px)": {
                                        textAlign: "center",
                                    },
                                }}
                            >
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
                                        margin: " 5px",
                                        width: "180px",
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
                                        width: "180px",
                                        margin: " 5px",
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
                        <div className="col-md-5 animate__animated animate__bounceInDown">
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
