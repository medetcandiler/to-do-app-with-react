import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form'
import List from './components/list'
import Footer from './components/footer';

function App() {
    const [list, setList] = useState([]);
    const [status, setStatus] = useState('all')
    const [filtered, setFiltered] = useState([])


    useEffect(() => {
        filteredHandler()
    }, [list, status])

    const filteredHandler = () => {
        switch (status) {
            case ('active'):
                setFiltered(list.filter((item) => item.completed === false));
                break;
            case ('completed'):
                setFiltered(list.filter((item) => item.completed === true));
                break;
            default:
                setFiltered(list);
        }
    }


    return (
        <section className='todoapp'>
            <Form
                setList={setList}
            />
            <List
                list={list}
                setList={setList}
                filtered={filtered}
                setFiltered={setFiltered}
            />
            <Footer
                status={status}
                setStatus={setStatus}
                filtered={filtered}
                setFiltered={setFiltered}
                list={list}
                setList={setList}
            />
        </section >
    );
}

export default App;









 // useEffect(() => {
    //     setList(JSON.parse(localStorage.getItem('item')))
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('item', JSON.stringify(list))
    // }, [list])