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
    {
        from: {
            name: 'TuiButtonClose',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiButtonX',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiAlertService',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiNotificationService',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
];
