const isPalindrome = function(str) {
  let noSpaces = str.split(" ").join("");
  noSpaces = noSpaces.toLowerCase();
  const midIndex = Math.floor(noSpaces.length / 2);
  let lastIndex = 0;
  if (noSpaces.length === 1) {
    lastIndex = 1;
  } else {
    lastIndex = noSpaces.length - 1;
  }

  for (let i = 0; i < midIndex; i++) {
    if (noSpaces[i] !== noSpaces[lastIndex - i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome("${word}"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};


// TEST CODE
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);
assertPalindrome('a santa at NASA', true);
