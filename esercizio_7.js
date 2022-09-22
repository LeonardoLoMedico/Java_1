const prompt = require('prompt-sync')();
let ins = prompt("Inserire un numero : ");
// erore se numero è = 0 or 2
if(ins<2){
    console.log("Inserire un numero intero maggiore di 1!");
  
}else{

// voglio permettere all'utente di scegliere quale tabellina non visualizzare
let ins_1 = prompt("Inserire la tabellina che non vuoi visualizzare : ");
let molt = 0;
while(ins!=1){
    console.log("La tabellina di "+ ins+ ":");
for (i=0; i<=10; i++){
    
    molt = i*ins;

    console.log(ins+" * "+i+" = " +molt);
   }
  
   ins--;
   if(ins_1==ins){
    ins--;
   }
}
}