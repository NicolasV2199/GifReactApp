import React, { useState } from 'react';
import PropTypes from 'prop-types';



//Recibo por parametros la funcion de set categories para agregar nuevas
export const AddCategory = ({ setCategories }) => {

    //Uso el hook useState para poder cambiar el valor del input
    const [inputValue, setInputValue] = useState('');

    //Me encargo de que cuando haya un cambio en el input, se muestre el nuevo valor
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    /* //Cuando se presione la tecla Enter prevengo que se refresque la pagina, y hago la validacion de que si lo que se inserta es una categoria, entonces llamo a la funcion setCategories que me retorna las categorias que ya tenia, mas el valor insertado en el input, y reinicio el input a vacio*/
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( cat => [ inputValue, ...cat,] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange } 
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
