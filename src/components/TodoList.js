import React, { Component }from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render() {
        const list = this.props.list.map(item => {
            return (
                <Todo list={item} toggleItem={this.props.toggleItem} />
            );
        });
        return(
            <div>
                {list}
            </div>
        )
};
}

export default TodoList;
