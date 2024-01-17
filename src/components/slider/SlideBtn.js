import { useState, useEffect } from "react";
function SlideBtn(props) {

    const [allowClick, setAllowClick] = useState(true)
    

    function imageChangeHandler() {
        if (allowClick) {
            props.setPrevImg(prevIndex => (prevIndex + 1) % props.images.length);
            setAllowClick(false)
            setTimeout(() => {
                setAllowClick(true)
            }, 2500);
        }
    }

    useEffect(() => {
        props.getCurIndex(props.prevImg)

    },[props.prevImg])

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         if(props.allowInterval) {
    //             imageChangeHandler()
    //         }
    //     }, 2000);

    //     return () => {
    //         clearInterval(intervalId)
    //     }
    // })

    return <>
        <div className="slider-btn">
            <button onClick={() => imageChangeHandler()}>next</button>
        </div>

    </>
}

export default SlideBtn