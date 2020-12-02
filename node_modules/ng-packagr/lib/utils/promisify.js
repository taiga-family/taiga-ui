"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promisify(resolver) {
    return new Promise((resolve, reject) => {
        resolver((err, value) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(value);
            }
        });
    });
}
exports.promisify = promisify;
//# sourceMappingURL=promisify.js.map