import React from "react";
import Parent from "./Parent";
import Child from "./Child";
export default class ChildrenPage extends React.Component {
    render() {
        return <div>
            <Parent>
                <Child />
                <Child />
                <Child />
            </Parent>
        </div>
    }
}