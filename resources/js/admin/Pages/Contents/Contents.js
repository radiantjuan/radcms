import React, {useState, useEffect, useId} from 'react';
import cssCLasses from './ContentStyles.module.scss';
import ContentModal from "../Shared/ContentModal";
import {toggleContentModal} from "../PagesReducers/pageSlice";
import {useDispatch, useSelector} from "react-redux";
import ContentTypeLayout from "../Shared/ContentTypeLayout";

const Contents = (props) => {
    const [contentTemplate, setContentTemplate] = useState('');
    const {loading} = useSelector(({pageReducer}) => pageReducer);
    const dispatch = useDispatch();
    const iterateContents = (contents) => {
        return contents.map((val) => {
            if (val.children_content.length > 0) {
                return (<ContentTypeLayout key={val.id} content_id={val.id} content_type={val.content_type} attributes={val.attributes}>{iterateContents(val.children_content)}</ContentTypeLayout>);
            }
            return (<ContentTypeLayout key={val.id} content_id={val.id} content_type={val.content_type} attributes={val.attributes}>{val.value}</ContentTypeLayout>);
        });
    }

    useEffect(() => {
        if (typeof props.contents !== 'undefined') {
            const contentsCombined = iterateContents(props.contents);
            setContentTemplate(contentsCombined);
        }
    }, [props.contents]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://via.placeholder.com/100" alt="" width="30" height="24"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="banner-container">
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                        <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the examples below for how you can
                            remix and restyle it to your liking.</p>
                        <button className="btn btn-primary btn-lg" type="button">Example button</button>
                    </div>
                </div>
            </div>
            <h3>Enter Content Here</h3>
            <div id="contentContainerParent" className={cssCLasses.ContentContainer + ' p-1'}>
                {(loading) ? 'loading...' : (
                    <React.Fragment>
                        <div className="container-fluid">
                            {contentTemplate}
                        </div>
                        <div className="my-2 text-center">
                            <button className="btn btn-primary btn-sm" onClick={() => dispatch(toggleContentModal(true))}><i className="fa fa-plus"></i></button>
                        </div>
                    </React.Fragment>
                )}
            </div>
            <ContentModal />
            <footer className="p-3 bg-dark mt-3">
                <div className="container">
                    <div className="text-center fs-6 fst-italic text-light">
                        Copyright@RCJWorks 2022
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contents;
