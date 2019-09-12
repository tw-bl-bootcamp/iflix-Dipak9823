const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given Empty seat number and userid when pass to the Seat Controller', () => {

    it('It will return Status Code 500', (done) => {
        let userData = {
            seat: " ",
            userid: " "
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((err, res) => {
                assert.equal(500, res.status);
                done();
            })
    })
});
