const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => res.send('Hello world!'))
app.listen(port,() => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://dongyoung:Dlehddud23%21%40@dongyoung.iewmq.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('mongoose connected'))