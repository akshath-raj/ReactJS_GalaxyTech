import { useState, useEffect} from "react";
function Practise(){
    function func(){
        
        var num1={numbe1};
        
        var button1= document.createElement("input")
        button1.type="button";

        button1.onclick=increment();
    
        
        document.body.appendChild(button1)
        document.body.appendChild({numbe1})
    }
    function increment(){
        setnumbe(numbe+1)
        setnumbe1(numbe1+1)
    }
    function decrement(){
        setnumbe(numbe+1)
        setnumbe1(numbe1-1)
    }
    
    
    const [numbe,setnumbe]=useState(0);
    const [numbe1,setnumbe1]=useState(10);
    //useEffect(()=>{setTimeout(()=>{setnumbe(numbe+1)}),1000});

    return(
    <div>
        <h1>Travelling Website</h1>
        <div id="123">

            <h2>Your one stop travelling dream websites</h2>
            <button onClick={increment}>+</button>
            <p>{numbe}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <p>{numbe1}</p>
            <button onClick={decrement}>-</button>

            <button onClick={func}>Help</button>


            

        </div>
    </div>
    )
}
export default Practise;