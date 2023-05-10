const express=require('express');
const router=express.Router();



const Test =require('../../models/Test');


router.post('/',[
    // check('testDuration','testDuration required')
    //  .not()
    //  .isEmpty(),
    // check('numQuestions','numQuestions required')
    //  .not()
    //  .isEmpty(),
    // check('expiryTime','expiryTime required')
    //  .not()
    //  .isEmpty(),
  
  ],
async(req,res)=> {

  //  const errors=validationResult(req);
  //  if(!errors.isEmpty()){
  //      return res.status(400).json({ errors:errors.array()})
  //  }

   const { testDuration, numQuestions, expiryTime }=req.body;

   try{


  
 testObject=new Test({
    testDuration, numQuestions, expiryTime
   });
   

  

     await testObject.save();
   

res.send('test created');


   }
     catch(err){
       console.error(err.message);
       res.status(500).send('server error');
     }

    

});

module.exports=router;