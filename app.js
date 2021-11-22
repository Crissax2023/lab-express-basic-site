const express = require('express')

const app = express();

app.use(express.static('public'))
app.get('/',(req,res,next)=>{
    console.log('req',req)
    res.sendFile(__dirname + '/views/index.html')

})

app.get('/about',(req,res,next)=>{
    console.log('req',req)
    res.sendFile(__dirname + '/views/about.html')

})

app.get('/Works',(req,res,next)=>{
    console.log('req',req)
    res.sendFile(__dirname + '/views/works.html')

})

app.listen(3000,()=>{console.log('corriendo en el puerto 3000')})
