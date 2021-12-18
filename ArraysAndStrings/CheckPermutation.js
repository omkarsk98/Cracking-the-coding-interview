// given 2 strings, check whether one is permutation of other
const { expect } = require("chai");

const isPermutation = (str1, str2) => {
  if (str1.length != str2.length) return false;
  const register = {};
  for (let char of str1) register[char] = (register[char] || 0) + 1;
  for(let char of str2){
    register[char]--;
    if(isNaN(register[char]) || register[char < 0]) return false;
  }
  return true;
};


const tests = [{
  str1: "wfdhw",
  str2: "fdwwh",
  res: true
}, {
  str1: "sdfghjk",
  str2: "sdfghok",
  res: false
}, {
  str1: "poiuytrew",
  str2: "ptoiyrewu",
  res: true
}]

describe("CHeck if the string has all the unique characters", () => {
  tests.forEach((test, index) => {
    it(test.str1, () => {
      const res = isPermutation(test.str1, test.str2);
      expect(res).to.be.eq(test.res);
    })
  })
})