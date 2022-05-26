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
];
