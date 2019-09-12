const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('This will return All Theaters name and address', () => {

    it('It will return Status Code 200', (done) => {
        
        chai.request(server)
            .post('/theater')
            .send()
            .end((err, res) => {
                assert.equal(200, res.status);
                done();
            })
    })
});
