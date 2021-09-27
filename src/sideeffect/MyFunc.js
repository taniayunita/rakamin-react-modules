import React, {useState, useEffect} from 'react'

export default function MyFunc() {
    console.log("-> function init");
    const [count, setCount] = useState(0);
    const handleCount = () =>
        setCount(prevState => {
            return prevState + 1;
        });

    useEffect(() => {
        console.log("-> My first effect")
    })

    useEffect(() => {
        console.log("-> Component didMount equivalent")
    }, [])

    useEffect(() => {
        if (count > 0) { console.log("-> Component didUpdate equivalent")
    }
    }, [count]) 

    useEffect (() => {
        return (
            ()=> {
                console.log("Component WIllUnMount equivalent");
            }
        )
    }, [])

    console.log(`-> Start Render (${count})`)
    return (
        <div>
            <h1>Function Component</h1>
            <p>
                <button onClick={handleCount}>Count</button>
                {count}
            </p>
            
        </div>
    )
}
