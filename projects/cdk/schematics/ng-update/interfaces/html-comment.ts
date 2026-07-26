import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

export interface HtmlComment {
    readonly tag?: string;
    readonly withAttrs?: string[];
    readonly pattern?: RegExp;
    readonly comment: string;
    filterFn?(element: Element): boolean;
}
