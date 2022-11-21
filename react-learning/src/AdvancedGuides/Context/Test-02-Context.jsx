import React from "react";
import Context from "./Common-Context";

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    // 写法一
    // static contextType = Context;

    render() {
        return (
            // <div>
            //     this.context: {this.context}
            // </div>

            // 写法三
            <Context.Consumer>
                {({time, background}) => (
                    <div style={{color: background}}>
                        this.context.time: {time}
                    </div>
                )}
            </Context.Consumer>
        )
    }
}

// 写法二
// ThemedButton.contextType = Context
export default ThemedButton