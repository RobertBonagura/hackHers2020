import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./Home.css"

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''}
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({[name]: event.target.value});
      console.log(this.state)
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (

        <div class="Home">
            <body>
                <div className="group home-group">
                <h1>Fiserv's Credit Buster!</h1>
                <h5>Click below to enter</h5>
                <Link to="/form">
                <input type="submit" value="Enter" />
                </Link>
                </div>
            </body>
        </div>
      );
    }
  }

  export default Home;