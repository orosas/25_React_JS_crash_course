
// import React from 'react';
import React, { Component } from 'react';
// Nota: Se utiliza react router para crear las rutas a "nuevas páginas", pero son componentes
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
// import { render } from '@testing-library/react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// Nota: Para generar key id de manera automática.
// import uuid from 'uuid';
// Nota: Se importa módulo uuid como se indica en los comentarios del video
// import { v4 as uuidv4 } from 'uuid';
// Nota: Utilizada para hacer request a API
import axios from 'axios';

class App extends Component {
  // Nota: Se registra Todos en el main app component state
  state = {
    todos: []
  }

  // Nota: Se utiliza para realizar el request a la API
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }) })
  }

  // Delete Todo
  delTodo = (id) => {
    // Nota: Se usa JS spread syntax(...)
    //   Referencia:
    //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    console.log([...this.state.todos]);
    console.log([this.state.todos]);
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      // Nota: En ES6 sí la variable y el nombre del objecto son iguales se puede dejar como la siguiente línea
      // title: title,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

    render() {
      // console.log(this.state.todos);
      return (
        // Nota: Se utilizar Router de react router para usar componentes como si fueran 
        //       nuevas páginas "por separado"
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              {/* Nota: Los siguientes componentes (AddTodo, Todos) se muestran como parte de la ruta / */}
              <Route path="/" exact render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  {/* Nota: Para pasar el state a Todos component se usa todos={this.state.todos} */}
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                </React.Fragment>
              ) } />
              <Route path="/about" component={About} />
            </div>
         </div>
        </Router>
        // <div className="App">
      );
    }
}

export default App;



