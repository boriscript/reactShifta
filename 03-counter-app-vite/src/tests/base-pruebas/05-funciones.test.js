import { getUser } from "../../base-pruebas/05-funciones";
import { getUsuarioActivo} from "../../base-pruebas/05-funciones"

describe('Pruebas 05-funciones', () => {
   
    test('getUser debe retornar un objecto', () => { 
        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        };

        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
    
        const name = 'Fernando';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });

    })
});