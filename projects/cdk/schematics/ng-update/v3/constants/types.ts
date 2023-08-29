import {TypeToRename} from '../../interfaces/type-to-rename';

export const TYPES_TO_RENAME: readonly TypeToRename[] = [
    {
        from: `ButtonOptions`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiButtonOptions`,
    },
    {
        from: `InputCountOptions`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `TuiInputCountOptions`,
    },
    {
        from: `InputPasswordOptions`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `TuiInputPasswordOptions`,
    },
    {
        from: `InputTimeOptions`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `TuiInputTimeOptions`,
    },
    {
        from: `ToggleOptions`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `TuiToggleOptions`,
    },
    {
        from: `RadioOptions`,
        moduleSpecifier: [`@taiga-ui/kit`],
        to: `TuiRadioOptions`,
    },
    {
        from: `CodeEditor`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `TuiCodeEditor`,
    },
    {
        from: `WithDateMaskPipeConfig`,
    },
    {
        from: `TuiBreadCrumbsItem`,
    },
    {
        from: `CheckboxOptions`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiCheckboxOptions`,
    },
    {
        from: `NotificationTokenOptions`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiNotificationDefaultOptions`,
    },
    {
        from: `TuiNotificationAutoClose`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiAlertAutoClose`,
    },
    {
        from: `TuiNotificationOptions`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiAlertOptions<any>`,
    },
    {
        from: `TuiNotificationOptionsWithData`,
        moduleSpecifier: [`@taiga-ui/core`],
        preserveGenerics: true,
        to: `TuiAlertOptions`,
    },
    {
        from: `Country`,
        moduleSpecifier: [`@taiga-ui/kit`],
    },
    {
        from: `NumberFormatSettings`,
        moduleSpecifier: [`@taiga-ui/core`],
        to: `TuiNumberFormatSettings`,
    },
    {
        from: `LanguageCore`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageCore`,
    },
    {
        from: `LanguageKit`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageKit`,
    },
    {
        from: `LanguageKit`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageKit`,
    },
    {
        from: `LanguageCommerce`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageCommerce`,
    },
    {
        from: `LanguageTable`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageTable`,
    },
    {
        from: `LanguageTable`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageTable`,
    },
    {
        from: `LanguageEditor`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguageEditor`,
    },
    {
        from: `LanguagePreview`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguagePreview`,
    },
    {
        from: `Language`,
        moduleSpecifier: [`@taiga-ui/i18n`],
        to: `TuiLanguage`,
    },
    {
        from: `ScrollIntoViewDirective`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `TuiScrollIntoViewLinkDirective`,
    },
    {
        from: `CodeComponent`,
        moduleSpecifier: [`@taiga-ui/addon-doc`],
        to: `TuiCodeComponent`,
    },
    {
        from: `TableBar`,
        moduleSpecifier: [`@taiga-ui/addon-tablebars`],
        to: `TuiTableBar`,
    },
    {
        from: `InvalidDayException`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `TuiInvalidDayException`,
    },
    {
        from: `InvalidMonthException`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `TuiInvalidMonthException`,
    },
    {
        from: `InvalidYearException`,
        moduleSpecifier: [`@taiga-ui/cdk`],
        to: `TuiInvalidYearException`,
    },
];
