export interface MigrationWarning {
    readonly name: string;
    readonly moduleSpecifier?: string;
    readonly message: string;
}

export const MIGRATION_WARNINGS: readonly MigrationWarning[] = [
    {
        name: 'TUI_MOBILE_AWARE',
        message:
            'TUI_MOBILE_AWARE has been deleted in 3.0, please use TuiMobileTabsDirective from @taiga-ui/addon-mobile',
    },
    {
        name: 'TUI_DATE_FILLER',
        message:
            'TUI_DATE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date',
    },
    {
        name: 'TUI_DATE_RANGE_FILLER',
        message:
            'TUI_DATE_RANGE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date-range',
    },
    {
        name: 'TUI_SHEET_OFFSET',
        message:
            'TUI_SHEET_OFFSET has been deleted in 3.0, please use option argument for each Sheet. Read more: https://taiga-ui.dev/components/sheet',
    },
    {
        name: 'COUNTRIES',
        moduleSpecifier: '@taiga-ui/kit',
        message:
            'Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code. Use DI-token TUI_COUNTRIES to get localized country name by its iso code',
    },
    {
        name: 'COUNTRIES_MASKS',
        moduleSpecifier: '@taiga-ui/kit',
        message: 'Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code',
    },
];
