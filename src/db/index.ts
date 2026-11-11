
export type Usuario = {
    nombre: string,
    email: string,
    password: string
}

const KEY_USERS = 'router-users';
const KEY_SESSIONS = 'session-users';

// * 
export const getUsers = (): Usuario[] => {
    const data = localStorage.getItem(KEY_USERS);
    const users = data ? (JSON.parse(data) as Usuario[]) : [];
    return users;

}

export const addUser = ( {nombre,email,password}:Usuario ) =>{
    const data = localStorage.getItem(KEY_USERS);
    const users = data ? (JSON.parse(data) as Usuario[]) : [];
    users.push({nombre,email,password});
}

//* Revisar si existe el usuario
export const userExist = ( email:string ): Usuario | undefined =>{
    return getUsers().find( (u) => u.email === email);
}
//* guardar la sesion de un usuario
export const setSession = (email:string): void => {
    localStorage.setItem(KEY_SESSIONS,email);
} 

//* obtener la sesion
export const getSession = (  ):string | null =>{
    return localStorage.getItem(KEY_SESSIONS);
}

//* cerrar o terminar la sesion
export const deleteSession = ( email:string ) =>{
    localStorage.removeItem(email);
}