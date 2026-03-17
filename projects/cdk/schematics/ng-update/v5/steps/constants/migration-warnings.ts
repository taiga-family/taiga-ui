import {type MigrationWarning} from '../../../interfaces';

export const MIGRATION_WARNINGS: MigrationWarning[] = [
    {
        name: 'TUI_DATE_MODE_MASKITO_ADAPTER',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiDateMode and MaskitoDateMode are now compatible with each other; the adapter is no longer required',
    },
    {
        name: 'TuiDateMode',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'All values inside TuiDateMode are renamed: DMY -> dd/mm/yyyy, MDY -> mm/dd/yyyy, YMD -> yyyy/mm/dd',
    },
    {
        name: 'TuiScrollService',
        moduleSpecifier: '@taiga-ui/cdk',
        message:
            'TuiScrollService has been removed because smooth scroll is natively supported by all modern browsers. Use native scrolling APIs (window.scrollTo, Element.scrollTo, Element.scrollIntoView) instead',
    },
    {
        name: 'TuiFormatDatePipe',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TuiFormatDatePipe has been removed. Use Angular built-in Date pipe instead. See https://angular.dev/api/common/DatePipe',
    },
    {
        name: 'TUI_SLIDER_OPTIONS',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'TUI_SLIDER_OPTIONS has been removed. Use CSS variables for slider configuration. See example https://taiga-ui.dev/components/slider',
    },
    {
        name: 'tuiSliderOptionsProvider',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'tuiSliderOptionsProvider has been removed. Use CSS variables for slider configuration. See example https://taiga-ui.dev/components/slider',
    },
    {
        name: 'TuiFeedItemDetailsComponent',
        moduleSpecifier: '@taiga-ui/proprietary',
        message:
            'TuiFeedItemDetailsComponent has been removed. Use BlockDetails instead. See https://taiga-ui.dev/layout/block-details',
    },
    {
        name: 'TuiToCountryCodePipe',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiToCountryCodePipe has been removed. Replace pipe usage `phone | tuiToCountryCode` with the maskitoGetCountryFromNumber(phone) function from @maskito/phone.',
    },
    {
        name: 'TuiStatus',
        moduleSpecifier: '@taiga-ui/legacy',
        message:
            'TuiStatus type has been removed. Replace with a plain string literal type: ' +
            '"default" | "error" | "info" | "neutral" | "primary" | "success" | "warning"',
    },
];
