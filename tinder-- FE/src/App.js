import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Browse from "./components/Browse";
import Profile from "./components/Profile";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Browse} />
          <Route path="/browse" component={Browse} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
