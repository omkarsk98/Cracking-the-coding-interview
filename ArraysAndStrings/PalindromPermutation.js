// considering all characters to be of lower case
// use bigint for a wider char charset.
// remember, << >> works on 32 bit.
// amazing implementation in the book. 
const { expect } = require("chai");

const isPalindromePurmutation = (str) => {
  const vector = getBitVector(str);
  if(!vector) return true;
  return (vector & (vector - 1)) == 0;
};

const toggle = (vector, index) => {
  const toggleBit = 1 << index;
  return vector ^ toggleBit;
}

const getBitVector = (str) => {
  const a = 'a'.charCodeAt(0);
  let index, vector = 0;
  for (let char of str){
    index = char.charCodeAt(0) - a;
    vector = toggle(vector, index);
  }
  return vector;
}

const tests = [
  {
    str: "wfdhw",
    res: false,
  },
  {
    str: "pdwpkwd",
    res: true,
  },
  {
    str: "poiuytrew",
    res: false,
  },
  {
    str: "abcdefghijklmnopqrstuvwxyza",
    res: false,
  },
];

describe("Check if the string is permutation of a palindrome.", () => {
  tests.forEach((test, index) => {
    it(test.str, () => {
      const res = isPalindromePurmutation(test.str);
      expect(res).to.be.eq(test.res);
    });
  });
});
