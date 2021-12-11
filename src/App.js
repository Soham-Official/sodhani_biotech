import "./App.css";
import Pro from "./Pro";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Pro />
      </Router>
    </div>
  );
}

export default App;
