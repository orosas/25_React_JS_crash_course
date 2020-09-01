// Nota: Componente que aplica map al array con todos los ToDo's
//         Componente llamado desde App.js;

// import React from 'react';
import React, { Component } from 'react';
import TodoItem from './TodoItem';
// Nota: Prop types are a validation for propierties that 
//     a component should have.
import PropTypes from 'prop-types';
import App from '../App'

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
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
