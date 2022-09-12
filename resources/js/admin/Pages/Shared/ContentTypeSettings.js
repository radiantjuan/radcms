import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ContentTypeSettingsFields from "./ContentTypeSettingsFields";
import {removeFieldValues} from "../PagesReducers/contentModalSlice";

const ContentTypeSettings = (props) => {
    const content_types_settings = useSelector(({contentModalReducer}) => contentModalReducer.content_types_settings);
    const dispatch = useDispatch();
    useEffect(() => {
        if (typeof content_types_settings[props.type] !== 'undefined') {
            dispatch(removeFieldValues(props.type));
        }
    }, [props.type]);

    if (typeof content_types_settings[props.type] !== 'undefined') {
        return content_types_settings[props.type].settings.map((val) => {
            return (
                <ContentTypeSettingsFields {...val} key={val.id} content_type={props.type}/>
            )
        });
    }

    return '';
}

export default ContentTypeSettings;
