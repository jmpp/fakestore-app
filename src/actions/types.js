import { SET_USER, SWITCH_THEME } from './constants';

export function setMode(payload) {
  return {
    type: SWITCH_THEME,
    payload,
  };
}

export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}
