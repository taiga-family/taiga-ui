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
        inputName: 'tuiSurface',
        tags: ['*'],
        filterFn: (el) => hasElementAttribute(el, 'tuiCardLarge'),
    },
];
