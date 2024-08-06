import type {Element} from 'parse5/dist/tree-adapters/default';

export interface ReplacementAttributeValue {
    readonly attrNames: string[];
    readonly newAttrName?: string;
    readonly valueReplacer:
        | Array<{
              readonly from: string;
              readonly to: string;
          }>
        | ((value: string) => string);
    readonly withTagNames?: string[];
    readonly filterFn?: (el: Element) => boolean;
    readonly directiveModule?: {
        readonly moduleSpecifier: string;
        readonly name: string;
    };
}
