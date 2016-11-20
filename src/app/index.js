var React = require("react");
var ReactDOM = require("react-dom");

//Create component with react class method
var TodoComponent = React.createClass({
  getInitialState:function(){
    return{
      todos:["training", "learning", "working"],
      age:25
    }
  },

  render:function(){
    var ager=setTimeout(function(){
      this.setState({
        age:35
      });
    }.bind(this),5000);
    return(
      <div id="todo-list">
        <p>Busiest people work hard</p>
        <p>{this.state.age}</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );//grab this component and put a reference to the render method
  }//use the render method to output data

});//create a TodoComponent


//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
