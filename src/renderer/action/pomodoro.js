import ACTIONS from './actions';

export function startPomodoro() {
  return { type: ACTIONS.POMODORO_START };
}

export function stopPomodoro() {
  return { type: ACTIONS.POMODORO_STOP };
}

export function startWork() {
  return { type: ACTIONS.POMODORO_START_WORK };
}

export function startBreak() {
  return { type: ACTIONS.POMODORO_START_BREAK };
}
