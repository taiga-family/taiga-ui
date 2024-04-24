import type {Element} from 'parse5/dist/tree-adapters/default';

export interface RemovableInput {
    readonly inputName: string;
    readonly tags: string[];
    readonly filterFn?: (element: Element) => boolean;
}
