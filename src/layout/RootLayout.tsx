import { Form, Link, Outlet, useLoaderData } from 'react-router'
import { rootLoader } from '../routes/loaders-actions';
export const RootLayout = () => {

    const {email} = useLoaderData<typeof rootLoader>();

    return (
        <>
            <nav>
                <Link to="/"> inicio</Link>
                {email ? (
                        <>
                            <Link to={"/perfil"}> Perfil </Link>
                            <Form method='post' action='/logout'>
                                <button type='submit'> Logout </button>
                            </Form>
                            <b>{email}</b>
                        </>
                    ) : (
                        <>
                            <Link to={'/login'}>Login</Link>
                            <Link to={'/register'}>Registrarme</Link>

                        </>
                    )}
            </nav>
            <hr />
            <Outlet />
        </>
    )
}
