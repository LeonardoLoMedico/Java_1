const prompt = require('prompt-sync')();
let num1= prompt("Inserisci un numero: ");
let num2= prompt("Inserire secondo numero: ");
num1=Number(num1);
num2=Number(num2);
console.log("Per effettuare la somma premere 1 \nPer effettuare la sottrazzione premere 2 \nPer effettuare la moltiplicazione premere 3 \nPer effettuare la divisione premere 4 \nPer effettuare radice quadrata premere 5 ")
let operazione = prompt("Che operazione vuoi effettuare ?  ");
let sum= num1+ num2;
let diff= num1-num2;
let div=num1/num2;
let molt= num1*num2;
if(operazione==1){ console.log("La somma dei due numeri è: " + sum)};
if(operazione==2){console.log("La sottrazione dei due numeri è: "+ diff)};
if(operazione==3){console.log("La moltiplicazione dei due numeri è: "+ molt)};
if(operazione==4){console.log("La divisione dei due numeri è: "+div)};