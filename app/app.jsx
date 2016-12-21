var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//loading foundatio
require('style!css!foundation-sites/dist/foundation.min.css');
//application css
require('style!css!applicationStyles');
$(document).foundation();


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="examples" component={Examples} />
      <Route path="about" component={About} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router> ,
  document.getElementById('app')
);
