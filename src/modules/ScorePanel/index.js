import styles from './style.css';
import classnames from 'classnames';
import { connect } from 'react-redux'
import React, { Component } from 'react';
class ScorePanel extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {

    let loadingCircle = <span className={classnames({
      [styles.circle]: true,
      [styles.unvisibleZoomed]: !this.props.loading,
      [styles.visibleZoomed]: this.props.loading
    })}>
      <div className={classnames({
        [styles.loading]: true,
        visibleOnVisible: true
      })}>
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
      <div className="unvisibleOnVisible"><i className="fa fa-check"></i></div>
    </span>;

    return <div className={classnames({
      [styles.infoBlock]: true,
      [styles.effectVisible]: this.props.enabled
    })}>
      <div>
        <div className={styles.standaloneIcon}><span><i className="fa fa-th"></i></span></div>
        <div className={styles.title}>{this.props.title}{loadingCircle}</div>
        <div className={styles.standaloneIcon}><span><i className="fa fa-twitter"></i></span></div>
      </div>
    </div>;
  }
}

/**

*/
function mapStateToProps(state) {
  return {
    dispos: state.currentScreen, // Current screen coords
    enabled: state.score.enabled,
    loading: state.score.loading,
    title: state.score.title
  }
}

export default connect(mapStateToProps)(ScorePanel);
