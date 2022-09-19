const prompt = require('prompt-sync')();
let ins = prompt("inserire un numero intero: ");
let sum =0;
for(let i=0;i<=ins;i++){
    
   
    sum = sum +i;
    
    //console.log(i);
    console.log(sum);
}
console.log("La somma finale è: "+ sum);