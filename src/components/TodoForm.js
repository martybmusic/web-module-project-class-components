import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <h1>TodoList: MVP</h1>
            <input type="text" placeholder="enter task" onChange={props.handleChanges}/>
            <button type="submit" onClick={props.handleSubmit}>
                Add Todo
            </button>
            <button onClick={props.removeTask}>
                Clear Completed
            </button>
        </div>

    )
}

export default TodoForm;