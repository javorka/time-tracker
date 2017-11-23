import React, { PureComponent } from 'react';
import { ipcRenderer } from 'electron';
import { mainChannels, rendererChannels } from '../main/ipc/channels';


// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'Unknown',
        id: null,
      },
    };
    this.login = this.login.bind(this);
    this.loginResult = this.loginResult.bind(this);
    ipcRenderer.on(rendererChannels.loginSuccess, this.loginResult);
  }

  login() {
    ipcRenderer.send(mainChannels.login, 'login');
  }

  loginResult()

  render() {
    return (
      <div>COOL! We have React here {this.state.user.name}</div>
    );
  }
}
