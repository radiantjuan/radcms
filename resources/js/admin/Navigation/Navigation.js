import React, {useEffect, useState} from "react";
import '../styles/Styles.scss';
import NavigationItems from "./NavigationItems";
import {useLocation} from "react-router-dom";

const Navigation = () => {
    const [Navigation, setNavigation] = useState([]);

    useEffect(() => {
        axios.get('/api/menus?menu_type=admin').then((response) => {
            setNavigation(response.data);
        });
    }, []);

    const NavLinks = Navigation.map((navList, index) => {
        return (
            <NavigationItems key={index} label={navList.label} url={navList.url} classes={navList.classes}/>
        )
    });

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100 side-bar-container">
            <a href="/resources/js/admin/Pages"
               className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32">
                    <use href="#bootstrap"/>
                </svg>
                <span className="fs-4">RCJ CMS</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                {NavLinks}
            </ul>
            <hr/>
            <div className="dropdown">
                <a href="resources/js/admin/Navigation/Navigation#"
                   className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                   id="dropdownUser1"
                   data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32"
                         className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="resources/js/admin/Navigation/Navigation#">New project...</a>
                    </li>
                    <li><a className="dropdown-item" href="resources/js/admin/Navigation/Navigation#">Settings</a></li>
                    <li><a className="dropdown-item" href="resources/js/admin/Navigation/Navigation#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="resources/js/admin/Navigation/Navigation#">Sign out</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
