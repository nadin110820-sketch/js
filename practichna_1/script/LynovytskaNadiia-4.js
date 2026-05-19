const rev_1 = Number(prompt("Введіть дохід за 1-й квартал:"));
const rev_2 = Number(prompt("Введіть дохід за 2-й квартал:"));
const rev_3 = Number(prompt("Введіть дохід за 3-й квартал:"));
const rev_4 = Number(prompt("Введіть дохід за 4-й квартал:"));

const total_rev = rev_1 + rev_2 + rev_3 + rev_4;
const fop_tax = total_rev * 0.05;
const esv_sum = 18000;

const clean_balance = total_rev - fop_tax - esv_sum;

const pzh_fond = clean_balance * 0.1;
const kids_fond = clean_balance * 0.05;

const eur_v = 51.2, usd_v = 43.7;
const exchange_total = (2500 * eur_v) + (3000 * usd_v);
const invest_amount = 100000;

const wallet_result = clean_balance - pzh_fond - kids_fond - invest_amount - exchange_total;

console.log(`За рік Максим заробив - ${total_rev} грн`);
console.log(`Єдиний податок 5% складає ${fop_tax} грн`);
console.log(`Відрахування у фонди "Повернись живим" та "Діти Героїв" складає ${pzh_fond} грн та ${kids_fond} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${exchange_total} грн`);
console.log(`Залишок на рахунку Максима складає ${wallet_result} грн`);