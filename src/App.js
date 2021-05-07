import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Custom File import
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
