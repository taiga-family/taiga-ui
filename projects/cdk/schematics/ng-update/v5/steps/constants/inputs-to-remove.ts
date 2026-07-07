import {type DefaultTreeAdapterTypes} from 'parse5';

import {
    hasElementAttribute,
    hasElementAttributeWithValue,
} from '../../../../utils/templates/elements';
import {type RemovableInput} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

export const INPUTS_TO_REMOVE: RemovableInput[] = [
    {
        inputName: 'tuiDropdownOpen',
        tags: ['*'],
        filterFn: (el) => !hasTuiDropdown(el),
    },
    {
        inputName: 'tuiDropdownOpenChange',
        tags: ['*'],
        filterFn: (el) => !hasTuiDropdown(el),
    },
    {
        inputName: 'pseudo',
        tags: ['a', 'button'],
        filterFn: (el) =>
            hasElementAttribute(el, 'tuiLink') &&
            !el.attrs.some((attr) => attr.name === '[pseudo]' && attr.value !== 'false'),
    },
    {
        inputName: 'size',
        tags: ['tui-pagination'],
        filterFn: (el) => hasElementAttributeWithValue(el, 'size', 's'),
    },
    {
        inputName: 'tuiDirectionOrder',
        tags: ['table'],
    },
    {
        inputName: 'rounded',
        tags: ['tui-accordion'],
    },
];

function hasTuiDropdown(element: Element): boolean {
    const attribute = 'tuiDropdown';

    return (
        hasElementAttribute(element, attribute) ||
        element.attrs.some((attr) => attr.name === `*${attribute.toLocaleLowerCase()}`)
    );
}
