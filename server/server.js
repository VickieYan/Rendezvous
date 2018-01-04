const express = require('express')
const mongoose = require('mongoose')
//链接mongo
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connect', function() {
    console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true}
}))

User.create({
    name:'Vickie',
    age:10
})

//新建app
const app = express()

app.get('/', function(req,res) {
    res.send('hello world')
})

app.get('/data', function(req,res) {
    User.find({},function(err,doc) {
        res.json(doc)
    })
})

//在9093端口监听服务器
app.listen(9093,function(){
    console.log('Node app start at port 9093')
})