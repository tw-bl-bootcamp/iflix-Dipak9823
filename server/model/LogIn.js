var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

var user = mongoose.model('myuser', userSchema);

class UserModel {
    logIn(loginObj, callback) {
        console.log("User model 1",loginObj);
        user.find({ "email": loginObj.email,"password":loginObj.password }, (err, data) => {
            console.log("Data of user is",data);
            if (err) {
                console.log("Error is",err);
                return callback(err);
            }
            else {
                return callback(null,data);
            }
        })
    }
}
module.exports = new UserModel();
