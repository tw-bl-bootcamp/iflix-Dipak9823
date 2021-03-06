
const server = require('../Server');
const chai = require('chai');
const assert = require('assert');
const chaihttp = require('chai-http');

chai.use(chaihttp);

describe('Given EmailId "patildipak@gmailcom" and password "123" When Pass To LogIn API', () => {

    it('It will return Status Code 500', (done) => {
        let userData = {
            email: "patildipak@gmailcom",
            password: "123"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((err, res) => {
                assert.equal(500, res.status);
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
            .end((err,res) => {
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
            .end((err,res) => {
                console.log("Status is:-",res.responseResult.success);
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
            .end((err,responseResult) => {
                console.log("Status is:-",responseResult.success);
                assert.equal(false, responseResult.success);
                done();
            })
    })
})

describe('Given non Authenticated user EmailId "patil.dipak@gmail.com" and password "12345678" When Pass To LogIn API', () => {
    it('It will return Status Code 200', (done) => {
        let userData = {
            email: "patil.dipak@gmail.com",
            password: "12345678"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((err,res) => {
                assert.equal(400, res.status);
                done();
            })
    })

    it('It will return success true', (done) => {
        let userData = {
            email: "patil.dipak@gmail.com",
            password: "12345678"
        }
        chai.request(server)
            .post('/login')
            .send(userData)
            .end((err,responseResult) => {
                assert.equal(true, responseResult.success);
                done();
            })
    })
})
