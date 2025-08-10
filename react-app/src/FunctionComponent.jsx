import { useState, useEffect } from 'react';

const FunctionComponent = (props) => {
  const [numbers, setNumbers] = useState([1, 4, 2, 8]);

  const handleAppend = e => {
    const rnd = Math.floor(Math.random() * 9 + 1);
    // Correct usage: update array, since numbers is the actual array
    setNumbers([...numbers, rnd]);
  };

  // componentDidMount
  useEffect(() => {
    console.log('Mounted');
    // componentWillUnmount
    return () => {
      console.log('UnMounted');
    };
  }, []);

  // componentDidUpdate for numbers
  useEffect(() => {
    if (numbers.length > 4) { // Only log after first append, for demo
      console.log('Numbers changed: ', numbers);
    }
  }, [numbers]);

  return (
    <div>
      <p>
        <button onClick={handleAppend}>Append a new number</button>
      </p>
      <p>
        {numbers.map((num, i) => <span key={i}>{num}, </span>)}
      </p>
      <p>
        Props: {JSON.stringify(props)}
      </p>
    </div>
  );
}

export default FunctionComponent;
