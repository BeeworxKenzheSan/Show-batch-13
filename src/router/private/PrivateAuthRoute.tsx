import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateAuthRouteProps {
    RouteComponent: ReactElement;
    isAuthorized: boolean;
    fallbackPath: string;
}

export const PrivateAuthRoute: FC<PrivateAuthRouteProps> = ({
    RouteComponent,
    isAuthorized,
    fallbackPath,
}) => {
    if (isAuthorized) {
        return RouteComponent;
    }

    return <Navigate to={fallbackPath} replace />;
};