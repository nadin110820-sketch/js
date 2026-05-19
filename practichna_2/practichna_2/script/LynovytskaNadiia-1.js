const isAuthorized = prompt("Користувач авторизований? (true/false)") === "true";
const internetSpeed = Number(prompt("Введіть швидкість інтернету:"));
const isBanned = prompt("Акаунт заблокований? (true/false)") === "true";

let canPlay = isAuthorized && internetSpeed >= 20 && !isBanned;

if (canPlay) {
    console.log("Доступ до онлайн-режиму дозволено");
    alert("Доступ до онлайн-режиму дозволено");
} else {
    console.log("Доступ до онлайн-режиму заборонено");
    alert("Доступ до онлайн-режиму заборонено");
}
