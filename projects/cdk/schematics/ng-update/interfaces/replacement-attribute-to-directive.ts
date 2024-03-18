import type {Element} from 'parse5/dist/tree-adapters/default';

export interface ReplacementAttributeToDirective {
    readonly componentSelector: string[] | string;
    readonly directive: string;
    readonly directiveModule: {
        readonly moduleSpecifier: string;
        readonly name: string;
    };
    readonly filterFn?: (element: Element) => boolean;
    readonly inputProperty: string;
}
