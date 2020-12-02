"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binaries_1 = require("../binaries");
/**
 * The downloaded binary is the binary with the list of versions downloaded.
 */
class DownloadedBinary extends binaries_1.Binary {
    constructor(binary) {
        super();
        this.versions = [];
        this.binary = binary;
        this.name = binary.name;
        this.versionCustom = binary.versionCustom;
    }
    id() {
        return this.binary.id();
    }
    prefix() {
        return null;
    }
    suffix() {
        return null;
    }
    getUrl() {
        return null;
    }
    getVersionList() {
        return null;
    }
}
exports.DownloadedBinary = DownloadedBinary;
//# sourceMappingURL=downloaded_binary.js.map