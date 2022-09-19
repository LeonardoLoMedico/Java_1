const prompt = require('prompt-sync')();
let name = prompt("Inserire username: ");
let psw = prompt("inserire password: ");
let us = "Leonardo";
let pw = "ciao";

if (us!==name && pw!==psw ) { console.log("username e password errati")};
