import add from './a.js';
import test from './b.js';

const b = c => {
  return add(1, 2) + c + test();
};

console.log(b(3));
