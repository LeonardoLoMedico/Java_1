const prompt = require('prompt-sync')();
console.log("Per effettuare la somma premere + \nPer effettuare la sottrazzione premere - \nPer effettuare la moltiplicazione premere * \nPer effettuare la divisione premere / ");
console.log("Per effettuare radice quadrata premere ^ \nPer effettuare la radice quadrata premere sqrt ");
let operazione = prompt("Che operazione vuoi effettuare ?  ");
if(operazione=="^"||operazione=="sqrt"){
    if(operazione=="^"){
    let base=prompt("Inserire la base della potenza: ");
    let esp=prompt("Inserire l'esponente della potenza: ");
    let pot=Math.pow(base, esp);
    console.log("La potenza di "+base+"^"+esp+" è: "+pot);
    }
    if(operazione=="sqrt"){
    let sqrt=prompt("Inserire il numere di cui si vule la radice quadrata: ");
    let rad=Math.sqrt(sqrt);
    console.log("La radice quadrata è: "+rad);
    }


}else{
let num1= prompt("Inserisci un numero: ");
let num2= prompt("Inserire secondo numero: ");
num1=Number(num1);
num2=Number(num2);
let sum= num1+ num2;
let diff= num1-num2;
let div=num1/num2;
let molt= num1*num2;
if(operazione=="+"){ console.log("La somma dei due numeri è: " + sum)};
if(operazione=="-"){console.log("La sottrazione dei due numeri è: "+ diff)};
if(operazione=="*"){console.log("La moltiplicazione dei due numeri è: "+ molt)};
if(operazione=="/"){console.log("La divisione dei due numeri è: "+div)};
}