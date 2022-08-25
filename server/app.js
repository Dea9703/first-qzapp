'use strict'

const app = require('express')()
const bodyParser = require('body-parser')

const router = require('./router')

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

const port = 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/user', router)

app.listen(port, () => {
  console.log(`Server Listening on port:${port}`)
})
