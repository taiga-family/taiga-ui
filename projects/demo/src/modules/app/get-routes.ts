import {Routes} from '@angular/router';
import {GettingStartedComponent} from './getting-started/getting-started.component';

export function getRoutes(basePath: string = '../'): Routes {
    return [
        {
            path: 'getting-started',
            component: GettingStartedComponent,
            data: {
                title: 'Начало работы',
            },
        },
        {
            path: 'browser-support',
            loadChildren: basePath + 'info/browsers/browsers.module#BrowsersModule',
            data: {
                title: 'Поддержка браузеров',
            },
        },
        {
            path: 'changelog',
            loadChildren: basePath + 'info/changelog/changelog.module#ChangelogModule',
            data: {
                title: 'История релизов',
            },
        },
        {
            path: 'tui-doc',
            loadChildren: basePath + 'info/doc/doc.module#DocModule',
            data: {
                title: 'Собственная витрина',
            },
        },
        {
            path: 'related',
            loadChildren: basePath + 'info/related/related.module#RelatedModule',
            data: {
                title: 'Дружественные библиотеки',
            },
        },
        // COMPONENTS
        {
            path: 'tui-accordion',
            loadChildren:
                basePath +
                'components/accordion/accordion.module#ExampleTuiAccordionModule',
            data: {
                title: 'Accordion',
            },
        },
        {
            path: 'tui-action',
            loadChildren:
                basePath + 'components/action/action.module#ExampleTuiActionModule',
            data: {
                title: 'Action',
            },
        },
        {
            path: 'tui-avatar',
            loadChildren:
                basePath + 'components/avatar/avatar.module#ExampleTuiAvatarModule',
            data: {
                title: 'Avatar',
            },
        },
        {
            path: 'tui-badge',
            loadChildren:
                basePath + 'components/badge/badge.module#ExampleTuiBadgeModule',
            data: {
                title: 'Badge',
            },
        },
        {
            path: 'tui-badged-content',
            loadChildren:
                basePath +
                'components/badged-content/badged-content.module#ExampleTuiBadgedContentModule',
            data: {
                title: 'BadgedContent',
            },
        },
        {
            path: 'tui-breadcrumbs',
            loadChildren:
                basePath +
                'components/breadcrumbs/breadcrumbs.module#ExampleTuiBreadcrumbsModule',
            data: {
                title: 'Breadcrumbs',
            },
        },
        {
            path: 'tui-button',
            loadChildren:
                basePath + 'components/button/button.module#ExampleTuiButtonModule',
            data: {
                title: 'Button',
            },
        },
        {
            path: 'tui-calendar',
            loadChildren:
                basePath + 'components/calendar/calendar.module#ExampleTuiCalendarModule',
            data: {
                title: 'Calendar',
            },
        },
        {
            path: 'tui-card',
            loadChildren: basePath + 'components/card/card.module#ExampleTuiCardModule',
            data: {
                title: 'Card',
            },
        },
        {
            path: 'tui-checkbox',
            loadChildren:
                basePath + 'components/checkbox/checkbox.module#ExampleTuiCheckboxModule',
            data: {
                title: 'Checkbox',
            },
        },
        {
            path: 'tui-checkbox-block',
            loadChildren:
                basePath +
                'components/checkbox-block/checkbox-block.module#ExampleTuiCheckboxBlockModule',
            data: {
                title: 'CheckboxBlock',
            },
        },
        {
            path: 'tui-checkbox-labeled',
            loadChildren:
                basePath +
                'components/checkbox-labeled/checkbox-labeled.module#ExampleTuiCheckboxLabeledModule',
            data: {
                title: 'CheckboxLabeled',
            },
        },
        {
            path: 'tui-color-picker',
            loadChildren:
                basePath +
                'components/color-picker/color-picker.module#ExampleTuiColorPickerModule',
            data: {
                title: 'ColorPicker',
            },
        },
        {
            path: 'tui-primitive-checkbox',
            loadChildren:
                basePath +
                'components/primitive-checkbox/primitive-checkbox.module#ExampleTuiPrimitiveCheckboxModule',
            data: {
                title: 'PrimitiveCheckbox',
            },
        },
        {
            path: 'tui-combo-box',
            loadChildren:
                basePath +
                'components/combo-box/combo-box.module#ExampleTuiComboBoxModule',
            data: {
                title: 'ComboBox',
            },
        },
        {
            path: 'tui-data-list',
            loadChildren:
                basePath +
                'components/data-list/data-list.module#ExampleTuiDataListModule',
            data: {
                title: 'DataList',
            },
        },
        {
            path: 'tui-error',
            loadChildren:
                basePath + 'components/error/error.module#ExampleTuiErrorModule',
            data: {
                title: 'Error',
            },
        },
        {
            path: 'tui-expand',
            loadChildren:
                basePath + 'components/expand/expand.module#ExampleTuiExpandModule',
            data: {
                title: 'Expand',
            },
        },
        {
            path: 'tui-field-error',
            loadChildren:
                basePath +
                'components/field-error/field-error.module#ExampleTuiFieldErrorModule',
            data: {
                title: 'FieldError ',
            },
        },
        {
            path: 'tui-group',
            loadChildren:
                basePath + 'components/group/group.module#ExampleTuiGroupModule',
            data: {
                path: 'tui-group',
                title: 'Group',
            },
        },
        {
            path: 'tui-hosted-dropdown',
            loadChildren:
                basePath +
                'components/hosted-dropdown/hosted-dropdown.module#ExampleTuiHostedDropdownModule',
            data: {
                title: 'HostedDropdown',
            },
        },
        {
            path: 'tui-input-inline',
            loadChildren:
                basePath +
                'components/input-inline/input-inline.module#ExampleTuiInputInlineModule',
            data: {
                title: 'InputInline',
            },
        },
        {
            path: 'tui-input',
            loadChildren:
                basePath + 'components/input/input.module#ExampleTuiInputModule',
            data: {
                title: 'Input',
            },
        },
        {
            path: 'tui-input-date',
            loadChildren:
                basePath +
                'components/input-date/input-date.module#ExampleTuiInputDateModule',
            data: {
                title: 'InputDate',
            },
        },
        {
            path: 'tui-input-card',
            loadChildren:
                basePath +
                'components/input-card/input-card.module#ExampleTuiInputCardModule',
            data: {
                title: 'InputCard',
            },
        },
        {
            path: 'tui-input-card-grouped',
            loadChildren:
                basePath +
                'components/input-card-grouped/input-card-grouped.module#ExampleTuiInputCardGroupedModule',
            data: {
                title: 'InputCardGrouped',
            },
        },
        {
            path: 'tui-input-copy',
            loadChildren:
                basePath +
                'components/input-copy/input-copy.module#ExampleTuiInputCopyModule',
            data: {
                title: 'InputCopy',
            },
        },
        {
            path: 'tui-input-count',
            loadChildren:
                basePath +
                'components/input-count/input-count.module#ExampleTuiInputCountModule',
            data: {
                title: 'InputCount',
            },
        },
        {
            path: 'tui-input-date-time',
            loadChildren:
                basePath +
                'components/input-date-time/input-date-time.module#ExampleTuiInputDateTimeModule',
            data: {
                title: 'InputDateTime',
            },
        },
        {
            path: 'tui-input-file',
            loadChildren:
                basePath +
                'components/input-file/input-file.module#ExampleTuiInputFileModule',
            data: {
                title: 'InputFile',
            },
        },
        {
            path: 'tui-input-month',
            loadChildren:
                basePath +
                'components/input-month/input-month.module#ExampleInputMonthModule',
            data: {
                title: 'InputMonth',
            },
        },
        {
            path: 'tui-input-month-range',
            loadChildren:
                basePath +
                'components/input-month-range/input-month-range.module#ExampleTuiInputMonthRangeModule',
            data: {
                title: 'InputMonthRange',
            },
        },
        {
            path: 'tui-input-number',
            loadChildren:
                basePath +
                'components/input-number/input-number.module#ExampleTuiInputNumberModule',
            data: {
                title: 'InputNumber',
            },
        },
        {
            path: 'tui-input-password',
            loadChildren:
                basePath +
                'components/input-password/input-password.module#ExampleTuiInputPasswordModule',
            data: {
                title: 'InputPassword',
            },
        },
        {
            path: 'tui-input-phone',
            loadChildren:
                basePath +
                'components/input-phone/input-phone.module#ExampleTuiInputPhoneModule',
            data: {
                title: 'InputPhone',
            },
        },
        {
            path: 'tui-input-range',
            loadChildren:
                basePath +
                'components/input-range/input-range.module#ExampleTuiInputRangeModule',
            data: {
                title: 'InputRange',
            },
        },
        {
            path: 'tui-input-date-range',
            loadChildren:
                basePath +
                'components/input-date-range/input-date-range.module#ExampleTuiInputDateRangeModule',
            data: {
                title: 'InputDateRange',
            },
        },
        {
            path: 'tui-input-slider',
            loadChildren:
                basePath +
                'components/input-slider/input-slider.module#ExampleTuiInputSliderModule',
            data: {
                title: 'InputSlider',
            },
        },
        {
            path: 'tui-input-tag',
            loadChildren:
                basePath +
                'components/input-tag/input-tag.module#ExampleTuiInputTagModule',
            data: {
                title: 'InputTag',
            },
        },
        {
            path: 'tui-input-time',
            loadChildren:
                basePath +
                'components/input-time/input-time.module#ExampleTuiInputTimeModule',
            data: {
                title: 'InputTime',
            },
        },
        {
            path: 'tui-input-phone-international',
            loadChildren:
                basePath +
                'components/input-phone-international/input-phone-international.module#ExampleTuiInputPhoneInternationalModule',
            data: {
                title: 'InputPhoneInternational',
            },
        },
        {
            path: 'tui-island',
            loadChildren:
                basePath + 'components/island/island.module#ExampleTuiIslandModule',
            data: {
                title: 'Island',
            },
        },
        {
            path: 'tui-label',
            loadChildren:
                basePath + 'components/label/label.module#ExampleTuiLabelModule',
            data: {
                title: 'Label',
            },
        },
        {
            path: 'tui-line-clamp',
            loadChildren:
                basePath +
                'components/line-clamp/line-clamp.module#ExampleTuiLineClampModule',
            data: {
                title: 'LineClamp',
            },
        },
        {
            path: 'tui-link',
            loadChildren: basePath + 'components/link/link.module#ExampleTuiLinkModule',
            data: {
                title: 'Link',
            },
        },
        {
            path: 'tui-loader',
            loadChildren:
                basePath + 'components/loader/loader.module#ExampleTuiLoaderModule',
            data: {
                title: 'Loader',
            },
        },
        {
            path: 'tui-marker-icon',
            loadChildren:
                basePath +
                'components/marker-icon/marker-icon.module#ExampleTuiMarkerIconModule',
            data: {
                path: 'tui-marker-icon',
                title: 'MarkerIcon',
            },
        },
        {
            path: 'mobile-themes',
            loadChildren:
                basePath +
                'components/mobile-themes/mobile-themes.module#ExampleTuiMobileThemesModule',
            data: {
                title: 'Темы для PWA',
            },
        },
        {
            path: 'tui-notification',
            loadChildren:
                basePath +
                'components/notification/notification.module#ExampleTuiNotificationModule',
            data: {
                title: 'Notification',
            },
        },
        {
            path: 'tui-mobile-dialog',
            loadChildren:
                basePath +
                'components/mobile-dialog/mobile-dialog.module#ExampleTuiMobileDialogModule',
            data: {
                title: 'MobileDialog',
            },
        },
        {
            path: 'tui-mobile-calendar',
            loadChildren:
                basePath +
                'components/mobile-calendar/mobile-calendar.module#ExampleTuiMobileCalendarModule',
            data: {
                title: 'MobileCalendar',
            },
        },
        {
            path: 'tui-pull-to-refresh',
            loadChildren:
                basePath +
                'components/pull-to-refresh/pull-to-refresh.module#ExampleTuiPullToRefreshModule',
            data: {
                title: 'PullToRefresh',
            },
        },
        {
            path: 'tui-money',
            loadChildren:
                basePath + 'components/money/money.module#ExampleTuiMoneyModule',
            data: {
                title: 'Money',
            },
        },
        {
            path: 'tui-calendar-month',
            loadChildren:
                basePath +
                'components/calendar-month/calendar-month.module#ExampleTuiCalendarMonthModule',
            data: {
                title: 'CalendarMonth',
            },
        },
        {
            path: 'tui-multi-select',
            loadChildren:
                basePath +
                'components/multi-select/multi-select.module#ExampleTuiMultiSelectModule',
            data: {
                title: 'MultiSelect',
            },
        },
        {
            path: 'tui-pagination',
            loadChildren:
                basePath +
                'components/pagination/pagination.module#ExampleTuiPaginationModule',
            data: {
                title: 'Pagination',
            },
        },
        {
            path: 'tui-radio',
            loadChildren:
                basePath + 'components/radio/radio.module#ExampleTuiRadioModule',
            data: {
                title: 'Radio',
            },
        },
        {
            path: 'tui-radio-block',
            loadChildren:
                basePath +
                'components/radio-block/radio-block.module#ExampleTuiRadioBlockModule',
            data: {
                title: 'RadioBlock',
            },
        },
        {
            path: 'tui-radio-labeled',
            loadChildren:
                basePath +
                'components/radio-labeled/radio-labeled.module#ExampleTuiRadioLabeledModule',
            data: {
                title: 'RadioLabeled',
            },
        },
        {
            path: 'tui-radio-list',
            loadChildren:
                basePath +
                'components/radio-list/radio-list.module#ExampleTuiRadioListModule',
            data: {
                title: 'RadioList',
            },
        },
        {
            path: 'tui-range',
            loadChildren:
                basePath + 'components/range/range.module#ExampleTuiRangeModule',
            data: {
                title: 'range',
            },
        },
        {
            path: 'tui-calendar-range',
            loadChildren:
                basePath +
                'components/calendar-range/calendar-range.module#ExampleTuiCalendarRangeModule',
            data: {
                title: 'CalendarRange',
            },
        },
        {
            path: 'tui-select',
            loadChildren:
                basePath + 'components/select/select.module#ExampleTuiSelectModule',
            data: {
                title: 'Select',
            },
        },
        {
            path: 'tui-scrollbar',
            loadChildren:
                basePath +
                'components/scrollbar/scrollbar.module#ExampleTuiScrollbarModule',
            data: {
                title: 'Scrollbar',
            },
        },
        {
            path: 'tui-slider',
            loadChildren:
                basePath + 'components/slider/slider.module#ExampleTuiSliderModule',
            data: {
                title: 'Slider',
            },
        },
        {
            path: 'tui-stepper',
            loadChildren:
                basePath + 'components/stepper/stepper.module#ExampleTuiStepperModule',
            data: {
                title: 'Stepper',
            },
        },
        {
            path: 'tui-svg',
            loadChildren: basePath + 'components/svg/svg.module#ExampleTuiSvgModule',
            data: {
                title: 'Svg',
            },
        },
        {
            path: 'tui-tabs',
            loadChildren: basePath + 'components/tabs/tabs.module#ExampleTuiTabsModule',
            data: {
                title: 'Tabs',
            },
        },
        {
            path: 'tui-tag',
            loadChildren: basePath + 'components/tag/tag.module#ExampleTuiTagModule',
            data: {
                title: 'Tag',
            },
        },
        {
            path: 'tui-text-area',
            loadChildren:
                basePath +
                'components/text-area/text-area.module#ExampleTuiTextAreaModule',
            data: {
                title: 'TextArea',
            },
        },
        {
            path: 'tui-primitive-textfield',
            loadChildren:
                basePath +
                'components/primitive-textfield/primitive-textfield.module#ExampleTuiPrimitiveTextfieldModule',
            data: {
                title: 'PrimitiveTextfield',
            },
        },
        {
            path: 'tui-theme-switcher',
            loadChildren:
                basePath +
                'components/theme-switcher/theme-switcher.module#ExampleTuiThemeSwitcherModule',
            data: {
                title: 'ThemeSwitcher',
            },
        },
        {
            path: 'tui-toggle',
            loadChildren:
                basePath + 'components/toggle/toggle.module#ExampleTuiToggleModule',
            data: {
                title: 'Toggle',
            },
        },
        {
            path: 'tui-tooltip',
            loadChildren:
                basePath + 'components/tooltip/tooltip.module#ExampleTuiTooltipModule',
            data: {
                title: 'Tooltip',
            },
        },
        {
            path: 'tui-toolbar',
            loadChildren:
                basePath + 'components/toolbar/toolbar.module#ExampleTuiToolbarModule',
            data: {
                title: 'Toolbar',
            },
        },
        {
            path: 'tui-editor',
            loadChildren:
                basePath + 'components/editor/editor.module#ExampleTuiEditorModule',
            data: {
                title: 'Editor',
            },
        },
        {
            path: 'tui-filter',
            loadChildren:
                basePath + 'components/filter/filter.module#ExampleTuiFilterModule',
            data: {
                title: 'Filter',
            },
        },
        // CHARTS
        {
            path: 'tui-axes',
            loadChildren: basePath + 'charts/axes/axes.module#ExampleTuiAxesModule',
            data: {
                title: 'Axes',
            },
        },
        {
            path: 'tui-bar',
            loadChildren: basePath + 'charts/bar/bar.module#ExampleTuiBarModule',
            data: {
                title: 'Bar',
            },
        },
        {
            path: 'tui-bar-chart',
            loadChildren:
                basePath + 'charts/bar-chart/bar-chart.module#ExampleTuiBarChartModule',
            data: {
                title: 'BarChart',
            },
        },
        {
            path: 'tui-bar-set',
            loadChildren:
                basePath + 'charts/bar-set/bar-set.module#ExampleTuiBarSetModule',
            data: {
                title: 'BarSet',
            },
        },
        {
            path: 'tui-legend-item',
            loadChildren:
                basePath +
                'charts/legend-item/legend-item.module#ExampleTuiLegendItemModule',
            data: {
                title: 'LegendItem',
            },
        },
        {
            path: 'tui-line-chart',
            loadChildren:
                basePath +
                'charts/line-chart/line-chart.module#ExampleTuiLineChartModule',
            data: {
                title: 'LineChart',
            },
        },
        {
            path: 'tui-line-days-chart',
            loadChildren:
                basePath +
                'charts/line-days-chart/line-days-chart.module#ExampleTuiLineDaysChartModule',
            data: {
                title: 'LineDaysChart',
            },
        },
        {
            path: 'tui-pie-chart',
            loadChildren:
                basePath + 'charts/pie-chart/pie-chart.module#ExampleTuiPieChartModule',
            data: {
                title: 'PieChart',
            },
        },
        {
            path: 'tui-ring-chart',
            loadChildren:
                basePath +
                'charts/ring-chart/ring-chart.module#ExampleTuiRingChartModule',
            data: {
                title: 'RingChart',
            },
        },
        // STYLES
        {
            path: 'colors',
            loadChildren: basePath + 'markup/colors/colors.module#ColorsModule',
            data: {
                title: 'Цвета',
            },
        },
        {
            path: 'containers',
            loadChildren:
                basePath + 'markup/containers/containers.module#ContainersModule',
            data: {
                title: 'Контейнеры',
            },
        },
        {
            path: 'form',
            loadChildren: basePath + 'markup/form/form.module#FormModule',
            data: {
                title: 'Форма',
            },
        },
        {
            path: 'grid',
            loadChildren: basePath + 'markup/grid/grid.module#GridModule',
            data: {
                title: 'Сетка',
            },
        },
        {
            path: 'icons',
            loadChildren: basePath + 'markup/icons/icons.module#IconsModule',
            data: {
                title: 'Иконки',
            },
        },
        {
            path: 'lists',
            loadChildren: basePath + 'markup/lists/lists.module#ListsModule',
            data: {
                title: 'Списки',
            },
        },
        {
            path: 'mixins',
            loadChildren: basePath + 'markup/mixins/mixins.module#MixinsModule',
            data: {
                title: 'Миксины',
            },
        },
        {
            path: 'shadows',
            loadChildren: basePath + 'markup/shadows/shadows.module#ShadowsModule',
            data: {
                title: 'Тени',
            },
        },
        {
            path: 'skeleton',
            loadChildren: basePath + 'markup/skeleton/skeleton.module#SkeletonModule',
            data: {
                title: 'Скелетон',
            },
        },
        {
            path: 'spaces',
            loadChildren: basePath + 'markup/spaces/spaces.module#SpacesModule',
            data: {
                title: 'Отступы',
            },
        },
        {
            path: 'tables',
            loadChildren: basePath + 'markup/tables/tables.module#TablesModule',
            data: {
                title: 'Таблицы',
            },
        },
        {
            path: 'theme',
            loadChildren: basePath + 'markup/theme/theme.module#ThemeModule',
            data: {
                title: 'Темы',
            },
        },
        {
            path: 'typography',
            loadChildren:
                basePath + 'markup/typography/typography.module#TypographyModule',
            data: {
                title: 'Типографика',
            },
        },
        // DIRECTIVES
        {
            path: 'tui-active-zone',
            loadChildren:
                basePath +
                'directives/active-zone/active-zone.module#ExampleTuiActiveZoneModule',
            data: {
                title: 'ActiveZone',
            },
        },
        {
            path: 'tui-dropdown',
            loadChildren:
                basePath + 'directives/dropdown/dropdown.module#ExampleTuiDropdownModule',
            data: {
                title: 'Dropdown',
            },
        },
        {
            path: 'tui-dropdown-selection',
            loadChildren:
                basePath +
                'directives/dropdown-selection/dropdown-selection.module#ExampleTuiDropdownSelectionModule',
            data: {
                title: 'DropdownSelection',
            },
        },
        {
            path: 'tui-elastic-sticky',
            loadChildren:
                basePath +
                'directives/elastic-sticky/elastic-sticky.module#ExampleTuiElasticStickyModule',
            data: {
                title: 'ElasticSticky',
            },
        },
        {
            path: 'tui-element',
            loadChildren:
                basePath + 'directives/element/element.module#ExampleTuiElementModule',
            data: {
                title: 'Element',
            },
        },
        {
            path: 'tui-highlight',
            loadChildren:
                basePath +
                'directives/highlight/highlight.module#ExampleTuiHighlightModule',
            data: {
                title: 'Highlight',
            },
        },
        {
            path: 'tui-hint',
            loadChildren: basePath + 'directives/hint/hint.module#ExampleTuiHintModule',
            data: {
                title: 'Hint',
            },
        },
        {
            path: 'tui-lazy-loading',
            loadChildren:
                basePath +
                'directives/lazy-loading/lazy-loading.module#ExampleTuiLazyLoadingModule',
            data: {
                title: 'LazyLoading',
            },
        },
        {
            path: 'tui-manual-hint',
            loadChildren:
                basePath +
                'directives/manual-hint/manual-hint.module#ExampleTuiManualHintModule',
            data: {
                title: 'ManualHint',
            },
        },
        {
            path: 'tui-pointer-hint',
            loadChildren:
                basePath +
                'directives/pointer-hint/pointer-hint.module#ExampleTuiPointerHintModule',
            data: {
                title: 'PointerHint',
            },
        },
        {
            path: 'tui-let',
            loadChildren: basePath + 'directives/let/let.module#ExampleTuiLetModule',
            data: {
                title: 'Let',
            },
        },
        {
            path: 'tui-present',
            loadChildren:
                basePath + 'directives/present/present.module#ExampleTuiPresentModule',
            data: {
                title: 'Present',
            },
        },
        {
            path: 'tui-resizable-column',
            loadChildren:
                basePath +
                'tables/resizable-column/resizable-column.module#ExampleTuiResizableColumnModule',
            data: {
                title: 'ResizableColumns',
            },
        },
        {
            path: 'tui-reorder',
            loadChildren:
                basePath + 'tables/reorder/reorder.module#ExampleTuiReorderModule',
            data: {
                title: 'ReorderColumns',
            },
        },
        {
            path: 'tui-table-pagination',
            loadChildren:
                basePath +
                'tables/table-pagination/table-pagination.module#ExampleTuiTablePaginationModule',
            data: {
                title: 'TablePagination',
            },
        },
        {
            path: 'tui-ripple',
            loadChildren:
                basePath + 'directives/ripple/ripple.module#ExampleTuiRippleModule',
            data: {
                title: 'Ripple',
            },
        },
        {
            path: 'tui-touchable',
            loadChildren:
                basePath +
                'directives/touchable/touchable.module#ExampleTuiTouchableModule',
            data: {
                title: 'Touchable',
            },
        },
        {
            path: 'tui-validator',
            loadChildren:
                basePath +
                'directives/validator/validator.module#ExampleTuiValidatorModule',
            data: {
                title: 'Validator',
            },
        },
        {
            path: 'tui-media',
            loadChildren:
                basePath + 'directives/media/media.module#ExampleTuiMediaModule',
            data: {
                title: 'Media',
            },
        },
        {
            path: 'tui-mode',
            loadChildren: basePath + 'directives/mode/mode.module#ExampleTuiModeModule',
            data: {
                title: 'Mode',
            },
        },
        {
            path: 'tui-auto-focus',
            loadChildren:
                basePath +
                'directives/auto-focus/auto-focus.module#ExampleTuiAutoFocusModule',
            data: {
                title: 'AutoFocus',
            },
        },
        {
            path: 'tui-color',
            loadChildren:
                basePath + 'directives/color/color.module#ExampleTuiColorModule',
            data: {
                title: 'Color',
            },
        },
        // PIPES
        {
            path: 'tui-filter',
            loadChildren: basePath + 'pipes/filter/filter.module#ExampleTuiFilterModule',
            data: {
                title: 'Filter',
            },
        },
        {
            path: 'tui-format-number',
            loadChildren:
                basePath +
                'pipes/format-number/format-number.module#ExampleTuiFormatNumberModule',
            data: {
                title: 'FormatNumber',
            },
        },
        {
            path: 'tui-format-phone',
            loadChildren:
                basePath +
                'pipes/format-phone/format-phone.module#ExampleTuiFormatPhoneModule',
            data: {
                title: 'FormatPhone',
            },
        },
        {
            path: 'tui-mapper',
            loadChildren: basePath + 'pipes/mapper/mapper.module#ExampleTuiMapperModule',
            data: {
                title: 'Mapper',
            },
        },
        {
            path: 'tui-pluralize',
            loadChildren:
                basePath + 'pipes/pluralize/pluralize.module#ExampleTuiPluralizeModule',
            data: {
                title: 'Pluralize',
            },
        },
        // SERVICES
        {
            path: 'tui-notifications-service',
            loadChildren:
                basePath +
                'services/notifications/notifications.module#ExampleTuiNotificationsModule',
            data: {
                title: 'NotificationsService',
            },
        },
        {
            path: 'tui-dialog-service',
            loadChildren:
                basePath + 'services/dialogs/dialogs.module#ExampleTuiDialogsModule',
            data: {
                title: 'DialogService',
            },
        },
        {
            path: 'tui-scroll-service',
            loadChildren:
                basePath + 'services/scroll/scroll.module#ExampleTuiScrollModule',
            data: {
                title: 'ScrollService',
            },
        },
        {
            path: 'tui-svg-service',
            loadChildren: basePath + 'services/svg/svg.module#ExampleTuiSvgModule',
            data: {
                title: 'SvgService',
            },
        },
        {
            path: 'tui-table-bars-service',
            loadChildren:
                basePath + 'services/table-bar/table-bar.module#ExampleTuiTableBarModule',
            data: {
                title: 'TableBarService',
            },
        },
        {
            path: 'tui-dropdown-controller',
            loadChildren:
                basePath +
                'directives/dropdown-controller/dropdown-controller.module#ExampleTuiDropdownControllerModule',
            data: {
                title: 'DropdownController',
            },
        },
        {
            path: 'tui-hint-controller',
            loadChildren:
                basePath +
                'directives/hint-controller/hint-controller.module#ExampleTuiHintControllerModule',
            data: {
                title: 'HintController',
            },
        },
        {
            path: 'tui-textfield-controller',
            loadChildren:
                basePath +
                'directives/textfield-controller/textfield-controller.module#ExampleTuiTextfieldControllerModule',
            data: {
                title: 'TextfieldController',
            },
        },
        // DECORATORS
        {
            path: 'tui-default-prop',
            loadChildren:
                basePath +
                'decorators/default-prop/default-prop.module#ExampleTuiDefaultPropModule',
            data: {
                title: 'DefaultProp',
            },
        },
        {
            path: 'tui-pure',
            loadChildren: basePath + 'decorators/pure/pure.module#ExampleTuiPureModule',
            data: {
                title: 'Pure',
            },
        },
        {
            path: 'tui-required-setter',
            loadChildren:
                basePath +
                'decorators/required-setter/required-setter.module#ExampleTuiRequiredSetterModule',
            data: {
                title: 'RequiredSetter',
            },
        },
        // UTILS
        {
            path: 'math',
            loadChildren: basePath + 'utils/math/math.module#ExampleMathModule',
            data: {
                title: 'Math',
            },
        },
        {
            path: 'format',
            loadChildren: basePath + 'utils/format/format.module#ExampleFormatModule',
            data: {
                title: 'Format',
            },
        },
        {
            path: 'dom',
            loadChildren: basePath + 'utils/dom/dom.module#ExampleDomModule',
            data: {
                title: 'DOM',
            },
        },
        {
            path: 'browser',
            loadChildren: basePath + 'utils/browser/browser.module#ExampleBrowserModule',
            data: {
                title: 'Browser',
            },
        },
        {
            path: 'miscellaneous',
            loadChildren:
                basePath +
                'utils/miscellaneous/miscellaneous.module#ExampleMiscellaneousModule',
            data: {
                title: 'Miscellaneous',
            },
        },
        {path: '**', redirectTo: 'getting-started'},
    ];
}
