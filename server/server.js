const express=require("express");
const connectDB=require('./config/db');

const cors = require('cors');

const app=express();

app.use(cors());
//connect database
connectDB();

// init middleware
app.use(express.json({extended:false}));

app.get('/',(req,res)=>{
 res.send('API RUNNING');
})

 
app.use('/api/addQuestions',require('./routes/api/addQuestions'));
app.use('/api/createTest',require('./routes/api/createTest'));


const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
}); 