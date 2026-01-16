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

export function hasChild(element: Element, tagName: string): boolean {
    if (!element.childNodes) {
        return false;
    }

    for (const child of element.childNodes) {
        if ((child as Element).tagName === tagName) {
            return true;
        }

        if (hasChild(child as Element, tagName)) {
            return true;
        }
    }

    return false;
}
