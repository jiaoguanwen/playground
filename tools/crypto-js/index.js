const CryptoJS = require("crypto-js");

const ciphertext = CryptoJS.AES.encrypt("jiaoguanwen", "jiao").toString();

console.log(ciphertext);

const text = CryptoJS.AES.decrypt(ciphertext, "jiao").toString(
  CryptoJS.enc.Utf8
);

console.log(text);
