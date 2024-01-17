import { AnimatePresence, motion } from "framer-motion"
 
import img4 from '../../../assets/img-4.jpg'

import img3 from '../../../assets/img-3.jpg'
import img5 from '../../../assets/img-5.jpg'

import './About.scss'
function About() {

    const images = [img4, img3, img5]
    const words  = ['CaptureCraft', 'FrameFiesta', 'LensSymphony']
 
    return <>


        <motion.section

            id="about"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0 0 0 0)' }}
            exit={{ clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 1.5, ease: [.85, .68, .36, .81] }}
           
            className="slide-in">


            <div className="container">
                <div className="row">

                    <AnimatePresence mode="wait">
                        {
                            images.map((img, i) => {
                                return (
                               
                                        <motion.div className="image"
                                            key={i}
                                            initial={{ opacity: 0,  transform: 'translateY(60%)' }}
                                            animate={{ opacity: 1,  transform: 'translateY(0%)'}}
                                            exit={{ opacity: 0, transform: 'translateY(60%)' }}
                                            transition={{ duration: 1.5, ease: [.85, .68, .36, .81], delay: 1 }}
                                        >
                                            <img src={img} alt={`img-${i + 1}`} />
                                            <span>{`0${i} ${words[i]}`}</span>
                                             
                                        </motion.div>
                                       
                                  
                                )
                            })
                        }
                    </AnimatePresence>


                </div>
            </div>
        </motion.section>

    </>
}

export default About