import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Naruto']);

  /*   const handleAdd = () =>{
        //Recibo el estado anterior, y retorno una copia del anterior, mas el nuevo
        setCategories( cat => [...cat, 'Boruto'] );
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories = { setCategories } />

            <ol>
                {
                    categories.map(cat => (
                        <GifGrid 
                        key={cat}
                        category={ cat }

                        />
                    ))
                }
            </ol>

        </>
    );
}



export default GifExpertApp;
