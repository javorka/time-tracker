import { ipcMain } from 'electron';
import { mainChannels } from './channels';
import loginHandler from './login/loginHandler';

export default function mainIpcHandler() {
  ipcMain.on(mainChannels.login, loginHandler);
}
