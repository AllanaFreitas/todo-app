const express = require("express")
const exphbs = requirw("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.enine())
app.set('view enine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
}) 

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})