const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given Empty seat number and userid when pass to the Seat Controller', () => {

    it('It will return Status Code 500', (done) => {
        let seatData = {
            seat: " ",
            userid: " "
        }
        chai.request(server)
            .post('/login')
            .send(seatData)
            .end((err, res) => {
                assert.equal(500, res.status);
                done();
            })
    })
});

describe('Given non Authenticated user EmailId "abc@gmail.com" and password "123456789" When Pass To LogIn API', () => {
    it('It will return Status Code 200', (done) => {
        let seatData = {
            seat: "3",
            userid: "5d7a2f4110bca141b034935b"
        }
        chai.request(server)
            .post('/login')
            .send(seatData)
            .end((err,res) => {
                console.log("Status is:-",res.responseResult.success);
                assert.equal(400, res.status);
                done();
            })
    })
})
