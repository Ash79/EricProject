'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Icporder.json';
var bodyParam = 'icporders/v1'; 
     


exports.getIcporder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcporderData = [];
    if(IcporderFD) {
        IcporderData = JSON.parse(IcporderFD);
    }
    cb(null, IcporderData);
}
exports.getIcporderById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var orderId = args['orderId'] ? args['orderId'].value: null;
    var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcporderData = [];
    if(IcporderFD) {
        IcporderData = JSON.parse(IcporderFD);
    }
    var myRecord;
    for(var i=0;i<IcporderData.length;i++) {
        if(IcporderData[i]['orderId'] == orderId) {
             myRecord = IcporderData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putIcporder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var orderId = args['orderId'] ? args['orderId'].value: null;
   var body = args[bodyParam].value;
   var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcporderData = [];
   if(IcporderFD) {
       IcporderData = JSON.parse(IcporderFD);
   }
   var myRecord;
   for(var i=0;i<IcporderData.length;i++) {
       if(IcporderData[i]['orderId'] == orderId) {
            IcporderData[i] = Object.assign(IcporderData[i],body);
            myRecord = IcporderData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcporderData));
   cb(null, myRecord);
}


exports.postIcporder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var IcporderData = [];
    if(IcporderFD) {
        IcporderData = JSON.parse(IcporderFD);
    }
    IcporderData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcporderData));
    cb(null, body);
}


exports.patchIcporder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var orderId = args['orderId'] ? args['orderId'].value: null;
   var body = args[bodyParam].value;
   var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcporderData = [];
   if(IcporderFD) {
       IcporderData = JSON.parse(IcporderFD);
   }
   var myRecord;
   for(var i=0;i<IcporderData.length;i++) {
       if(IcporderData[i]['orderId'] == orderId) {
            IcporderData[i] = Object.assign(IcporderData[i],body);
            myRecord = IcporderData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcporderData));
   cb(null, myRecord);
}



exports.deleteIcporder = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var orderId = args['orderId'] ? args['orderId'].value: null;
   //var body = args[bodyParam].value;
   var IcporderFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var IcporderData = [];
   if(IcporderFD) {
       IcporderData = JSON.parse(IcporderFD);
   }
   var found = false;
   for(var i=0;i<IcporderData.length;i++) {
       if(IcporderData[i]['orderId'] == orderId) {
            IcporderData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(IcporderData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


