const { createHmac } = require('crypto');

//Key one
const key1 =' First-Key: ';
const message ='Hey, Hello this is the Protogen-Primordial-Test(1)';
const hmac1 = createHmac('sha256', key1).update(message).digest('base64');

console.log(key1, hmac1);

const key2 = 'Second-Key: ';
const hmac2 = createHmac('sha256', key2).update(message).digest('base64');

console.log(key2, hmac2);
