// import React from 'react';
import React, { Component } from 'react';
import TodoItem from './TodoItem';
// Nota: Prop types are a validation for propierties that 
//     a component should have.

import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
        // <h3>{ todo.title} </h3>
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default Todos;
