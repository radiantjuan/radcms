import React, {useState, useEffect, useId} from 'react';
import {CONTENT_TYPE_ROW, CONTENT_TYPE_COL} from './contentTypeConstants';
import  cssClasses from './SharedStyling/ContentTypeLayout.module.scss';
import {toggleContentModal} from "../PagesReducers/pageSlice";
import {useDispatch} from "react-redux";

const ContentTypeLayout = (props) => {
    const [attributes, setAttributes] = useState(typeof props.attributes !== "undefined" ? JSON.parse(props.attributes) : '');
    const dispatch = useDispatch();
    switch (props.content_type.id) {
        case CONTENT_TYPE_ROW:
        case CONTENT_TYPE_COL:
            useEffect(() => {
                if (attributes) {
                    setAttributes({
                        ...attributes,
                        className: attributes.className + ' border-primary position-relative ' + cssClasses.ContentTypeLayoutContainer
                    });
                }
            }, []);
            return (
                <div {...attributes} id={props.content_id + "_content"}>
                    <small className={cssClasses.ContentLabel + ' bg-primary'}>{props.content_type.name}</small>
                    {props.children}
                    <div className="my-2 text-center">
                        <button className="btn btn-primary btn-sm" onClick={() => dispatch(toggleContentModal(true))}><i className="fa fa-plus"></i></button>
                    </div>
                </div>
            )
        default:
            return '';
    }
}

export default ContentTypeLayout;
