const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('<h1>Hello World<h1/><br><h2>by: Kero</h2>')
  })
