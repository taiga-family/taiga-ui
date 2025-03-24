import type {Element} from 'parse5/dist/tree-adapters/default';

export interface HtmlComment {
    readonly tag?: string;
    readonly withAttrs?: string[];
    readonly pattern?: RegExp;
    readonly comment: string;
    readonly filterFn?: (element: Element) => boolean;
}
