const checkForSpam = function (message) {
  message = message.toLowerCase();
  const spamList = ["sale", "spam"];
  let isSpam = false;
  for (let spamWord of spamList) {
    if (message.includes(spamWord)) {
      isSpam = true;
    }
  }
  return isSpam;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
