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
                            <img src="../img/logo.png" alt="" width={75} />
                        </a>
                        <button
                            className="navbar-toggler border-0"
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
                                        href="#about"
                                    >
                                        আমদের সম্পর্কে
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#takeoff">
                                        আমাদের সেবা
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq">
                                        যোগাযোগ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Stack sx={{ flexDirection: "row" }}>
                                        {/* <a className="nav-link" href="#">
                                            <IconButton
                                                sx={{
                                                    color: "#fff",
                                                    borderRadius: "10px",
                                                    transition: "0.2s",
                                                    ":hover": {
                                                        boxShadow:
                                                            " 0 0 10px #fff",
                                                    },
                                                }}
                                            >
                                                <i class="fab fa-twitter"></i>
                                            </IconButton>
                                        </a> */}
                                        <a
                                            href="tel:+8801711-730819"
                                            className="nav-link"
                                            style={{
                                                textShadow: "0 0 10px #fff",
                                            }}
                                        >
                                            {" "}
                                            +8801711-730819
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
