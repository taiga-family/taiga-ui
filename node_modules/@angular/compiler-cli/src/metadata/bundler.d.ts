/// <amd-module name="@angular/compiler-cli/src/metadata/bundler" />
import * as ts from 'typescript';
import { MetadataCache } from '../transformers/metadata_cache';
import { MetadataEntry, ModuleMetadata } from './schema';
export interface BundleEntries {
    [name: string]: MetadataEntry;
}
export interface BundlePrivateEntry {
    privateName: string;
    name: string;
    module: string;
}
export interface BundledModule {
    metadata: ModuleMetadata;
    privates: BundlePrivateEntry[];
}
export interface MetadataBundlerHost {
    getMetadataFor(moduleName: string, containingFile: string): ModuleMetadata | undefined;
}
export declare class MetadataBundler {
    private root;
    private importAs;
    private host;
    private symbolMap;
    private metadataCache;
    private exports;
    private rootModule;
    private privateSymbolPrefix;
    private exported;
    constructor(root: string, importAs: string | undefined, host: MetadataBundlerHost, privateSymbolPrefix?: string);
    getMetadataBundle(): BundledModule;
    static resolveModule(importName: string, from: string): string;
    private getMetadata;
    private exportAll;
    /**
     * Fill in the canonicalSymbol which is the symbol that should be imported by factories.
     * The canonical symbol is the one exported by the index file for the bundle or definition
     * symbol for private symbols that are not exported by bundle index.
     */
    private canonicalizeSymbols;
    private canonicalizeSymbol;
    private getEntries;
    private getReExports;
    private convertSymbol;
    private convertEntry;
    private convertClass;
    private convertMembers;
    private convertMember;
    private convertStatics;
    private convertFunction;
    private convertValue;
    private convertExpression;
    private convertError;
    private convertReference;
    private convertExpressionNode;
    private symbolOf;
    private canonicalSymbolOf;
}
export declare class CompilerHostAdapter implements MetadataBundlerHost {
    private host;
    private cache;
    private options;
    private collector;
    constructor(host: ts.CompilerHost, cache: MetadataCache | null, options: ts.CompilerOptions);
    getMetadataFor(fileName: string, containingFile: string): ModuleMetadata | undefined;
}
