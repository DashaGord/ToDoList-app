import './ListToDo.css';

import ListToDoItem from "../ListToDo-item/ListToDo-item";

const ListToDo = ({data, onDelete, onEdit, onProcess, onDone, editId}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ListToDoItem key={id}
                          {...itemProps}
                          onDelete={() => onDelete(id)}
                          onEdit={() => onEdit(id)}
                          onProcess={() => onProcess(id)}
                          onDone={() => onDone(id)}
                          isEdit={id === editId}/>  //новый метод в зависимости от id
        )
    })

    return (
        <div className="app-list-div">
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    )
}

export default ListToDo;



