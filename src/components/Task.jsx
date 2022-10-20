import React from 'react';
import './Task.css'
import { CgClose, CgInfo } from 'react-icons/cg'
import {useHistory} from 'react-router-dom'

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const navigate = useHistory()

    const handleTaskDetailsClick = () => {
    navigate.push(`/${task.title}`)

    };
    return (<div className="Task-container"
     style={task.completed ? { borderLeft: "6px solid chartreuse"} : {}}>
        <div className="task-title" onClick={() => handleTaskClick (task.id)}>
            {task.title}
        </div>
        <div className="buttons-container">
            <button className='remove-task-button'
             onClick={() => handleTaskDeletion (task.id)}>
                <CgClose/>
            </button>
            <button className='see-task-details-button' onClick={handleTaskDetailsClick}>
                <CgInfo/>
            </button>
        </div>
    </div>);
};
 
export default Task;