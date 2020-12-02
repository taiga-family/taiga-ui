"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const process = require("process");
const benchmark_1 = require("./benchmark");
const diagnostics_1 = require("./diagnostics");
const type_checker_1 = require("./type_checker");
const type_checker_messages_1 = require("./type_checker_messages");
let typeChecker;
let lastCancellationToken;
// only listen to messages if started from the AngularCompilerPlugin
if (process.argv.indexOf(type_checker_1.AUTO_START_ARG) >= 0) {
    process.on('message', (message) => {
        benchmark_1.time('TypeChecker.message');
        switch (message.kind) {
            case type_checker_messages_1.MESSAGE_KIND.Init:
                const initMessage = message;
                typeChecker = new type_checker_1.TypeChecker(initMessage.compilerOptions, initMessage.basePath, initMessage.jitMode, initMessage.rootNames, initMessage.hostReplacementPaths);
                break;
            case type_checker_messages_1.MESSAGE_KIND.Update:
                if (!typeChecker) {
                    throw new Error('TypeChecker: update message received before initialization');
                }
                if (lastCancellationToken) {
                    // This cancellation token doesn't seem to do much, messages don't seem to be processed
                    // before the diagnostics finish.
                    lastCancellationToken.requestCancellation();
                }
                const updateMessage = message;
                lastCancellationToken = new diagnostics_1.CancellationToken();
                typeChecker.update(updateMessage.rootNames, updateMessage.changedCompilationFiles, lastCancellationToken);
                break;
            default:
                throw new Error(`TypeChecker: Unexpected message received: ${message}.`);
        }
        benchmark_1.timeEnd('TypeChecker.message');
    });
}
