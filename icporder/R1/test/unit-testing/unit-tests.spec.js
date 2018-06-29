'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/icporders/v1';
const samplePath = '/../../sampleData/v1/icporder.json';
var icporderData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var icporderFD = fs.readFileSync(__dirname + samplePath);
    icporderData = [];
    if(icporderFD) {
      icporderData = JSON.parse(icporderFD);
    }
  });


                        
  // GET - List all records
  it('GET List of icporders', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(icporderData.length);
      });
  });
    // GET - List existing record by orderId
  it('GET Existing icporder by orderId', function () {
    var myRecord = icporderData[0];
    var uniqueParam = myRecord['orderId'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(icporderData[0]);
      });
  });

  // GET - List non-existing record by orderId
  it('GET Non-Existing icporder by orderId', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing icporder', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+icporderData[0]['orderId'])
      .send(icporderData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icporderData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing icporder', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(icporderData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New icporder', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(icporderData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icporderData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing icporder', function () {
    var updatedSting = JSON.stringify(icporderData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['orderId'];
    delete updatedRecord['orderId'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(icporderData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing icporder', function () {
    var recordToDelete = icporderData[0];
    var uniqueParam = recordToDelete['orderId'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing icporder', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});