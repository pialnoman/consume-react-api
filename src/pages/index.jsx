import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./home";
import User from "./user";
import About from "./about";
import ContactUs from "./contact-us";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Webpages = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/user/:id" element={<User />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
};
export default Webpages;