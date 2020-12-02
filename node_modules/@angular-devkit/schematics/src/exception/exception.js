"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
// Used by schematics to throw exceptions.
class SchematicsException extends core_1.BaseException {
}
exports.SchematicsException = SchematicsException;
// Exceptions
class FileDoesNotExistException extends core_1.BaseException {
    constructor(path) { super(`Path "${path}" does not exist.`); }
}
exports.FileDoesNotExistException = FileDoesNotExistException;
class FileAlreadyExistException extends core_1.BaseException {
    constructor(path) { super(`Path "${path}" already exist.`); }
}
exports.FileAlreadyExistException = FileAlreadyExistException;
class ContentHasMutatedException extends core_1.BaseException {
    constructor(path) {
        super(`Content at path "${path}" has changed between the start and the end of an update.`);
    }
}
exports.ContentHasMutatedException = ContentHasMutatedException;
class InvalidUpdateRecordException extends core_1.BaseException {
    constructor() { super(`Invalid record instance.`); }
}
exports.InvalidUpdateRecordException = InvalidUpdateRecordException;
class MergeConflictException extends core_1.BaseException {
    constructor(path) {
        super(`A merge conflicted on path "${path}".`);
    }
}
exports.MergeConflictException = MergeConflictException;
class UnsuccessfulWorkflowExecution extends core_1.BaseException {
    constructor() {
        super('Workflow did not execute successfully.');
    }
}
exports.UnsuccessfulWorkflowExecution = UnsuccessfulWorkflowExecution;
class UnimplementedException extends core_1.BaseException {
    constructor() { super('This function is unimplemented.'); }
}
exports.UnimplementedException = UnimplementedException;
