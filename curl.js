const request = require('request');

// function cat(filename){
// 	console.log('filename')
// 	fs.readFile(filename, 'utf8', (err, data)=>{
// 		if (err) throw err;
// 		console.log(data);
// 	})
// }

function curl(http){
	request.get(http)
	.on('response', function(response){
		console.log(response)
	})
}

module.exports = {curl};