import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./home";
import User from "./user";
import About from "./about";
import ContactUs from "./contact-us";

const Webpages = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/user/:id" element={<User />} />
                </Routes>
            </BrowserRouter>
        </>
    )
};
export default Webpages;