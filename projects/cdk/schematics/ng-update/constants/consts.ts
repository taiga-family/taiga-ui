export interface ReplacementConst {
    readonly from: {
        readonly name: string;
        readonly moduleSpecifier?: string;
    };
    readonly to: {
        readonly name: string;
        readonly namedImport?: string;
        readonly moduleSpecifier: string;
    };
}

export const CONSTS_TO_REPLACE: ReplacementConst[] = [
    {
        from: {
            name: 'EMPTY_VALIDATOR',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'Validators.nullValidator',
            namedImport: 'Validators',
            moduleSpecifier: '@angular/forms',
        },
    },
    {
        from: {
            name: 'TUI_DATE_MASK',
        },
        to: {
            name: `tuiCreateDateMask('DMY', '.')`,
            moduleSpecifier: '@taiga-ui/kit',
            namedImport: 'tuiCreateDateMask',
        },
    },
    {
        from: {
            name: 'TUI_DATE_RANGE_MASK',
        },
        to: {
            name: `tuiCreateDateRangeMask('DMY', '.')`,
            moduleSpecifier: '@taiga-ui/kit',
            namedImport: 'tuiCreateDateRangeMask',
        },
    },
    {
        from: {
            name: 'getClosestKeyboardFocusable',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'getClosestFocusable',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'TuiNotificationsModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiAlertModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {name: 'identity', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'identity', moduleSpecifier: 'rxjs'},
    },
    {
        from: {name: 'TUI_SANITIZER', moduleSpecifier: '@taiga-ui/cdk'},
        to: {name: 'TUI_SANITIZER', moduleSpecifier: '@taiga-ui/core'},
    },
    {
        from: {
            name: 'TuiCountryIsoCode',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiCountryIsoCode',
            moduleSpecifier: '@taiga-ui/i18n',
        },
    },
    {
        from: {
            name: 'TableComands',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'TuiTableCommands',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
    },
    {
        from: {
            name: 'TuiController',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'AbstractTuiController',
            moduleSpecifier: '@taiga-ui/cdk',
            namedImport: 'AbstractTuiController',
        },
    },
    {
        from: {
            name: 'TuiFilterByInputBase',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'AbstractTuiFilterByInput',
            moduleSpecifier: '@taiga-ui/kit',
            namedImport: 'AbstractTuiFilterByInput',
        },
    },
];
