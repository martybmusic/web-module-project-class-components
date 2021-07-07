import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <h1>TodoList: MVP</h1>
            <input type="text" placeholder="enter task" onChange={}/>
            <button type="submit" onClick={}>
                Add Todo
            </button>
            <button>
                Clear Completed
            </button>
        </div>

    )
}

export default TodoForm;