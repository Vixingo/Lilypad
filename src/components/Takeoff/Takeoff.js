import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Apply_Btn from "./Apply_Btn";

function Takeoff() {
    return (
        <>
            <section
                className="Takeoff"
                style={{ paddingBottom: "20px", marginTop: "200px" }}
            >
                <div className="container">
                    <Box sx={{ position: "relative", textAlign: "center" }}>
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                top: "-350px",
                                transform: "translateX(-50%)",
                                width: "350px",
                                "@media(max-width:1199px)": {
                                    width: "300px",
                                    top: "-300px",
                                },
                                "@media(max-width:991px)": {
                                    width: "250px",
                                    top: "-250px",
                                },
                            }}
                        >
                            <img
                                src="../img/Takeoff.png"
                                width={"100%"}
                                alt=""
                            />
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "24px",
                            fontFamily: "llp",
                            fontWeight: "600",
                            "@media(max-width:767px)": {
                                fontSize: "22px",
                            },
                        }}
                    >
                        WE'RE READY FOR TAKEOFF{" "}
                    </Typography>
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
                            fontSize: "18px",
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
                    <Stack
                        flexDirection={"row"}
                        justifyContent={"space-evenly"}
                        sx={{
                            flexWrap: "wrap",
                            "& > :not(style)": {
                                width: "400px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                background: "#76A43F",
                                color: "#fff",
                                margin: "15px 15px",
                                padding: "12px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src="../img/icon1.png"
                                alt=""
                                width="57px"
                                height="57px"
                            />
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontFamily: "llp",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                GENERATE
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "800",
                                    fontSize: "18px",
                                    fontFamily: "Archivo",
                                    lineHeight: "1.2",
                                    maxWidth: "400px",
                                }}
                            >
                                We take your images and attributes to create
                                your unique NFT collection.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                background: "#76A43F",
                                color: "#fff",
                                margin: "15px 15px",
                                padding: "12px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src="../img/icon2.png"
                                alt=""
                                width="57px"
                                height="57px"
                            />
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontFamily: "llp",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                MINT PAGE{" "}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "800",
                                    fontSize: "18px",
                                    fontFamily: "Archivo",
                                    lineHeight: "1.2",
                                    maxWidth: "400px",
                                }}
                            >
                                We build you a fully custom mint page to match
                                your branding.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                background: "#76A43F",
                                color: "#fff",
                                margin: "15px 15px",
                                padding: "12px",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src="../img/icon3.png"
                                alt=""
                                width="57px"
                                height="57px"
                            />
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    fontFamily: "llp",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                LAUNCH
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "800",
                                    fontSize: "18px",
                                    fontFamily: "Archivo",
                                    lineHeight: "1.2",
                                    maxWidth: "400px",
                                }}
                            >
                                Its time to sell out and take care of your post
                                mint priorities
                            </Typography>
                        </Box>
                    </Stack>
                    <Apply_Btn />
                </div>
            </section>
        </>
    );
}

export default Takeoff;
