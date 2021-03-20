import types from './types';

const increment = () => ({
  type: types.INCREMENT,
});

export const decrement = () => ({
  type: types.DECREMENT,
});
export const init_current = () => ({
  type: types.SET_CURRENT,
});

export const incrementAsync = error => ({
  type: types.INCREMENT_ASYNC,
});
export const load_results_module = () => ({
  type: types.LOAD_RESULT_MODULE,
});
export default increment;