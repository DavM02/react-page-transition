import './Marquee.scss'

function Marquee() {
    return <div className="quote-wrapper">

        <div className='marquee'>
            <div className='marquee-content scroll'>
                <div className='marquee-text'>
                    Where pixels meet emotions, and every frame paints a thousand words.

                </div>
                <div className='marquee-text '>
                    Where pixels meet emotions, and every frame paints a thousand words.

                </div>


            </div>
            <div className='marquee-content scroll'>
                <div className='marquee-text'>
                    Where pixels meet emotions, and every frame paints a thousand words.
                </div>
                <div className='marquee-text '>
                    Where pixels meet emotions, and every frame paints a thousand words.
                </div>
            </div>
        </div>
    </div>
}

export default Marquee