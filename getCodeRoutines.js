// This imports a native json file
var codeRows = require('./Data/CodeLib-CodeRoutines');
console.log('codeRows.length: ' + codeRows.length);
for (var codeRow in codeRows) {
	console.log("-----------------------------"); 
	console.log(codeRows[codeRow].RecordId); 
	console.log(codeRows[codeRow].Title);
	console.log(codeRows[codeRow].Description);
	console.log(codeRows[codeRow].Code);
	console.log(codeRows[codeRow].Declares);
	console.log(codeRows[codeRow].Keywords);
	console.log(codeRows[codeRow].CodeCategory);
}
