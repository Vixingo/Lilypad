import { Typography, Box } from "@mui/material";
import React from "react";
import FAQbox from "./FAQbox";

function FAQ() {
    return (
        <>
            <section className="FAQ" style={{ marginTop: "100px" }}>
                <div className="container">
                    <Typography
                        sx={{
                            fontFamily: "Atma",
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "28px",
                            fontWeight: "600",
                            textShadow: "10px 10px 10px #000",
                            margin: "10px auto",
                        }}
                    >
                        {" "}
                        মিডিয়ায় আমাদের অর্জনের গল্প
                    </Typography>
                    <Box className="VideoBox">
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/it_g5TK8los?si=FYB1Ev0E8oH3nmxV&amp;controls=0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                        <a href="https://www.dhakapost.com/country/237944">
                            <img
                                src="../img/dhaka-post-logo.svg"
                                width={"250px"}
                                alt=""
                            />
                        </a>
                    </Box>
                    <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                        <img src="../img/mark.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "600",
                            fontFamily: "Archivo",
                            m: 1,
                            mb: 3,
                        }}
                    >
                        FAQ
                    </Typography>
                    <div className="row">
                        <div className="col-md-6 ">
                            <FAQbox />
                        </div>
                        <div className="col-md-6">
                            <FAQbox />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <FAQbox />
                        </div>
                        <div className="col-md-6">
                            <FAQbox />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FAQ;
