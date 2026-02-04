import {hasElementAttribute} from '@taiga-ui/cdk/schematics/utils/templates/elements';

import {type RemovableInput} from '../../../interfaces';

export const INPUTS_TO_REMOVE: RemovableInput[] = [
    {
        inputName: 'size',
        tags: ['tui-range', 'input'],
        filterFn: (el) => {
            if (el.tagName === 'input') {
                return hasElementAttribute(el, 'tuiSlider');
            }

            return true;
        },
    },
];
