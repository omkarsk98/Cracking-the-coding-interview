// considering all characters to be of lower case
const { expect } = require("chai");

const isUnique = (str) => {
  let checker = 0,
    a = "a".charCodeAt(),
    index;
  for (let char of str) {
    index = char.charCodeAt(0) - a;
    if ((checker & (1 << index)) > 0) return false;
    checker |= (1 << index);  
  }
  return true;
};

const tests = [{
  str: "wfdhw",
  res: false
}, {
  str: "sdfghjk",
  res: true
}, {
  str: "poiuytrew",
  res: true
}, {
  str: "abcdefghijklmnopqrstuvwxyza",
  res: false
}]

describe("CHeck if the string has all the unique characters", () => {
  tests.forEach((test, index) => {
    it(test.str, () => {
      const res = isUnique(test.str);
      expect(res).to.be.eq(test.res);
    })
  })
})