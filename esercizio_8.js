const prompt = require('prompt-sync')();
let ins = prompt("Inserisci numero intero: ");
console.log("I numeri primi fino a "+ins+ " sono: ");
let arr =[ ];
let arrcamp=[];
for(i=1;i<=ins;i++){

    let count =0;

    for(k=1;k<=i;k++){

        if(i%k==0){

          count++;
          
        } 
    }

    if(count==2){
      console.log(i);
    
  }

}

let ins1=Number(prompt("Inserisci un numero: "));

let campione= ins1+10;

for(i=1;i<=ins1;i++){
  
  let count =0;

  for(k=1;k<=i;k++){

      if(i%k==0){

        count++;
        
      } 
  }

  if(count==2){
  
     arr.push(i);
     
}

}
console.log(arr);
//creo l'array campione
for(q=1;q<=campione;q++){ //while 
  
  let count1 =0;

  for(l=1;l<=q;l++){

      if(q%l==0){

        count1++;
        
      } 
  }

  if(count1==2){
  
    arrcamp.push(q);
   // console.log(arrcamp);
   //console.log("prima: "+prima+ "dopo: "+dopo );
}

}
console.log(arrcamp);
//let dimensione = arrcamp.length;
for(i=0;i<arrcamp.length;i++)
{
  vicino_prima= Math.abs(ins1- arrcamp[i]);
  let min=vicino_prima;
  console.log(vicino_prima);
  for(l=1;l<i;l++){
    let vicino =Math.abs(ins1- arrcamp[l]);
    if(vicino<min){
      min=vicino;
    }
    
  }

  console.log("minimo "+min);
  }
  


//trova il più vicino, come?
//vicino_prima= Math.abs(ins1- arrcamp[i]) mi ritorna tutti valori positivi
//vicino_dopo=Math
// devo prendere la differenza più piccola se la differenza
// è maggiore di zero altrimenti al contrario



