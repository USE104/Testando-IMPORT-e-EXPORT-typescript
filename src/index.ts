/*import validator from 'validator'*/

/*
---- verificando e-mail
console.log(validator.isEmail('USE@gmail.com'))
*/    


/*
let nome: String = 'USE104'
let idade: number = 25

console.log("Meu nome é "+nome+" e eu tenho "+idade+" anos")

*/

/*
import matematica from './matematica'
import Matematica from './matematica'

var n1: number = 10
var n2: number = 20 

console.log("somar: "+Matematica.somar(n1,n2))

console.log("subtrair"+Matematica.subtrair(n1,n2))

console.log("multiplicar:"+Matematica.multiplicar(n1,n2))
*/

/*
import filmes from './filmes'

console.log(filmes)
*/


// importanto o express
import express from "express";
import { Server } from "http";

//usando express

var server = express()

// criando a porta de acesso

server.listen(3000)

// criando pagina web 
server.get('/',(req,res)=>{
    res.send("Hello wiston,cambio na escuta !")
})

//rota estatica

// criando  a página de login
server.get('/login',(req,res)=>{
    res.send("Página de Login")
})

// rota dinamica
server.get('/noticia/:politica',(req,res)=>{
    let politica: string = req.params.politica
    res.send("Noticiais: "+politica)
})

server.get('/noticia/:novidades',(req,res)=>{
    let novidades: string = req.params.novidades
    res.send("noticia: "+novidades)
})


server.get('/viagens/:origem-:destino',(req,res)=>{
    var origem:string = req.params.origem
    var destino: string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)

    

})
