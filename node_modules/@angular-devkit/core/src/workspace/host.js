"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const virtual_fs_1 = require("../virtual-fs");
function createWorkspaceHost(host) {
    const workspaceHost = {
        async readFile(path) {
            const data = await host.read(virtual_fs_1.normalize(path)).toPromise();
            return virtual_fs_1.virtualFs.fileBufferToString(data);
        },
        async writeFile(path, data) {
            return host.write(virtual_fs_1.normalize(path), virtual_fs_1.virtualFs.stringToFileBuffer(data)).toPromise();
        },
        async isDirectory(path) {
            try {
                return await host.isDirectory(virtual_fs_1.normalize(path)).toPromise();
            }
            catch (_a) {
                // some hosts throw if path does not exist
                return false;
            }
        },
        async isFile(path) {
            try {
                return await host.isFile(virtual_fs_1.normalize(path)).toPromise();
            }
            catch (_a) {
                // some hosts throw if path does not exist
                return false;
            }
        },
    };
    return workspaceHost;
}
exports.createWorkspaceHost = createWorkspaceHost;
