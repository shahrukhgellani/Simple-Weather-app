var url = 'https://ipinfo.io/'
var request = require('request')
module.exports = function(callback)
{
request(
	{
		url : url,
		// proxy: 'https://192.168.10.50:8080',
		json : true
	}, function(error , response , body){

		if(error)
		{
			callback(error)	
		}else
		{
			callback(body)
		}


	})
}