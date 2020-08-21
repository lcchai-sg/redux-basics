const { createStore, combineReducers, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');

const initialState = {
  result: 1,
  lastValues: [],
};

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
      break;
    case 'MINUS':
      return {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, state.result],
      }
      break;
  }
  return state;
}

const userReducer = (state = {
  name: 'Max', age: 27,
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload,
      }
      break;
    case 'SET_AGE':
      return {
        ...state,
        age: action.payload,
      }
      break;
  }
  return state;
}

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  applyMiddleware(thunk));

store.subscribe(() => {
  console.log('store updated ', store.getState())
})

store.dispatch({ type: 'ADD', payload: 13 });
store.dispatch({ type: 'ADD', payload: 43 });
store.dispatch({ type: 'ADD', payload: 23 });
store.dispatch({ type: 'ADD', payload: 11 });
store.dispatch({ type: 'MINUS', payload: 54 });
store.dispatch({ type: 'ADD', payload: 33 });
store.dispatch({ type: 'MINUS', payload: 22 });
store.dispatch({ type: 'ADD', payload: 13 });
store.dispatch({ type: 'SET_AGE', payload: 33 });
