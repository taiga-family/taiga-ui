/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/utils/html-manipulation" />
import { Tree } from '@angular-devkit/schematics';
import { DefaultTreeElement } from 'parse5';
/** Appends the given element HTML fragment to the `<head>` element of the specified HTML file. */
export declare function appendHtmlElementToHead(host: Tree, htmlFilePath: string, elementHtml: string): void;
/** Parses the given HTML file and returns the head element if available. */
export declare function getHtmlHeadTagElement(htmlContent: string): DefaultTreeElement | null;
/** Adds a class to the body of the document. */
export declare function addBodyClass(host: Tree, htmlFilePath: string, className: string): void;
