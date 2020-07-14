import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Ir ao supermercado', done: false}

    ]);
    return(
        <div>
            {
                todos.map(i =>(
                    <div key= {i.id}>{i.title}</div>
                ))
            }
        </div>
    );
}
 
export default App;