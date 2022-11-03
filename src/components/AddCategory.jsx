import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (event) => {
    setinputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    const newValue = inputValue.trim();
    if ( newValue.length <= 1 ) return;

    // setCategories( (categories) => [ inputValue, ...categories ] );
    // podemos hacerlo que solo devuelva el valor que quiero agregar y no todo el array
    // hacemos:
    onNewCategory(newValue);

    setinputValue("");

  }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
      <input 
        type="text"
        placeholder="Buscar Gifs"  
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
      />
    </form>
  )
}
