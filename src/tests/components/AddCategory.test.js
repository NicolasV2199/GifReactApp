import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import React from 'react';



describe('Pruebas en el componente', () => {

    
    //Usamos el jest para tener detalles de la funcion que necesita el AddCategory en sus props
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    
    beforeEach ( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });



    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('Debe cambiar la caja de texto ', () => {
      
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        //El handle change espera un evento, que contiene un elemento target, y este contiene el value
        input.simulate( 'change', { target: { value} } );

        expect( wrapper.find('p').text().trim() ).toBe ( value );
    });

    test('No debe postear info on submit si no escribe nada en el input', () => {
      
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar el input ', () => {
      
        //1.Simular el inputchange 
        const value = 'Holi bots';
        wrapper.find('input').simulate('change', { target: { value } });

        //2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        //3. setCategories debe haber sido llamado
        expect( setCategories ).toHaveBeenCalled();
        //Decimos que esperamos que se llame al setCategories y tenga una funcion de parametro
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        //4. El valor del input debe estar vacio 
        expect( wrapper.find('input').prop('value') ).toBe('');
    });
    
    
    

});
