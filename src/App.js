import './App.css';

import {Component, createRef} from "react";

import nextId from "react-id-generator";

import Info from "./component/Info/Info";
import ListToDo from "./component/ListToDo/ListToDo";
import ToDoAddForm from "./component/ToDo-add-form/ToDo-add-form";
import SearchBar from "./component/SearchBar/SearchBar";

const MAX_WIDTH = 1000;
const OFFSET1 = 50;
const OFFSET2 = 80;
const MIN_ELEMENT_WIDTH = 200;
const MAX_ELEMENT_WIDTH = 600;


class App extends Component {

    constructor(props) {
        super(props);
        this.formRef = createRef();
        this.state = {
            data: [
                {name: 'Купить еды', id: 1, done: false, processTodo: false},
                {name: 'Убрать шкаф', id: 2, done: false, processTodo: false},
                {name: 'Выбросить мусор', id: 3, done: false, processTodo: false}
            ],
            editName: '', //Название редоктируемой задачи
            editId: null,  //Id редоктируемой задачи
            bar: ''       //Для поиска
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

    addToDo = (name) => {
        //создаем новую переменную с новыми объектами + беру готовый пакет из npm по генерации рандомного id
        const newToDo = {
            name,
            id: nextId(),
            done: false,
            processTodo: false
        };
        // Создает новый массив (он не трогает предыдущий).
        this.setState(({data}) => (
            {data: [...data, newToDo]})
        );
    }

    editToDo = ({id, name}) => {
        const data = this.state.data;
        const index = data.findIndex(edit => edit.id === id);
        const old = data[index];

        old.name = name;
        this.setState({
            data: data,
            editId: null,
            editName: ''
        })
    }


    handleEdit = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(edit => edit.id === id); //получаем индекс элемента с которым будем работать
            const old = data[index];                              //создаем копию, что бы можно было потом менять

            return {
                data: data,
                editName: old.name,
                editId: old.id
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Вызывается каждый раз при обновление state App.js
        this.formRef.current.setState({ //При каждом обновление мы обновляем стейт ToDoAddForm через ref
            name: this.state.editName,  //значения из одного стейта перемещаем в другой стейт
            id: this.state.editId
        });
    }


    onProcess = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, processTodo: !item.processTodo, done: false}
                }
                return item;
            })
        }))
    }


    onDone = (id) => {
        //метод изменяет значение done на противоположное у элемента
        this.setState(({data}) => ({                 // возврат объекта со свойством data. Применяем map для нового массива
            data: data.map(item => {                      //Callback проходит по каждому объекту
                if (item.id === id) {                      //Если совпали id, то нашли нужный
                    return {...item, done: !item.done, processTodo: false}    //Возвращаем новый объект. Содержит старые свойства. Меняется done на противоположный
                }
                return item;                               // Если не совпало, то просто объект вернем
            })
        }))
    }

    searchToDo = (items, bar) => {       //Реализую фильтр поиска. Передаем два элемента. Строчку по которой будет поиск и фильтруемый массив данных
        if (bar.length === 0) {         //Если строчка по поиску пустая, возвращаем обычный массив
            return items;
        }
        return items.filter(item => {
            //Делаю совпадение по строчке
            return item.name.indexOf(bar) > -1
        })
    }

    onUpdateSearch = (bar) => { //Обновление поиска. Принимает строчку и устанавливает состояние внутри главного компонента(App.js)
        this.setState({bar}); //Ниже передаем в компонент
    }

    resizer = () => {
        let resizer = document.getElementById('resizerX');   //находим resizer
        resizer.mousemove = (e) => this.resizeX(e.pageX);             //на event.mousemove завязываем лямбда функцию (e) => this.resizeX(e.pageX)

        resizer.onmousedown = function () {                //При событии нажатия на кнопку добавляется два addEventListener
            document.documentElement.addEventListener('mousemove', resizer.doDrag); //Когда происходит движение
            document.documentElement.addEventListener('mouseup', resizer.stopDrag); //Когда отпускается кнопка
        }

        resizer.doDrag = function (e) { //Перетаскивание ползунка
            resizer.mousemove(e);
        }

        resizer.stopDrag = function () { //Удаляются установленные листенеры добавленные onmousedown при отпускании кнопки мыши
            document.documentElement.removeEventListener('mousemove', resizer.doDrag);
            document.documentElement.removeEventListener('mouseup', resizer.stopDrag);
        }
    }

    resizeX = (x) => { //Логика изменения ширины двух элементов 1 и 2
        if (x > MAX_ELEMENT_WIDTH) {
            x = MAX_ELEMENT_WIDTH;
        } else if (x < MIN_ELEMENT_WIDTH) {
            x = MIN_ELEMENT_WIDTH;
        }

        let element1 = document.getElementById("element1");
        element1.style.width = x - OFFSET1 + 'px';                   //динамически меняется ширина элемента 1 в стилистике
        let element2 = document.getElementById("element2");
        element2.style.width = MAX_WIDTH - OFFSET2 - x + 'px';       //динамически меняется ширина элемента 2 в стилистике
    }

    componentDidMount() {
        this.resizer();
    }


    render() {
        const tasks = this.state.data.length; // Для определения общего кол-ва заметок в приложении. Передаем в Info
        const visibleData = this.searchToDo(this.state.data, this.state.bar);


        return (
            <div id="resizeArea" className="App">
                <div id="element1" className="left">
                    <Info tasks={tasks}/>
                    <SearchBar onUpdateSearch={this.onUpdateSearch}/>
                    <ListToDo data={visibleData}
                              onDelete={this.deleteItem}
                              onEdit={this.handleEdit}
                              onProcess={this.onProcess}
                              onDone={this.onDone}
                              editId={this.state.editId}/>
                </div>
                <div id="resizerX" className="inline"></div>
                <div id="element2" className="right">
                    <ToDoAddForm onAdd={this.addToDo} onEdit={this.editToDo} ref={this.formRef}/>
                </div>
            </div>

        );
    }
}

export default App;
