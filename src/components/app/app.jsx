import React from "react";
import propTypes from "prop-types";
import './style.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Form from "../form/form.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Form
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {

};

export default App;
