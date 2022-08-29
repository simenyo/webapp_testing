const prompt = require('prompt-sync')();
const n = prompt("Choose a language, Norwegian(no), English(eng): ");
let nor = "";

n === "no" ? nor = prompt("Hvilken verdi skal du konvertere?: ") : nor = prompt("What amount do you want to exhange?: ");
const currency = prompt("Danske kroner(dkk) | Euro(eur) | Amerikanske dollar(usd) | ");

if (currency === "dkk") {
    console.log(nor/1.34);
}else if (currency === "eur") {
    console.log(nor/10);
}else {
    console.log(nor/9);
}