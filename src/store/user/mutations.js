const mutations = {
  SET_MODIFIED(state, value) {
    state.offer.isModified = value;
  },
  SET_STATE(state, listValue = []) {
    let box;
    let attribute;
    let value;
    switch (listValue.length) {
      case 2:
        [box, value] = listValue;
        state[box] = value;
        break;

      case 3:
        [box, attribute, value] = listValue;
        state[box][attribute] = value;
        break;

      default:
        break;
    }
  },
  RESET_PAGE_BUILDER (state) {
    console.log('Reset user state')
    Object.keys(initialState).forEach((box) => {
      Object.keys(initialState[box]).forEach((attr) => {
        state[box][attr] = initialState[box][attr]
      })
    })
  },
};

export default mutations;
