const prompt = require('prompt-sync')();
let ins = prompt("Inserisci numero intero: ");
console.log("I numeri primi fino a "+ins+ " sono: ");
for(i=1;i<=ins;i++){

    let count =0;

    for(k=1;k<=i;k++){

        if(i%k==0){

          count++;
          
        } 
    }

    if(count==2){console.log(i )}
}