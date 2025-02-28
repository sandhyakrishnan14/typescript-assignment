"use strict";
function isTextMessage(msg) {
    return msg.type === 'text';
}
function handleMessage(msg) {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    }
    else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}
const textMsg = { type: 'text', content: 'Hello, world!' };
const imageMsg = { type: 'image', imageUrl: 'http://example.com/image.jpg' };
handleMessage(textMsg);
handleMessage(imageMsg);
