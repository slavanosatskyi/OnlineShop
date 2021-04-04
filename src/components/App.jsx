import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from "react-redux";

import store from "../store/store";
import Cart from "./Cart/Cart";
import Catalogue from "./Catalogue/Catalogue";
import Header from "./Header/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Catalogue />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
