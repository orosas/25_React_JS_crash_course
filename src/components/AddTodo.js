// Nota: Componente que despliega formulario para agregar To Do a la lista
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.title);
        // Nota: Se elimina el valor de input una vez hecho el Submit
        this.setState( { title: '' });
    }


    // Nota: Forma 1 de conseguir el valor del input text
    // onChange = (e) => this.setState({ title: e.target.value });
    // Nota: Forma 2 de conseguir el valor del input text
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    
    render () {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo" 
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Enviar" 
                    className="btn" 
                    style={{flex: '1'}}
                />
            </form>
        )
    }
    
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired, 
}

export default AddTodo;


