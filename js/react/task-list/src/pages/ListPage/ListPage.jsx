import { useState } from 'react';
import List from './../../components/List/List';
import InputButton from '../../components/InputButton/InputButton';
import {Container} from 'react-bootstrap';

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
        <Container>
            <h1 className="my-4 text-center">Lista de Tareas</h1>
            <InputButton onClick={addElement} buttonText={'Agregar tarea'} />
            
            <div id="taskList">
                {data.length ?
                    <List data={data} actions={[{ 'name': 'Eliminar', 'onClick': removeElement }]} /> :
                    <p className='text-center mt-2'>No hay tareas disponibles</p>}
            </div>
            
        </Container>
        
    );
}

export default ListPage;