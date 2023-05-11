import {Element} from 'parse5';

export interface AttributeToDirective {
    readonly componentSelector: string[] | string;
    readonly filterFn?: (element: Element) => boolean;
    readonly inputProperty: string;
    readonly directive: string;
    readonly directiveModule: {
        readonly name: string;
        readonly moduleSpecifier: string;
    };
}
