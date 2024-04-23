import type {ReplacementEnum} from '../../../interfaces/replacement-enum';

export const ENUMS_TO_REPLACE: ReplacementEnum[] = [
    {
        name: 'TuiInteractiveState',
        replaceValues: {
            Disabled: 'disabled',
            Active: 'active',
            Hover: 'hover',
            Readonly: 'readonly',
        },
        keepAsType: true,
    },
];
