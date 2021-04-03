import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "./Cart/Cart";
import Catalogue from "./Catalogue/Catalogue";
import Header from "./Header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Catalogue />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
