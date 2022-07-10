// HW_1* 
// Задания с разным количеством звездочек:)
// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// Первый вариант

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// function check_age(age_1){
//     if (age_1 < age_2) {
//         console.log("You don't have acess cause your age is " + age_1 + " It's less then " + age_2 );
//         }
//     else if (age_1 >= age_2 && age_1 <= age_3) {
//         console.log("Welcome!");
//         }
//     else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channel");
//         }
//     else {
//         console.log("Technical work")
//            }
// }

// check_age(17)
// check_age(18)
// check_age(61)

// Второй вариант

// function check_age(age_1, age_2, age_3){
//     if (age_1 < age_2) {
//         console.log("You don't have acess cause your age is " + age_1 + " It's less then " + age_2 );
//         }
//     else if (age_1 >= age_2 && age_1 <= age_3) {
//         console.log("Welcome!");
//         }
//     else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channel");
//         }
//     else {
//         console.log("Technical work")
//            }
// }
// check_age(17, 18, 60)
// check_age(18, 18, 60)
// check_age(61, 18, 60)


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

// let age_1 = 10;
// let age_2 = 18;
// let age_3 = 60;

// function check_age(age_1){
//     if (typeof age_1 == "number" && typeof age_2 == "number" && typeof age_3 == "number"){
//         if (age_1 < age_2) {
//         console.log("You don't have acess cause your age is " + age_1 + " It's less then " + age_2 );
//         }
//         else if (age_1 >= age_2 && age_1 <= age_3) {
//         console.log("Welcome!");
//         }
//         else if (age_1 > age_3) {
//         console.log("Keep calm and look Culture channel");
//         }
//         else {
//         console.log("Technical work")
//            }
//     } else {
//         console.log("Error")
//     } 
// }

// check_age(17)
// check_age(18)
// check_age(61)
// check_age("cvx")



// Преобразовать предыдущее задание таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

function check_age(){
    let age_1 = prompt("Enter age_1","");
    let age_2 = prompt("Enter age_2","");
    let age_3 = prompt("Enter age_3","");
    if (age_1 < age_2) {
        console.log("You don't have acess cause your age is " + age_1 + " It's less then " + age_2 );
        }
    else if (age_1 >= age_2 && age_1 <= age_3) {
        console.log("Welcome!");
        }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel");
        }
    else {
        console.log("Technical work")
           }
}

console.log(check_age)
