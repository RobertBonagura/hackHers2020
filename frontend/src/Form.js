import React, { Component } from 'react';
import './Form.css'
import Axios from 'axios';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {limit: '', sex: '', education: '', marriage: '', age: '', 
                    pay1:'', pay2:'', pay3:'', pay4: '', pay5: '', pay6: '', 
                    billamount1: '',  billamount2: '',  billamount3: '',  billamount4: '',  billamount5: '',  billamount6: '', 
                    payamount1: '', payamount2: '',  payamount3: '',  payamount4: '',  payamount5: '',  payamount6: ''
                    };
  
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
      //alert('A name was submitted: ' + this.state.value);
      console.log("ggeloo");
      Axios.post('http://localhost:5000/learn/defaulted', null, {params: this.state}).then(user =>{
          console.log(user.data)
          if (user.data == "0"){
              alert("Customer will not default!");
          } else {
              alert("Customer will default!");
          }
      })
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="App">
          <header className="group-head">
              <p>Input customer information:</p>
          </header>
                <form onSubmit={this.handleSubmit}>
                <div class="groups">
                    <div class="form-group">
                        <label>
                            Limit Balance<br></br>
                            <input type="text" value={this.state.limit} onChange={this.handleChange} name="limit"/>
                        </label><br></br>

                        <label>
                            Sex<br></br>
                            <input type="text" value={this.state.sex} onChange={this.handleChange} name="sex"/>
                        </label><br></br>

                        <label>
                            Education<br></br>
                            <input type="text" value={this.state.education} onChange={this.handleChange} name="education"/>
                        </label><br></br>

                        <label>
                            Marriage Status<br></br>
                            <input type="text" value={this.state.marriage} onChange={this.handleChange} name="marriage"/>
                        </label><br></br>

                        <label>
                            Age<br></br>
                            <input type="text" value={this.state.age} onChange={this.handleChange} name="age"/>
                        </label><br></br>

                        </div>

                        <div class="form-group">
                            <label>
                                Repayment Status for the past 6 months:
                                <table>
                                    <tr>
                                        <td><input type="text" value={this.state.pay1} onChange={this.handleChange} name="pay1"/></td>
                                        <td><input type="text" value={this.state.pay2} onChange={this.handleChange} name="pay2"/></td>
                                        <td><input type="text" value={this.state.pay3} onChange={this.handleChange} name="pay3"/></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={this.state.pay4} onChange={this.handleChange} name="pay4"/></td>
                                        <td><input type="text" value={this.state.pay5} onChange={this.handleChange} name="pay5"/></td>
                                        <td><input type="text" value={this.state.pay6} onChange={this.handleChange} name="pay6"/></td>
                                    </tr>
                                </table>
                            </label><br></br>
                        </div>

                        <div class="form-group">
                            <label>
                                Amount of Bill Statement for the past 6 months:
                                <table>
                                    <tr>
                                        <td><input type="text" value={this.state.billamount1} onChange={this.handleChange} name="billamount1"/></td>
                                        <td><input type="text" value={this.state.billamount2} onChange={this.handleChange} name="billamount2"/></td>
                                        <td><input type="text" value={this.state.billamount3} onChange={this.handleChange} name="billamount3"/></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={this.state.billamount4} onChange={this.handleChange} name="billamount4"/></td>
                                        <td><input type="text" value={this.state.billamount5} onChange={this.handleChange} name="billamount5"/></td>
                                        <td><input type="text" value={this.state.billamount6} onChange={this.handleChange} name="billamount6"/></td>
                                    </tr>
                                </table>
                            </label><br></br>
                        </div>

                        <div class="form-group">
                            <label>
                                Amount of Previous Payment for the past 6 months:
                                <table>
                                    <tr>
                                        <td><input type="text" value={this.state.payamount1} onChange={this.handleChange} name="payamount1"/></td>
                                        <td><input type="text" value={this.state.payamount2} onChange={this.handleChange} name="payamount2"/></td>
                                        <td><input type="text" value={this.state.payamount3} onChange={this.handleChange} name="payamount3"/></td>
                                    </tr>
                                    <tr>
                                        <td><input type="text" value={this.state.payamount4} onChange={this.handleChange} name="payamount4"/></td>
                                        <td><input type="text" value={this.state.payamount5} onChange={this.handleChange} name="payamount5"/></td>
                                        <td><input type="text" value={this.state.payamount6} onChange={this.handleChange} name="payamount6"/></td>
                                    </tr>
                                </table>
                            </label><br></br>
                        </div>
                        </div> 
                    <input type="submit" value="Submit" color="blue" />
                
                </form>
        </div>
      );
    }
  }

  export default Form;