import { useState } from 'react';


function ListItems({ item, list, setList }) {


    function completeHandle() {
        setList(list.map(el => {
            if (el.id === item.id) {
                return {
                    ...el, completed: !el.completed
                }
            } else return el
        }))
    }

    function deleteHandle() {
        setList(list.filter((el) => el.id !== item.id))
    }
    return (
        <>
            <li className={`medet ${item.completed && 'completed'}`}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={item.completed}
                        onChange={completeHandle}
                    />
                    <label>
                        {item.task}
                    </label>
                    <button
                        className="destroy"
                        onClick={deleteHandle}>
                    </button>
                </div>
            </li>
        </>
    );
}

export default ListItems;