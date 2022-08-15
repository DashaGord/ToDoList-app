import './Info.css'



const AppInfo = ({tasks}) => {
    return(
        <div className="app-info name-span-2">
            <h1 className="name-span-2 h-1">Список заметок</h1>
            <span> Общее число заметок: {tasks} </span>
        </div>
    )
}

export default AppInfo;