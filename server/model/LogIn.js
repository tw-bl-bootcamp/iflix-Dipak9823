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

var user = mongoose.model('myusers', userSchema);

class UserModel {
    logIn(loginObj, callback) {
        user.find({ "email": loginObj.email }, (err, data) => {
            if (err) {
                return callback(err);
            }

            else if (loginObj.password == data.password) {
                return callback(null, result);
            }
            else {
                return callback("Invalid User")
            }
        })
    }
}
module.exports = new UserModel();
