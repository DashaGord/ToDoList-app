import './App.css';

import Info from "./component/Info/Info";
import ListToDo from "./component/ListToDo/ListToDo";
import ToDoAddForm from "./component/ToDo-add-form/ToDo-add-form";

function App() {

    const data = [
        {name: "Погулять с собакой"},
        {name: "Выбросить мусор"},
        {name: "Сделать проект"},
    ];

    return (
        <div className="App">
            <div className="left">
                <Info/>
                <ListToDo data={data}/>
            </div>
            <div className="right">
                <ToDoAddForm/>
            </div>
        </div>

    )
}

export default App;


//const data = массив с данными.
// Передаем массив данных data