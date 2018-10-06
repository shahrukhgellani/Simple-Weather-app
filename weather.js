var request = require('request')
// var url = "http://api.openweathermap.org/data/2.5/forecast?id=1176615&APPID=747d1d784c1f53465af334b65163f48a"
module.exports=function(callback,cityID)
{
	var url = "http://api.openweathermap.org/data/2.5/forecast?q="+cityID+"&APPID=747d1d784c1f53465af334b65163f48a"
request(
	{
		url:url,
		json:true
	},
	function(error,response,body)
	{
		if(error)
		{
			console.log("Error")
		}
		else
			callback(body)
})
}