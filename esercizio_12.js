/*
Dato un numero n, calcola se quell'anno e' bisestile o meno (https://it.wikipedia.org/wiki/Anno_bisestile)
 Nel calendario gregoriano, quindi, sono bisestili:

    gli anni non secolari il cui numero è divisibile per 4;
    gli anni secolari (1700, 1800 ecc..) il cui numero è divisibile per 400.
    

fare in modo che la risposta non venga data immediatamente ma date all'utente la possibilita' di indovinare
    ritornate quanti mesi intercorrono tra oggi e l'anno inserito dall'utente (considerate primo ottobre)
    ritornate quante settimane passano tra la data indicata e oggi (cosiderate primo ottobre) */

const prompt=require('prompt-sync')();
// faccio inserire anno da utente
let anno=Number(prompt("Inserisci anno: "));
//devo controllare se l'anno inserito è bisestile
function bisestile(x){
    
    let z =0;
    if(x%4==0 && x%400==0){
        let z=x;
        
        console.log("L'anno "+z+" é bisestile");
        
    }else{

        console.log("L'anno "+x+" non è bisestile. ")
        
    }
return z;
}
bisestile(anno);
//console.log("L' anno "+anno+" è bisestile");
   