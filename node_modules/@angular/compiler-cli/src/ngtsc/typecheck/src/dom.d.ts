/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/typecheck/src/dom" />
import { ParseSourceSpan, SchemaMetadata, TmplAstElement } from '@angular/compiler';
import * as ts from 'typescript';
import { TemplateId } from './api';
import { TemplateSourceResolver } from './diagnostics';
/**
 * Checks every non-Angular element/property processed in a template and potentially produces
 * `ts.Diagnostic`s related to improper usage.
 *
 * A `DomSchemaChecker`'s job is to check DOM nodes and their attributes written used in templates
 * and produce `ts.Diagnostic`s if the nodes don't conform to the DOM specification. It acts as a
 * collector for these diagnostics, and can be queried later to retrieve the list of any that have
 * been generated.
 */
export interface DomSchemaChecker {
    /**
     * Get the `ts.Diagnostic`s that have been generated via `checkElement` and `checkProperty` calls
     * thus far.
     */
    readonly diagnostics: ReadonlyArray<ts.Diagnostic>;
    /**
     * Check a non-Angular element and record any diagnostics about it.
     *
     * @param id the template ID, suitable for resolution with a `TcbSourceResolver`.
     * @param element the element node in question.
     * @param schemas any active schemas for the template, which might affect the validity of the
     * element.
     */
    checkElement(id: string, element: TmplAstElement, schemas: SchemaMetadata[]): void;
    /**
     * Check a property binding on an element and record any diagnostics about it.
     *
     * @param id the template ID, suitable for resolution with a `TcbSourceResolver`.
     * @param element the element node in question.
     * @param name the name of the property being checked.
     * @param span the source span of the binding. This is redundant with `element.attributes` but is
     * passed separately to avoid having to look up the particular property name.
     * @param schemas any active schemas for the template, which might affect the validity of the
     * property.
     */
    checkProperty(id: string, element: TmplAstElement, name: string, span: ParseSourceSpan, schemas: SchemaMetadata[]): void;
}
/**
 * Checks non-Angular elements and properties against the `DomElementSchemaRegistry`, a schema
 * maintained by the Angular team via extraction from a browser IDL.
 */
export declare class RegistryDomSchemaChecker implements DomSchemaChecker {
    private resolver;
    private _diagnostics;
    get diagnostics(): ReadonlyArray<ts.Diagnostic>;
    constructor(resolver: TemplateSourceResolver);
    checkElement(id: TemplateId, element: TmplAstElement, schemas: SchemaMetadata[]): void;
    checkProperty(id: TemplateId, element: TmplAstElement, name: string, span: ParseSourceSpan, schemas: SchemaMetadata[]): void;
}
