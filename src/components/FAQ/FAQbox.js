import { Box, Typography } from "@mui/material";
import React from "react";

function FAQbox() {
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
                                fontSize: "13px",
                                fontFamily: "Archivo",
                                fontWeight: "700",
                            }}
                        >
                            LOREM IPSUM IS SIMPLY DUMMY TEXT
                        </Typography>
                    </Box>
                    <Box sx={{ background: "#0C1B17", padding: "14px 9px" }}>
                        <Typography
                            sx={{
                                color: "#747474",
                                fontFamily: "Archivo",
                                fontWeight: "300",
                                fontSize: "13px",
                            }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </div>
            </section>
        </>
    );
}

export default FAQbox;
