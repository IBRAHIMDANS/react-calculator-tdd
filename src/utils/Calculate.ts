function sum(...params: number[]) {
  if(!params || params.length === 0) {
    return 0;
  }
  return params.reduce((a, b) => a + b);
};

function subtract(...params: number[]) {
  if(!params || params.length === 0) {
    return 0;
  }
  return params.reduce((a, b) => a - b);
}

function multiply(...params: number[]) {
  if(!params || params.length === 0) {
    return 0;
  }
  return params.reduce((a, b) => a * b);
}

function division( divider: number, dividend: number,): number | string {

  if(dividend === 0) {
    return 'ERROR'
  }
  return Number((divider / dividend).toFixed(2))
}

export { sum, subtract, multiply, division };
