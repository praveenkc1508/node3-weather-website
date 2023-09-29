const request = require('request');
const forecast =(address,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=1dd37044bfece37d30f5577098d391a2&query='+address+'&units=f';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Unable to connect",undefined)

        }else if(response.body.error){
           // console.log("Location Not found. Please try again...",undefined)
            callback("Unable to find the location. Try another search!",undefined);
        } else  {
            const data = response.body.current;
            console.log(data.weather_descriptions[0]+". It is currently " +data.temperature+ " and it feels like "+ data.feelslike + " degrees out");
           // callback(undefined,{foreCast:data.weather_descriptions[0]+". It is currently " +data.temperature+ " and it feels like "+ data.feelslike + " degrees out"});
           callback(undefined,{forecast:data.weather_descriptions[0]+". It is currently " +data.temperature+ " and it feels like "+ data.feelslike + " degrees out"})
        }
    })

}
module.exports = forecast 