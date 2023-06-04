import { useState } from "react"
import Timer from "./timer"
// import sec from Timer

function Toggle({sece}){
    const [color, setColor] = useState("White")

    return (
        <>
        <h2>select your color "{ color }"</h2>
        <button onClick={()=> setColor(document.body.style.backgroundColor="blue")}>
            blue
        </button>
        <button onClick={()=> setColor(document.body.style.backgroundColor="red")}>
            red
        </button>
        <button onClick={()=> setColor(document.body.style.backgroundColor="violet")}>
            violet
        </button>
        <p>{sece}</p>
        </>
    )
}

export default Toggle;