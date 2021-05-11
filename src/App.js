import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
