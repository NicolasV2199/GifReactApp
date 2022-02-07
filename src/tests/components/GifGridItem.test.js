import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';




describe('Pruebas en el GifGridItem', () => {
  
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } />);

    test('Debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener un parrafo con el titulo', () => {
      
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title ); 
    });

    test('Debe obtener la imagen igual al url y alt de los props', () => {
      
        const img = wrapper.find('img');

        expect( url ).toBe( img.prop( 'src' ) );
        expect( title ).toBe( img.prop( 'alt' ) );
    });

    test('Debe tener la clase animate__backInLeft', () => {
      
        const div = wrapper.find('div');
        const animation = 'animate__backInLeft';

        expect( div.prop('className')).toContain ( animation );
    });
    
    
    
    
});
