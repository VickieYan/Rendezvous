# Rendezvous
## Build Setup
```
# install dependencies
npm install
```
# mongodb
## mongodb使用步骤
安装mongodb
```
brew install mongodb
```
启动mongodb
```
mongod --config /usr/local/etc/mongod.conf
````
安装mongoose
```
npm install mongoose --save
```
链接mongodb
```javascript
const mongoose = require('mongoose')
//在控制台输入mongo可查看url
const DB_URL = 'mongodb://127.0.0.1:27017' 
mongoose.connect(DB_URL)
```
检测是否🔗成功
```javascript
mongoose.connection.on('connect', function() {
    console.log('mongo connect success')
})
```
定义文档模型
```javascript
const User = mongoose.model('user', new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true}
}))
```
## mongodb语法
```javascript
//增
User.create({
    name:'Vickie',
    age:21
},function(err,doc){
    if(!err) {
        console.log(doc)
    }else {
        console.log(err)
    }
})
//删
User.remove({age:18},function(err, doc) {
    console.log(doc)
})
//改
User.update({name:'Vickie'},{$set:{age:18}},function(err, doc) {
    console.log(doc)
})
//查
User.find({},function(err, doc) {
    console.log(doc)
})
```
# antd-mobile
安装
```
npm install antd-mobile@next --save
```
# react-redux
用装饰器书写connect
```
npm run reject //弹出所有配置项
npm install babel-plugin-transform-decorators-legacy
```
```json
"babel": {
    "presets": [
      "react-app"
    ],
    "plugin": ["transform-decorators-legacy"]
  }
```
Redux DevTools

* 新建store的时候判断window.devToolsExtension
* 使用compose结合thunk和window.devToolsExtension
```javascript
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))
```
# react-router
安装
```
npm install react-router-dom --save
```
* BrowserRouter, 包裹整个应用
* Router 路由对应渲染的组建，可嵌套
* Link 跳转专用
* Redirect 可以设置进去时候的默认路由
* Switch 只显示匹配到的第一个路由
```html
<!--如果存在包含关系 exact完全匹配-->
<BrowserRouter>
    <div>
        <ul>
            <li><Link to='/'>一</Link></li>
            <li><Link to='/two'>二</Link></li>
            <li><Link to='/three'>三</Link></li>
        </ul>
        <Route path='/' exact component={App}></Route>
        <Route path='/two' component={Hello}></Route>
        <Route path='/three' component={World}></Route>
    </div>
</BrowserRouter>

```
# axios
* 简洁好用的发送请求库
```
npm install axios --save
```
* 在package.json中配置”proxy“实现跨域
```json
"proxy": "http://localhost:9093"
```

axios拦截器，统一loading处理

 用post方法时需要引入一个插件
 ```
npm install body-parser --sava
 ```
 # MD5加密
 安装
 ```
 npm install utility
 ```
 使用方法
 ```javascript
const utils = require('utility')
User.create({user, type, pwd:utils.md5(pwd)}, function(err, doc) {
        if(err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        return res.json({code: 0})
    })
 ```
