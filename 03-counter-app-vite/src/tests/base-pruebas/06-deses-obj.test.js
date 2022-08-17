import {usContext} from '../../base-pruebas/06-deses-obj'
describe('Pruebas en 06-deses-obj', () => {
    
    test('usContext debe de retornar un objeto ', () => { 
        const clave = 123;
        const edad = 12;

        const message = usContext(clave, edad);

        expect( message ).toEqual(
            {nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }

        } );
    });
});