import './App.css';

import Info from "./component/Info/Info";
import ListToDo from "./component/ListToDo/ListToDo";
import ToDoAddForm from "./component/ToDo-add-form/ToDo-add-form";

function App() {

    //Добавляем уникальный идентификатор(id). В консоле есть ошибка

    const data = [
        {name: "Погулять с собакой", id: 1},
        {name: "Выбросить мусор", id: 2},
        {name: "Сделать проект", id: 3},
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

