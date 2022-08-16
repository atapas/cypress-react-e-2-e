import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    age: 18,
    gender: "M",
    food: "Pizza",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="name-id">Name</label>
          <input autoFocus id="name-id" type="text" name="name" value={state.name} onChange={(e) => handleChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="age-id">Age</label>
          <input id="age-id" type="number" name="age" min={18} max={99} value={state.age} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="form-group">
          Gender
          <input
            id="male-id" 
            type="radio" 
            name="gender" 
            value="M" 
            checked={state.gender === 'M'} 
            onChange={(e) => handleChange(e)} /> 
          <label htmlFor="male-id">Male</label>
          <input
            id="female-id" 
            type="radio" 
            name="gender" 
            value="F"
            checked={state.gender === 'F'}
            onChange={(e) => handleChange(e)} /> 
          <label htmlFor="female-id">Female</label>
        </div>
        <div className="form-group">
          <label htmlFor="food-id">Food</label>
          <select name="food" id="food-id" label="Favorite Food" onChange={(e) => handleChange(e)}>
            <option value="Pizza">
              Pizza
            </option>
            <option value="Pasta">Pasta</option>
            <option value="Cake">Cake</option>
          </select>
        </div>
      </form>

      <div className="details">
        { state. name ?
          <p>
            {state.gender==='M'? 'Mr.': 'Mrs.'} 
            {' '}
            {state.name} is {state.age} years old and likes
            {' '}
            {state.food} {' '} 
            {state.food === 'Pizza' ? '🍕' :
              state.food === 'Pasta' ? '🍝' :
                state.food === 'Cake' ? '🎂' :
                 null
            }
          </p> : <p>You need a name!!!</p>
        }
      </div>
    </div>
  );
}

export default App;
