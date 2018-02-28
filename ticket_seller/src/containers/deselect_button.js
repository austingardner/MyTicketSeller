import React, {Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deSelectAll} from '../actions/index';
import '../styles/deselbutton.css';

class DeselectButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" className='button' onClick={() => {
          this.props.deSelectAll();
        }}>Deselect All</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deSelectAll}, dispatch);
}

export default connect(null, mapDispatchToProps)(DeselectButton);
