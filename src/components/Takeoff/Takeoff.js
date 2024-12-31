import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Apply_Btn from "./Apply_Btn";

function Takeoff() {
    return (
        <>
            <section
                className="Takeoff"
                style={{ paddingBottom: "20px", marginTop: "20px" }}
            >
                <div className="container">
                    <Box sx={{ position: "relative", textAlign: "center" }}>
                        <Box>
                            <img src="../img/logo.png" width={"200px"} alt="" />
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "24px",
                            fontFamily: "Atma",
                            fontWeight: "600",
                            "@media(max-width:767px)": {
                                fontSize: "22px",
                            },
                        }}
                    >
                        সকল রোগের শেফা আছে প্রকৃতিতে{" "}
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: "15px",
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "28px",
                            fontFamily: "Tiro",
                            fontWeight: "600",
                        }}
                    >
                        এখনই ভিডিও কলে বিশেষজ্ঞের পরামর্শ নিন
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#FFF",
                            fontSize: "18px",
                            fontFamily: "Tiro",
                            fontWeight: "600",
                        }}
                    >
                        সহজ ৩টি ধাপে{" "}
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
                                color: "#eee",
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
                                    fontSize: "26px",
                                    fontFamily: "Tiro",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                সময় ও তারিখ নির্ধারণ{" "}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    fontFamily: "Tiro",
                                    lineHeight: "1.2",

                                    maxWidth: "400px",
                                }}
                            >
                                'Book Now' বাটনে ক্লিক করে, কবে কথা বলবেন সেই
                                তারিখ ও সময় নির্বাচন করুন
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
                                    fontSize: "26px",
                                    fontFamily: "Tiro",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                প্রয়োজনীয় তথ্য দিন{" "}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    fontFamily: "Tiro",
                                    lineHeight: "1.2",
                                    maxWidth: "400px",
                                }}
                            >
                                আপনার নাম, ইমেইল ও মোবাইল নাম্বার দিয়ে{" "}
                                <b>'Schedule Event'</b> বাটনে ক্লিক করুন, সাথে
                                সাথে মিটিং এর লিংক আপনার দেওয়া ইমেইলে চলে যাবে{" "}
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
                                    fontSize: "26px",
                                    fontFamily: "Tiro",
                                    marginTop: "10px",
                                    marginBottom: "5px",
                                }}
                            >
                                কথা বলুন{" "}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "300",
                                    fontSize: "18px",
                                    fontFamily: "Tiro",
                                    lineHeight: "1.2",
                                    maxWidth: "400px",
                                }}
                            >
                                নির্ধারিত সময়ে ইমেইলে পাওয়া মিটিং লিংকে ক্লিক
                                করে ভিডিও কলে যোগ দিন, আপনার কথা বলুন, আপনার
                                সমস্যা বলুন, আপনার চিকিৎসক আপনার সাথে থাকবেন{" "}
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
