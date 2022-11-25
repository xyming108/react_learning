import React, {useEffect, useState} from "react";

function Counter1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(() => {
            console.log(`You clicked ${this.state.count} times`);
        }, 3000)
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
                </button>
            </div>
        )
    }
}

function Test05Hook() {
    return (
        <div>
            <Counter1/>
            <Counter2/>
        </div>
    )
}

export default Test05Hook