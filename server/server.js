const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

//新建app
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)

//在端口监听服务器
app.listen(8888,function(){
    console.log('Node app start at port 8888')
})