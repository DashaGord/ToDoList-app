import './Info.css'



const AppInfo = ({tasks}) => {
    return(
        <div className="app-info">
            <h1>Список заметок</h1>
            <span> Общее число заметок: {tasks} </span>
        </div>
    )
}

export default AppInfo;