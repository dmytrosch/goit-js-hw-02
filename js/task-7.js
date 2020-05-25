const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let result;
let message;

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);

  return result;
};

const addLogin = function (allLogins, login) {
  const resultUnique = isLoginUnique(allLogins, login);
  const resultValid = isLoginValid(login);
  console.log(resultUnique);
  console.log(resultValid);
  if (resultUnique === true && resultValid === true) {
    logins.push(login);
    message = "Логин успешно добавлен!";
  }
  console.log(allLogins);
  if (resultUnique === false) {
    message = "Такой логин уже используется!";
  }
  if (resultValid === false) {
    message = "Ошибка! Логин должен быть от 4 до 16 символов";
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
