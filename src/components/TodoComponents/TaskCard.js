import React from 'react';

const Task = props => {
    console.log("Props for the TaksCard", props);

    return (
        <div 
            className ={`task${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTaskCompletion(props.task.id)}
        >
            <p>{props.task.taskName}</p>

        </div>
    );
};

export default Task