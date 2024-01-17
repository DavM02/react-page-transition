import img1 from '../../assets/img-1.webp'
 
import img3 from '../../assets/img-3.jpg'
 import img5 from '../../assets/img-5.jpg'

import SlideBtn from './SlideBtn'
import SlideProgress from './SlideProgress'
import './Slider.scss'
import { useState, useEffect } from 'react'

function Slider(props) {
    const images = [img1, img3, img5]
    const [prevImg, setPrevImg] = useState(0)
    const [allowInterval, setAllowInterval] = useState(false)

    return <div className='slider'>
        <SlideProgress prevImg={prevImg} allowInterval={allowInterval}></SlideProgress>
        <div className='slider-placeholder'
            onAnimationEnd={() => {
                setAllowInterval(true)
            }}

        >
            {
                images.map((el, i) => {
                    return (
                        <div
                            style={{ zIndex: i === 0 && prevImg % images.length === 0 && 4 }}
                            key={i}
                            className={`slide-item ${i === prevImg % images.length ? 'active-current' : 'inactive'}`}>
                            <div className='image'>
                                <img src={el} alt={`img-${i}`} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <SlideBtn prevImg={prevImg}
            setPrevImg={setPrevImg}
            images={images}
            allowInterval={allowInterval}
            getCurIndex={props.getCurIndex}
        ></SlideBtn>
    </div>
}

export default Slider 