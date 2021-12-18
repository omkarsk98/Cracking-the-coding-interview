// considering all characters to be of lower case
// There are thre types pf edits available. Insert, delete or replace
// given 2 strings, write a function to check if they are atmost one edit away
const { expect } = require("chai");

const oneAway = (first, second) => {
  let str, str2;
  if (first.length > second.length) {
    str1 = first;
    str2 = second;
  } else {
    str2 = second;
    str1 = first;
  }
  const len1 = str1.length,
    len2 = str2.length;
  let foundDifference = false,
    i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (str1[i] != str2[j]) {
      if (foundDifference) return false;
      foundDifference = true;
      i++;
    } else {
      i++;
      j++;
    }
  }
  return true;
};

const oneEditReplace = (str1, str2) => {
  let foundDifference = false;
  for (let i in str1) {
    if (str1[i] != str2[i]) {
      if (foundDifference) return false;
      foundDifference = true;
    }
  }
  return true;
};

const oneEditInsert = (str1, str2, len1, len2) => {
  let i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    if (str1[i] != str2[j]) {
      if (i != j) return false;
      j++;
    } else {
      i++;
      j++;
    }
  }
  return true;
};

const tests = [
  {
    str1: "wfdhw",
    str2: "wfhw",
    res: true,
  },
  {
    str1: "pdwpkwd",
    str2: "pdpkd",
    res: false,
  },
  {
    str1: "poiuytrew",
    str2: "poipytrew",
    res: true,
  },
  {
    str1: "abcdefghijklmnopqrstuvwxyza",
    str2: "abcdefghijklmnopqrstuvwxyza",
    res: true,
  },
];

describe("Check if 2 strings are just 1 edit away.", () => {
  tests.forEach((test, index) => {
    it(test.str1, () => {
      const res = oneAway(test.str1, test.str2);
      expect(res).to.be.eq(test.res);
    });
  });
});
