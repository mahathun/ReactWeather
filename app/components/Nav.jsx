var React = require('react');
var {Link, IndexLink} = require('react-router');
//
// var Nav = React.createClass({
//   render:function(){
//     return (
//       <div>
//         <h1>Nav component</h1>
//         <IndexLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/'>Get Weather</IndexLink> |
//         <Link activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/about'>About</Link> |
//         <Link activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/examples'>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props)=>{
  return (
    <div>
      <h1>Nav component</h1>
      <IndexLink activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/'>Get Weather</IndexLink> |
      <Link activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/about'>About</Link> |
      <Link activeClassName='active' activeStyle={{fontWeight:'bold'}} to='/examples'>Examples</Link>
    </div>
  );
}

module.exports = Nav;
