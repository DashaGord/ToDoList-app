import './App.css';

import Info from "./component/Info/Info";
import ListToDo from "./component/ListToDo/ListToDo";
import ToDoAddForm from "./component/ToDo-add-form/ToDo-add-form";

function App() {
    return (
        <div className="App">
            <div className="left">
                <Info/>
                <ListToDo/>
            </div>
            <div className="right">
                <ToDoAddForm/>
            </div>
        </div>

    )
}

export default App;
