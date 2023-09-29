const request = require('request');
const geocode = (address,callback) =>{
    const URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhdmVlbmtjIiwiYSI6ImNsZWxqbGx3YzAwMXQ0Mm9mcDg5NTdqMWsifQ.SaEZYQP21aEFT9_hrxYMdA';
    request({url:URL,json:true},(error,response)=>{
        

        if(error){
            callback("Unable to connect to the SERVER",undefined);

         }else if(response.body.features.length === 0){
             callback("Unable to find the location. Try another search!",undefined);

        }else {
            callback(undefined,{
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name

            })
        }

    })
}
module.exports = geocode