import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './style.css';
class Cover extends Component {
  render() {
    return <div className={styles.cover}>
      <h3>{this.props.widget.summary.title}</h3>
    </div>
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Cover);
