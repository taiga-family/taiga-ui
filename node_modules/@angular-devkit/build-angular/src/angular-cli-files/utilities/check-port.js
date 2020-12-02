"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const net = require("net");
function checkPort(port, host, basePort = 49152) {
    return new Promise((resolve, reject) => {
        function _getPort(portNumber) {
            if (portNumber > 65535) {
                reject(new Error(`There is no port available.`));
            }
            const server = net.createServer();
            server.once('error', (err) => {
                if (err.code !== 'EADDRINUSE') {
                    reject(err);
                }
                else if (port === 0) {
                    _getPort(portNumber + 1);
                }
                else {
                    // If the port isn't available and we weren't looking for any port, throw error.
                    reject(new Error(`Port ${port} is already in use. Use '--port' to specify a different port.`));
                }
            })
                .once('listening', () => {
                server.close();
                resolve(portNumber);
            })
                .listen(portNumber, host);
        }
        _getPort(port || basePort);
    });
}
exports.checkPort = checkPort;
