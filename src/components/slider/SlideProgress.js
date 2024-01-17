import { useEffect, useState } from "react"

function SlideProgress(props) {

    const [progress, setProgress] = useState(false)

    useEffect(() => {
        if(props.allowInterval) {
            setProgress(!progress)
        }

    }, [props.prevImg])

    return <div className="slider-progress" style={{transform: progress ? 'scaleX(-1)' : 'initial'}}>
        <svg
            className="progress-ring"
            width="120"
            height="120">
            <circle
 
                className={`progress-ring__circle ${progress ? 'in-progress' : 'in-progress-back'}`}
                stroke="rgb(24, 24, 24)"
                strokeDasharray={330}
                strokeWidth="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60" />
        </svg>
    </div>
}

export default SlideProgress