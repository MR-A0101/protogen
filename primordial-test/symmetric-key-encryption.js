const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

//Cipher-Text:
const message = 'I am the primordial version of the Protogen Project';
const key = randomBytes(32);
const iv = randomBytes(16);

//Encryption:
const cipher = createCipheriv('aes256', key, iv);

const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log('Encrypted:', `${encryptedMessage}`);



//Decryption:
const decipher = createDecipheriv('aes256', key, iv);

const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8') + decipher.final('utf8');
console.log('Decrypted:', `${decryptedMessage}`);
