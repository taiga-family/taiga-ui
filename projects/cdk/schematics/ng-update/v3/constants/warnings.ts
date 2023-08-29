import {MigrationWarning} from '../../interfaces/migration-warning';

export const MIGRATION_WARNINGS: readonly MigrationWarning[] = [
    {
        name: `TUI_MOBILE_AWARE`,
        message: `TUI_MOBILE_AWARE has been deleted in 3.0, please use TuiMobileTabsDirective from @taiga-ui/addon-mobile`,
    },
    {
        name: `TUI_DATE_FILLER`,
        message: `TUI_DATE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date`,
    },
    {
        name: `TUI_DATE_RANGE_FILLER`,
        message: `TUI_DATE_RANGE_FILLER has been deleted in 3.0, please use TUI_DATE_FORMAT + TUI_DATE_SEPARATOR from @taiga-ui/cdk. Read more: https://taiga-ui.dev/components/input-date-range`,
    },
    {
        name: `TUI_SHEET_OFFSET`,
        message: `TUI_SHEET_OFFSET has been deleted in 3.0, please use option argument for each Sheet. Read more: https://taiga-ui.dev/components/sheet`,
    },
    {
        name: `COUNTRIES`,
        message: `Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code. Use DI-token TUI_COUNTRIES to get localized country name by its iso code`,
        moduleSpecifier: `@taiga-ui/kit`,
    },
    {
        name: `COUNTRIES_MASKS`,
        message: `Use DI-token TUI_COUNTRIES_MASKS to get phone mask by country iso code`,
        moduleSpecifier: `@taiga-ui/kit`,
    },
    {
        name: `TuiTableModeModule`,
        message: `TuiTableModeModule has been deleted in 3.0, please use @taiga-ui/addon-table`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `TuiColorModule`,
        message: `TuiColorModule has been deleted in 3.0, please use CSS custom properties`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `TuiPluralizePipeModule`,
        message: `TuiPluralizePipeModule has been deleted in 3.0, please use Angular built-in pipe https://angular.io/api/common/I18nPluralPipe`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `TUI_DEFAULT_COLOR_HANDLER`,
        message: `TUI_DEFAULT_COLOR_HANDLER has been deleted in 3.0, please use CSS variables`,
        moduleSpecifier: `@taiga-ui/addon-charts`,
    },
    {
        name: `TuiColorHandler`,
        message: `TuiColorHandler has been deleted in 3.0, please use CSS custom properties`,
        moduleSpecifier: `@taiga-ui/addon-charts`,
    },
    {
        name: `DEFAULT_COLORS`,
        message: `DEFAULT_COLORS has been deleted in 3.0, please use CSS variables`,
        moduleSpecifier: `@taiga-ui/addon-charts`,
    },
    {
        name: `AbstractTuiInteractive`,
        message: `pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `AbstractTuiControl`,
        message: `pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `AbstractTuiMultipleControl`,
        message: `pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `AbstractTuiNullableControl`,
        message: `pressedChange and hoveredChange outputs have been removed from AbstractTuiInteractive, please use tuiPressedChange and tuiHoveredChange directives instead`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `MEDIA`,
        message: `MEDIA constant has been deleted in 3.0. Please use TUI_MEDIA token from @taiga-ui/core`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `colorFallback`,
        message: `colorFallback has been deleted in 3.0, please use CSS variables`,
        moduleSpecifier: `@taiga-ui/core`,
    },
    {
        name: `TuiInputSearchModule`,
        message: `Use TuiInputModule (@taiga-ui/kit) with icon "tuiIconSearchLarge": https://taiga-ui.dev/components/input/API?iconAlign=left&icon=tuiIconSearchLarge`,
        moduleSpecifier: `@taiga-ui/proprietary-core`,
    },
    {
        name: `TuiCarouselModule`,
        message: `Proprietary Carousel is outdated and has different API. Use new version of the same module from @taiga-ui/kit. Also, check new API: https://taiga-ui.dev/components/carousel/API`,
        moduleSpecifier: `@taiga-ui/proprietary-core`,
    },
    {
        name: `TUI_EDITOR_STYLES`,
        message: `TUI_EDITOR_STYLES token has been deleted in 3.0, please use global styles to override default editor styles`,
        moduleSpecifier: `@taiga-ui/addon-editor`,
    },
    {
        name: `TuiNotificationContentContext`,
        message: `TuiNotificationContentContext has been deleted in 3.0. Please, use TuiDialog<TuiAlertOptions<I>, O> instead of TuiNotificationContentContext<O, I>`,
        moduleSpecifier: `@taiga-ui/core`,
    },
];
