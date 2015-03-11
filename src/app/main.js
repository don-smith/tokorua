var React = require('react/addons');
var AppContainer = React.createFactory(require('./components/app-container'));

var mountNode = document.getElementById("main-react-mount");

setInterval(function() {
  React.render(new AppContainer({}), mountNode);
}, 1500);
