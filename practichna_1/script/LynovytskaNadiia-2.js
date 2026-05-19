const usd_val = 43.7;
const fixed_esv = 4500;

const profit_m1 = Number(prompt("Введіть дохід за 1-й місяць (UAH):"));
const profit_m2 = Number(prompt("Введіть дохід за 2-й місяць (USD):"));
const profit_m3 = Number(prompt("Введіть дохід за 3-й місяць (USD):"));

const quarter_revenue = profit_m1 + (profit_m2 + profit_m3) * usd_val;
const fiscal_sum = (quarter_revenue * 0.05) + fixed_esv;

console.log(`Загальна сума доходу Максима складає ${quarter_revenue} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${fiscal_sum} грн.`);