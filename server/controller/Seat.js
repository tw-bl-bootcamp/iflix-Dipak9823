
exports.seat = (req, res) => {

    var responseResult = {};

    req.checkBody('seatno', 'Seat should not be Empty').not().isEmpty();
    req.checkBody('userid', 'user id should not be empty ').not().isEmpty();

    var errors = req.validationErrors();

    if (errors) {
        responseResult.success = false;
        responseResult.message = "Fields are Empty";
        res.status(500).send(responseResult);
    }
}
