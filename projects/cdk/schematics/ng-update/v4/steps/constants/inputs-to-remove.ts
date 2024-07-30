import {hasElementAttribute} from '../../../../utils/templates/elements';
import type {RemovableInput} from '../../../interfaces';

export const INPUTS_TO_REMOVE: RemovableInput[] = [
    {inputName: 'active', tags: ['tui-card', 'tui-thumbnail-card']},
    {inputName: 'showLoader', tags: ['tui-toggle']},
    {inputName: 'singleColor', tags: ['tui-toggle']},
    {inputName: 'hoverable', tags: ['tui-badge']},
    {inputName: 'singleColor', tags: ['tui-money']},
    {
        inputName: 'iconAlign',
        tags: ['button', 'a'],
        filterFn: (el) => hasElementAttribute(el, 'tuiLink'),
    },
];
