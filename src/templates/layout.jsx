import  '../styles/styles.css'

function Layout({children}){
const [headerComponent, addTaskComponent,tasksGroupComponet] = children;

    return (
    <div className="container">
        <header>{headerComponent}</header>
        <div className="">{addTaskComponent}</div>
        <div className="task-group">{tasksGroupComponet}</div>
    </div>
    );
}

export default Layout;