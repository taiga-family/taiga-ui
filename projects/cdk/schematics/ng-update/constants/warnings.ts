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
    {
        name: 'TuiTableModeModule',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TuiTableModeModule has been deleted in 3.0, please use @taiga-ui/addon-table',
    },
    {
        name: 'TuiColorModule',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TuiColorModule has been deleted in 3.0, please use CSS custom properties',
    },
    {
        name: 'TuiPluralizePipeModule',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'TuiPluralizePipeModule has been deleted in 3.0, please use use Angular built-in pipe https://angular.io/api/common/I18nPluralPipe ',
    },
    {
        name: 'TUI_DEFAULT_COLOR_HANDLER',
        moduleSpecifier: '@taiga-ui/addon-charts',
        message:
            'TUI_DEFAULT_COLOR_HANDLER has been deleted in 3.0, please use CSS variables',
    },
    {
        name: 'TuiColorHandler',
        moduleSpecifier: '@taiga-ui/addon-charts',
        message:
            'TuiColorHandler has been deleted in 3.0, please use CSS custom properties',
    },
    {
        name: 'DEFAULT_COLORS',
        moduleSpecifier: '@taiga-ui/addon-charts',
        message: 'DEFAULT_COLORS has been deleted in 3.0, please use CSS variables',
    },
    {
        name: 'AbstractTuiInteractive',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead',
    },
    {
        name: 'AbstractTuiControl',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead',
    },
    {
        name: 'AbstractTuiMultipleControl',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead',
    },
    {
        name: 'AbstractTuiNullableControl',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead',
    },
    {
        name: 'MEDIA',
        moduleSpecifier: '@taiga-ui/core',
        message:
            'MEDIA constant has been deleted in 3.0. Please use TUI_MEDIA token from @taiga-ui/core',
    },
    {
        name: 'colorFallback',
        moduleSpecifier: '@taiga-ui/core',
        message: 'colorFallback has been deleted in 3.0, please use CSS variables',
    },
    {
        name: 'TuiInputSearchModule',
        moduleSpecifier: '@taiga-ui/proprietary-core',
        message:
            'Use TuiInputModule (@taiga-ui/kit) with icon "tuiIconSearchLarge": https://taiga-ui.dev/components/input/API?iconAlign=left&icon=tuiIconSearchLarge',
    },
    {
        name: 'TuiCarouselModule',
        moduleSpecifier: '@taiga-ui/proprietary-core',
        message:
            'Proprietary Carousel is old and has different API. Use new version of the same module from @taiga-ui/kit. Also, check new API: https://taiga-ui.dev/components/carousel/API',
    },
    {
        name: 'TUI_EDITOR_STYLES',
        moduleSpecifier: '@taiga-ui/addon-editor',
        message:
            'TUI_EDITOR_STYLES token has been deleted in 3.0, please use global styles to override default editor styles',
    },
];
