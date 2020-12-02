/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/inline_resources" />
import * as ts from 'typescript';
import { MetadataObject, MetadataValue } from '../metadata/index';
import { MetadataTransformer, ValueTransform } from './metadata_cache';
/** A subset of members from AotCompilerHost */
export declare type ResourcesHost = {
    resourceNameToFileName(resourceName: string, containingFileName: string): string | null;
    loadResource(path: string): Promise<string> | string;
};
export declare type StaticResourceLoader = {
    get(url: string | MetadataValue): string;
};
export declare class InlineResourcesMetadataTransformer implements MetadataTransformer {
    private host;
    constructor(host: ResourcesHost);
    start(sourceFile: ts.SourceFile): ValueTransform | undefined;
    updateDecoratorMetadata(loader: StaticResourceLoader, arg: MetadataObject): MetadataObject;
}
export declare function getInlineResourcesTransformFactory(program: ts.Program, host: ResourcesHost): ts.TransformerFactory<ts.SourceFile>;
