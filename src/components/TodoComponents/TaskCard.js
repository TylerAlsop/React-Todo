import React from 'react';

const Task = props => {
    console.log("Props for the TaksCard", props);

    return (
        <div 
            className ={`task${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTaskCompleted(props.task.id)}
        >
            <p>{props.task.task}</p>

        </div>
    );
};

export default Task