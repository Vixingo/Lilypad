import { Box, Typography } from "@mui/material";
import React from "react";

function HighLight() {
    return (
        <section className="HighLight ">
            <div className="container">
                <Typography
                    sx={{
                        paddingTop: 10,
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
                </Typography>{" "}
                <Box sx={{ textAlign: "center" }}>
                    <a href="https://www.dhakapost.com/country/237944">
                        <img
                            src="../img/dhaka-post-logo.svg"
                            width={"250px"}
                            alt=""
                        />
                    </a>
                </Box>
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
            </div>
        </section>
    );
}

export default HighLight;
