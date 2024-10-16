import CryptoJS from 'crypto-js';

export function decryptData(ciphertext: string, key: string, iv: string, delimiter: string): Record<string, string> {
    const keyUtf = CryptoJS.enc.Utf8.parse(key);
    const ivUtf = CryptoJS.enc.Utf8.parse(iv);
    const decrypted = CryptoJS.AES.decrypt(ciphertext, keyUtf, { iv: ivUtf }).toString(CryptoJS.enc.Utf8);
    const pairs = decrypted.split(delimiter).filter((pair: string) => pair.trim() !== '');
    let jsonData: Record<string, string> = {};
    pairs.forEach((pair) => {
        let [key, ...valueParts] = pair.split('=');
        let value = valueParts.join('=');
        jsonData[key.trim()] = value.trim();
    });
    return jsonData;
}
