import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    };

    changHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log("This is the state from the Form", this.state)
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
    };

    render() {
        // console.log("Rendering Form", this.state.task);
        return (
            <form onSubmit={this.submitTask}>
                <input type="text" name="task" onChange={this.changHandler} />
                <button>Add Task</button>
            </form>
        );
    };
}

export default TodoForm