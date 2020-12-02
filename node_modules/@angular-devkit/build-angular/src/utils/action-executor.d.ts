import { I18nOptions } from './i18n-options';
import { InlineOptions, ProcessBundleOptions, ProcessBundleResult } from './process-bundle';
export declare class BundleActionExecutor {
    private workerOptions;
    private readonly sizeThreshold;
    private largeWorker?;
    private smallWorker?;
    private cache?;
    constructor(workerOptions: {
        cachePath?: string;
        i18n: I18nOptions;
    }, integrityAlgorithm?: string, sizeThreshold?: number);
    private static executeMethod;
    private ensureLarge;
    private ensureSmall;
    private executeAction;
    process(action: ProcessBundleOptions): Promise<ProcessBundleResult>;
    processAll(actions: Iterable<ProcessBundleOptions>): AsyncIterable<ProcessBundleResult>;
    inline(action: InlineOptions): Promise<{
        file: string;
        diagnostics: {
            type: string;
            message: string;
        }[];
        count: number;
    }>;
    inlineAll(actions: Iterable<InlineOptions>): AsyncIterable<{
        file: string;
        diagnostics: {
            type: string;
            message: string;
        }[];
        count: number;
    }>;
    private static executeAll;
    stop(): Promise<void>;
}
