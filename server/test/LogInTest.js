
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

describe('Given non Authenticated user EmailId "abc@gmail.com" and password "123456789" When Pass To LogIn API', () => {
    it('It will return Status Code 400', (done) => {
        let userData = {
            email: "abc@gmail.com",
            password: "12345678910"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((res) => {
                assert.equal(400, res.status);
                done();
            })
    })

    it('It will return success false', (done) => {
        let userData = {
            email: "abc@gmail.com",
            password: "12345678910"
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

describe('Given non Authenticated user EmailId "patil.dipak@gmail.com" and password "12345678" When Pass To LogIn API', () => {
    it('It will return Status Code 400', (done) => {
        let userData = {
            email: "abc@gmail.com",
            password: "12345678910"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((res) => {
                assert.equal(400, res.status);
                done();
            })
    })
})
