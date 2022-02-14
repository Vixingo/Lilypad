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
                            fontFamily: "Archivo",
                            color: "#76A43F",
                            textAlign: "center",
                            letterSpacing: "0.495em",
                            margin: "10px auto",
                        }}
                    >
                        {" "}
                        <span
                            style={{
                                fontFamily: "llp",
                                fontStyle: "italic",
                            }}
                        >
                            PEPEPUNKS{" "}
                        </span>{" "}
                        AVAILABLE ON
                    </Typography>
                    <Box sx={{ textAlign: "center" }}>
                        <img src="../img/magic.png" width={"250px"} alt="" />
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
