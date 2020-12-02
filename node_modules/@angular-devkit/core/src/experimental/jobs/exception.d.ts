/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '../../exception/index';
import { JobName } from './api';
export declare class JobNameAlreadyRegisteredException extends BaseException {
    constructor(name: JobName);
}
export declare class JobDoesNotExistException extends BaseException {
    constructor(name: JobName);
}
