import { CompilerOptions } from 'typescript';
export interface TypeScriptPathsPluginOptions extends Pick<CompilerOptions, 'paths' | 'baseUrl'> {
}
export declare class TypeScriptPathsPlugin {
    private _options;
    constructor(_options: TypeScriptPathsPluginOptions);
    apply(resolver: any): void;
}
