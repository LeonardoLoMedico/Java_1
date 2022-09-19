const prompt = require('prompt-sync')();
let ins = prompt("Inserisci numero intero: ");
while(ins!=1)
{
    console.log("I numeri primi fino a " + ins);
      for (i=0; i<=ins; i++){
    
        molt = i*ins;

        console.log(molt);
      }
  
   ins--;
}
