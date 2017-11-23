import { Map, List } from 'immutable';
import ACTIONS from '../action/actions';

const defaultState = new Map({
  isActive: false,
  worklog: new List(),
  breaks: new List(),
});

export default function pomodoroReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.POMODORO_START: {
      const worklogSize = state.get('worklog').size;
      return state.setIn(['worklog', worklogSize], new Map({ start: new Date() }))
        .set('isActive', true);
    }
    case ACTIONS.POMODORO_STOP: {
      return state.updateIn(['worklog', -1, 'end'], (endTime = new Date()) => endTime)
        .updateIn(['breaks', -1, 'end'], (endTime = new Date()) => endTime)
        .set('isActive', false);
    }
    case ACTIONS.POMODORO_START_WORK: {
      const worklogSize = state.get('worklog').size;
      return state.setIn(['worklog', worklogSize], new Map({ start: new Date() }))
        .updateIn(['breaks', -1, 'end'], (endTime = new Date()) => endTime);
    }
    case ACTIONS.POMODORO_START_BREAK: {
      const breakSize = state.get('breaks').size;
      return state.setIn(['breaks', breakSize], new Map({ start: new Date() }))
        .updateIn(['worklog', -1, 'end'], (endTime = new Date()) => endTime);
    }
    default:
      return state;
  }
}
