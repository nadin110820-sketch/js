// Задача 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
    alert(i);
}

// Задача 2
const n2 = prompt("Введіть число N (для виводу парних чисел):");
for (let i = 1; i <= n2; i++) {
    if (i % 2 === 0) {
        console.log(i);
        alert(i);
    }
}

// Задача 3
const n3 = prompt("Введіть число N (для підрахунку суми):");
let sum = 0;
for (let i = 1; i <= n3; i++) {
    sum = sum + Number(i);
}
console.log(sum);
alert(sum);

// Задача 4
const n4 = prompt("Введіть число N (для зворотного відліку):");
for (let i = n4; i >= 1; i--) {
    console.log(i);
    alert(i);
}

// Задача 5
const n5 = prompt("Введіть число для таблиці множення:");
for (let i = 1; i <= 10; i++) {
    let res = n5 * i;
    console.log(n5 + " * " + i + " = " + res);
    alert(n5 + " * " + i + " = " + res);
}

// Задача 6
let pass6;
do {
    pass6 = prompt("Введіть пароль:");
} while (pass6 !== "admin123");
alert("Пароль правильний");

// Задача 7
for (let i = 1; i <= 3; i++) {
    let pass7 = prompt("Введіть пароль (спроба " + i + " з 3):");
    if (pass7 === "admin123") {
        alert("Доступ дозволено");
        break;
    }
    if (i === 3) {
        alert("Доступ заблоковано");
    }
}

// Задача 8
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    alert(i);
}

// Задача 9
const str9 = prompt("Введіть число для підрахунку цифр:");
let count9 = 0;
for (let i = 0; i < str9.length; i++) {
    count9++;
}
console.log(count9);
alert(count9);

// Задача 10
const secret = 7;
let guess;
while (guess != secret) {
    guess = prompt("Вгадайте число від 1 до 10:");
    if (guess > secret) {
        alert("Менше");
    } else if (guess < secret) {
        alert("Більше");
    } else {
        alert("Ви вгадали");
    }
}