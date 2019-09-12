var mongoose = require('mongoose');
var user=require('./LogIn')
var seatSchema = new mongoose.Schema({

    number:[ {
        type: Number,
        required: true
    }],

    userid: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:user
        }
    ]
});

var seat = mongoose.model('seat', seatSchema);


class Seat {
    async assignSeat(seatObj, callback) {
        try{
            let newSeat=new seat({
               number: seatObj.number,
               userid: seatObj.userid 
            })
            var seat=await newSeat.save();
            return callback(null,seat);
        } catch(err) {
            console.log("Error in seat model",err);
            return callback(err);
        }
    }
}
module.exports=new Seat();
