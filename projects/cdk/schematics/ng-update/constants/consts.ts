export interface ReplacementConst {
    readonly from: {
        readonly name: string;
        readonly moduleSpecifier?: string | string[];
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
            name: 'TUI_CALENDAR_DATA_STREAM',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TUI_CALENDAR_DATE_STREAM',
            moduleSpecifier: '@taiga-ui/kit',
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
        from: {
            name: 'TuiHintControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiManualHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiPointerHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiHintModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiDropdownControllerModule',
            moduleSpecifier: '@taiga-ui/core',
        },
        to: {
            name: 'TuiDropdownModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiDropdownSelectionModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiDropdownModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiDropdownHoverModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiDropdownModule',
            moduleSpecifier: '@taiga-ui/core',
        },
    },
    {
        from: {
            name: 'TuiDropdownContextModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiDropdownModule',
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
    {
        from: {
            name: 'TuiFieldErrorModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
        to: {
            name: 'TuiFieldErrorPipeModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiPdfViewerModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiPdfViewerModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'TuiPreviewHostModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
        to: {
            name: 'TuiPreviewModule',
            moduleSpecifier: '@taiga-ui/addon-preview',
        },
    },
    {
        from: {
            name: 'TuiProgressModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiProgressModule',
            moduleSpecifier: '@taiga-ui/kit',
        },
    },
    {
        from: {
            name: 'hexToRgb',
            moduleSpecifier: ['@taiga-ui/addon-doc', '@taiga-ui/addon-editor'],
        },
        to: {
            name: 'tuiHexToRgb',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiHexToRgb',
            moduleSpecifier: ['@taiga-ui/addon-doc', '@taiga-ui/addon-editor'],
        },
        to: {
            name: 'tuiHexToRgb',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'hsvToRgb',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiHsvToRgb',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiHsvToRgb',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiHsvToRgb',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'parseColor',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiParseColor',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiParseColor',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiParseColor',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'rgbToHex',
            moduleSpecifier: ['@taiga-ui/addon-doc', '@taiga-ui/addon-editor'],
        },
        to: {
            name: 'tuiRgbToHex',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiRgbToHex',
            moduleSpecifier: ['@taiga-ui/addon-doc', '@taiga-ui/addon-editor'],
        },
        to: {
            name: 'tuiRgbToHex',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'rgbToHsv',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiRgbToHsv',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'tuiRgbToHsv',
            moduleSpecifier: '@taiga-ui/addon-editor',
        },
        to: {
            name: 'tuiRgbToHsv',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'TuiAccountModule',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiAccountModule',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'TuiAccountComponent',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiAccountComponent',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'TuiAccount',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiAccount',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'tuiAccountDelegate',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'tuiAccountDelegate',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'TuiAccountDelegateComponent',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TuiAccountDelegateComponent',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'CURRENCY_ICONS',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'CURRENCY_ICONS',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'TUI_ACCOUNT_PROJECTOR',
            moduleSpecifier: '@taiga-ui/proprietary-core',
        },
        to: {
            name: 'TUI_ACCOUNT_PROJECTOR',
            moduleSpecifier: '@taiga-ui/proprietary-banking',
        },
    },
    {
        from: {
            name: 'TuiAutofillFieldNameT',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        to: {
            name: 'TuiAutofillFieldName',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
];
