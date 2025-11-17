import {type Element} from 'parse5/dist/tree-adapters/default';

export interface RemovableInput {
    readonly inputName: string;
    readonly tags: string[];
    filterFn?(element: Element): boolean;
}
