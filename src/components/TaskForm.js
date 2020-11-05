import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskFrom = () => {

    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editItem) {
            addTask(title);
            setTitle('');
        } else {
            editTask(title, editItem.id)
        }
    }


    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title);
        } else {
            setTitle('');
        }
    }, [editItem])

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                onChange={handleChange}
                value={title}
                type='text'
                className='task-input'
                placeholder='Add a Task'
                required
            />


            <div className='buttons'>
                <button onClick={clearList} className='btn clear-btn cop but'>
                    <i class="fas fa-eraser"></i>
                </button>

                <button className='btn add-task-btn cop but' type='submit'>
                    {editItem ? <i class="fas fa-user-edit"></i> : <i class="fas fa-user-plus"></i>}

                </button>
            </div>
        </form>

    );
};

export default TaskFrom;
