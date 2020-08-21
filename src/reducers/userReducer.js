const userReducer = (state = {
  name: 'Maxie', age: 27,
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
    case 'SET_AGE':
      return {
        ...state,
        age: action.payload,
      }
    default:
      break;
  }
  return state;
}

export default userReducer;