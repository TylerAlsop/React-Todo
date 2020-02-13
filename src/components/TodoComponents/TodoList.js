import React from 'react';

import TaskCard from "./TaskCard";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.todo.map(task => (
                <TaskCard 
                    key={task.id} 
                    task={task} 
                    toggleTaskCompleted={props.toggleTaskCompleted} />
            ))}

            <button className="clear-completed-button" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>

        </div>
    );
};

export default TodoList;