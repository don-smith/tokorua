/** @jsx React.DOM */

var React = require('react/addons');

var AppContainer = React.createClass({

      componentDidMount: function () {
      },

      render: function () {
        var random = Math.random();
        return (
          <div>
            This is from the app container. {random}
          </div>
        )
      }

  });

module.exports = AppContainer;