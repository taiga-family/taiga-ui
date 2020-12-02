export declare enum CssUrl {
    inline = "inline",
    none = "none"
}
export declare class StylesheetProcessor {
    readonly basePath: string;
    readonly cssUrl?: CssUrl;
    readonly styleIncludePaths?: string[];
    private postCssProcessor;
    constructor(basePath: string, cssUrl?: CssUrl, styleIncludePaths?: string[]);
    process(filePath: string, content: string): string;
    private renderPreProcessor;
    private createPostCssProcessor;
}
