const { generateKeyPairSync } = require('crypto')

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 4096, /// or if you want to use 2048 or you can go over 4096
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    // If you want to add an addtional layer of security then here you can add this passphrase.
    // cipher: 'ase-256-cbc',
    // passphrase: 'Primordial-Serect'
  }
});

console.log(publicKey)
console.log(privateKey)
