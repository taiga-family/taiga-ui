"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToFileBuffer(str) {
    // If we're in Node...
    if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
        const buf = Buffer.from(str);
        const ab = new ArrayBuffer(buf.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            view[i] = buf[i];
        }
        return ab;
    }
    else if (typeof TextEncoder !== 'undefined') {
        // Modern browsers implement TextEncode.
        return new TextEncoder('utf-8').encode(str).buffer;
    }
    else {
        // Slowest method but sure to be compatible with every platform.
        const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        const bufView = new Uint16Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
}
exports.stringToFileBuffer = stringToFileBuffer;
exports.fileBuffer = (strings, ...values) => {
    return stringToFileBuffer(String.raw(strings, ...values));
};
function fileBufferToString(fileBuffer) {
    if (fileBuffer.toString.length == 1) {
        return fileBuffer.toString('utf-8');
    }
    else if (typeof Buffer !== 'undefined') {
        return Buffer.from(fileBuffer).toString('utf-8');
    }
    else if (typeof TextDecoder !== 'undefined') {
        // Modern browsers implement TextEncode.
        return new TextDecoder('utf-8').decode(new Uint8Array(fileBuffer));
    }
    else {
        // Slowest method but sure to be compatible with every platform.
        const bufView = new Uint8Array(fileBuffer);
        const bufLength = bufView.length;
        let result = '';
        let chunkLength = Math.pow(2, 16) - 1;
        // We have to chunk it because String.fromCharCode.apply will throw
        // `Maximum call stack size exceeded` on big inputs.
        for (let i = 0; i < bufLength; i += chunkLength) {
            if (i + chunkLength > bufLength) {
                chunkLength = bufLength - i;
            }
            result += String.fromCharCode.apply(null, bufView.subarray(i, i + chunkLength));
        }
        return result;
    }
}
exports.fileBufferToString = fileBufferToString;
