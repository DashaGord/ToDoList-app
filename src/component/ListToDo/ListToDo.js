import './ListToDo.css';

import ListToDoItem from "../ListToDo-item/ListToDo-item";


const ListToDo = () => {
    return (
        <div className="app-list-div">
        <ul className="app-list list-group">
            <ListToDoItem/>
            <ListToDoItem/>
            <ListToDoItem/>
            <ListToDoItem/>
            <ListToDoItem/>
        </ul>
        </div>
    )
}

export default ListToDo;