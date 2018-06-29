'use strict';
  var IcporderFD = require('../../sampleData/v1/Icporder.json');
  var IcporderData = IcporderFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getIcporder = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(IcporderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, IcporderData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putIcporder = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcporderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcporderData[Object.keys(IcporderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postIcporder = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcporderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcporderData[Object.keys(IcporderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchIcporder = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(IcporderData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(IcporderData[Object.keys(IcporderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteIcporder = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(IcporderData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(IcporderData[Object.keys(IcporderData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


