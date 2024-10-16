import CryptoJS from 'crypto-js';

export function encryptData(data: Record<string, any>, key: string, iv: string, delimiter: string): string {
    const keyUtf = CryptoJS.enc.Utf8.parse(key);
    const ivUtf = CryptoJS.enc.Utf8.parse(iv);
    const formattedString = Object.keys(data)
        .map(key => `${key}=${data[key]}`)
        .join(delimiter);
    const dataWithChecksum = `${formattedString}|CheckSum=${CryptoJS.SHA256(formattedString).toString(CryptoJS.enc.Hex)}`;
    const encrypted = CryptoJS.AES.encrypt(dataWithChecksum, keyUtf, { iv: ivUtf });
    const ciphertext = encrypted.toString();
    return ciphertext;
}
