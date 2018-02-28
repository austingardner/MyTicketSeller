import React, {Component} from 'react';
import {connect} from 'react-redux';


class Numbers extends Component {



  getNumOpenSeats() {


    var num_seats = 0;
    for (var i = 0; i< this.props.seats.seats.length; i++)
    {
      for(var j = 0; j < this.props.seats.seats[i].length; j++)
      {
        if(this.props.seats.seats[i][j] === 0)
        {
          num_seats++;
        }
      }

    }
    return num_seats;
  }

  render() {
    return (
      <div>There are {this.getNumOpenSeats()} open seats</div>
    );
  }

}


function mapStateToProps({seats}) {
  return {
    seats
  };
}

export default connect(mapStateToProps)(Numbers);
