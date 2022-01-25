const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./RSA-key_pair');

const message = 'This is Primordial One';

const signer = createSign('rsa-sha256');
signer.update(message);

const signature = signer.sign(privateKey, 'base64');

//Verify the base64

const verifier = createVerify('rsa-sha256');

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, 'base64');
