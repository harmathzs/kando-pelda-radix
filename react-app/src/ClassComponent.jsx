import React from "react";
export default class ClassComponent extends React.Component {
    state = {
        numbers: [1, 4, 2, 8],
    }

    handleAppend = e => {
        console.log('handleAppend e', e);

        const rnd = Math.floor(Math.random()*9+1);
        const newNumbers = [...this.state.numbers];
        newNumbers.push(rnd);
        this.setState({numbers: [...newNumbers]});
    }

    render() {
        return <div>
            <p>
                <button onClick={this.handleAppend}>Append a new number</button>
            </p>
            <p>
                {this.state.numbers.map((num, i)=><span key={i}>{num}, </span>)}
            </p>
            <p>
                Props: {JSON.stringify(this.props)}
            </p>
        </div>
    }

    componentDidMount() {
        console.log('ClassComponent componentDidMount state', this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('ClassComponent shouldComponentUpdate nextProps, nextState, props, state', 
            nextProps, nextState, this.props, this.state
        );
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('ClassComponent componentDidUpdate prevProps, prevState, props, state', 
            prevProps, prevState, this.props, this.state
        );
    }

    componentWillUnmount() {
        console.log('ClassComponent componentWillUnmount state', this.state);
    }
}