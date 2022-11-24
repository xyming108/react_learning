import React, {useContext, useEffect, useState} from "react";
import Context from "../Context/Common-Context";

function Test01Hook() {
    const [count, setCount] = useState(0);
    const [fruit, setFruit] = useState('apple')
    const [fruits, setFruits] = useState(['apple'])
    const [todos, setTodos] = useState([{aa: 'aa'}])
    const context = useContext(Context)

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>计数: {count}</p>
            <p>{context.time}</p>
            <p>{fruit}</p>
            <p>{fruits}</p>
            <p>{todos.map((item) => {
                return (
                    <div>{item.aa}</div>
                )
            })}</p>
            <button onClick={() => {
                setCount(count + 1)
                setFruit('banana')
                fruits.push(',')
                fruits.push('banana')
            }}>点击我
            </button>
        </div>
    );
}

export default Test01Hook