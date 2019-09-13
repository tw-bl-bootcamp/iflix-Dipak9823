var mongoose = require('mongoose');
var theater=require('./TheaterModel');
var theaterSchema=theater.theaterModel;
var seatSchema = new mongoose.Schema({

    number:[ {
        type: Number,
        required: true
    }],

    theaterId: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: theaterSchema
        }
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
