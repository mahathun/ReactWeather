var React = require('react');

// var WeatherMessage = React.createClass({
//   render:function(){
//     var {temp,location} = this.props;
//     return (
//         <p>Temperature in {location} is {temp}</p>
//     );
//   }
// });

var WeatherMessage = ({temp,location})=>{
  return (
      <h3 className="text-center">Temperature in {location} is {temp}</h3>
  );
}

module.exports = WeatherMessage;
