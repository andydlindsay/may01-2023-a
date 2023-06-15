import {useState} from 'react';

const Pizza = () => {
  const [newTopping, setNewTopping] = useState('');
  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');

  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'stuffed'
  });

  const onChangeHandler = (event) => {
    setNewTopping(event.target.value);
  };

  const clickHandler = () => {
    // const toppingsCopy = [newTopping, ...toppings];
    // setToppings(toppingsCopy);

    const copy = {
      ...pizza,
      toppings: [
        newTopping,
        ...pizza.toppings
      ]
    };
    setPizza(copy);

    // setToppings([newTopping, ...toppings]);
    setNewTopping('');
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>;
  });

  const crustChangeHandler = (event) => {
    // (event) => setCrustType(event.target.value)
    
    const copy = {
      ...pizza,
      crustType: event.target.value
    };

    setPizza(copy);
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <label>Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={crustChangeHandler}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={onChangeHandler}
        />
        <button onClick={clickHandler}>Add to pizza!</button>
      </div>

      <h2>Toppings!</h2>
      { mappedToppings }

    </div>
  );
};

export default Pizza;
