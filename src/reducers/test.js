import {
  COUNT,
} from '../actions/actionTypes';

export default function info(state = {count:0}, action = {}) {
  switch (action.type) {
    case COUNT:
      let {count} = state;
      return {
        count: count + 1
      };
    default:
      return state;
  }
}