const userModel = require('../model/LogIn');
exports.logIn = (req, res) => {

    var responseResult = {};
    req.checkBody('email', 'Email Id Is not Valid').isEmail();
    req.checkBody('password', 'Password is not Valid').isLength({ min: 8 });

    var errors = req.validationErrors();

    var logInObj = {
        email: req.body.email,
        password: req.body.password
    }
    if (errors) {
        responseResult.success = false;
        responseResult.message = "Enter valid Email And Password";
        res.status(500).send(responseResult);
    }
    else {
        userModel.logIn(logInObj, (err, data) => {
            if (err) {
                responseResult.success = false;
                responseResult.message = "Unauthorized User";
                res.status(400).send(responseResult);
            }
            else {

                res.status(200).send({
                    message: 'token generated',
                    name: data.firstName
                });
            }
        })
    }
}
