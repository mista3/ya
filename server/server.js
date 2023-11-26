const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

const wait = async (ms) => {
  await new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

app.get('/earthquakes', async (req, res) => {
  await wait(3000)
  const earthquakes = JSON.parse(fs.readFileSync('./server/earthquakes.json', 'utf-8'))
  res.send(earthquakes)
})

app.get('/donut', async (req, res) => {
  await wait(500)
  const donut = JSON.parse(fs.readFileSync('./server/donut.json', 'utf-8'))
  res.send(donut)
})

app.listen(3001)