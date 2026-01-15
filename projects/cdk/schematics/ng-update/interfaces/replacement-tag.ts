import {type Element} from 'parse5/dist/tree-adapters/default';

export interface ReplacementTag {
    readonly addAttributes?: string[];
    readonly from: string;
    readonly to: string;
    filterFn?(element: Element): boolean;
}
