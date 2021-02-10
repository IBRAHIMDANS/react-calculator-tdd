const sum = function(...params: number[]) {
  if(!params || params.length === 0) {
    return 0;
  }
  return params.reduce((a, b) => a + b);
};

function subtract() {

}

function square() {

}

export { sum, subtract, square };
