import ACTIONS from './actions';

function timeoutEnd() {
  return { type: ACTIONS.POMODORO_TIMEOUT_END };
}

export function startPomodoro() {
  return (dispatch) => {
    const timeoutId = setTimeout(() => dispatch(timeoutEnd()), 1000);
    dispatch({ type: ACTIONS.POMODORO_START, timeoutId });
  };
}

export function stopPomodoro() {
  return { type: ACTIONS.POMODORO_STOP };
}

export function startWork() {
  return (dispatch) => {
    const timeoutId = setTimeout(() => dispatch(timeoutEnd()), 1000);
    dispatch({ type: ACTIONS.POMODORO_START_WORK, timeoutId });
  };
}

export function startBreak() {
  return (dispatch) => {
    const timeoutId = setTimeout(() => dispatch(timeoutEnd()), 1000);
    dispatch({ type: ACTIONS.POMODORO_START_BREAK, timeoutId });
  };
}
