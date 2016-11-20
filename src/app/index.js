var React = require("react");
var ReactDOM = require("react-dom");
require("./css/index.css");

//module requires
var TodoItem=require("./todoItem");//webpack allows this splitting up in modules
var AddItem=require("./addItem");

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
        <AddItem onAdd={this.onAdd}/>
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
  },//onDelete function

  onAdd:function(item){
    var updatedTodos=this.state.todos;//store the current array in a variable
    updatedTodos.push(item);
    this.setState({
      todos:updatedTodos
    });//set a new State with the new array
  }



});//create a TodoComponent

//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
