var React = require('react');

var WeatherForm = React.createClass({
  onFormsubmit:function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length>0){
      this.refs.location.value="";
      this.refs.location.placeholder=location;
      this.props.onSearch(location);
    }else{
      this.refs.location.placeholder= "Enter a city name";
    }
  },
  render:function(){
    return (
      <div>
        <form onSubmit={this.onFormsubmit}>
          <input type="text" placeholder="Enter a city name" ref="location" />
          <button className="button hollow expanded">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
