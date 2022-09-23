/* Scrivere un programma che:

    Trova il massimo, il minimo, di una lista di numeri

    calcolate la media dell'array
    indicate il numero piu' vicino alla media contenuto nell'array
    specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini

    Dato un numero n, calcola se quell'anno e' bisestile o meno (https://it.wikipedia.org/wiki/Anno_bisestile)

    fare in modo che la risposta non venga data immediatamente ma date all'utente la possibilita' di indovinare
    ritornate quanti mesi intercorrono tra oggi e l'anno inserito dall'utente (considerate primo ottobre)
    ritornate quante settimane passano tra la data indicata e oggi (cosiderate primo ottobre) */
    
    //far inserire da imput dei numeri dall'utente
const prompt = require('prompt-sync')();
let dimensione = Number(prompt("Quanti numeri vuoi inserire: "));
let arr=[ ];

console.log("Inserisci i numeri: ");
for(i=0;i<dimensione;i++){
    
    let ins =Number(prompt( ));
    arr.push(ins);
}
//console.log(arr);
//devo trovare  il massimo numero all'interno dell'array
let max = Math.max(...arr);
console.log("Il valore massimo inserito è: "+max);
//devo trovare il minimo dei valori inseriti 
let min = Math.min(...arr);
console.log("Il valore minimo inserito è: "+min);
// devo trovare la media sommo tutti gli elementi e divido per la dimensione
console.log("La media dell'array è: ");
let sum =0;
let media =0;

for(i=0;i<dimensione;i++)
{
    //faccio la sommatori dell'array
    sum= arr[i]+arr[i];
    media= sum/dimensione;
    
}
console.log(media);

//ordinare array
/*arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);*/
for(i=0;i<arr.length;i++)
{
  let vicino_prima= Math.abs(media- arr[i]);
  let min=vicino_prima;
  
  for(l=1;l<i;l++){
    let vicino =Math.abs(media- arr[l]);
    if(vicino<min){
      min=vicino;
      
    }
    console.log("Il valore più vicino alla media è: "+arr[l]);
    if(arr[l]==media){
        console.log("il numero "+arr[l]+" é presente nell'array ed è uguale alla media: "+media);
        }else{
           let distanza_prima= media-arr[l-1];
           let distanza_dopo=arr[l]-media;
           console.log("La media dista dal numero prima: "+distanza_prima);
           console.log("La media dista dal numero dopo: "+distanza_dopo);
           
        }
    // specificate se il numero della media e' presente nell'array,
    // oppure indicate quanto dista dai due numeri piu' vicini
    
  }
  //console.log("minimo "+min);
  }


