import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames  from 'classnames';
import styles from './style.css';
class Cover extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      minimized: true
    }
  }
  render() {
    return <div className={classnames(Object.assign({
        [styles.cover]: true,
        [styles.coverMinimize]: this.props.minimized
      }, this.props.cover.className?{[this.props.cover.className]: true}:{}))}>
      <h3>{this.props.cover.title}</h3>
      <descript>{this.props.cover.descript}</descript>
      <ul>{(this.props.cover.stack||[]).map((stack) => {
          return <li key={stack}>{stack}</li>;
        })}</ul>
      <button onClick={this.props.minimize.bind(this)}>Демо <i className="fa fa-eye"></i></button>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    minimized: state.cover.state==='minimized'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    minimize: () => {
      dispatch({
        type: 'COVER_STATE',
        state: 'minimized'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
