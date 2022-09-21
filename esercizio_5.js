const prompt = require('prompt-sync')();
let ins = prompt("Inserire un numero intero: ");
let sum =0;

//errore se numero inserito è uguale a 0
if(ins==0){console.log("Inserire un numero diverso da 0!")}

//trovo i multipli di 3 e faccio la sommatoria
for(let i=0;i<=ins;i++){
    
   if(i%3==0) {sum = sum +i;}

}
console.log("La somma finale dei numeri multipli di 3 è: "+ sum);

//trovo i multipli di 7 e faccio la sommatoria
for(let i=0;i<=ins;i++){
    
   if(i%7==0) {sum = sum +i;}

}
console.log("La somma finale dei numeri multipli di 7 è: "+ sum);

//trovo i multipli di 3 e 7 e faccio la sommatoria 
for(let i=0;i<=ins;i++){
    
   if(i%3==0 && i%7==0) {sum = sum +i;}
   //uso l'and logico : entrambe le consizioni devo essere verificate
}
console.log("La somma finale dei numeri multipli di 3 e 7 è: "+ sum);

//permetto all'utente di far scegliere il secondo divisore
let ins_1=prompt("Inserire il secondo divisore: ");
if(ins_1==0){console.log("Inserire un numero diverso da 0!")}
for(let i=0;i<=ins;i++){
    
   if(i%3==0 && i%ins_1) { sum = sum +i;}

}
console.log("La somma finale dei numeri multipli di 3 e " +ins_1+" è: "+ sum);
