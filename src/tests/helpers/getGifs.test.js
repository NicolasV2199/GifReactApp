import { getGifs } from '../../helpers/getGifs';



describe('Pruebas en el fetch', () => {
  
  test('Debe de traer 10 elementos', async() => {
    
    const gifs = await getGifs('Naruto');

    expect( gifs.length ).toBe( 10 );
    
  });

  test('No debe mostrar nada si no mandan el parametro', async() => {
    
    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );
  });
  
  
});
