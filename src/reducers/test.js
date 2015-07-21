import {
  COUNT,
} from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case COUNT:
      let {count} = state;
      return {
        count: count + 2
      };
    default:
      return state;
  }
}