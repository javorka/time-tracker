import { Map, List } from 'immutable';
import ACTIONS from '../action/actions';

const defaultState = new Map({
  isActive: false,
  worklog: new List(),
  breaks: new List(),
  isWorking: false,
});

export default function pomodoroReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.POMODORO_START: {
      const worklogSize = state.get('worklog').size;
      return state.setIn(['worklog', worklogSize], new Map({ start: new Date() }))
        .set('isActive', true)
        .set('isWorking', true)
        .set('timeoutId', action.timeoutId);
    }
    case ACTIONS.POMODORO_STOP: {
      clearInterval(state.get('timeoutId'));
      return state.updateIn(['worklog', -1, 'end'], (endTime = new Date()) => endTime)
        .updateIn(['breaks', -1, 'end'], (endTime = new Date()) => endTime)
        .set('isActive', false)
        .set('isWorking', false);
    }
    case ACTIONS.POMODORO_START_WORK: {
      clearInterval(state.get('timeoutId'));
      const worklogSize = state.get('worklog').size;
      return state.setIn(['worklog', worklogSize], new Map({ start: new Date() }))
        .updateIn(['breaks', -1, 'end'], (endTime = new Date()) => endTime)
        .set('timeoutId', action.timeoutId)
        .set('isWorking', true);
    }
    case ACTIONS.POMODORO_START_BREAK: {
      clearInterval(state.get('timeoutId'));
      const breakSize = state.get('breaks').size;
      return state.setIn(['breaks', breakSize], new Map({ start: new Date() }))
        .updateIn(['worklog', -1, 'end'], (endTime = new Date()) => endTime)
        .set('timeoutId', action.timeoutId)
        .set('isWorking', false);
    }
    case ACTIONS.POMODORO_TIMEOUT_END: {
      const myNotification = new Notification('Title', {
        body: state.get('isWorking') ? 'Time to take a break' : 'Let\'s get to work',
      });
      myNotification.show();
      return state;
    }
    default:
      return state;
  }
}
