
const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given EmailId "patildipak@gmailcom" and password "123" When Pass To LogIn API', () => {

    it('It will return Status Code 422', (done) => {
        let userData = {
            email: "patildipak@gmailcom",
            password: "123"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((err, res) => {
                assert.equal(422, res.status);
                done();
            })
    })

    it('It will return success false', (done) => {
        //this.timeout=10000;
        let userData = {
            email: "patildipakgmailcom",
            password: "123"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((res) => {
                assert.equal(false, res.responseResult.success);
                done();
            })
    })
})
