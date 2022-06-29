const printInFrame = function(list) {
  list = list.split(' ');
  console.log(list);
  const longest = longestStr(list);
  // border needed some extra length
  const border = repeat('*', longest + 3);

  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length)}*`);
  }
  console.log(border);
};

const repeat = function(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

// logic for finding the longest word wasnt working either
const longestStr = function(list) {
  let longest = list[0].length;

  for (const i in list) {
    //console.log(longest);
    if (list[i].length > longest) {
      longest = list[i].length;
    }
  }
  // console.log("longest: ", longest);
  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
