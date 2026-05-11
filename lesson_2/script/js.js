// false:
// 0
// 0n
// ""
// null
// undefined
// NaN

// if(умова){
//     [інструкція якщо істина];
//     [інструкція якщо істина];
//     [інструкція якщо істина]
// }else if{
//     [інструкція якщо істина];
//     [інструкція якщо істина];
//     [інструкція якщо істина]
// }else{
//     [інструкція якщо істина];
// }

// Оператори порівняння
// == дорівнює
// != не дорівнює
// >
// >=
// <=
// === строго
// !== строго

// let a = 3, b = "3";
// console.log(a === b);

// let a = prompt("How much do you want to do?");
// let b = prompt("How much do you want to do?");
// let c;
// if (a > b) {
//     c = "a > b"
// }else if (a < b) {
//     c = "a < b"
// }else {
//     c = "a == b"
// }
// alert(c);

// let a = prompt("How much do you want to do?");
// let b = prompt("How much do you want to do?");
// let c;
// if (a > b)c = "a > b";
// else if (a < b)c = "a < b";
// else c = "a == b";
// alert(c);

// Умова світч
// let course = prompt("What is the name of your course?"), title;
// switch (course) {
//     case "figma":
//     case "CSS":
//     case "TypeScript":
//         title = "What is the name of your figma?";
//         break;
//
//     case "Python":
//         title = "What is the name of your python?";
//         break;
//
//     case "Javascript":
//         title = "What is the name of your JavaScript?";
//         break;
//     default:
//         title = "What is the name of your name?";
//         break;
// }
// alert(title);
//
// Логічні оператори
// let a = false, b = false, c = true;
// console.log(!a);
// // Виведе true бо ! - заперечує
// console.log(a == c);
// // Буде тру бо фолс = це пустий рядок
// // якщо заперечувати стрінгове, то два оклики !!
// console.log(a && c);
// // && = and
// console.log(a || b);
// // || = or

// let age = prompt("What is your age?"), info;
// if (age < 18){
//     info = "Школота"
// }else if (age >= 18 && age < 35){
//     info = "призивний"
// }else{
//     info = "ще є шанси"
// }
// alert(info);

let name = prompt("What is your name?"), greeting = `Hello, ${name || 'World'}`;
alert(greeting);