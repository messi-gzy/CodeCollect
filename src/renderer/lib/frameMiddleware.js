/**
 * @name frameMiddleware
 * @author MateBook13
 * @description 中间件,构建与API的接口
 * @date 2022/11/3
 */
const express=require('express')
// websocket
const app_server=express()
app_server.use(express.json())

app_server.get("/",(req,res)=>{
    res.send('hello')
})

app_server.listen(8137,()=>{
    log.info("8137  Service-Api has been start");
})
