const initialState = {
  text: 'home',
  disabled: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BTN_CTL':
      return Object.assign({}, state, {
        disabled: action.disabled
      });
    default:
      return state;
  }
}

export default reducer;
