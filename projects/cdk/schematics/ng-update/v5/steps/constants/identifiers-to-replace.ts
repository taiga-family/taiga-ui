import {type ReplacementIdentifierMulti} from '../../../interfaces';

export const IDENTIFIERS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {
            name: 'TuiInputYearModule',
            moduleSpecifier: '@taiga-ui/legacy',
        },
        to: [
            {
                name: 'TuiInputYear',
                moduleSpecifier: '@taiga-ui/kit',
            },
            {
                name: 'TuiTextfield',
                moduleSpecifier: '@taiga-ui/core',
            },
        ],
    },
];
