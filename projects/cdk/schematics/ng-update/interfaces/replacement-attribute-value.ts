import type {Element} from 'parse5/dist/tree-adapters/default';

export interface ReplacementAttributeValue {
    readonly attrNames: string[];
    readonly newAttrName?: string;
    readonly values: Array<{readonly from: string; readonly to: string}>;
    readonly withTagNames?: string[];
    readonly filterFn?: (el: Element) => boolean;
}
