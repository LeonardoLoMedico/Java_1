/*permetta di indovinare una parola da una lista di parole
1. bonus
2. implentare l'impiccato*/
const prompt = require('prompt-sync')();
// creare una lista di parole: come? creo un array di parole
let ins =prompt("Inserisci una paorla: ");
let colazione=["cannolo","arancino","cassatina","cappuccino","caffè"];

function indovinaParola(x,y){
    
   for(i=0;i<4;i++){
      let z=0;
   if(x==y[i]){
    z= y[i];
    return z;
   }
   }
   
}
let indovinata=indovinaParola(ins,colazione);
console.log("Hai indovinato la parola: "+ indovinata);

