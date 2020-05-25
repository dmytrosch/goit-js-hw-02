const findLongestWord = function (string) {
  string = string.split(" ");
  console.log(string);
  let max = string[0].length;
  let maxWord = string[0];
  for (let i = 0; i < string.length; i++) {
    if (max < string[i].length) {
      max = string[i].length;
      //   console.log(max);
      maxWord = string[i];
      //   console.log(maxWord);
    }
  }
  return maxWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
