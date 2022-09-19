const prompt = require('prompt-sync')();
//let ins =prompt(" Scrivi e il tuo nome e la tua età: ");
//console.log(ins);
let name =prompt ("Scrivi il tuo nome: ");
let age = prompt ("inserisci la tua età: ");
console.log(name + " "+ age);
if(age>18){console.log("sei maggiorenne,puoi votare")};
if (age<18){ cosole.log("Devi avere 18 anni per votare.")};


