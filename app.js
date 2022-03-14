//const op=require('./operaciones');

//console.log(op.getNombre())

// const fs=require('fs');

// fs.writeFile('./nuevo.txt','Hola mundo',function(err){
//     if(err){
//         console.log('Ocurrio un error')
//     }else{
//         console.log('Archivo creado')
//     }
// });

// fs.readFile('./nuevo.txt',function(err, data){
//     if(err)
//         console.log('Ocurrio un error')
//     else{
//         console.log('Se abrio el archivo')
//         console.log(data.toString());
//     }
// })

// const http = require('http');

// const handleServer= function(req,res){
//     res.write('Serv NodeJS');
//     res.end();
// };

// const server = http.createServer(handleServer);
// server.listen(3000,function(){
//     console.log('server running');
// });

// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('miEvento', function(args){
//     console.log('Escuchando evento', args)
// })
// emitter.emit('miEvento', {
//     id: 1,
//     mensaje: 'Hola'
// })

// const express = require('express');
// const server = express();

// server.get('/',function(req,res){
//     res.send("Express y NodeJS");
//     res.end();
// })

// server.listen(3000, function(){
//     console.log('Server running Express y NodeJS');
// })

const express = require('express');
const server = express();

server.get('/',function(req,res){
    res.send("Express y NodeJS");
    res.end();
})

server.get('/usuarios',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([{nombre: 'Luis', edad: 20},
    {nombre: 'Lucia', edad: 21},
    {nombre: 'Agus', edad: 23}]));
})

server.listen(3000, function(){
    console.log('Server running Express y NodeJS');
})