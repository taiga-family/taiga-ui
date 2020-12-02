import { I18nOptions } from './i18n-options';
export interface ProcessBundleOptions {
    filename: string;
    code: string;
    map?: string;
    name: string;
    sourceMaps?: boolean;
    hiddenSourceMaps?: boolean;
    vendorSourceMaps?: boolean;
    runtime?: boolean;
    optimize?: boolean;
    optimizeOnly?: boolean;
    ignoreOriginal?: boolean;
    cacheKeys?: (string | undefined)[];
    integrityAlgorithm?: 'sha256' | 'sha384' | 'sha512';
    runtimeData?: ProcessBundleResult[];
    replacements?: [string, string][];
    supportedBrowsers?: string[] | Record<string, string>;
}
export interface ProcessBundleResult {
    name: string;
    integrity?: string;
    original?: ProcessBundleFile;
    downlevel?: ProcessBundleFile;
}
export interface ProcessBundleFile {
    filename: string;
    size: number;
    integrity?: string;
    map?: {
        filename: string;
        size: number;
    };
}
export declare const enum CacheKey {
    OriginalCode = 0,
    OriginalMap = 1,
    DownlevelCode = 2,
    DownlevelMap = 3
}
export declare function setup(data: number[] | {
    cachePath: string;
    i18n: I18nOptions;
}): void;
export declare function process(options: ProcessBundleOptions): Promise<ProcessBundleResult>;
export interface InlineOptions {
    filename: string;
    code: string;
    map?: string;
    es5: boolean;
    outputPath: string;
    missingTranslation?: 'warning' | 'error' | 'ignore';
    setLocale?: boolean;
}
export declare function inlineLocales(options: InlineOptions): Promise<{
    file: string;
    diagnostics: {
        type: "error" | "warning";
        message: string;
    }[];
    count: number;
} | {
    file: string;
    diagnostics: {
        type: "error" | "warning";
        message: string;
    }[];
}>;
