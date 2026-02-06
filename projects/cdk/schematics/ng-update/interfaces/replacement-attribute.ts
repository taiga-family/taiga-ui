import {type Element} from 'parse5/dist/tree-adapters/default';

type AtLeastOne<T, K extends keyof T = keyof T> = {[P in K]-?: Required<Pick<T, P>>}[K] &
    Partial<T>;

interface Filters {
    readonly withAttrsNames: string[];
    readonly withTagNames: string[];
}

export interface ReplacementAttribute {
    readonly from: AtLeastOne<Filters> & {
        readonly attrName: string;
        filterFn?(element: Element): boolean;
    };
    readonly to: {
        readonly attrName: string;
    };
}
