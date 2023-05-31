import {Element} from 'parse5';

export interface ReplaceableAttribute {
    readonly from: {
        readonly attrName: string;
        readonly withTagNames?: string[];
        readonly withAttrsNames?: string[];
        readonly filterFn?: (element: Element) => boolean;
    };
    readonly to: {
        readonly attrName: string;
    };
}
