const {check,validationResult}=require('express-validator');

exports.logIn=(req,res)=> {
    
    let responseResult={};
    check('email','Email Id Is not Valid').isEmail();
    check('password','Password is not Valid').isLength({min:8});

    let errors=validationResult;

    if(errors) {
        responseResult.success=false;
        responseResult.message="Invalid Email Password";
        res.status(422).send(responseResult);
    }
}
