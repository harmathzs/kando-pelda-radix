import React from "react";
import Parent from "./Parent";
import Child from "./Child";
export default class ChildrenPage extends React.Component {
    state = {
        cntChildren: 3,
    }

    render() {
        return <div>
            <p>
                <button onClick={()=>this.setState({cntChildren: this.state.cntChildren+1})}>Add child</button>
            </p>
            <Parent>
                {Array.from({ length: this.state.cntChildren }, (_, i) =>
                    <Child key={i} name={'Tom'+i} />
                )}
            </Parent>
        </div>
    }
}