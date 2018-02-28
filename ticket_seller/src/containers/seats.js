import React, {Component} from 'react';
import {connect} from 'react-redux';
import Seat from './seat';
import '../styles/seats.css';


class Seats extends Component {
  constructor(props){
        super(props);
        this.getSeats=this.getSeats.bind(this);
  }

  getSeats() {
    const rows = this.props.seats.seats.map((item, i) => {

      const seats_in_row = item.map((a_seat, j) => {

        return (
          <td key={j}>{j}<Seat index={[i,j]} taken={this.props.seats.seats[i][j]}/></td>
        );
      })

      return (
        <tr key={i}><td>{String.fromCharCode(65 + i)}</td>{seats_in_row}</tr>
      );

    })

    return rows
  }


  render() {
    return(
      <table className="table">
        <thead>
        </thead>
        <tbody>
          {this.getSeats()}
        </tbody>
      </table>
    );
  }

}


function mapStateToProps({seats}) {
  return {
    seats
  };
}

export default connect(mapStateToProps)(Seats);

//taken={this.props.seats[i][j]}}
