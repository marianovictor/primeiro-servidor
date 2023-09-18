const express = require("express");

const app = express();
const arrayUsuarios = require("./exAula")

app.get('/', (requisicao, resposta)=>{
    resposta.send("Ola, esse eh meu primeiro servidor com express");//mandando uma resposta para o servidor com o metodo send


}); //criando uma rota

app.get('/array', (requisicao, resposta)=>{
    const array = [1, 2, 3, 4, 5]
    resposta.send(array);//quando a rota '/array' for acessada, o servidor deve mostrar como resposta esse array 


}); //criando outra rota

app.get('/usuarios', (req, res)=>{
    res.send(arrayUsuarios);
})

app.listen(3000, ()=>{
    console.log("Servidor inicializado na porta 3000");
}); //'reserva' uma porta para que o servidor rode