const formatString = function (string) {
  let arr = [];
  if (string.length > 40) {
    arr = string.split("");
    arr.splice(40, arr.length - 40);
    arr.push("...");
    // console.log(arr);
    string = arr.join("");
    // console.log(string);
  }
  return string;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
