import * as ts from 'typescript';
export interface CacheEntry {
    exists?: boolean;
    sourceFile?: ts.SourceFile;
    content?: string;
    declarationFileName?: string;
}
export declare class FileCache {
    private cache;
    forEach: (callbackfn: (value: CacheEntry, key: string, map: Map<string, CacheEntry>) => void, thisArg?: any) => void;
    clear: () => void;
    size(): number;
    normalizeKey(fileName: string): string;
    delete(fileName: string): boolean;
    has(fileName: string): boolean;
    get(fileName: string): CacheEntry | undefined;
    getOrCreate(fileName: string): CacheEntry;
}
