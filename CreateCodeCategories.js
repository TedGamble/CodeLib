var codeRoutines = require('./Data/CodeLib-CodeCategories');
var mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/CodeLib20', function(err,db){

	if (err){
		console.log('Error connecting');
	}
	else{

		console.log('Connected to DB');

		var col = db.collection('CodeCategories');
		for (var codeRoutine in codeRoutines){
			var cr = codeRoutines[codeRoutine];
			col.insert(cr, function(err,result){});
 		}
	
	db.close();
	}
});