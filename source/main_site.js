const path= require('path')
const express=require('express')

const app=express()
const port=process.env.PORT || 3000

const publicDirectorypath=(path.join(__dirname,'../resume'))
console.log(publicDirectorypath)

app.use(express.static(publicDirectorypath))


app.get('',(req,res)=>{
    res.send('<h1></h1>')
})

app.get('/harshsodha90@gmail.com',(req,res)=>{
    res.send('')
})

app.listen(port,()=>{
    console.log("server is up on port" + port)
})