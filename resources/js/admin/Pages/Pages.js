import React, {useEffect} from "react";
import './Pages.scss';
import {Outlet} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import Banners from "../Shared/Banners";
import {toggleSavingStatus} from "../Redux/isSavingStatusSlice";

const Pages = () => {
    const successBannerState = useSelector((state) => state.successBanner);
    const isSavingStatus = useSelector((state) => state.isSavingStatus.status);
    const dispatch = useDispatch();
    const BannersAlert = (
        <Banners alertType={successBannerState.alertType}>{successBannerState.alertMessage}</Banners>);
    useEffect(() => {
        if (isSavingStatus && successBannerState.alertType === 'success') {
            setTimeout(() => {
                dispatch(toggleSavingStatus({status: 0}));
            }, 5000);
        }
    }, [isSavingStatus]);
    return (
        <div>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Pages
                        </a>
                    </div>
                </nav>
            </div>
            <div className="container-fluid p-3">
                {(isSavingStatus) ? BannersAlert : ''}
                <Outlet/>
            </div>
        </div>
    )
}

export default Pages;
