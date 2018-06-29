'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var IcporderImplementation = require('../../../implementation/IcporderService.js');
    
var IcporderData;

        


    module.exports.getIcporder = function getIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.getIcporder(args, (error, data) => {
        IcporderData = data;
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
    });
};
module.exports.getIcporderById = function getIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.getIcporderById(args, (error, data) => {
        IcporderData = data;
        if (IcporderData && Object.keys(IcporderData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(IcporderData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putIcporder = function putIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.putIcporder(args, (error, data) => {
        IcporderData = data;
        if (IcporderData && Object.keys(IcporderData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcporderData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postIcporder = function postIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.postIcporder(args, (error, data) => {
        IcporderData = data;
        if (IcporderData && Object.keys(IcporderData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcporderData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchIcporder = function patchIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.patchIcporder(args, (error, data) => {
        IcporderData = data;
        if (IcporderData && Object.keys(IcporderData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(IcporderData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteIcporder = function deleteIcporder (req, res, next) {
    var args = req.swagger.params;
    IcporderImplementation.deleteIcporder(args, (error, data) => {
        IcporderData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
