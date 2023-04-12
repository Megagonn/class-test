const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

// const URI = process.env.URI;
const port = process.env.port || 5230;

// const port = 5200;
const ejs = require("ejs");
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

const userRouter = require('./routes/user.route');
app.use('/users', userRouter);

//cors middleware




const mongoose = require('mongoose');
const URI = "mongodb+srv://mega:7c9xp4wSzfhMsZhW@cluster0.zn79n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// mongoose.connect(URI, 
//     (err)=>{
//     if (err) {
//         console.log(err);
//         console.log("mongoose not connected"); 
//     } else {
//         console.log("mongoose connected");
//     }
// }
// )


// app.get('/getdetails', (req,res)=>{
//     userModel.find((err, result)=>{
//         if(err){
//             console.log(err);
//         } else{
//             if (result.length>0) {
//                 console.log(result)
//                 res.render('alluser.ejs',{result})
//             }
//         }
//      })
//     res.send('hello wolrd');
// })
app.use(express.static(`${__dirname}/public`));
app.set('veiw engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let allStudents = [];
app.get('/',(req, res)=>{
    res.render('index.ejs', {message: 'ade'})
})

// app.get('/signup', (req, res)=>{
//     res.render('form.ejs', {status:"empty", message:'' });
// })


app.listen(port, ()=>{
    console.log(`i am listening at port ${port}`);
})