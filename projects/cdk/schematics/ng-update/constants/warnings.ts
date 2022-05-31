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
];
