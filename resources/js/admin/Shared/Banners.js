import React from "react";

const Banners = (props) => {
    const alerType = 'alert alert-' + props.alertType;
    return (
        <div className={alerType} role="alert">
            {props.children}
        </div>
    )
}

export default Banners;
