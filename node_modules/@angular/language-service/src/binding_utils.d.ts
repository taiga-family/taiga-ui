/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/language-service/src/binding_utils" />
/**
 * Represents possible Angular attribute bindings, as indices on a match of `BIND_NAME_REGEXP`.
 */
export declare enum ATTR {
    /** "bind-" */
    KW_BIND = 1,
    /** "let-" */
    KW_LET = 2,
    /** "ref-/#" */
    KW_REF = 3,
    /** "on-" */
    KW_ON = 4,
    /** "bindon-" */
    KW_BINDON = 5,
    /** "@" */
    KW_AT = 6,
    /**
     * "*"
     * Microsyntax template starts with '*'. See https://angular.io/api/core/TemplateRef
     */
    KW_MICROSYNTAX = 7,
    /** The identifier after "bind-", "let-", "ref-/#", "on-", "bindon-", "@", or "*" */
    IDENT_KW = 8,
    /** Identifier inside [()] */
    IDENT_BANANA_BOX = 9,
    /** Identifier inside [] */
    IDENT_PROPERTY = 10,
    /** Identifier inside () */
    IDENT_EVENT = 11
}
export interface BindingDescriptor {
    kind: ATTR;
    name: string;
}
/**
 * Returns a descriptor for a given Angular attribute, or undefined if the attribute is
 * not an Angular attribute.
 */
export declare function getBindingDescriptor(attribute: string): BindingDescriptor | undefined;
