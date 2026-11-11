import { useLoaderData } from 'react-router'
import { perfilloader } from '../routes/loaders-actions'

export const Perfil = () => {

    const { sesion, usuarios } = useLoaderData<typeof perfilloader>();

    return (
        <>
            <nav>

            </nav>

            <h3>Este es el perfil de {sesion}</h3>
            <hr />
            <h3>EL numero de usuarios registrados {usuarios.length}</h3>
            {
                usuarios.map((u) => {<li key={u.email}> {u.nombre} - {u.email} </li>})
            }
            
            <footer>  </footer>

        </>
    )
}
