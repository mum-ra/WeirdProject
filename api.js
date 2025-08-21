import express from 'express'

const app = express()

let transacionData = {
    amount: 0,
    description: "debit",
}

app.get(('/'), (req, res) => {
    res.send(transacionData) 
})

app.post(('/'), (req, res) => {
    transacionData = req.data;
})

app.listen(3001, () => {
    console.log('Started at 3001.')
})