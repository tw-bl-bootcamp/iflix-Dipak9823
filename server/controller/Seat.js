const seatModel = require('../model/SeatModel');

exports.seat = (req, res) => {

    var responseResult = {};

    req.checkBody('seatno', 'Seat should not be Empty').not().isEmpty();
    req.checkBody('userid', 'user id should not be empty ').not().isEmpty();

    var errors = req.validationErrors();

    var seatObj = {
        setno: req.body.seatno,
        userid: req.body.userid
    }
    if (errors) {
        console.log("Error in Express validator",errors);
        responseResult.success = false;
        responseResult.message = "Seat no and userid are Empty";
        res.status(500).send(responseResult);
    }
    else {
        console.log("Controller 1",seatObj);
        seatModel.assignSeat(seatObj, (err, data) => {
            console.log("Controller 2",data);
            if (err) {
                responseResult.success = false;
                responseResult.message = "Error in saving seats";
                res.status(400).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.message = "Seat book Successfully";
                res.status(200).send(responseResult);
            }
        })
    }
}
