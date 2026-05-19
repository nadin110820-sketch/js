const projectPriceUsd = Number(prompt("Введіть суму оплати за проєкт в доларах:"));
const currentRate = 43.7;
const serviceFee = 0.005;

const grossUah = projectPriceUsd * currentRate;
const netIncome = grossUah - (grossUah * serviceFee);

console.log(`Після виконання проєкту, буде нараховано ${netIncome} грн з урахуванням комісії банку!`);