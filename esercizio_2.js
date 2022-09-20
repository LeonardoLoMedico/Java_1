const prompt = require('prompt-sync')();
//let ins =prompt(" Scrivi e il tuo nome e la tua età: ");
//console.log(ins);
let name =prompt ("Scriva il suo nome: ");
let surname=prompt("Scriva il suo cognome: ")
let age = prompt ("Inserisca la tua età: ");
console.log(name + " "+ age);

if(age>18){
    console.log("Lei é maggiorenne,può votare")
    
    
        let num= Math.floor((Math.random()*10));
        console.log("cabina: "+ num);

};
if (age<18){ cosole.log("Devi avere 18 anni per votare.")};


