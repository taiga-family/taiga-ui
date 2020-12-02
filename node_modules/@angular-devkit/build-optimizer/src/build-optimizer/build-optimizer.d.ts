import { TransformJavascriptOutput } from '../helpers/transform-javascript';
export interface BuildOptimizerOptions {
    content?: string;
    originalFilePath?: string;
    inputFilePath?: string;
    outputFilePath?: string;
    emitSourceMap?: boolean;
    strict?: boolean;
    isSideEffectFree?: boolean;
    isAngularCoreFile?: boolean;
}
export declare function buildOptimizer(options: BuildOptimizerOptions): TransformJavascriptOutput;
