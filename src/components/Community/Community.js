import { Box, Typography } from "@mui/material";
import React from "react";

function Community() {
    return (
        <>
            <section
                className="About"
                id="about"
                style={{ background: "#0C1B17" }}
            >
                <div className="container">
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center ",
                            fontWeight: "600",
                            fontSize: "28px",
                            paddingTop: "30px",
                            marginBottom: "30px",
                            fontFamily: "Atma",
                        }}
                    >
                        আমাদের সম্পর্কে
                    </Typography>
                    <Box
                        sx={{
                            textAlign: "center",
                            maxWidth: "500px",
                            margin: "0 auto",
                        }}
                    >
                        {/* <img src="../img/logo.png" alt="" width={120} /> */}
                    </Box>
                    <Typography
                        sx={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "29px",
                            fontFamily: "Tiro",
                            mt: 4,
                            textShadow: "10px 10px 10px #000",
                        }}
                    >
                        বাংলাদেশের সবচেয়ে বড় ইউনানী ঔষধালয় ও নার্সারী
                    </Typography>
                    <Typography
                        sx={{
                            color: "#fff",
                            fontFamily: "Atma",
                            fontSize: "18px",
                            textAlign: "center",
                            fontWeight: "800",
                            mb: 3,
                            mt: 1,
                            "@media(max-width:767px)": {
                                fontSize: "16px",
                            },
                        }}
                    >
                        আমাদের প্রোডাক্ট এখন দেশের বাইরেও পাওয়া যাচ্ছে।
                    </Typography>
                    <Typography
                        sx={{
                            color: "#76A43F",
                            fontFamily: "llp",
                            mt: 2,
                            textAlign: "center",
                        }}
                    >
                        <img src="../img/down.png" alt="" />
                    </Typography>
                    <Box
                        sx={{
                            margin: "0 auto",
                            background: "#76A43F",
                            color: "#fff",
                            textAlign: "center",
                            padding: "20px",
                            maxWidth: "875px",
                            paddingBottom: "0",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontFamily: "Atma",
                                fontWeight: "600",
                            }}
                        >
                            গত ১০+ বছর ধরে সফলতার সাথে
                            {/* <span style={{ fontWeight: "300" }}>PAD</span> */}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "21px",
                                fontFamily: "Atma",
                                fontWeight: "600",
                            }}
                        >
                            নিজস্ব বাগানে উৎপাদিত প্রাকৃতিক ও ভেষজ গাছ, পাতা,
                            মূল থেকে ইউনানী ওষুধ তৈরি করে
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
                                    fontFamily: "Tiro",
                                    fontSize: "26px",
                                    fontStyle: "italic",
                                    pt: 2,
                                    pb: 2,
                                }}
                            >
                                ১০০% গ্যারান্টি সহকারে
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            background: "#0C1B17",
                            textAlign: "center",
                            maxWidth: "875px",
                            margin: "0 auto",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#76A43F",
                                fontSize: "24px",
                                fontWeight: "600",
                                paddingTop: "45px",
                                fontFamily: "Atma",
                            }}
                        >
                            দেশে-বিদেশে ৫০০,০০০ এর অধিক খুশি গ্রাহকের কাছে পৌঁছ
                            দেন{" "}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "20px",
                                fontStyle: "bold",
                                fontFamily: "Tiro",
                                paddingBottom: "20px",
                            }}
                        >
                            হেকিম হাজী খন্দকার কবীর হোসেন মিলিটারী
                        </Typography>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default Community;
