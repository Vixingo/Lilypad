import React from "react";
import IconButton from "@mui/material/IconButton";
import { Button, Stack } from "@mui/material";
function Navbar() {
    return (
        <>
            <section
                className="Navbar"
                style={{
                    background: "url(../img/navtop.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundSize: "100%",
                }}
            >
                <nav className="navbar navbar-expand-lg navbar-dark ">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="../img/logo.png" alt="" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                <li className="nav-item">
                                    <a
                                        className="nav-link "
                                        aria-current="page"
                                        href="#"
                                    >
                                        LAUNCH YOUR NFT
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        ECOSYSTEM
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        AVAILABLE ON
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        FAQ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Stack sx={{ flexDirection: "row" }}>
                                        <a className="nav-link" href="#">
                                            <IconButton
                                                sx={{
                                                    color: "#fff",
                                                    borderRadius: "10px",
                                                    transition: "0.2s",
                                                    ":hover": {
                                                        color: "#7da275",
                                                        backgroundColor: "#fff",
                                                        boxShadow:
                                                            " 0 0 10px #fff",
                                                    },
                                                }}
                                            >
                                                <i class="fab fa-twitter"></i>
                                            </IconButton>
                                        </a>
                                        <a className="nav-link" href="#">
                                            <IconButton
                                                sx={{
                                                    color: "#fff",
                                                    borderRadius: "10px",
                                                    transition: "0.2s",
                                                    ":hover": {
                                                        color: "#7da275",
                                                        backgroundColor: "#fff",
                                                        boxShadow:
                                                            " 0 0 10px #fff",
                                                    },
                                                }}
                                            >
                                                <i class="fab fa-discord"></i>
                                            </IconButton>
                                        </a>
                                    </Stack>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;
