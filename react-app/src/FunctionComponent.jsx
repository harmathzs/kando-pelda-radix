import { useState } from 'react';

const FunctionComponent = (props) => {
    const [numbers, setNumbers] = useState([1, 4, 2, 8]);

    const handleAppend = e => {
        console.log('handleAppend e', e);

        const rnd = Math.floor(Math.random()*9+1);
        const newNumbers = [...this.state.numbers];
        newNumbers.push(rnd);
        setNumbers({numbers: [...newNumbers]});
    }

    return <div>
            <p>
                <button onClick={handleAppend}>Append a new number</button>
            </p>
            <p>
                {numbers.map((num, i)=><span key={i}>{num}, </span>)}
            </p>
            <p>
                Props: {JSON.stringify(props)}
            </p>
        </div>
}
export default FunctionComponent;