import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <div class="form-group">
          <label>
            Limit Balance:
          <input type="text" name="limit" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Sex:
            <input type="text" name="sex" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Education:
            <input type="text" name="education" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Marriage:
            <input type="text" name="marriage" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Age:
            <input type="text" name="age" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 1:
            <input type="text" name="pay_1" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 2:
            <input type="text" name="pay_2" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 3:
            <input type="text" name="pay_3" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 4:
            <input type="text" name="pay_4" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 5:
            <input type="text" name="pay_5" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay 6:
            <input type="text" name="pay_6" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 1:
            <input type="text" name="bill_1" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 2:
            <input type="text" name="bill_2" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 3:
            <input type="text" name="bill_3" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 4:
            <input type="text" name="bill_4" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 5:
            <input type="text" name="bill_5" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Bill Amount 6:
            <input type="text" name="bill_6" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 1:
            <input type="text" name="pay_amt1" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 2:
            <input type="text" name="pay_amt2" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 3:
            <input type="text" name="pay_amt3" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 4:
            <input type="text" name="pay_amt4" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 5:
            <input type="text" name="pay_amt5" />
         </label>
         </div>
         <div class="form-group">
         <label>
            Pay Amount 6:
            <input type="text" name="pay_amt6" />
         </label>
         </div>
         <div class="form-group">
         </div>
          <input type="submit" value="Submit" />
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
