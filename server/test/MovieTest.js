const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('After Log In In a Dashboard It will give all Movies ', () => {

    it('It will return Status Code 200', (done) => {
        
        chai.request(server)
            .post('/movies')
            .send()
            .end((err, res) => {
                assert.equal(200, res.status);
                done();
            })
    })
});
