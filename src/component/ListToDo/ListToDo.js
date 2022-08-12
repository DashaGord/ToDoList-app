import './ListToDo.css';

import ListToDoItem from "../ListToDo-item/ListToDo-item";

//В компонент приходит data. Массив с объектами для новых компонентов. Перебираем элементы в функции. Callback функция возвращает
// компонент в котором пропс name. Вытащенный из объекта в компоненте App.js
//В {elements} массив с компонентами.


const ListToDo = ({data}) => {

    //Работа с данными.Данные из пропса запускаем в методе map.
    // Внутри callback функция, где item каждый отдельный элемент(последовательно идет в массиве)
    //Возвращаем компонент. Использую spread. Разворачиваем item
    //То же самое, что и name={item.name}


    const elements = data.map(item => {
        return (
            <ListToDoItem {...item}/>
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

// Какие-то вымышленные задачи. Используем этот пропс в ListToDoItem.
