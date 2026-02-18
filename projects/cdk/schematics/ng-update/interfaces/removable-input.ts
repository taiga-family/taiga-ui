import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

export interface RemovableInput {
    readonly inputName: string;
    readonly tags: string[];
    filterFn?(element: Element): boolean;
}
