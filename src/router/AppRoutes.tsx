import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignInForm } from '../components/AuthForm/SingInForm';
import { SignUpForm } from '../components/AuthForm/SignUpForm';
import { MainLayout } from '../layouts/RouteWrapper/MainLayout';
import { PrivateAuthRoute } from './private/PrivateAuthRoute';

interface Role {
    ADMIN: string;
    CLIENT: string;
}

interface AppRoutesProps {
    isAuthorized: boolean;
    role: keyof Role;
}


const pathsByRole: Role = {
    ADMIN: '/admin',
    CLIENT: '/client',
};

export const AppRoutes: React.FC<AppRoutesProps> = ({ isAuthorized, role }) => {
    const element = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { index: true, element: <Navigate to="sign-up" /> },
                {
                    path: 'sign-up',
                    element: (
                        <PrivateAuthRoute
                            RouteComponent={<SignUpForm />}
                            fallbackPath={pathsByRole[role]}
                            isAuthorized={!isAuthorized}
                        />
                    ),
                },
                {
                    path: 'sign-in',
                    element: (
                        <PrivateAuthRoute
                            RouteComponent={<SignInForm />}
                            fallbackPath={pathsByRole[role]}
                            isAuthorized={!isAuthorized}
                        />
                    ),
                },
            ],
        },
        // {
        //     path: '/admin/*',
        //     element: (
        //         <PrivateAuthRoute
        //             RouteComponent={<AdminRoutes role={role} />}
        //             fallbackPath="/sign-in"
        //             isAuthorized={isAuthorized}
        //         />
        //     ),
        // },
        { path: '/client/*', element: <h1>Client Page</h1> },
        { path: '*', element: <h1>Not Found</h1> },
    ]);

    return <RouterProvider router={element} />;
};