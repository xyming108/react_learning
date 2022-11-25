import React, {useEffect, useState} from "react";

const Example1 = (props) => {
    const handleClick = () => {
        setTimeout(() => {
            alert(props.count)
        }, 3000)
    }
    return (
        <div>
            <h2>Example1</h2>
            <p>{props.count}</p>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

class Example2 extends React.Component {
    handleClick = () => {
        setTimeout(() => {
            alert(this.props.count)
        }, 3000)
    }

    render() {
        return (
            <div>
                <h2>Example2</h2>
                <p>{this.props.count}</p>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

function Test02Hook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    })
    return (
        <div>
            <Example1 count={count}/>
            <Example2 count={count}/>
        </div>
    )
}

export default Test02Hook