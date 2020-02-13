import React, { Component } from 'react';
import ReactDOM from "react-dom";

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css"

const todo = [
  {
    task: 'Hello World',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Starter Item 1',
    id: 1528817084358,
    completed: false
  }
];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo
    };
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  toggleTaskCompletion = taskId => {
    console.log(taskId)

    this.setState({
      todo: this.state.todo.map(task => {
        console.log(task);

        if (taskId === DataTransferItem.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }

        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todo);
    this.setState({
      todo: this.state.todo.filter(task => task.completed)
    });
    console.log(this.state.todo);
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
