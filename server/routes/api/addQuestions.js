const express=require('express');
const router=express.Router();



const QuestionCollection =require('../../models/QuestionSchema');


router.post('/',[
    // check('Question','Question required')
    //  .not()
    //  .isEmpty(),
    // check('options','options required')
    //  .not()
    //  .isEmpty(),
    // check('correctOption','correctOption required')
    //  .not()
    //  .isEmpty(),
  
  ],
async(req,res)=> {

  //  const errors=validationResult(req);
  //  if(!errors.isEmpty()){
  //      return res.status(400).json({ errors:errors.array()})
  //  }

   const { Question, options, correctOption }=req.body;

   try{

   // updating existing question

  // let Question=await User.findOne({ Question });
   
  //  if(Question){
  //  return  res.status(400).json({errors:[{ msg:'Question already exists' }]});
  //  }

  
  QuestionCollectionObject=new QuestionCollection({
    Question, options, correctOption
   });
   

  

     await QuestionCollectionObject.save();
   

res.send('question saved');


   }
     catch(err){
       console.error(err.message);
       res.status(500).send('server error');
     }



});

module.exports=router;