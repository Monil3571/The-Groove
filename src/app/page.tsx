import About from "@/sections/About";
import Events from "@/sections/Events";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Gallery from "@/sections/Gallery";
import Location from "@/sections/Location";
import Menu from "@/sections/Menu";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
    return <>
    <Navbar />
    <Hero />
    <About />
    <Gallery />
    <Menu />
    <Events />
    <Testimonials />
    <Location />
    <Footer />
    </>;
}
