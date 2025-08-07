import {type ReplacementIdentifierMulti} from '../../interfaces/replacement-identifier';

export const DOC_SYMBOLS_TO_REPLACE: ReplacementIdentifierMulti[] = [
    {
        from: {
            name: 'DocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocumentationPropertyType',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'RawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiRawContentLoader',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocCopyModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocCopy',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiScrollIntoViewLinkModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocScrollIntoViewLink',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiTextCodeModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocText',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocDocumentationModule',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiDocPage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: [
            {
                name: 'TuiDocCodeModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiDocDemoModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiDocMainModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiDocNavigationModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiDocPageModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiAddonDocModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
            {
                name: 'TuiDocExampleModule',
                moduleSpecifier: '@taiga-ui/addon-doc',
            },
        ],
        to: {
            name: 'TuiAddonDoc',
            moduleSpecifier: '@taiga-ui/addon-doc',
            spreadInModule: true,
        },
    },
    {
        from: {
            name: 'TuiDocPage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePage',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDocPages',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        to: {
            name: 'TuiDocRoutePages',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
    {
        from: {
            name: 'TuiDeepPartial',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'TuiDeepPartial',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
    },
];
