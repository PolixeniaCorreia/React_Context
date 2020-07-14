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
    }
    
    const handleInputChange = e => {
        console.log(e.target.value);
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
            <form>
                <input type="text" name="todo"
                 id="title" placeholder="Nova tarefa.."
                 onChange={handleInputChange} />

                <button>Adicionar</button>
            </form>

        </div>
    );
}

export default App;