const sensorError = prompt("Є помилка датчика? (true/false)") === "true";
const temperature = Number(prompt("Введіть температуру:"));
let temperatureMessage;

if (sensorError) {
    temperatureMessage = "Помилка датчика температури";
} else if (temperature < 18) {
    temperatureMessage = "Увімкнути обігрів";
} else if (temperature >= 18 && temperature <= 25) {
    temperatureMessage = "Температура комфортна";
} else {
    temperatureMessage = "Увімкнути кондиціонер";
}

console.log(temperatureMessage);
alert(temperatureMessage);
