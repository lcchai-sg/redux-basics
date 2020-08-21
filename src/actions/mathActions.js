export function addNumber(number) {
  return {
    type: 'ADD',
    payload: number,
  };
}

export function minusNumber(number) {
  return {
    type: 'MINUS',
    payload: number,
  };
}
