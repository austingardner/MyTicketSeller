import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMultipleSeats, deSelectAll} from '../actions/index';

class FindSeats extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
      <button type="submit" onClick={() => {
        let num;
        while(1){
          num = prompt("Please enter the number of seats you would like to purchase")
          if(!isNaN(num) && num <= 20)
          {
            break;
          }
          else {
            alert("bad input. input must be a number. You can only reserve 20 seats at a time ");
          }
        }
        // console.log("in onClick of FindSeats")
        // console.log("this.props.seats",this.props.seats)
        // console.log("this.props.seats.seats",this.props.seats.seats)
        let goal_seats = [];
        for(let i = 0; i < this.props.seats.seats.length; i++)
        {
          for(let j = 0; j < this.props.seats.seats[i].length; j++)
          {
            if(goal_seats.length >= num)
            {
              this.props.deSelectAll();
              this.props.selectMultipleSeats(goal_seats);
              break;
            }
            if(this.props.seats.seats[i][j] === 0)
            {
              goal_seats.push([i,j]);
            }
          }
        }
      }}>
      Find Seats
      </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMultipleSeats, deSelectAll}, dispatch);
}

function mapStateToProps({seats}) {
  return {
    seats
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindSeats);
