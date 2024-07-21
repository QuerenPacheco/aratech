import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './css/InputButton.module.css';

const InputButton = ({ onClick, buttonText }) => {
    const [inputVal, setInputVal] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setInputVal(event.target.value);
        if (error) {
            setError('');
        }
    }

    const handleClick = () => {
        if (inputVal.trim() === '') {
            setError('Debe de rellenar el campo.');
        } else {
            onClick(inputVal);
            setInputVal('');
        }
    }

    return (
        <div className={styles.subcontainer}>
            <h2 className={styles.subtitle}>Agregar nueva tarea</h2>
            <Form className="form-inline">
            <Form.Control type="text" value={inputVal} onChange={handleChange} isInvalid={!!error}/>
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
            <Button className='mt-3' onClick={handleClick}>{buttonText}</Button>
        </Form>
        </div>
    )
}

export default InputButton;