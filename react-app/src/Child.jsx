import React from "react";
export default class Child extends React.Component {
    render() {
        return <p>Child {this.props.name}</p>
    }
}