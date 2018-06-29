'use strict';

const request = require('request');
const config = require('../../configuration/config');

const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;
const BASE_PATH = `http://localhost:${MOCK_SERVER_PORT}`+'/api/icporders/v1';

                        
module.exports.geticporder = function geticporder(callback) {
  request({
    url: BASE_PATH,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
module.exports.geticporderById = function geticporderById(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "GET",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
};
                  
                                  module.exports.puticporder = function puticporder(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
      
                            module.exports.posticporder = function posticporder(body, callback) {
  request({
    url: BASE_PATH,
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 

            
                module.exports.patchicporder = function patchicporder(uniqueParam, body, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(body)
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                        
          module.exports.deleteicporder = function deleteicporder(uniqueParam, callback) {
  request({
    url: BASE_PATH+'/'+uniqueParam,
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
  }, function(error, response, body) {
    callback(error,response);
  });
}; 
                              
      
  
