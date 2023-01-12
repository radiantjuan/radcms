import React, {useEffect, useState} from 'react';
import {Modal, Button, Container, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {fetchContentTypes, toggleContentModal} from "../PagesReducers/pageSlice";
import ContentTypeSettings from "./ContentTypeSettings";
import {setContentParentId} from "../PagesReducers/contentModalSlice";

const ContentModal = (props) => {
    const {content_modal_show, content_types} = useSelector(({pageReducer}) => pageReducer);
    const [content_type, setContentType] = useState(0);
    const dispatch = useDispatch();

    const content_type_options = content_types.map((val) => {
        return (
            <option value={val.name} key={val.id}>{val.name}</option>
        )
    });

    const onContentTypeChange = (event) => {
        setContentType(event.target.value);
    }

    const addEditContentHandler = () => {
        dispatch(toggleContentModal(false));
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
                    <ContentTypeSettings type={content_type}/>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    dispatch(toggleContentModal(false));
                    dispatch(setContentParentId(null))
                }}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={addEditContentHandler}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ContentModal;
