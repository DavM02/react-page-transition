import { Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import About from "./about/About"
import { AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import Contacts from "./contacts/Contacts"
function RoutComponents() {
    const location = useLocation()
    return <>
        <AnimatePresence mode="wait" initial={false} >
            <Routes  location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
            </Routes>
        </AnimatePresence>
    </>
}

export default RoutComponents