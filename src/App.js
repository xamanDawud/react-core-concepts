// ------React Main six things--------
/*
    1.JSX
    2.Component
    3.props
    4.useState, useEffect
    5.Event Handler
    1.External Data Load
*/

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
      <Users></Users>
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

function Users(props) {
  const [users, setUsers] = useState([]);
  console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Set External</h1>
      {users.map((user) => (
        <User
          name={user.name}
          email={user.email}
          address={user.address.city}
        ></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="usersApi">
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
      <h2>City: {props.address}</h2>
    </div>
  );
}
export default App;
