const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  res.send('Hello World! strey pereira ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})