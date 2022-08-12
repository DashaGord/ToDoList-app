import './ToDo-add-form.css';

const ToDoAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте заметку</h3>
            <form
                className="add-form">

                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Введите текст"/>
                <button type="submit"
                        className="btn btn-outline-light">Сохранить</button>
            </form>
        </div>
    )
}

export default ToDoAddForm;