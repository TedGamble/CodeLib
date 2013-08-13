var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

CodeRoutineProvider = function(host, port) {
  this.Db= new Db('CodeLib20', new Server(host, port, {auto_reconnect: true}, {}));
  this.Db.open(function(){});
};

//getCollection
CodeRoutineProvider.prototype.getCollection= function(callback) {
  this.Db.collection('CodeRoutines', function(error, code_routines_collection) {
    if( error ) callback(error);
    else callback(null, code_routines_collection);
  });
};

//findAll
CodeRoutineProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, code_routines_collection) {
      if( error ) callback(error)
      else {
        code_routines_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

//findById
CodeRoutineProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, code_routines_collection) {
      if( error ) callback(error)
      else {
        code_routines_collection.findOne({_id: code_routines_collection.Db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

//save
CodeRoutineProvider.prototype.save = function(code_routine, callback) {

    this.getCollection(function(error, code_routines_collection) {
      if( error ) callback(error)
      else {
        if( typeof(code_routine.length)=="undefined")
          code_routine = [code_routine];
		
		code_routines_collection.insert(code_routine, function() {
		});
      }
    });
};

exports.CodeRoutineProvider = CodeRoutineProvider;