import { ipcRenderer } from 'electron';
import { rendererChannels } from '../../main/ipc/channels';
import { loginFailedHandler, loginSuccessHandler } from './login/loginHandler';

export default function (store) {
  ipcRenderer.on(rendererChannels.loginSuccess, loginSuccessHandler.bind(null, store));
  ipcRenderer.on(rendererChannels.loginFailed, loginFailedHandler.bind(null, store));
}
