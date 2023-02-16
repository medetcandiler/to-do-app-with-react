import { useState } from 'react';



function Footer({ filtered, list, status, setStatus, setList }) {


    const statusHandler = (e) => {
        setStatus(e.target.name)
        console.log(e.target.name)
    }

    const completed= list.filter(el => el.completed === true)

    const clearHandler = () => {
        setList(list.filter(el => el.completed === false))
    }

    return (
        <>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{filtered.length} </strong>items
                </span>

                <ul className="filters" onClick={statusHandler} >
                    <li >
                        <a href="#/" name='all' className={status === 'all' ? 'selected' : ''} >All</a>
                    </li>
                    <li>
                        <a href="#/" className={status === 'active' ? 'selected' : ''} name='active' >Active</a>
                    </li>
                    <li>
                        <a href="#/" className={status === 'completed' ? 'selected' : ''} name='completed' >Completed</a>
                    </li>
                </ul>

                <button className={completed.length === 0 ? 'hidden' : 'clear-completed'} onClick={clearHandler}>
                    Clear completed
                </button>
            </footer>
        </>
    );
}

export default Footer;



// const completed = filtered.filter(item => item.completed === true);

// function statusHandler(e) {
//     setStatus(e.target.name);
// }

// const clearHandler = () => {
//     setList(list.filter((item) => item.completed === false));
// }