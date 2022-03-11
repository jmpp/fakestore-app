import { SWITCH_THEME } from './constants';

export function setMode(payload) {
  return {
    type: SWITCH_THEME,
    payload,
  };
}
