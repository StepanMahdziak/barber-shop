//@low
import React from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { config } from "./config";
import { withRouter , } from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {Route, Switch} from "react-router";
import Home from   "./pages/Home/Home"
import About from "./pages/About/About";
import Jobs from "./pages/Jobs/Jobs";
import Offers from "./pages/Offers/Offers";

function App() {
  return (
    <div className="App">
      <header >
        <Menu pages={config.pages} />
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/jobs" component={Jobs}/>
              <Route path="/about" component={About}/>
              <Route parh="/offers" component={Offers}/>
          </Switch>

        <Footer/>
      </header>
    </div>
  );
}

export default withRouter(App);
