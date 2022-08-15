import './ToDo-add-form.css';

import {Component} from "react";

class ToDoAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null ,
            name: ''
        }
    }

    //Создаем метод. Принимает аргумент события и меняет состояние
    //устанавливаем name на textarea
    //В value помещаем значение стейта. Записывается актуальное значение компонента
    handelChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    //Повесим onSubmit на форму для отправки. Создаем метод
    onSubmit = (e) => {
        e.preventDefault();                       // отмена стандартного поведения браузера
        if(this.state.id === null){
            this.props.onAdd(this.state.name);        // из App.js передаем функцию пропсам
        } else {
            this.props.onEdit({
                id:this.state.id,
                name:this.state.name
            });
        }

        this.setState({
            id: null ,
            name: ''
        });                                       //Записываем в стейт значение из textarea и передаем его в App.js. onAdd или onEdit
    }


    render() {
        const {id, name} = this.state;
        const header = id === null ? "Добавьте заметку" : "Редактируем заметку"; //Меняем h3 в зависимости от действия

        return (
            <div className="app-add-form">
                <h3>{header}</h3>
                <form
                    className="add-form"
                    onSubmit={this.onSubmit}>
                    {id !== null &&
                        <input
                            id="editId"
                            name="editId"
                            type="hidden"
                            value={id}
                        />
                    }
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Введите текст"
                        onChange={this.handelChange}
                        name='name'
                        value={name}/>
                    <button type="submit"
                            className="btn btn-outline-light">Сохранить
                    </button>
                </form>
            </div>
        )
    }
}

export default ToDoAddForm;