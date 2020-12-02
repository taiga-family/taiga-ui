/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Injector } from '@angular/core';
/**
 * Custom injector to be used when providing custom
 * injection tokens to components inside a portal.
 * @docs-private
 */
export declare class PortalInjector implements Injector {
    private _parentInjector;
    private _customTokens;
    constructor(_parentInjector: Injector, _customTokens: WeakMap<any, any>);
    get(token: any, notFoundValue?: any): any;
}
