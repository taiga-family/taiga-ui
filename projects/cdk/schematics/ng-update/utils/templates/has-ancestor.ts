import {type DefaultTreeAdapterTypes} from 'parse5';

type Element = DefaultTreeAdapterTypes.Element;

export function hasAncestor(element: Element, tagName: string): boolean {
    let current = element.parentNode as Element | undefined;

    while (current) {
        if (current.tagName === tagName) {
            return true;
        }

        current = current.parentNode as Element | undefined;
    }

    return false;
}
