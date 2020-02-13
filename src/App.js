import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import "./components/TodoComponents/Todo.css"

const todoTasks = [];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoTasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      taskName: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todoTasks: [...this.state.todoTasks, newTask]
    });
  };

  toggleTaskCompletion = taskId => {
    // console.log("toggleTaskCompletion", taskId)

    this.setState({
      todoTasks: this.state.todoTasks.map(task => {
        // console.log(task);

        if (taskId === task.id) {
          return {
            ...task,
            completed: !todoTasks.completed
          };
        }

        return task;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    // console.log(this.state.todoTasks);
    this.setState({
      todoTasks: this.state.todoTasks.filter(task => task.completed === false)
    });
    // console.log(this.state.todoTasks);
  }

  render() {
    // console.log("Congrats It's Rendering!");

    return (
      <div className="app">
        <div className="header">
          <h2 className="welcome-message">Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask} />
        </div>
        <div className="todo-list">
          <TodoList 
            todoTasks={this.state.todoTasks}
            toggleTaskCompletion={this.toggleTaskCompletion}
            clearCompleted={this.clearCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
