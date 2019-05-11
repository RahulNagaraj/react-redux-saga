const getState = state => state['IncDecReducer'];

const getValue = state => getState(state).value;

export default {
  getValue,
};
