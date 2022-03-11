import { SET_USER } from '../actions/constants';

const initialState = {
  firstname: 'Jean-Marie',
  lastname: 'CLÉRY',
  email: 'hello@jmclery.dev',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
