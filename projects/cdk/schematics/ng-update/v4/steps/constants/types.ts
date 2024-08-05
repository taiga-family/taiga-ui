import type {ReplacementType} from '../../../interfaces';

export const TYPES_TO_RENAME: readonly ReplacementType[] = [
    {
        from: 'TuiDocExample',
        to: 'Record<string, TuiRawLoaderContent>',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
        removeImport: true,
        newImports: [
            {name: 'TuiRawLoaderContent', moduleSpecifier: '@taiga-ui/addon-doc'},
        ],
    },
    {
        from: 'TuiBrightness',
        to: "'onDark' | 'onLight'",
        moduleSpecifier: ['@taiga-ui/core'],
        removeImport: true,
    },
    {
        from: 'TuiIllustrationName',
        moduleSpecifier: ['@taiga-ui/proprietary-icons'],
        to: 'string',
        removeImport: true,
    },
    {
        from: 'TuiIllustrationCategory',
        moduleSpecifier: ['@taiga-ui/proprietary-icons'],
        to: 'string',
        removeImport: true,
    },
    {
        from: 'TuiNotificationT',
        moduleSpecifier: ['@taiga-ui/core'],
        to: 'string',
        removeImport: true,
    },
    {
        from: 'TuiMarkerIconMode',
        moduleSpecifier: ['@taiga-ui/kit'],
        to: 'string',
        removeImport: true,
    },
    {
        from: 'TuiOperationIcon',
        moduleSpecifier: ['@taiga-ui/proprietary-banking'],
        to: 'TuiFeedItemIcon',
    },
];
