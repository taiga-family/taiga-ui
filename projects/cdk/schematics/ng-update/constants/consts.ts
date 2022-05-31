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
];
