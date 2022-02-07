import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';



describe('Pruebas en el hook useFetchGifs', () => {
  
    test('Debe de retornar el estado inicial', async() => {

        //Utilizamos 
       const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One punch' ) );
       const { data, loading } = result.current;
       await waitForNextUpdate();

       expect( data.length ).toBe( 0 );
       expect( loading ).toBe( true );
    });

    test('Debe retornar un arreglo de img y el loading en false ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

      
    });
    
    
});
