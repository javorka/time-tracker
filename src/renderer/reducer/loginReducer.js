import ACTIONS from '../action/actions';

const defaultState = {};

export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.LOGIN_SUCCESS:
      return Object.assign({}, state, { user: action.user });
    case ACTIONS.LOGIN_FAILED:
      return Object.assign({}, state, { user: null });
    default:
      return state;
  }
}
