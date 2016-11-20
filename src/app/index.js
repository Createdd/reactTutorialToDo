var React = require("react");
var ReactDOM = require("react-dom");

//Create component with react class method
var TodoComponent = React.createClass({
  render:function(){
    return(
      <div>
        <p><strong>Wine name: </strong>{this.props.wine.name}</p>
        <p><strong>Wine smell factor: </strong>{this.props.wine.smellFactor}</p>
        <p><strong>Wine price: </strong>{this.props.wine.price}</p>
      </div>
    );//grab this component and put a reference to the render method
  }
});//create a TodoComponent

var myWine={name: "Mount Blanc", smellFactor:"very flowery", price: "99"};

//Put component into html page
ReactDOM.render(<TodoComponent mssg="I like wine" wine={myWine}/>, document.getElementById("todo-wrapper"));
