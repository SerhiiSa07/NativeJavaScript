import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./Microtasky/NewComponent";

function App() {

    let [students, setStudents] = useState(
        [
            {id: 1, name: 'Janes', age: 8},
            {id: 2, name: 'Redy', age: 1},
            {id: 3, name: 'Lady', age: 2},
            {id: 4, name: 'Sten', age: 4},
            {id: 5, name: 'Lol', age: 7},
            {id: 6, name: 'Ford', age: 10},
            {id: 7, name: 'Mustang', age: 15},
        ]
    );

    return (
        <div className="App">
            <NewComponent students={students} key={105}/>
        </div>
    );
}

export default App;
