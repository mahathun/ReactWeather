var React = require('react');

// var About = React.createClass({
//   render:function(){
//     return (
//       <h3>This is about component</h3>
//     );
//   }
// });

var About = (props)=>{
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This React.js application will use the open weather map api and returns
         the Temperature of a given city. All the units will be in metric units.
      </p>
      <p>
        Here are some of the tools I used :
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - This was the JS frameweork used</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to
        search for data by city name</li>
      </ul>
    </div>
  );
}

module.exports = About;
