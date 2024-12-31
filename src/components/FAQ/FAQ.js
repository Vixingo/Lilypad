import { Typography, Box } from "@mui/material";
import React from "react";
import FAQbox from "./FAQbox";

function FAQ() {
    return (
        <>
            <section className="FAQ" style={{ marginTop: "100px" }}>
                <div className="container">
                    <Box sx={{ textAlign: "center", marginTop: "60px" }}>
                        <img src="../img/mark.png" alt="" />
                    </Box>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: "22px",
                            fontWeight: "600",
                            fontFamily: "Atma",
                            m: 1,
                            mb: 3,
                        }}
                    >
                        সাধারণ জিজ্ঞাসা
                    </Typography>
                    <div className="row">
                        <div className="col-md-6 ">
                            <FAQbox
                                question={"আপনাদের ঠিকানা কোথায় ?"}
                                answer={
                                    "গ্রাম: ছাতিয়ানতলা, যশোর ফিলিংষ্ট্রেশনের পশ্চিম পাশে, ডাকঘর: চুড়ামনকাটি, থানা ও জেলা: যশোর 7407 Jessore, Khulna Division, Bangladesh"
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <FAQbox
                                question={"আপনাদের অফিস বন্ধ কবে থাকে ?"}
                                answer={
                                    "সাধারণ জনগণের কল্যাণে আমাদের অফিস প্রতিদিন সকাল ৯ টা থেকে বিকাল ৬ টা পর্যন্ত খোলা থাকে "
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <FAQbox
                                question={"কিভাবে অর্ডার করবো ?"}
                                answer={
                                    "অর্ডার করতে সরাসরি আমাদের কল করুন - ০১৭১১-৭৩০৮১৯ "
                                }
                            />
                        </div>
                        <div className="col-md-6">
                            <FAQbox
                                question={
                                    "ইন্সুলিন প্লান্ট, জিংসেং কি হোম ডেলিভারি হয় ? "
                                }
                                answer={
                                    "জী, ১-২ দিনের মধ্যে সারা দেশে ও ৫-৭ দিনের মধ্যে দেশের বাহিরে ডেলিভারি হয়।"
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FAQ;
