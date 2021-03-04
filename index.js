const os = require('os');
const fs = require('fs');
//const server = ('server');

console.log(os.platform());
console.log(os.release());
console.log('free memory: ', os.freemem(), 'bytes');
console.log('total memory: ', os.totalmem(), 'bytes');
console.log('-------------------------------');

//asynchronous code
fs.writeFile('./text.txt', 'first line', function(err){
    if(err){
        console.log(err);
    }
    console.log('File created');
})

//blocking code
//const result = fs.writeFile('', '');

/*
NodeJS delega funciones, no espera a resolver primero la línea 19,
sino que sigue ejecutando y pasa a la línea 23, forma asincónica,
Primero crea el archivo, despues imprime "last line code"
y por ùltimo 'File created'*/

console.log('last line code')
console.log('-------------------------------');

fs.readFile('./text.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data);
    console.log(data.toString());
})