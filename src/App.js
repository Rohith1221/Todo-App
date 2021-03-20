import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state={
    todoList:[]  //state obj immutable
  }
  render(){
  return (
    <div>
    <div className="hello">
      <div className="jumbotron jumbotron-fluid py-2">
    <div className="container">
      <h1 className="display-2">Todo App</h1>
    </div>
  </div>
  </div>
  <form className="mb-3 mt-3" onSubmit={this.handleSubmit}>
    <div className="input-group">
    <input type="text" name="todotask" className="form-control" placeholder="please enter your task" autoComplete="off"/>
    <div className="input-group-append">
      <button type="submit" className="btn btn-outline-success">Add</button>
    </div>
    </div>
  </form>
  <ul className="list-group">
    {
      this.state.todoList.map(
        (item,index)=>{
          if(item.value!==" " ||item.value!=="  ")
          {
          return <li className="list-group-item" key={index}>
            {item}
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={(event)=>{this.deleteTodoTask(event,index)}}>Delete</button>
          </li>
          }

        }
      )
    }
  </ul>
  </div>
  );
}

  handleSubmit=(event)=>{
  var taskdesp = event.target.elements.todotask.value;
  if(taskdesp.length>0)
  {
    this.setState({
      todoList:[...this.state.todoList,taskdesp]
    })
    event.target.reset();
  }
  event.preventDefault();
 }

 deleteTodoTask=(event,index)=>{
   var taskArray=[...this.state.todoList]
   taskArray.splice(index,1)
   this.setState({todoList:taskArray})
 }
}
export default App;
