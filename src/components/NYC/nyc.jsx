import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import News from "./News/News.jsx";
import Welcome from "./Welcome/welcome";

const Nyc = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route>
            <Header />
            <Welcome />
            <News />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Nyc;
