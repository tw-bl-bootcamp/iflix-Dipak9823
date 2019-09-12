const userModel = require('../model/LogIn');
exports.logIn = (req, res) => {

    var responseResult = {};
    console.log("Login Body", req.body);
    req.checkBody('email', 'Email Id Is not Valid').isEmail();
    req.checkBody('password', 'Password is not Valid').isLength({ min: 8 });

    var errors = req.validationErrors();

    var logInObj = {
        email: req.body.email,
        password: req.body.password
    }
    if (errors) {
        console.log("Error in Validation",errors);
        responseResult.success = false;
        responseResult.message = "Enter valid Email And Password";
        res.status(500).send(responseResult);
    }
    else {
        console.log("Controller 1");
        userModel.logIn(logInObj, (err, data) => {
            console.log("Controller 2");
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
