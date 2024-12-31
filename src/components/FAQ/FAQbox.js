import { Box, Typography } from "@mui/material";
import React from "react";

function FAQbox({ question, answer }) {
    return (
        <>
            <section className="FAQbox mb-4">
                <div>
                    <Box
                        sx={{
                            background: "#76A43F",
                            display: "flex",
                            alignItems: "center",
                            padding: "5px",
                        }}
                    >
                        <Box sx={{ marginRight: "10px", marginLeft: "5px" }}>
                            <img src="../img/whiteMark.png" alt="" />
                        </Box>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: "18px",
                                fontFamily: "Atma",
                                fontWeight: "700",
                                textShadow: "0px 0px 10px #000",
                            }}
                        >
                            {question}
                        </Typography>
                    </Box>
                    <Box sx={{ background: "#0C1B17", padding: "14px 9px" }}>
                        <Typography
                            sx={{
                                color: "#747474",
                                fontFamily: "Tiro",
                                fontWeight: "600",
                                fontSize: "16px",
                            }}
                        >
                            {answer}
                        </Typography>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default FAQbox;
