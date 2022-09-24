import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let name = [
    { namee: "Xaman  Dawud", address: "Sylhet" },
    { namee: "kaman  Dawud", address: "Dhaka" },
    { namee: "Saman  Dawud", address: "Uttora" },
    { namee: "Palman  Dawud", address: "Luttora" },
  ];

  return (
    <div className="App">
      {name.map((obj) => (
        <Shapes name={obj.namee} lastName={obj.address}></Shapes>
      ))}

      <Circle title="Web Development"></Circle>
      <Circle title="Mern-Stack Development"></Circle>
      <Counter></Counter>
    </div>
  );
}

function Shapes(props) {
  console.log(props);
  return (
    <div className="xdStyle">
      <h1>{props.name}</h1>
      <h2>{props.lastName}</h2>
    </div>
  );
}

function Circle(props) {
  return (
    <div className="circle_style">
      <h1>{props.title}</h1>
      <p>
        Description:
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ratione
          rem quod nostrum cupiditate quia est aut sequi perspiciatis mollitia?
        </span>
      </p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(23);

  const increaseCount = () => {
    let newCountNumber = count + 1;
    setCount(newCountNumber);
  };

  const decreaseCount = () => {
    let newCountNumber = count - 1;
    setCount(newCountNumber);
  };
  return (
    <div className="counter">
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

export default App;
