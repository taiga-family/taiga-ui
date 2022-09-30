export interface TypeToRename {
    readonly from: string;
    readonly to?: string;
    readonly moduleSpecifier?: string | string[];
    readonly preserveGenerics?: boolean;
}

export const TYPES_TO_RENAME: readonly TypeToRename[] = [
    {
        from: 'ButtonOptions',
        to: 'TuiButtonOptions',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'InputCountOptions',
        to: 'TuiInputCountOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'InputPasswordOptions',
        to: 'TuiInputPasswordOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'InputTimeOptions',
        to: 'TuiInputTimeOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'ToggleOptions',
        to: 'TuiToggleOptions',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'RadioOptions',
        to: 'TuiRadioOptions',
        moduleSpecifier: ['@taiga-ui/kit'],
    },
    {
        from: 'CodeEditor',
        to: 'TuiCodeEditor',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'WithDateMaskPipeConfig',
    },
    {
        from: 'TuiBreadCrumbsItem',
    },
    {
        from: 'CheckboxOptions',
        to: 'TuiCheckboxOptions',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'NotificationTokenOptions',
        to: 'TuiNotificationDefaultOptions',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'TuiNotificationAutoClose',
        to: 'TuiAlertAutoClose',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'TuiNotificationOptions',
        to: 'TuiAlertOptions<any>',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'TuiNotificationOptionsWithData',
        to: 'TuiAlertOptions',
        moduleSpecifier: ['@taiga-ui/core'],
        preserveGenerics: true,
    },
    {
        from: 'Country',
    },
    {
        from: 'NumberFormatSettings',
        to: 'TuiNumberFormatSettings',
        moduleSpecifier: ['@taiga-ui/core'],
    },
    {
        from: 'LanguageCore',
        to: 'TuiLanguageCore',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageKit',
        to: 'TuiLanguageKit',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageKit',
        to: 'TuiLanguageKit',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageCommerce',
        to: 'TuiLanguageCommerce',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageTable',
        to: 'TuiLanguageTable',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageTable',
        to: 'TuiLanguageTable',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguageEditor',
        to: 'TuiLanguageEditor',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'LanguagePreview',
        to: 'TuiLanguagePreview',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'Language',
        to: 'TuiLanguage',
        moduleSpecifier: ['@taiga-ui/i18n'],
    },
    {
        from: 'ScrollIntoViewDirective',
        to: 'TuiScrollIntoViewLinkDirective',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'CodeComponent',
        to: 'TuiCodeComponent',
        moduleSpecifier: ['@taiga-ui/addon-doc'],
    },
    {
        from: 'TableBar',
        to: 'TuiTableBar',
        moduleSpecifier: ['@taiga-ui/addon-tablebars'],
    },
    {
        from: 'InvalidDayException',
        to: 'TuiInvalidDayException',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'InvalidMonthException',
        to: 'TuiInvalidMonthException',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'InvalidYearException',
        to: 'TuiInvalidYearException',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
];
