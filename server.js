const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const wait = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

app.get('/heavy', async (req, res) => {
  await wait(3000)
  res.send('heavy')
})

app.get('/light', async (req, res) => {
  await wait(500)
  res.send('light')
})

app.listen(3001)