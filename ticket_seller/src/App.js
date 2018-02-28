import React, { Component } from 'react';
import './App.css';
import Seats from './containers/seats';
import Purchase from './containers/purchase';
import Numbers from './containers/numbers';
import FindSeats from './containers/find_seats';
import DeselectButton from './containers/deselect_button';
import './styles/seats.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <table className="table">
        <tbody>
          <tr className="tr"><td><Numbers/></td><td><Seats/></td><td><DeselectButton/></td></tr>
        </tbody>
      </table>
      <FindSeats/>
      <Purchase/>
        <div>Note: Selections time out after 30 seconds</div>
      </div>
    );
  }
}

export default App;
