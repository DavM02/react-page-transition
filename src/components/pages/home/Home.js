import Marquee from "../../marquee/Marquee"
import Slider from "../../slider/Slider"
import { useState } from "react"
import { motion } from "framer-motion"

function Home(props) {
    const [index, setIndex] = useState(null)

    function getCurIndex(curIndex) {
        setIndex(curIndex)

    }

    return <>
        <motion.div id="home"
   
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [.85, .68, .36, .81], }}
        >
            <Marquee></Marquee>
            <Slider getCurIndex={getCurIndex}></Slider>
            <div className={`slider-transition first  ${(index === 0) ? 'active' : 'inactive'}`}></div>
            <div style={{ zIndex: index === 0 && '-2' }} className={`slider-transition second ${(index === 1) ? 'active' : 'inactive'}`}></div>
            <div style={{ zIndex: index === 0 && '-3' }} className={`slider-transition third ${(index === 2) ? 'active' : 'inactive'}`}></div>

        </motion.div>
    </>
}

export default Home