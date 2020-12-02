/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular-devkit/core';
export declare class SchematicsException extends BaseException {
}
export declare class FileDoesNotExistException extends BaseException {
    constructor(path: string);
}
export declare class FileAlreadyExistException extends BaseException {
    constructor(path: string);
}
export declare class ContentHasMutatedException extends BaseException {
    constructor(path: string);
}
export declare class InvalidUpdateRecordException extends BaseException {
    constructor();
}
export declare class MergeConflictException extends BaseException {
    constructor(path: string);
}
export declare class UnsuccessfulWorkflowExecution extends BaseException {
    constructor();
}
export declare class UnimplementedException extends BaseException {
    constructor();
}
