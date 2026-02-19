import {hasElementAttributeWithValue} from '../../../../utils/templates/elements';
import {type RemovableInput} from '../../../interfaces';

export const INPUTS_TO_REMOVE: RemovableInput[] = [
    {
        inputName: 'size',
        tags: ['tui-pagination'],
        filterFn: (el) => hasElementAttributeWithValue(el, 'size', 's'),
    },
];
