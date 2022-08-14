import './App.css';

import {Component} from "react";

import nextId from "react-id-generator";

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

    addToDo = ( name ) => {
        //создаем новую переменную с новыми объектами + беру готовый пакет из npm по генерации рандомного id
        const newToDo ={
            name,
            id: nextId()
        };
        // Создает новый массив (он не трогает предыдущий).
       this.setState(({data}) => (
           {data: [...data, newToDo]})
       );
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
                    <ToDoAddForm onAdd={this.addToDo}/>
                </div>
            </div>

        );
    }
}

export default App;

