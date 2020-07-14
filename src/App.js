import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false },
        { id: 2, title: 'Ir para Academia', done: false },
        { id: 3, title: 'Passear com o cachorro', done: false },
    ]);
    const [todo,setTodo] = useState();

    const handleFormSubmit = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            todo,
        ])
    }
    
    const handleInputChange = e => {
        setTodo({
            ...todo,
            id: todos.length + 1,
            title: e.target.value,
            done: false
        })
    }
    


    return (
        <div>
            {
                todos.map(i => (
                    <div key={i.id}>{i.title}</div>
                ))
            }
            <br />
            <hr />
            <br />
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="todo"
                 id="title" placeholder="Nova tarefa.."
                 onChange={handleInputChange} />

                <button>Adicionar</button>
            </form>

        </div>
    );
}

export default App;