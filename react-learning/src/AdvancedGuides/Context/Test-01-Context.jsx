import React from "react";
import Context from "./Common-Context";
import ThemedButton from "./Test-02-Context";

class Test01Context extends React.Component {
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        let time = this.context
        return (
            <Context.Provider value={time}>
                <Toolbar/>
            </Context.Provider>
        );
    }
}

Test01Context.contextType = Context
export default Test01Context

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar() {
    return (
        <div>
            <ThemedButton/>
        </div>
    );
}
