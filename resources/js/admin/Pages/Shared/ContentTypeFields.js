import React from 'react';
import {Form} from "react-bootstrap";
import {CONTENT_TYPE_ROW, CONTENT_TYPE_COL} from './contentTypeConstants';

const ContentTypeFields = (props) => {
    switch (props.type) {
        case CONTENT_TYPE_ROW:
            return (
                <React.Fragment>
                    <Form.Group className="mb-3" controlId="backgroundImage">
                        <Form.Label>Background Image</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="classNames">
                        <Form.Label>Additional Class Names</Form.Label>
                        <Form.Control type="text" placeholder="Enter class names (e.g. class1 class2 class3)"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="elementId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter element ID"/>
                    </Form.Group>
                </React.Fragment>
            );
        case CONTENT_TYPE_COL:
            const size = [];
            for (let i = 1; i <= 12; i++) {
                size.push(<option value={i} key={i}>{i}</option>);
            }

            return (
                <React.Fragment>
                    <Form.Group className="mb-3" controlId="backgroundImage">
                        <Form.Label>Background Image</Form.Label>
                        <Form.Control type="file"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="classNames">
                        <Form.Label>Additional Class Names</Form.Label>
                        <Form.Control type="text" placeholder="Enter class names (e.g. class1 class2 class3)"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="elementId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter element ID"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="columnSizeSelect">
                        <Form.Label>Size</Form.Label>
                        <Form.Select>
                            <option>Select column size</option>
                            {size}
                        </Form.Select>
                    </Form.Group>
                </React.Fragment>
            );
        default:
            return '';
    }
}

export default ContentTypeFields;
