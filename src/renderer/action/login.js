import { ipcRenderer } from 'electron';
import ACTIONS from './actions';
import { mainChannels } from '../../main/ipc/channels';

export function login(user) {
  ipcRenderer.send(mainChannels.login, user);
  return { type: ACTIONS.LOGIN, user };
}

export function loginSuccess(user) {
  return { type: ACTIONS.LOGIN_SUCCESS, user };
}

export function loginFailed() {
  return { type: ACTIONS.LOGIN_FAILED };
}
