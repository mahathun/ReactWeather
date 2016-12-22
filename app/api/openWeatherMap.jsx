var axios = require('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=19d0936bad8e959076f624e2084291f1&units=metric';

module.exports = {
  getTemp : function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${location}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }

    }).catch(function(res){
      throw new Error(res.response.data.message);
    });
  }
}
