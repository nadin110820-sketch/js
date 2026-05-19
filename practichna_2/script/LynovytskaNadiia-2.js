const day = prompt("Введіть день тижня:");
let ticketPrice;

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        ticketPrice = "Вартість квитка: 150 грн";
        break;

    case "четвер":
    case "п'ятниця":
        ticketPrice = "Вартість квитка: 200 грн";
        break;

    case "субота":
    case "неділя":
        ticketPrice = "Вартість квитка: 250 грн";
        break;

    default:
        ticketPrice = "Помилка введення дня тижня";
}

console.log(ticketPrice);
alert(ticketPrice);
