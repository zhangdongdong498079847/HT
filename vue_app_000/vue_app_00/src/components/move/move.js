//app.js 服务器端项目
//1:下载第三方模块 
//express/express-session/cors/mysql
//2:将第三方模块引入到当前程序中
const express= require("express");
const session = require("express-session");
const cors = require("cors");
const mysql = require("mysql");
//3:创建数据库连接池
var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   connectionLimit:20,
   database:"xz"
})

//4:创建web服务器监听 8080 端口
var server = express();
server.listen(8080);
//5:处理跨域 cors 
//5.1：配置允许访问程序地址(脚手架)
//     http://127.0.0.1:5050  (ok)
//     http://localhost:5050
//5.2:每请求是否验证true
server.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],
  credentials:true
}))
//6:配置session
//#session配置一定要在所有请求之前
server.use(session({
   secret:"128位字符串",    //#安全字符串
   resave:true,            //#每次请求保存数据 
   saveUninitialized:true  //#保存初始化数据
}));
//7:配置静态目录
//http://127.0.0.1:8080/01.jpg
server.use(express.static("public"));

//功能一:完成用户登录
server.use("/move",(req,res)=>{
    //接收网页传来的用户密码数据
var u=req.query.uname;
var p=req.query.upwd;
 //创建sql
 var sql="SELECT id FROM xz_login";
 sql+="WHERE uname=> AND upwd=md5(?)";
 //执行sql语句并返回结果
 pool.query(sql,[u,p],(err,result)=>{
   if(err)throw err;
   if(result.length==0){
        res.send({code:-1,msg:"用户名或密码错误"});
   }else{
        //获取当前登录的id
        var id=result[0].id;
        //当前登录凭证uid
        req.session.uid=id;
       res.send({code:1,msg:"登录成功"});
   }
 });

})












