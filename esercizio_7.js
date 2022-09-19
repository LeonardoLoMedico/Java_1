const prompt = require('prompt-sync')();
let ins = prompt("inserire un numero intero maggiore di 1 : ");
let molt = 0;
while(ins!=1){
    console.log("La tabellina di: "+ ins);
for (i=0; i<=10; i++){
    
    molt = i*ins;

    console.log(molt);
   }
  
   ins--;
}
