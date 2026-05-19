const score = Number(prompt("Введіть кількість балів:"));
const homeworkDone = prompt("Домашнє завдання виконано? (true/false)") === "true";
const finalTestPassed = prompt("Фінальний тест складено? (true/false)") === "true";

if (score >= 70 && homeworkDone && finalTestPassed) {
    console.log("Сертифікат успішно отримано");
    alert("Сертифікат успішно отримано");
} else {
    console.log("Умови для отримання сертифіката не виконані");
    alert("Умови для отримання сертифіката не виконані");
}
