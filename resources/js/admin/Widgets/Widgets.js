import React, {useEffect, useState} from "react";
import './Widgets.scss';
import {Outlet} from "react-router-dom";

const Widgets = (props) => {
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Widgets
                        </a>
                    </div>
                </nav>
            </div>
            <div className="container-fluid p-3">
                <Outlet/>
            </div>
        </div>
    )
}

export default Widgets;
