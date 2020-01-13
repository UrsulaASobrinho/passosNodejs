'use strict'
//importando o pacote para dentro do projeto
const express = require('express')
const bodyParser = require('body-parser')



//instartando o express
const app = express()
// host pode configurar independentemente a porta
const port = process.env.port || 3001

// CONFIGURANDO O SERVIÇO ---------------------
// usando o parser para pegar as informaçoes
//extended: true  o req.body objeto conterá valores de qualquer tipo
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/ola/:nome', (req, res) =>{

    res.send({ message: `Ola ${req.params.nome}` })
  
})




//Configurando o servidor 
app.listen( port, () => {
    console.log(`APP sendo executado em http://localhos:${port}`)
})
