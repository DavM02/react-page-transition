import './Contacts.scss'
import { motion, AnimatePresence } from 'framer-motion'
import img3 from '../../../assets/img-5.jpg'
function Contacts() {
    return <motion.section
        initial={{ right: '-100%' }}
        animate={{ right: '0%' }}
        exit={{ right: '-100%' }}
        transition={{ duration: 2, ease: [.85, .68, .36, .81] }}
        id="contacts">
        <div className='contacts-image'>
            <AnimatePresence mode='wait'>
                <motion.div
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    animate={{ clipPath: 'inset(0 0 0 0)' }}
                    exit={{ clipPath: 'inset(100% 0 0 0)' }}
                    transition={{ duration: 1, ease: [.85, .68, .36, .81], delay: 1 }}
                    className='contacts-image-placeholder'>
                    <motion.img
                        initial={{ clipPath: 'inset(100% 0 0 0)', scale: 1.7}}
                        animate={{ clipPath: 'inset(0 0 0 0)', scale: 1.2 }}
                        exit={{ clipPath: 'inset(100% 0 0 0)', scale: 1.7 }}
                        transition={{ duration: 1.5, ease: [.85, .68, .36, .81], delay: 2 }}

                        src={img3} alt='img-3' />
                </motion.div>
            </AnimatePresence>
            <div className='marquee'>
                <div className='marquee-content scroll'>
                    <div className='marquee-text'>
                        collaboration
                    </div>
                    <div className='marquee-text '>
                        collaboration

                    </div>
                </div>
                <div className='marquee-content scroll'>
                    <div className='marquee-text'>
                        collaboration
                    </div>
                    <div className='marquee-text '>
                        collaboration

                    </div>
                </div>
                <div className='marquee-content scroll'>
                    <div className='marquee-text'>
                        collaboration
                    </div>
                    <div className='marquee-text '>
                        collaboration
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
}

export default Contacts