import logo from "./logo.svg";
import "./App.css";
import Get from "./Components/Get";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Count from "./Components/Count";

function App() {
  return (
    <div className="App">
      <Get />
      <Create />
      <Update />
      <Count />
    </div>
  );
}

export default App;
