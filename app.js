var location = require('./getLocation')
var weather = require('./weather')

location(function(location){
		if(!location){
		console.log("unable to get location")
		}else
		{			console.log("===========================================================================================")
					console.log("===========================================================================================")
					console.log("===========================================================================================")
					console.log("===========================================================================================")
					setTimeout(function(){
						console.log("Cordinates of " + location.city + " are " + location.loc)
					
					},1500)
					
		weather(function(weather){
				if(!weather)
					console.log("Error")
				else
					setTimeout(function(){weatherString = JSON.stringify(weather)
					console.log("Weather is " + weatherString)
				},2000)






			},location.city)


		}
// var a = 		JSON.stringify(location)
    

})
console.log("Hellow i am working")