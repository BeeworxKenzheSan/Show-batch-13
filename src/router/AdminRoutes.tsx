// import { Navigate } from 'react-router-dom';
// import { AdminLayout } from '../layouts/RouteWrapper/AdminLayout';
// import { PrivateAuthRouteByRole } from './private/PrivateRouteByRole';
// import { MalePage } from '../pages/admin/MalePage';
// import { ChildrenPage } from '../pages/admin/ChildrenPage';
// import { FemalePage } from '../pages/admin/FemalePage';

// type AdminRoutesTypes = {
//     role: "ADMIN" | "CLIENT"
// }

// export const AdminRoutes: React.FC<AdminRoutesTypes> = ({ role }) => {
//     return (
//             <PrivateAuthRouteByRole
//                 RouteComponent={<MalePage />}
//                 role={role}
//                 roles={['ADMIN']}
//                 fallbackPath="/sign-in"
//             />
//             <PrivateAuthRouteByRole
//                 RouteComponent={<ChildrenPage />}
//                 role={role}
//                 roles={['ADMIN']}
//                 fallbackPath="/sign-in"
//             />
//             <PrivateAuthRouteByRole
//                 RouteComponent={<FemalePage />}
//                 role={role}
//                 roles={['ADMIN']}
//                 fallbackPath="/sign-in"
//             />
//     );
// };
