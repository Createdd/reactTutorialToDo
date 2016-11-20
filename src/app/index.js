var React = require("react");
var ReactDOM = require("react-dom");

//Create components with react class method
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
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));

    return(
      <div id="todo-list">
        <p>Busiest people work hard</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
      </div>
    );//grab this component and put a reference to the render method
  },//use the render method to output data

  //custom functions
  onDelete:function(item){
    var updatedTodos=this.state.todos.filter(function(val, index){
      return item !== val;
    });//create a new array with the filter method
    this.setState({
      todos:updatedTodos
    });//set a new State with the new array
  }//onDelete function
});//create a TodoComponent

var TodoItem=React.createClass({
  render: function(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item} </span>
          <span className="item-delete" onClick={this.handleDelete}> X</span>
        </div>
      </li>
    );
  },//render

  //custom functions
  handleDelete:function(){
    this.props.onDelete(this.props.item);
  }
});//create a TodoItemComponent


//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
