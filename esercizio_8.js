const prompt = require('prompt-sync')();
let ins = prompt("Inserisci numero intero: ");
console.log("I numeri primi fino a "+ins+ " sono: ");
let arr =[ ];
let compara = [ ];
for(i=1;i<=ins;i++){

    let count =0;

    for(k=1;k<=i;k++){

        if(i%k==0){

          count++;
          
        } 
    }

    if(count==2){//console.log(i);
    //inserisco i numeri trovati in un array
    arr.push(i)
    console.log(arr);
  }

}
let ins1=prompt("Inserisci un numero: ");

for(i=1;i<=ins;i++){

  let count =0;

  for(k=1;k<=i;k++){

      if(i%k==0){

        count++;
        
      } 
  }

  if(count==2){//console.log(i);
  //inserisco i numeri trovati in un array
  arr.push(i)
  console.log(arr);
}

}

//prendendo in input un altro numero scrivete la somma fino al numero piu' vicino
// devo fare la somma dei numeri primi fino al numero primo pù vicino a quello inserito, il numero più vicino può anche essere maggiore di quello inserito
