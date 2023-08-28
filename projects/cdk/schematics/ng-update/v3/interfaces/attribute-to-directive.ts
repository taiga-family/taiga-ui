import {Element} from 'parse5';

export interface AttributeToDirective {
    readonly componentSelector: string[] | string;
    readonly directive: string;
    readonly directiveModule: {
        readonly moduleSpecifier: string;
        readonly name: string;
    };
    readonly filterFn?: (element: Element) => boolean;
    readonly inputProperty: string;
}
