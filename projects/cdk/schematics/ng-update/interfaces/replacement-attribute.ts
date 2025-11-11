import {type Element} from 'parse5/dist/tree-adapters/default';

export interface ReplacementAttribute {
    readonly from: {
        readonly attrName: string;
        readonly withAttrsNames?: string[];
        readonly withTagNames?: string[];
        filterFn?(element: Element): boolean;
    };
    readonly to: {
        readonly attrName: string;
    };
}
