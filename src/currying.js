const { curry } = require('ramda');

const currying = () => {
  const split = curry((delimiter, string) => string.split(delimiter));
  
  const splitWord = split(/\s*/);
  const result = splitWord('this is the moment i decided to resign');
  
  console.log('=== Currying Exercise ===\nresult ===========', result);
};

currying();

module.exports = {
  currying
}

// console.log('hii')

