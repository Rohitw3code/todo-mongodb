const express = require("express")
const colors = require("colors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require('./config/db')

const app =  express()

app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
  extended: true
}))

dotenv.config({
    path: './config/config.env'
});

connectDB()
app.use('/api/todo/auth',require('./routes/user'))
const PORT = process.env.PORT || 3000


app.listen(PORT,console.log(`Sever is runing on port : ${PORT}`.red.underline.bold))


// app.get('/todo',(req,res)=>{
//     res.status(200).json({
//         'name':req.title
//     });
// });


// app.use((req,res,next)=>{
//     console.log("middle ware run");
//     req.title = "problem"
//     next();
// });

// var http = require("http")

// http.createServer(function(request,response){
//     response.writeHead(200,{
//         'Content-Type' : 'text/plan'
//     });
    
//     response.end('Hello Node sdgs 5512dffd')

// }).listen(3000,console.log("server is running on port 3000"));