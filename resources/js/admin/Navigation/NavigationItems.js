import React from "react";
import {Link, matchPath, useLocation, matchRoutes} from "react-router-dom";

const NavigationItems = ({url, classes, label}) => {
    const currentLoc = useLocation();
    const match = matchPath({
        path: currentLoc.pathname,
        exact: false,
        strict: false
    }, url);

    if (match) {
        classes += ' active';
    }
    return (
        <li className="nav-item">
            <Link to={url} className={classes}>
                <svg className="bi me-2" width="16" height="16">
                    <use href="#grid"/>
                </svg>
                {label}
            </Link>
        </li>
    );
}

export default NavigationItems;
