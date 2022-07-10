// HW JS 2

// Напишите валидационный скрипт используя функции

// 1. Скрипт должен на вход принимать строку.
// 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
// 3. Минимум 5 символов в строке
// 4. Максимум 64 символа в строке
// 5. В строке должны быть буквы
// 6. Должна быть хотя бы одна буква в верхнем регистре
// 7. Должна быть хотя бы одна цифра
// 8. Должна быть хотя бы одна @
// 9. Строка не должна быть пустой

function letters(string) {
  return /[a-zA-Zа-яА-Я]/.test(string);
}

function big_letters(string) {
  return /[A-ZА-Я]/.test(string);
}

function numbers(string) {
  return /[0-9]/.test(string);
}

function result(string) {
  let TestCheck = 10;
  if (!string) {
    console.log("Строка не должна быть пустой");
  } else if (typeof string == typeof TestCheck) {
    console.log("Скрипт на входе должен принимать строку");
  } else if (str.length < 5 || str.length > 64) {
    console.log("Строка должна содержать от 5 до 64 символов");
  } else if (!letters(string)) {
    console.log("В строке должны быть буквы");
  } else if (!big_letters(string)) {
    console.log("В строке должна быть хотя бы одна буква верхнего регистра");
  } else if (!numbers(string)) {
    console.log("В строке должна быть хотя бы одна цифра");
  } else if (!string.includes("@")) {
    console.log("В строке должна быть хотя бы одна @");
  } else {
    console.log("OK");
  }
}

result("I2@");
