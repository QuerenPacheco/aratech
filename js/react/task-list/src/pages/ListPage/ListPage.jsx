import { useState } from 'react';
import List from './../../components/List';
import InputButton from '../../components/InputButton';

const ListPage = () => {
    const [data, setData] = useState([]);

    const removeElement = (indx) => {
        const newData = data.filter((element, i) => indx !== i);
        setData(newData);
    }

    const addElement = (inputVal) => {
        data.push(inputVal);
        const newData = [...data];
        setData(newData);
    }

    return (
        <>
            <InputButton onClick={addElement} buttonText={'Agregar tarea'} />
            {data.length ?
                <List data={data} actions={[{ 'name': 'borrar', 'onClick': removeElement }]} /> :
                <p>No hay tareas disponibles</p>}

        </>

    );
}

export default ListPage;