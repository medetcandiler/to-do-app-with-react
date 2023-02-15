import { useState } from 'react';

const Form = ({ setList }) => {
    const [form, setForm] = useState('')

    function changeHandler(e) {
        setForm(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault();
        if (form === '') {
            return false
        } else {
            setList(prev => [...prev, { task: form, completed: false, id: Math.random() * 1000 }]);
            setForm('')
        }
    }

    return (
        <>
            <header className="header">
                <h1 id='h1'>todoapp</h1>
                <form onSubmit={submitHandler}>
                    <input onChange={changeHandler} value={form} className="new-todo" placeholder="What needs to be done?" autoFocus />
                </form>
            </header>
        </>
    );
}

export default Form;