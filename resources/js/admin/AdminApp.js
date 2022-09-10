import React, {useContext} from "react";
import Navigation from './Navigation/Navigation';
import AdminRoutes from "./AdminRoutes";
import {store} from './Redux/store';
import {Provider} from 'react-redux';

function AdminApp() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 px-0">
                        <Navigation/>
                    </div>
                    <div className="col-10 px-0">
                        <Provider store={store}>
                            <AdminRoutes/>
                        </Provider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminApp;
