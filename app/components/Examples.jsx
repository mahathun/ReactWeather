var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render:function(){
//     return (
//       <h3>This is Examples component</h3>
//     );
//   }
// });

var Examples = (props)=>{
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are few example locations to try out: </p>
      <ol>
        <li><Link to="/?location=Wellington" >Wellington, NZ</Link></li>
        <li><Link to="/?location=Napier" >Napier, NZ</Link></li>
        <li><Link to="/?location=Colombo" >Colombo, SL</Link></li>
        <li><Link to="/?location=Kandy" >Kandy, SL</Link></li>
      </ol>
    </div>
  );
}

module.exports = Examples;
