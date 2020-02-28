const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

//app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())
app.use(routes)


console.log('qrc_backend Ouvindo na porta 3333')
app.listen(3333)
//para rodar o dev e o front juntos (3333 e 3000)
//yarn add cors
//fazer o que é feito aqui com o cors)