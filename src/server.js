const express = require('express')
const app = express()
const cors = require('cors')


const PORT = process.env.PORT || 3001

app.use(express.static('public')); //'public' folder contains js, css, images

app.use(cors());
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`Request!!`)
    console.log(req.originalUrl)
    console.log(req.path)
    
    //res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})

app.get('/testing', (req,res,next)=>{
    console.log('TEST REQUEST')
    res.send({test: "Data blah blah"})
})




app.listen(PORT, ()=>{
    console.log(`Listening on Port ${PORT}`)
})

//Used for Testing Server
module.exports = app;
