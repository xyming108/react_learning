import React from "react";
import Test02Fragments from "./Test-02-Fragments";

class Test01Fragments extends React.Component {
    render() {
        return (
            <table style={{border: "1px solid"}}>
                <caption>表格标题</caption>
                <tbody>
                <tr>
                    <th>column1</th>
                    <th>column2</th>
                </tr>
                <tr>
                    <Test02Fragments/>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default Test01Fragments