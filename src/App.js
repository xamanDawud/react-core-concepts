import logo from "./logo.svg";
import "./App.css";

function App() {
  let name = [
    { namee: "Xaman  Dawud", address: "Sylhet" },
    { namee: "kaman  Dawud", address: "Dhaka" },
    { namee: "Saman  Dawud", address: "Uttora" },
    { namee: "Palman  Dawud", address: "Luttora" },
  ];
  let lastName = [" Warner", " Dinner", " Smith", " dayint"];

  return (
    <div className="App">
      {name.map((obj) => (
        <Shapes name={obj.namee} lastName={obj.address}></Shapes>
      ))}

      <Circle title="Web Development"></Circle>
      <Circle title="Mern-Stack Development"></Circle>
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

export default App;
