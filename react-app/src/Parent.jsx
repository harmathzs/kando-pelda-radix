import React from "react";
export default class Parent extends React.Component {
    render() {
        return <div>
            <p>Parent</p>
            {this.props.children}
        </div>
    }
}