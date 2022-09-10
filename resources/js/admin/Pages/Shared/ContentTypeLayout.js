import React from 'react';
import {CONTENT_TYPE_ROW, CONTENT_TYPE_COL} from './contentTypeConstants';

const ContentTypeLayout = (props) => {
    const attributes = typeof props.attributes !== "undefined" ? JSON.parse(props.attributes) : '';
    console.log(attributes);
    switch (props.type) {
        case CONTENT_TYPE_ROW:
        case CONTENT_TYPE_COL:
            return (
                <div {...attributes}>
                    {props.children}
                </div>
            )
        default:
            return '';
    }
}

export default ContentTypeLayout;
