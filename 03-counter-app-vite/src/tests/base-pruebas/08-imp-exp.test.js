import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('pruebas en 08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => {
       
        const id = 1;
        const hero = getHeroeById (id);

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
       
        const id = 100;
        const hero = getHeroeById (id);

        expect( hero ).toBeFalsy();

    });


    //Tarea:
    // Debe retornar un arreglo con los horoes de DC
    // Length === 3
    // toEqual al arreglo filtrado


    test('debe retornar un arreglo con los heroes de DC', () => {
    
        const owner = 'DC';
        const heroesDc = getHeroesByOwner (owner);

        expect( heroesDc.length ).toBe( 3 );

        expect( heroesDc ).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]);

    });


    // debe retornar un arreglo con los heroes de Marvel
    // length === 2

    test('debe retornar un arreglo con los heroes de Marvel', () => {
    
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner (owner);

        expect( heroesMarvel.length ).toBe( 2 );

        expect( heroesMarvel ).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }]
        );
    });

});