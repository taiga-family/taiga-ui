/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/ngcc_references_registry" />
import * as ts from 'typescript';
import { ReferencesRegistry } from '../../../src/ngtsc/annotations';
import { Reference } from '../../../src/ngtsc/imports';
import { ConcreteDeclaration, ReflectionHost } from '../../../src/ngtsc/reflection';
/**
 * This is a place for DecoratorHandlers to register references that they
 * find in their analysis of the code.
 *
 * This registry is used to ensure that these references are publicly exported
 * from libraries that are compiled by ngcc.
 */
export declare class NgccReferencesRegistry implements ReferencesRegistry {
    private host;
    private map;
    constructor(host: ReflectionHost);
    /**
     * Register one or more references in the registry.
     * Only `ResolveReference` references are stored. Other types are ignored.
     * @param references A collection of references to register.
     */
    add(source: ts.Declaration, ...references: Reference<ts.Declaration>[]): void;
    /**
     * Create and return a mapping for the registered resolved references.
     * @returns A map of reference identifiers to reference declarations.
     */
    getDeclarationMap(): Map<ts.Identifier, ConcreteDeclaration>;
}
