import { Box, Typography } from "@mui/material";
import React from "react";

function Community() {
    return (
        <>
            <section className="Community">
                <div className="container">
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center ",
                            fontWeight: "600",
                            fontSize: "28px",
                            marginTop: "50px",
                            marginBottom: "30px",
                            fontFamily: "Archivo",
                        }}
                    >
                        COMMUNITY DRIVEN ECOSYSTEM
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="../img/lil.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "29px",
                            fontFamily: "llp",
                            mt: 3,
                            mb: 2,
                        }}
                    >
                        Lilypad's revenue is shared amongst PepePunks NFT
                        holders.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "Archivo",
                            fontSize: "18px",
                            textAlign: "center",
                        }}
                    >
                        50% of all launch fees is split amongst all PepePunks
                        holders on a weekly basis.
                    </Typography>
                    <Typography
                        sx={{
                            color: "#76A43F",
                            fontFamily: "llp",
                            mt: 2,
                            textAlign: "center",
                        }}
                    >
                        EXAMPLE
                    </Typography>
                    <Box
                        sx={{
                            background: "#76A43F",
                            color: "#fff",
                            textAlign: "center",
                            padding: "30px",
                            paddingBottom: "0",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontFamily: "Archivo",
                                fontWeight: "600",
                            }}
                        >
                            6 PROJECTS LAUNCH THROUGH PROJECT LILY
                            <span style={{ fontWeight: "400" }}>PAD </span>
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                fontFamily: "Archivo",
                                fontWeight: "600",
                            }}
                        >
                            WITH AN AVERAGE SUPPLY OF 2,000 NFT’S @ 1 SOL PER
                            MINT. = 12,000 SOL
                        </Typography>
                        <Box
                            sx={{
                                background: "#fff",
                                maxWidth: "400px",
                                margin: "0 auto",
                                position: "relative",
                                bottom: "-30px",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000",
                                    fontFamily: "llp",
                                    fontSize: "26px",
                                    fontStyle: "italic",
                                    pt: 2,
                                    pb: 2,
                                }}
                            >
                                12% FEE = 1,440 SOL
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ background: "#0C1B17", textAlign: "center" }}>
                        <Typography
                            sx={{
                                color: "#76A43F",
                                fontSize: "24px",
                                fontWeight: "600",
                                paddingTop: "45px",
                            }}
                        >
                            50% TO PEPEPUNK HOLDERS = 720 SOL
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "20px",
                                fontStyle: "italic",
                                fontFamily: "llp",
                                paddingBottom: "20px",
                            }}
                        >
                            221 TOTAL PEPEPUNKS = 3.25 SOL PER MONTH PER PEPE
                        </Typography>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Community;
