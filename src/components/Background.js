import { useState } from "react";

function Background(){
    const [ Bgcolor, setBgcolor] = useState("olive");
    function change(color) {
        setBgcolor(color)
    }
    return (
        <div className = "w-full h-screen duration-200"
        style={{backgroundColor: Bgcolor}}
        >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style= {{backgroundColor: "red"} } onClick={() => change("red")}>Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style= {{backgroundColor: "blue"}} onClick={() => change("blue")}>Blue</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style= {{backgroundColor: "green"}} onClick={() => change("green")}>Green</button>
        </div></div>
        </div>
    )
}
export default Background;