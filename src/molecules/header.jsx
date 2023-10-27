import headerImage from '../img/todo-bg.jpg'

import  '../styles/styles.css'


function Header(){
    return <div className='header-container'>
        <img src={headerImage} alt="todo list" />
       <span className="header-todo-label"> To-Do List</span>
    </div>
}

export default Header;