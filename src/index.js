const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
let tasks = []

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(3000, () => console.log('Started successfully, open localhost:3000.'))

app.delete('/tasks/:task', (req, res) => {
  const taskText = decodeURIComponent(req.params.task)
  const taskIndex = tasks.indexOf(taskText)
  tasks.splice(taskIndex, 1)
  res.send('')
})

app.get('/tasks', (req, res) => {
  res.send(JSON.stringify(tasks))
})

app.post('/tasks', (req, res) => {
  const taskText = req.body.task
  tasks.push(taskText)
  res.send('')
})

app.get('/', (req, res) => {
  let contents = fs.readFileSync('content/index.html', 'utf8')
  res.send(contents)
})