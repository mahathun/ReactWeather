var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  componentDidMount:function () {
    var {error, title} = this.props;

    var modalMarkup = (
      <div className="reveal tiny text-center" id="error-modal" data-reveal="">
        <h4>{title}</h4>
        <p>{error}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  getDefaultProps:function(){
      return ({title : 'Error'});
  },
  propTypes:{
    title: React.PropTypes.string,
    error: React.PropTypes.string.isRequired
  },
  render:function(){


    return (
      <div>

      </div>
    );

  }
});

module.exports = ErrorModal;
