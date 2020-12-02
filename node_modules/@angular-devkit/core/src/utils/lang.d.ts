/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
/**
 * Determine if the argument is shaped like a Promise
 */
export declare function isPromise(obj: any): obj is Promise<any>;
/**
 * Determine if the argument is an Observable
 * @deprecated as of 8.0; use rxjs' built-in version
 */
export declare function isObservable(obj: any | Observable<any>): obj is Observable<any>;
