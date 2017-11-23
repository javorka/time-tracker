import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import mainIpcHandler from './ipc/mainHandler';

import PomodoroContainer from './container/pomodoroContainer';
import store from './store';

const history = syncHistoryWithStore(createBrowserHistory(), store);
mainIpcHandler(store);

window.onload = () => {
  const provider = (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={PomodoroContainer} />
      </Router>
    </Provider>);

  render(provider, document.getElementById('app'));
};
