import { CodeWithSourceMap } from './metadata';
export interface StyleTransformer {
    (code: string, url?: string): CodeWithSourceMap;
}
export interface TemplateTransformer {
    (code: string, url?: string): CodeWithSourceMap;
}
export interface UrlResolver {
    (url: string | null): string | null;
}
export declare const LogLevel: {
    Debug: number;
    Error: number;
    Info: number;
    None: number;
};
declare type ValueOf<T> = T[keyof T];
export interface Config {
    interpolation: [string, string];
    logLevel: ValueOf<typeof LogLevel>;
    predefinedDirectives: DirectiveDeclaration[];
    resolveUrl: UrlResolver;
    transformStyle: StyleTransformer;
    transformTemplate: TemplateTransformer;
}
export interface DirectiveDeclaration {
    exportAs?: string;
    hostAttributes?: string[];
    hostListeners?: string[];
    hostProperties?: string[];
    inputs?: string[];
    outputs?: string[];
    selector: string;
}
export declare const Config: Config;
export {};
