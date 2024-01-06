import logo from "./logo.svg";
import space from "./assests/Space.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      {/* <img src={space} alt="" /> */}
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
