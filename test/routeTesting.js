'use strict'
var chai = require('chai'); 
var chaiHttp = require('chai-http');
var should = chai.should(); 
var request = require('supertest'); 

chai.use(chaiHttp); 

describe('ROUTE TESTING', function() {
    var url = 'localhost:4000';

    describe('Welcome Page', function(){
        it('should return 200 status on request to welcome page', function(done){
            chai.request(url)
            .get('/')
            .end(function(err,res){
                if (err) throw err; 
                res.should.have.status(200); 
                done();
                }); 
            });
        it('should return 400 status on request to non-existant page', function(done){
            chai.request(url)
            .get('/notThere')
            .end(function(err,res){
                err.should.exist; 
                done();
                }); 
            });      
    });
});  