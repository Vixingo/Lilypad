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
                <Community />
                <FAQ />
                <Footer />
            </Box>
        </>
    );
}

export default App;
