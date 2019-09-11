var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    }
});

var user = mongoose.model('myuser', userSchema);

class UserModel {
    login(loginObj, callback) {
        user.findOne({ "email": loginObj.email }, (err, data) => {
            if (err) {
                console.log("Error login");
                return callback(err);
            }

            else if (data != null) {
                user.compare(loginObj.password, data.password).then(function (err, result) {

                    if (err) {
                        return callback(err);
                    }
                    else {
                        return callback(null, result);
                    }
                });
            }
            else {
                return callback("Invalid User")
            }
        })
    }
}
module.exports=new UserModel();
