var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Hello World Tests', function() {
  it('should return hello world when GET called', function(done){
    chai.request(server)
    .get('/')
    .end(function(err, res, body){
     res.should.have.status(200);
     body.should.include('Hello World');
     done();
   });
  });
});
