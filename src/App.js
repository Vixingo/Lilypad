import { Box } from "@mui/material";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Takeoff from "./components/Takeoff/Takeoff";
import "./Fonts/LLPIXEL3.ttf";

function App() {
    return (
        <>
            <Box
                sx={{
                    background: "url(../img/mainbg.png)",
                    backgroundSize: "100%",
                }}
            >
                <Navbar />
                <Hero />
                <Takeoff />
            </Box>
        </>
    );
}

export default App;
