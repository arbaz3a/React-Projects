import React, { useState } from "react";

function BackGround(){
    let [color, setColor] = useState('lightgray');

    let changeColorByBgColor = (evt)=>{
        const colour = evt.target.style.backgroundColor;
        setColor(colour)
    }

    // let chanegColorByText = (e)=>{
    //     setColor(e.target.innerText);
    // }

    // let changeColor1 = ()=>{
    //     setColor('red');
    // }
    // let changeColor2 = ()=>{
    //     setColor('olive');
    // }
    // let changeColor3 = ()=>{
    //     setColor('black');
    // }
    // let changeColor4 = ()=>{
    //     setColor('blue');
    // }
    // let changeColor5 = ()=>{
    //     setColor('pink');
    // }
    // let changeColor6 = ()=>{
    //     setColor('Green');
    // }

    return(
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">

                    {/* step 1 its working by inconsistent way so avoid it */}
                    {/* <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: 'red'}} onClick={changeColor1}>Red</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "olive"}} onClick={changeColor2}>Olive</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "black"}} onClick={changeColor3}>Black</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "Blue"}} onClick={changeColor4}>Blue</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "pink"}} onClick={changeColor5}>Pink</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "green"}} onClick={changeColor6}>Green</button> */}



                    {/* step 2 by using text to set the background color */}
                    {/* <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: 'red'}} onClick={chanegColorByText}>Red</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "olive"}} onClick={chanegColorByText}>Olive</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "black"}} onClick={chanegColorByText}>Black</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "Blue"}} onClick={chanegColorByText}>Blue</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "pink"}} onClick={chanegColorByText}>Pink</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "green"}} onClick={chanegColorByText}>Green</button> */}
                    
                    
                    
                    {/* step 3 use background color of button instead of text */}
                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: 'red'}} onClick={changeColorByBgColor}>Red</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "olive"}} onClick={changeColorByBgColor}>Olive</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "black"}} onClick={changeColorByBgColor}>Black</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "Blue"}} onClick={changeColorByBgColor}>Blue</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "pink"}} onClick={changeColorByBgColor}>Pink</button>

                    <button className="outline-noe px-4 py-1 rounded-full text-white shadow-lg" 
                    style={{backgroundColor: "green"}} onClick={changeColorByBgColor}>Green</button>

                </div>
            </div>
        </div>
    );
};

export default BackGround;