import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateAuthRouteByRoleProps = {
    RouteComponent: React.ReactNode;
    role: "ADMIN" | "CLIENT";
    roles: ("ADMIN" | "CLIENT")[];
    fallbackPath: string;
};

export const PrivateAuthRouteByRole: React.FC<PrivateAuthRouteByRoleProps> = ({ RouteComponent, role, roles, fallbackPath }) => {
    if (!roles.includes(role)) {
        return <Navigate to={fallbackPath} />;
    }
    return <>{RouteComponent}</>;
};
