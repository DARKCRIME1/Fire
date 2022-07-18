var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://api.reysekha.xyz';
try {
if(url == 'https://api.reysekha.xyz') throw console.log(color('config database','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, FIRE','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nweb connected database,','red'))
	})


module.exports = db
