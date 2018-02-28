import React, { Component } from 'react';
import '../styles/seat.css';
import {connect} from 'react-redux';
import {buySeats, selectSeats, deSelectSeats} from '../actions/index';
import {bindActionCreators} from 'redux';

//need to make this a container, change the redux state when I change the
//taken property
class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index : props.index,
      taken : props.taken
    }


    // this.taken = this.props.taken;
  }

  // componentDidUpdate() {
  //   console.log("after ",this.props.taken)
  // }

  render() {
    let myColor = null;
    if(this.props.taken === 0)
    {
      myColor = {backgroundColor: 'blue', };
    }
    else if (this.props.taken === 1) {
      myColor = {backgroundColor: 'yellow',};
      setTimeout(() => {
        this.props.deSelectSeats(this.props.index);
      }, 30000);
    }
    else {
      myColor = {backgroundColor: 'grey',};
    }

    return(
      <div>
        <span className="dot" style={myColor} onClick={() => {

          if(this.props.taken === 0) {

            this.props.selectSeats(this.props.index);
          }
          else if (this.props.taken === 1) {

            this.props.deSelectSeats(this.props.index);
          }
        }}></span>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({buySeats, selectSeats, deSelectSeats}, dispatch);
}





export default connect(null, mapDispatchToProps)(Seat);
//style=((this.taken == 0) ? "color:blue" : "color:grey")
