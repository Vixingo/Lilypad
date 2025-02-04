import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Apply_Btn() {
    return (
        <>
            <Box sx={{ textAlign: "center", margin: "10px auto" }}>
                <a
                    href="https://calendly.com/kabir-military/30min"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        className="animate__animated animate__infinite animate__fast animate__pulse  "
                        variant="outlined"
                        sx={{
                            color: "#fff",
                            borderColor: "#76A43F",
                            backgroundColor: "#76A43F",
                            fontWeight: "bold",
                            fontSize: "16px",
                            fontFamily: "Archivo",
                            transition: "0.2s",
                            margin: "0 5px",
                            dropShadow: "0px 7px 8px rgba(118, 164, 63, 0.17)",
                            borderRadius: "0",
                            outline: "2px solid #76A43F",
                            outlineOffset: "5px",
                            ":hover": {
                                borderColor: "#7da275",
                                color: "#7da275",
                                outline: "2px solid #fff",
                                backgroundColor: "#fff",
                                boxShadow: " 0 0 20px #fff",
                            },
                        }}
                    >
                        Book now
                    </Button>
                </a>
            </Box>
        </>
    );
}

export default Apply_Btn;
