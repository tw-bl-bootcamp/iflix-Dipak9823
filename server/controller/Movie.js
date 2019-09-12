let movieModel = require('../model/Movie')

exports.movie = (req, res) => {

    var responseResult = {};

    movieModel.movie(req, (err, data) => {
        if(err) {
            responseResult.success = false;
            responseResult.message = "No movie Available";
            res.status(400).send(responseResult);
        }  
    
    })
}
