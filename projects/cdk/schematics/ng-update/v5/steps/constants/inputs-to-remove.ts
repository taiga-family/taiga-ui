import {
    hasElementAttribute,
    hasElementAttributeWithValue,
} from '../../../../utils/templates/elements';
import {type RemovableInput} from '../../../interfaces';

export const INPUTS_TO_REMOVE: RemovableInput[] = [
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
    {
        inputName: 'monoHandler',
        tags: ['tui-thumbnail-card'],
    },
    // `[tuiDropdownOpenMonitor]` was a selector-only shim; v5 dropdowns are native
    // (the schematic maps `tuiDropdownOpen` -> `tuiDropdownAuto`), so drop the marker.
    {
        inputName: 'tuiDropdownOpenMonitor',
        tags: ['*'],
    },
];
