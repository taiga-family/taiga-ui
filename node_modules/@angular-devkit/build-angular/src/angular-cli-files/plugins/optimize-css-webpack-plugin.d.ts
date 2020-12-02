import { Compiler } from 'webpack';
export interface OptimizeCssWebpackPluginOptions {
    sourceMap: boolean;
    test: (file: string) => boolean;
}
export declare class OptimizeCssWebpackPlugin {
    private readonly _options;
    constructor(options: Partial<OptimizeCssWebpackPluginOptions>);
    apply(compiler: Compiler): void;
}
