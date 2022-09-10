import {useRoutes} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Pages from "./Pages/Pages";
import Blogs from "./Blogs/Blogs";
import AddPage from "./Pages/AddPage";
import EditPage from "./Pages/EditPage";
import ListPages from "./Pages/ListPages";
import Widgets from "./Widgets/Widgets";
import ListWidgets from "./Widgets/ListWidgets";

const AdminRoutes = () => {
    return useRoutes([
        {
            index: true,
            element: <Dashboard/>
        },
        {

            path: 'pages/*',
            element: <Pages />,
            children: [
                {
                    index: true,
                    element:<ListPages />
                },
                {
                    path: 'create',
                    element: <AddPage />
                },
                {
                    path: 'edit/:id',
                    element: <EditPage />
                }
            ]
        },
        {

            path: 'widgets/*',
            element: <Widgets />,
            children: [
                {
                    index: true,
                    element:<ListWidgets />
                },
                // {
                //     path: 'create',
                //     element: <AddPage />
                // },
                // {
                //     path: 'edit/:id',
                //     element: <EditPage />
                // }
            ]
        },
        {
            path: 'blogs',
            element: <Blogs/>
        },
    ]);
}

export default AdminRoutes;
