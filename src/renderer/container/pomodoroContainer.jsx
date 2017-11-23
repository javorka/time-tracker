import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startPomodoro, stopPomodoro, startWork, startBreak } from '../action/pomodoro';

class PomodoroContainer extends Component {
  constructor(props) {
    super(props);
    this.startPomodoro = this.startPomodoro.bind(this);
    this.startWork = this.startWork.bind(this);
    this.startBreak = this.startBreak.bind(this);
    this.stopPomodoro = this.stopPomodoro.bind(this);
    // this.showNotification = this.showNotification.bind(this);
  }

  startPomodoro() {
    this.props.startPomodoro();
  }

  startWork() {
    this.props.startWork();
  }

  startBreak() {
    this.props.startBreak();
  }

  stopPomodoro() {
    this.props.stopPomodoro();
  }

  // showNotification() {
  //   const myNotification = new Notification('Title', {
  //     body: 'Lorem Ipsum Dolor Sit Amet',
  //   });
  //   myNotification.show();
  // }

  render() {
    const { isActive, worklog, breaks } = this.props;
    return (
      <div>
        <h1>POMODORO {isActive ? 'active' : 'inactive'}</h1>
        <button type="button" onClick={this.startPomodoro}>Start pomodoro</button>
        <button type="button" onClick={this.stopPomodoro}>Stop pomodoro</button>
        <button type="button" onClick={this.startWork}>Start work</button>
        <button type="button" onClick={this.startBreak}>Start break</button>
        {/* <button type="button" onClick={this.showNotification}>Notification</button> */}
        <h3>Worklog</h3>
        {worklog.map(e => <div key={e.start.toString()}>Start: {e.start.toString()} | End: {e.end ? e.end.toString() : '---'}</div>)}
        <h3>Breaks</h3>
        {breaks.map(e => <div key={e.start.toString()}>Start: {e.start.toString()} | End: {e.end ? e.end.toString() : '---'}</div>)}
      </div>
    );
  }
}

PomodoroContainer.propTypes = {
  isActive: PropTypes.bool.isRequired,
  worklog: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  })).isRequired,
  breaks: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  })).isRequired,
  startPomodoro: PropTypes.func.isRequired,
  stopPomodoro: PropTypes.func.isRequired,
  startWork: PropTypes.func.isRequired,
  startBreak: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state.pomodoro.toJS();
}

export default connect(mapStateToProps, {
  startPomodoro,
  stopPomodoro,
  startWork,
  startBreak,
})(PomodoroContainer);
