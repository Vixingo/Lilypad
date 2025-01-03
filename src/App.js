import { Box } from "@mui/material";
import "./App.css";
import Community from "./components/Community/Community";
import FAQ from "./components/FAQ/FAQ";
import FAQbox from "./components/FAQ/FAQbox";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Takeoff from "./components/Takeoff/Takeoff";
import "./Fonts/LLPIXEL3.ttf";
import HighLight from "./components/Highlight/HighLight";

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
                <Community />
                <HighLight />
                <Takeoff />
                <FAQ />
                <Footer />
            </Box>
        </>
    );
}

export default App;
