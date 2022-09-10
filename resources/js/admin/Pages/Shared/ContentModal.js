import React, {useEffect, useState} from 'react';
import {Modal, Button, Container, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchContentTypes, toggleContentModal} from "../PagesReducers/pageSlice";
import ContentTypeFields from "./ContentTypeFields";

const ContentModal = (props) => {
    const {content_modal_show, content_types} = useSelector(({pageReducer}) => pageReducer);
    const [content_type, setContentType] = useState([]);
    const dispatch = useDispatch();

    const content_type_options = content_types.map((val) => {
       return (
           <option value={val.id} key={val.id}>{val.name}</option>
       )
    });

    const onContentTypeChange = (event) => {
        setContentType(parseInt(event.target.value));
    }

    useEffect(() => {
        if (content_modal_show) {
            dispatch(fetchContentTypes());
        } else {
            setContentType([]);
        }
    }, [content_modal_show]);

    return (
        <Modal show={content_modal_show} onHide={() => dispatch(toggleContentModal(false))} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add/Edit Content</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container fluid>
                    <Form.Group className="mb-3" controlId="contentTypeSelect">
                        <Form.Label>Content Type</Form.Label>
                        <Form.Select onChange={onContentTypeChange}>
                            <option>Select content type</option>
                            {content_type_options}
                        </Form.Select>
                    </Form.Group>
                    <ContentTypeFields type={content_type}/>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(toggleContentModal(false))}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => dispatch(toggleContentModal(false))}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContentModal;
