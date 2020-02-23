import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home'
import Form from './Form'

function App() {
  return (
   <Router>
   <Switch>
      <Route path="/" exact component = {Home}></Route>
      <Route path="/form" component = {Form}></Route>
      </Switch>
   </Router>
  );
}

export default App;
