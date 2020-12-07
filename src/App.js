import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/topHeader";
import Home from "./Components/home";
import Checkout from "./Pages/PublicPages";
import Product from "./Components/Product";


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />


            <Home />



          </Route>

        </Switch>

      </div>
    </BrowserRouter >
  );
}

export default App;
