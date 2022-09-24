import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Shapes></Shapes>
      <Shapes></Shapes>
      <Circle></Circle>
      <Circle></Circle>
    </div>
  );
}

function Shapes() {
  return (
    <div className="xdStyle">
      <h1>Xaman Dawud</h1>
      <h2>Xaman Dawud Pro</h2>
    </div>
  );
}

function Circle() {
  return (
    <div className="circle_style">
      <h1>Lorem Circle</h1>
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
