const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{

  useNewUrlParser:true, useUnifiedTopology:true


}).then(()=> console.log('Connected'))  
    .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('안녕하세요 저는 김하연입니다.ㅋㅋ')
})


app.post('/register', (req, res)=>{


// 회원가입 할 때 필요한 정보들을 client에서 가져오면 
// 그것들을 데이터 베이스에 넣어준다. 



  const user = new User(req.body)

  user.save((err, userInfo)=>{
    if (err) return res.json({ success: false,err})
    return res.status(200).json({
      success:true
    })
  })

})


app.post('/login', (req,res)=>{

  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne
  //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.

  //비밀번호까지 맞다면 토큰을 생성하기.
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})