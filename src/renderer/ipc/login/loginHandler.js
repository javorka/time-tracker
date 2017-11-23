import { loginSuccess, loginFailed } from '../../action/login';

export function loginSuccessHandler(store, event, user) {
  store.dispatch(loginSuccess(user));
}

export function loginFailedHandler(store) {
  store.dispatch(loginFailed());
}
