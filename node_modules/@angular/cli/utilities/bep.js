"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs = require("fs");
class BepGenerator {
    constructor() { }
    static createBuildStarted(command, time) {
        return {
            id: { started: {} },
            started: {
                command,
                start_time_millis: time == undefined ? Date.now() : time,
            },
        };
    }
    static createBuildFinished(code, time) {
        return {
            id: { finished: {} },
            finished: {
                finish_time_millis: time == undefined ? Date.now() : time,
                exit_code: { code },
            },
        };
    }
}
exports.BepGenerator = BepGenerator;
class BepJsonWriter {
    constructor(filename) {
        this.filename = filename;
        this.stream = fs.createWriteStream(this.filename);
    }
    close() {
        this.stream.close();
    }
    writeEvent(event) {
        const raw = JSON.stringify(event);
        this.stream.write(raw + '\n');
    }
    writeBuildStarted(command, time) {
        const event = BepGenerator.createBuildStarted(command, time);
        this.writeEvent(event);
    }
    writeBuildFinished(code, time) {
        const event = BepGenerator.createBuildFinished(code, time);
        this.writeEvent(event);
    }
}
exports.BepJsonWriter = BepJsonWriter;
