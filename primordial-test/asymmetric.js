const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./RSA-key_pair');

const message = 'Primordial Serect is compromised, change the key'

const encryptedData = publicEncrypt(
  publicKey,
  Buffer.from(message)
  );

console.log(encryptedData.toString('base64'));


const decryptedData = privateDecrypt(
  privateKey,
  encryptedData
);

console.log(decryptedData.toString('utf-8'));
