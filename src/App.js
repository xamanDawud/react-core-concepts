import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Shapes firstName="David Warner" lastName="Latin David"></Shapes>
      <Shapes firstName="Hennry Bins" lastName="Wamiqa Gabbi"></Shapes>
      <Shapes firstName="Waziha Chowdhury" lastName="Samia Ayat Iqbal"></Shapes>
      <Circle title="Web Development"></Circle>
      <Circle title="Mern-Stack Development"></Circle>
    </div>
  );
}

function Shapes(props) {
  console.log(props);
  return (
    <div className="xdStyle">
      <h1>{props.firstName}</h1>
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
