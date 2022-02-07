import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    //Se utiliza para que la funcion getgifs solo se llame cuando se renderiza el componente por primera vez
    /* Tiene un parametro que es un arreglo de dependencias, en este caso, vacio */
    //Se agrega la categoria en el arreglo de dependencias por si acaso llegase a cambiar.

    return (
        <>
            <h2 className='animate__animated animate__fadeInDown'> {category} </h2>

            {loading && <p className='animate__animated animate__flash animate__slow'>Loading...</p>}

            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
