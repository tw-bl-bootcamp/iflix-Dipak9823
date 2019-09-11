const {check,validationResult}=require('express-validator');

exports.logIn=(req,res)=> {
    
    check('email','Email Id Is not Valid').isEmail();
    check('password','Password is not Valid').isLength({min:8});

    let errors=validationResult;

    if(errors) {
        res.status(422);
    }
}
