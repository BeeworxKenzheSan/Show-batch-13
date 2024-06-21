import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignInForm } from '../components/AuthForm/SingInForm';
import { SignUpForm } from '../components/AuthForm/SignUpForm';
import { MainLayout } from '../layouts/RouteWrapper/MainLayout';
import { PrivateAuthRoute } from './private/PrivateAuthRoute';
import { MalePage } from '../pages/admin/MalePage';
import { PrivateAuthRouteByRole } from './private/PrivateRouteByRole';
import { AdminLayout } from '../layouts/RouteWrapper/AdminLayout';
import { ChildrenPage } from '../pages/admin/ChildrenPage';
import { FemalePage } from '../pages/admin/FemalePage';

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
    const router = createBrowserRouter([
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
                            fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                            isAuthorized={!isAuthorized}
                        />
                    ),
                },
                {
                    path: 'sign-in',
                    element: (
                        <PrivateAuthRoute
                            RouteComponent={<SignInForm />}
                            fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                            isAuthorized={!isAuthorized}
                        />
                    ),
                },
            ],
        },
        {
            path: '/admin',
            element: (
                <PrivateAuthRoute
                    RouteComponent={<AdminLayout />}
                    fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                    isAuthorized={isAuthorized}
                />
            ),

            children: [
                { index: true, element: <Navigate to="male" /> },
                {
                    path: 'male',
                    element: (
                        <PrivateAuthRouteByRole
                            RouteComponent={<MalePage />}
                            role={role}
                            roles={['ADMIN']}
                            fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                        />
                    ),
                },
                {
                    path: 'children',
                    element: (
                        <PrivateAuthRouteByRole
                            RouteComponent={<ChildrenPage />}
                            role={role}
                            roles={['ADMIN']}
                            fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                        />
                    ),
                },
                {
                    path: 'female',
                    element: (
                        <PrivateAuthRouteByRole
                            RouteComponent={<FemalePage />}
                            role={role}
                            roles={['ADMIN']}
                            fallbackPath={role === 'ADMIN' ? pathsByRole.ADMIN : pathsByRole.CLIENT}
                        />
                    ),
                },
            ],
        },
        { path: '/client/*', element: <h1>Client Page</h1> },
        { path: '*', element: <h1>Not Found</h1> },
    ]);

    return <RouterProvider router={router} />;
};
