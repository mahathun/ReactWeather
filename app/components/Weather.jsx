var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return ({
      isLoading:false
    })
  },
  handleSearch:function(location){
    this.setState({isLoading:true});

    var that =this;
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(error){
      that.setState({isLoading:false});
      alert(error);
    });
    //var message = "Temperature of "+ location +" is " + temp;

  },
  render:function(){
    var {location, temp, isLoading} = this.state;

    function renderMessage(){

      if(isLoading){
        return <h3>Fetching weather data...</h3>;
      }else if (temp&&location) {
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
        <h3>This is the weather component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
