import './ListToDo-item.css';

const ListToDoItem = ({name, onDelete, onEdit, done, onDone, processTodo, onProcess, isEdit}) => {

    //Добавляем класс в зависимости от свойства. Через css и добавляем в пропсы
    let classNames = "list-group-item d-flex justify-content-between"; //выносим отдельно классы.
    if (processTodo) {
        classNames += ' processTodo'
    }
    if (done) {
        classNames += ' done'
    }
    if(isEdit) {
        classNames += ' is-edit'
    }


    return (
        <li className={classNames}>
            <span className="list-group-item-label name-span" onClick={onEdit}>{name}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-person-running btn-sm"
                        onClick={onProcess}>
                    <i className="fas fa-person-running"></i>
                </button>
                <button type="button"
                        className="btn-square-check btn-sm"
                        onClick={onDone}>
                    <i className="fa-solid fa-square-check"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

export default ListToDoItem;

