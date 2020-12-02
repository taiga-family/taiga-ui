/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis,undefinedVars}
 */
/// <amd-module name="zone.js/lib/common/error-rewrite" />
/**
 * Extend the Error with additional fields for rewritten stack frames
 */
interface Error {
    /**
     * Stack trace where extra frames have been removed and zone names added.
     */
    zoneAwareStack?: string;
    /**
     * Original stack trace with no modifications
     */
    originalStack?: string;
}
