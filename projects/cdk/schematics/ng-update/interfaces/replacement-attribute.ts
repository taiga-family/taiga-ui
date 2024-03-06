import type {Element} from 'parse5';

export interface ReplacementAttribute {
    readonly from: {
        readonly attrName: string;
        readonly filterFn?: (element: Element) => boolean;
        readonly withAttrsNames?: string[];
        readonly withTagNames?: string[];
    };
    readonly to: {
        readonly attrName: string;
    };
}
