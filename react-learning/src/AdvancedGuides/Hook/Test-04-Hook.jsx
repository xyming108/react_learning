import React, {useRef, useState} from "react";

function Test04Hook() {
    const [count, setCount] = useState(1);

    const prevCountRef = useRef(1);
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;

    const handleClick = () => {
        setCount(prevCount + count);
    };

    return (
        <div>
            <h2>Example4</h2>
            <p>{count}</p>
            <button onClick={handleClick}>SetCount</button>
        </div>
    );
}

export default Test04Hook;