// Создать функцию конвертации валют, принимающую три параметра:
// Сумма для конвертации
// Исходная валюта
// Целевая валюта


const rub_to_usd = 89.54;
let usd_to_rub = 1 / 89.54;
const rub_to_eur = 98.94;
let eur_to_rub = 1 / 98.94;
let rub = "rub";
let usd = "USD";
let eur = "Eur";
let jpy = "";


function converter(amount, from, to) {
    let from_lower = from.toLowerCase();
    let to_lower = to.toLowerCase();

    if (from_lower == "rub" && to_lower == "usd") {
        return amount / rub_to_usd;
    }
    else if (from_lower == "usd" && to_lower == "rub") {
        return amount / usd_to_rub;
    }
    else if (from_lower == "rub" && to_lower == "eur") {
        return amount / rub_to_eur;
    }
    else if (from_lower == "eur" && to_lower == "rub") {
        return amount / eur_to_rub;
    }
    else {
        return null;
    }
}

let number = 1000;

console.log(converter(number, rub, usd));
console.log(converter(number, usd, rub));
console.log(converter(number, rub, eur));
console.log(converter(number, eur, rub));
console.log(converter(number, rub, jpy));