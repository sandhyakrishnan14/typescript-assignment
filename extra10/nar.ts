type TextMessage = {
    type: 'text';
    content: string;
};

type ImageMessage = {
    type: 'image';
    imageUrl: string;
};

type Message = TextMessage | ImageMessage;

function isTextMessage(msg: Message): msg is TextMessage {
    return msg.type === 'text';
}

function handleMessage(msg: Message): void {
    if (isTextMessage(msg)) {
        console.log(`Text: ${msg.content}`);
    } else {
        console.log(`Image: ${msg.imageUrl}`);
    }
}
const textMsg: TextMessage = { type: 'text', content: 'Hello, world!' };
const imageMsg: ImageMessage = { type: 'image', imageUrl: 'http://example.com/image.jpg' };

handleMessage(textMsg);  
handleMessage(imageMsg); 