import React from "react";

class Test02Fragments extends React.Component {
    render() {
        return (
            //下面两种写法不会生成新结点
            //写法一
            <React.Fragment>
                <td>hello</td>
                <td>你好</td>
            </React.Fragment>
            //写法二
            // <>
            //     <td>hello</td>
            //     <td>你好</td>
            // </>
        )
    }
}

export default Test02Fragments