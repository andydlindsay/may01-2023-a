import {useState} from 'react';

const VisitorCounter = () => {
  const [numVisitors, setNumVisitors] = useState(0);

  const clickHandler = () => {
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 1);
    // setNumVisitors(numVisitors + 1);

    setNumVisitors((prev) => {
      return prev + 1;
    });
    setNumVisitors((prev) => {
      return prev + 1;
    });
    setNumVisitors((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter: {numVisitors}</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
