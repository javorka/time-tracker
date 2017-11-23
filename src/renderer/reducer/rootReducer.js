import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './loginReducer';
import pomodoroReducer from './pomodoroReducer';

export default combineReducers({
  pomodoro: pomodoroReducer,
  login: loginReducer,
  routing: routerReducer,
});
