/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** The possible ways the browser may handle the horizontal scroll axis in RTL languages. */
export declare const enum RtlScrollAxisType {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL = 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED = 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED = 2
}
/** Check whether the browser supports scroll behaviors. */
export declare function supportsScrollBehavior(): boolean;
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */
export declare function getRtlScrollAxisType(): RtlScrollAxisType;
