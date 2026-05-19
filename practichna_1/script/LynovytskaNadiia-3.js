let money = Number(prompt("Введіть баланс на початок кварталу (UAH):"));

const r1 = 43.7, r2 = r1 + 1, r3 = r2 + 1;

const m1 = Number(prompt("Введіть дохід за 1-й місяць (UAH):"));
const m2 = Number(prompt("Введіть дохід за 2-й місяць (USD):")) * r2;
const m3 = Number(prompt("Введіть дохід за 3-й місяць (USD):")) * r3;

const incomeSum = m1 + m2 + m3;
const netflixPay = (9.99 * r1) + (9.99 * r2) + (9.99 * r3);
const expensesSum = (7500 * 3) + netflixPay;
const taxesSum = 4500 + (incomeSum * 0.05);

const result = money + incomeSum - expensesSum - taxesSum;

console.log(`В цьому кварталі Максим витратив ${expensesSum} грн`);
console.log(`Загальний дохід Максима за квартал становить ${incomeSum} грн`);
console.log(`Загальна сума податків становить ${taxesSum} грн`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${result} грн`);