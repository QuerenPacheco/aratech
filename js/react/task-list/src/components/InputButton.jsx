import { useState } from 'react';

const InputButton = ({ onClick, buttonText }) => {
    const [inputVal, setInputVal] = useState('');

    const handleChange = (event) => {
        setInputVal(event.target.value);
    }

    const handleClick = () => {
        onClick(inputVal);
        setInputVal('');
    }

    return (
        <>
            <input type="text" value={inputVal} onChange={handleChange} />
            <button onClick={handleClick}>{buttonText}</button>
        </>
    )
}

export default InputButton;