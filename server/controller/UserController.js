const { check, validationResult } = require('express-validator');
const userModel = require('../model/LogIn');
exports.logIn = (req, res) => {

    let responseResult = {};
    check('email', 'Email Id Is not Valid').isEmail();
    check('password', 'Password is not Valid').isLength({ min: 8 });

    let errors = validationResult;

    let logInObj = {
        email: req.body.email,
        password: req.body.password
    }
    if (errors) {
        responseResult.success = false;
        responseResult.message = "Enter valid Email And Password";
        res.status(422).send(responseResult);
    }
    else {
        userModel.logIn(logInObj, (err, data) => {
            if (err) {
                res.status(400).send(responseResult);
            }
        })
    }
}
