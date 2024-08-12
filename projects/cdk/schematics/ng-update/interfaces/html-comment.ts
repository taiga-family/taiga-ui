export interface HtmlComment {
    readonly tag?: string;
    readonly withAttrs?: string[];
    readonly pattern?: RegExp;
    readonly comment: string;
}
