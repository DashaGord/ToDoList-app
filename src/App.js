import './App.css';

import {Component} from "react";

import Info from "./component/Info/Info";
import ListToDo from "./component/ListToDo/ListToDo";
import ToDoAddForm from "./component/ToDo-add-form/ToDo-add-form";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Купить еды', id: 1},
                {name: 'Убрать шкаф', id: 2},
                {name: 'Выбросить мусор', id: 3}
            ]
        }
    }

    // Метод принимает уникальный идентификатор. Передаем его в компонент ListToDoItem. Из стейта вытаскиваем data.
    //По id ищем нужный объект внутри массива для удаления. Дальше меняем стейт, что бы изменить состояние
    //Что бы найти нужный объект необходим его индекс. В переменной индекс вызываем метод findIndex. Callback запускается если функция вернет true, из метода будет возвращаться номер элемента.
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // console.log(index);
            const before = data.slice(0, index); //берем нулевой индекс и до того, который нашли
            const after = data.slice(index + 1); //копируем часть массива начиная со следующего элемента и до конца

            const newArr = [...before, ...after] //создаем один большой массив
            return {
                data: newArr //возвращаем новый массив
            }
        })
    }

    render() {

        return (
            <div className="App">
                <div className="left">
                    <Info/>
                    <ListToDo data={this.state.data}
                              onDelete={this.deleteItem}/>
                </div>
                <div className="right">
                    <ToDoAddForm/>
                </div>
            </div>

        );
    }
}

export default App;

