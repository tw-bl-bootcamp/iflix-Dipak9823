let theaterModel=require('../model/TheaterModel');

exports.theater = (req, res) => {

    var responseResult = {};

    theaterModel.theaterInfo(req, (err, data) => {
        if(err) {
            responseResult.success = false;
            responseResult.message = "No movie Available";
            res.status(400).send(responseResult);
        }  
        else {
            responseResult.success = true;
            responseResult.message = data;
            res.status(200).send(responseResult);
        }
    })
}
