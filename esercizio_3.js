const prompt = require('prompt-sync')();
let us = "Leonardo";
let pw = "ciao";
let name = prompt("Inserire username: ");
if (us!==name ) { console.log("username errato")}
    
    else {let psw = prompt("inserire password: ");
        
        if (pw!==psw ) { console.log("password errata")};
}