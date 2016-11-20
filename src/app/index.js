var React = require("react");
var ReactDOM = require("react-dom");

//Create component with react class method
var TodoComponent = React.createClass({
  getInitialState:function(){
    return{
      todos:["training", "learning", "working", "work more"]
    }
  },

  render:function(){

    var todos=this.state.todos;//local version of the state variable
    todos = todos.map(function(item,index){
      return(
        <TodoItem item={item} key={index}/>
      );
    });

    return(
      <div id="todo-list">
        <p>Busiest people work hard</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
      </div>
    );//grab this component and put a reference to the render method
  }//use the render method to output data

});//create a TodoComponent

var TodoItem=React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item.name">{this.props.item}</span>
        </div>
      </li>
    );
  }
});


//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
