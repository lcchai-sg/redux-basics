const mathReducer = (state = {
  result: 1,
  lastValues: [],
}, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, state.result],
      }
    case 'MINUS':
      return {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, state.result],
      }
    default:
      break;
  }
  return state;
}

export default mathReducer;