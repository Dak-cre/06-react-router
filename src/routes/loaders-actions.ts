
import { redirect, type ActionFunctionArgs } from 'react-router';
import { addUser, deleteSession, getSession, getUsers, setSession, userExist, type Usuario } from '../db';

//? Programar los 
//! LOADERS y ACTIONS

/*
    /login
    /perfil
    /home
    /register
    /lagout
*/

export const rootLoader = () => {
    // Layout
    return { email: getSession() };
}

export const perfilloader = () => {
    // Verificar la sesion
    const sesion = getSession();
    if (!sesion) throw redirect('/login');
    //* Conectrse a la bd, cargr los dtos del usuario de la sesion
    const usuarios = getUsers();
    return { sesion, usuarios }
}
//? ACTIONS
//* Se usa para procesar informacion, como informacion de un formulario
//* logearse, registrarse y demas
export const registerAction = async ({ request }: ActionFunctionArgs) => {
    //TODO traemos informacion desde un formulario
    const formData = await request.formData();

    const nombre: string = formData.get('nombre') as string;
    const email: string = formData.get('email') as string;
    const password: string = formData.get('password') as string;
    //* La validacion de datos se debe hacer en el componente, no en esta parte
    //* hasta aqui deben llegar ya datos verificados, se puede usar Zod para agregar reglas 
    //* de verificacion
    addUser({ nombre, email, password });

    redirect('/perfil');

}

//?Formulario para logearse (login)
export const loginAction = async ({ request }: ActionFunctionArgs) => {

    const formData = await request.formData();
    const email: string = formData.get('email') as string;
    const password: string = formData.get('password') as string;

    const user = userExist(email);
    //* esto se hace si no existe el usuario
    if (!user) throw redirect('/login');

    setSession(email);
    redirect('/perfil')


}

export const logout = () => {
    deleteSession();
    redirect('/login')
}




