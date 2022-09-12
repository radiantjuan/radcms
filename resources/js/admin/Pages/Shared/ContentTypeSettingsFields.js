import React from "react";
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {populateFieldValues} from "../PagesReducers/contentModalSlice";

const FORM_TYPE_TEXT = 'text';
const FORM_TYPE_FILE = 'file';
const FORM_TYPE_SELECT = 'select';

const ContentTypeSettingsFields = (props) => {
    const content_types_settings_values = useSelector(({contentModalReducer}) => contentModalReducer.content_types_settings);
    const dispatch = useDispatch();
    const formChangeHandler = (event) => {
        if (event.target.type === FORM_TYPE_FILE) {
            const [file] = event.target.files;
            const src = URL.createObjectURL(file)
            dispatch(populateFieldValues({
                id: event.target.id,
                value: {
                    src: src,
                    name: file.name,
                    type: file.type,
                    size: file.size
                },
                content_type: props.content_type
            }));
        } else {
            dispatch(populateFieldValues({
                id: event.target.id,
                value: event.target.value,
                content_type: props.content_type
            }));
        }
    }

    const form_value = typeof content_types_settings_values[props.content_type].settings_values[props.id] !== 'undefined'
        ? content_types_settings_values[props.content_type].settings_values[props.id]
        : '';
    switch (props.type) {
        case FORM_TYPE_FILE:
            return (
                <Form.Group className="mb-3" controlId={props.id}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control type={props.type} placeholder={props.placeholder} onChange={formChangeHandler} />
                    <img src={form_value.src} alt={form_value} className="w-25 mt-1"/>
                </Form.Group>
            )
        case FORM_TYPE_TEXT:
            return (
                <Form.Group className="mb-3" controlId={props.id}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control type={props.type} placeholder={props.placeholder} onChange={formChangeHandler}
                                  value={form_value}/>
                </Form.Group>
            )
        case FORM_TYPE_SELECT:
            const size = props.options.map((val) => {
                return <option value={val.value} key={val.value}>{val.label}</option>
            })
            return (
                <Form.Group className="mb-3" controlId={props.id}>
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Select onChange={formChangeHandler} defaultChecked={form_value}>
                        <option>{props.placeholder}</option>
                        {size}
                    </Form.Select>
                </Form.Group>
            )
        default:
            return false;
    }
}

export default ContentTypeSettingsFields;
