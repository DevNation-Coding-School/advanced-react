import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = props => {
    console.log('DemoOutput')
    return (
        // <p>{props.show ? 'This is a paragraph' : ''}</p>
        <MyParagraph>{props.show ? 'This is a paragraph' : ''}</MyParagraph>
    )
}

export default React.memo(DemoOutput);