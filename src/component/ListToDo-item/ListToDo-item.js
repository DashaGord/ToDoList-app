import './ListToDo-item.css';

const ListToDoItem = (props) => {
    const {name, onDelete} = props;

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="list-group-item-label">{name}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-square-check btn-sm ">
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

