import React from "react";

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="logo.jpg" alt="😂" style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        );
    }
}

class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0};
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>

                {/*
          在这里，我们可以简单地使用 <Cat> 来替换 <p>。但是如果这样
          做的话，当我们每次遇到这样的情况时，就需要创建一个单独的
          <MouseWithSomethingElse>。所以 <MouseWithCat> 并不是真正的可复用组件。
        */}
                <Cat mouse={this.state}/>
            </div>
        );
    }
}

class MouseTracker1 extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <MouseWithCat/>
            </div>
        );
    }
}

export default MouseTracker1