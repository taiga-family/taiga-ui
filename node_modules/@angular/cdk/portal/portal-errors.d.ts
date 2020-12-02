/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Throws an exception when attempting to attach a null portal to a host.
 * @docs-private
 */
export declare function throwNullPortalError(): void;
/**
 * Throws an exception when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
export declare function throwPortalAlreadyAttachedError(): void;
/**
 * Throws an exception when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
export declare function throwPortalOutletAlreadyDisposedError(): void;
/**
 * Throws an exception when attempting to attach an unknown portal type.
 * @docs-private
 */
export declare function throwUnknownPortalTypeError(): void;
/**
 * Throws an exception when attempting to attach a portal to a null host.
 * @docs-private
 */
export declare function throwNullPortalOutletError(): void;
/**
 * Throws an exception when attempting to detach a portal that is not attached.
 * @docs-private
 */
export declare function throwNoPortalAttachedError(): void;
