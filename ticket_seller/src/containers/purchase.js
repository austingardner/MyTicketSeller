import React, {Component} from 'react';
import {connect} from 'react-redux';
import {buySeats} from '../actions/index';
import {bindActionCreators} from 'redux';

class Purchase extends Component {
  render() {
    return (
      <div>
      <button type="submit" onClick={() => {
        let res = window.confirm("Are you sure you want to buy the selected seats?");
        if (res) {
          this.props.buySeats();
          window.alert("Thank you for your purchase");
        }
      }}>
      Buy Selected Seats
      </button>
      </div>
    );
  }

  // sendEmail() {
  //
  // }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({buySeats}, dispatch);
}

export default connect(null, mapDispatchToProps)(Purchase);
