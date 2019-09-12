var mongoose = require('mongoose');

var theaterSchema = new mongoose.Schema({

    theaterName: {
        type: String,
        required: true
    },
    
    address: {
        type: String,
        required: true
    }
});
var theater = mongoose.model('theaters', theaterSchema);


class TheaterModel {
    async theaterInfo(req, callback) {
        try{
            var result=await theater.find({});
            return callback(null,result);
        } catch {
            return callback(err);
        }
    }
}
module.exports=new TheaterModel();
