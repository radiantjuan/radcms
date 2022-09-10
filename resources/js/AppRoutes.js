import {useRoutes} from 'react-router-dom';
import FrontEndApp from "./frontend/FrontEndApp";
import AdminApp from "./admin/AdminApp";

const AppRoutes = () => {
    return useRoutes([
        {
            path: '/',
            element: <FrontEndApp/>
        },
        {
            path: 'admin/*',
            element: <AdminApp/>,
        }
    ]);
}

export default AppRoutes;
