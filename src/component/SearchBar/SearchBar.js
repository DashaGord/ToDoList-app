import './SearchBar.css';

import {Component} from "react";


class SearchBar extends Component {
    constructor(props) { //Здесь будет новое состояние
        super(props);
        this.state = {
            bar: ''
        }
    }

    onUpdateSearch = (e) => {           //приходит объект события
        const bar = e.target.value;     //Новая переменная. Получение value
        this.setState({bar});      //Установка локального состояния. Строчка 10
        this.props.onUpdateSearch(bar)  //метод из App.js
    }

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Найти заметку"
                   value={this.state.bar}
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchBar;