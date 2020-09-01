import React, { Component } from 'react';
// Nota: Prop types are a validation for propierties that 
//     a component should have.
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    // Nota: Opción 1 usando if - else para 
    //     text decoration
    // getStyle = () => {
    //     if(this.props.todo.completed) {
    //         return {
    //             textDecoration: 'line-through'
    //         }
    //     } else {
    //         return {
    //             textDecoration: 'none'
    //         }
    //     }
    // }

    constructor(props) {
        super(props);
        // this.markComplete = this.markComplete.bind(this);
    }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
                'line-through' : 'none'
        }
    }

    render() {
        const { id, title} = this.props.todo;
        return (
            <div >
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

// Nota: Estilo para botón de borrado, aplicado en render()
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none', 
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;


