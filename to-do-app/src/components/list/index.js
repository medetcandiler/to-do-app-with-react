import ListItems from "../list-items";
import { useState } from 'react';
function List({ list, setList, filtered, setFiltered }) {
    const [toggle, setToggle] = useState(false)

    function toggleHandler() {
        setList(list.map(el => {
            const completed = list.some(item => item.completed === false)
            return completed === true ? { ...el, completed: true } : { ...el, completed: false }
        }))
    }

    return (
        <section className='main'>
            <input
                className="toggle-all"
                type="checkbox"
                onChange={setToggle}
                checked={toggle}
            />
            <label htmlFor="toggle-all" onClick={toggleHandler}>
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    filtered.map((item, i) =>
                        <ListItems
                            key={i}
                            item={item}
                            list={list}
                            setList={setList}
                        />
                    )}
            </ul>
        </section>
    );
}
export default List;