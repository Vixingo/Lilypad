import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "animate.css";

function Hero() {
    return (
        <>
            <section className="Hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 align-self-center animate__animated animate__fadeInLeft ">
                            <Typography
                                sx={{
                                    color: "#fff",
                                    fontSize: "35px",
                                    fontFamily: "Tiro",
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
                                    textShadow: "10px 10px 10px #000",
                                }}
                            >
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "40px",
                                        fontFamily: "Atma",
                                    }}
                                >
                                    মেসার্স ননীফল ইউনানী ঔষধালয় ও নার্সারী
                                </span>
                                <br />
                                <br />
                                এখানে পাবেন ৬০০+ ঔষধি গাছ ও সেরা ইউনানী চিকিৎসা
                                যা প্রদান করে হেকিম হাজী খন্দকার কবীর হোসেন
                                মিলিটারী{" "}
                            </Typography>
                            <br />
                            <Box
                                sx={{
                                    margin: "10px auto",
                                    "@media (max-width:767px)": {
                                        textAlign: "center",
                                    },
                                }}
                            >
                                <a
                                    href="https://calendly.com/kabir-military/30min"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button
                                        className="animate__animated animate__infinite  animate__pulse  "
                                        variant="outlined"
                                        sx={{
                                            color: "#fff",
                                            borderColor: "#76A43F",
                                            backgroundColor: "#76A43F",
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                            fontFamily: "Tiro",
                                            transition: "0.2s",
                                            margin: " 5px",
                                            width: "280px",
                                            textShadow: "0px 0px 10px #000",

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
                                        এপয়েন্টমেন্ট বুক করুন
                                    </Button>
                                </a>
                                {/* <Button
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
                                    
                                </Button> */}
                            </Box>
                        </div>
                        <div className="col-md-4 animate__animated animate__bounceInDown">
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
