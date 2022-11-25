import React, {useRef, useState} from "react";

const Example1 = () => {
    const [count, setCount] = useState(0);

    const currentCount = useRef(count);

    currentCount.current = count;

    const handleClick = () => {
        setTimeout(() => {
            setCount(currentCount.current + 1);
        }, 3000);
    };

    return (
        <div>
            <h2>Example3</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>setCount</button>
            <button onClick={handleClick}>Delay setCount</button>
        </div>
    );
}

function Test03Hook() {
    return (
        <div>
            <Example1/>
        </div>
    )
}

export default Test03Hook