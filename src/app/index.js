var React = require("react");
var ReactDOM = require("react-dom");

//Create component with react class method
var TodoComponent = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Helooo</h1>
        <p>Test</p>
      </div>
    );
  }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
