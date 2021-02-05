import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {LandingComponent} from './landing/landing.component';

export const ROUTES = [
    {
        path: '',
        component: LandingComponent,
        data: {
            title: 'A powerful set of open source components for Angular',
        },
    },
    {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {
            title: `Getting started`,
        },
    },
    {
        path: 'browser-support',
        loadChildren: () =>
            import(`../info/browsers/browsers.module`).then(m => m.BrowsersModule),
        data: {
            title: `Browser support`,
        },
    },
    {
        path: 'changelog',
        loadChildren: () =>
            import(`../info/changelog/changelog.module`).then(m => m.ChangelogModule),
        data: {
            title: `Changelog`,
        },
    },
    {
        path: 'i18n',
        loadChildren: () =>
            import(`../customization/i18n/i18n.module`).then(m => m.I18nModule),
        data: {
            title: `I18n`,
        },
    },
    {
        path: 'variables',
        loadChildren: () =>
            import(`../customization/variables/variables.module`).then(
                m => m.VariablesModule,
            ),
        data: {
            title: `Variables`,
        },
    },
    {
        path: 'wrapper',
        loadChildren: () =>
            import(`../customization/wrapper/wrapper.module`).then(m => m.WrapperModule),
        data: {
            title: `Wrapper`,
        },
    },
    {
        path: 'dialogs',
        loadChildren: () =>
            import(`../customization/dialogs/dialogs.module`).then(m => m.DialogsModule),
        data: {
            title: `Dialogs`,
        },
    },
    {
        path: 'icon-set',
        loadChildren: () =>
            import(`../customization/icon-set/icon-set.module`).then(
                m => m.IconSetModule,
            ),
        data: {
            title: `Icon set`,
        },
    },
    {
        path: 'tui-doc',
        loadChildren: () => import(`../info/doc/doc.module`).then(m => m.DocModule),
        data: {
            title: `Documentation engine`,
        },
    },
    {
        path: 'related',
        loadChildren: () =>
            import(`../info/related/related.module`).then(m => m.RelatedModule),
        data: {
            title: `Friendly libraries`,
        },
    },
    // COMPONENTS
    {
        path: 'tui-accordion',
        loadChildren: () =>
            import(`../components/accordion/accordion.module`).then(
                m => m.ExampleTuiAccordionModule,
            ),
        data: {
            title: 'Accordion',
        },
    },
    {
        path: 'tui-action',
        loadChildren: () =>
            import(`../components/action/action.module`).then(
                m => m.ExampleTuiActionModule,
            ),
        data: {
            title: 'Action',
        },
    },
    {
        path: 'tui-avatar',
        loadChildren: () =>
            import(`../components/avatar/avatar.module`).then(
                m => m.ExampleTuiAvatarModule,
            ),
        data: {
            title: 'Avatar',
        },
    },
    {
        path: 'tui-badge',
        loadChildren: () =>
            import(`../components/badge/badge.module`).then(m => m.ExampleTuiBadgeModule),
        data: {
            title: 'Badge',
        },
    },
    {
        path: 'tui-badged-content',
        loadChildren: () =>
            import(`../components/badged-content/badged-content.module`).then(
                m => m.ExampleTuiBadgedContentModule,
            ),
        data: {
            title: 'BadgedContent',
        },
    },
    {
        path: 'tui-breadcrumbs',
        loadChildren: () =>
            import(`../components/breadcrumbs/breadcrumbs.module`).then(
                m => m.ExampleTuiBreadcrumbsModule,
            ),
        data: {
            title: 'Breadcrumbs',
        },
    },
    {
        path: 'tui-button',
        loadChildren: () =>
            import(`../components/button/button.module`).then(
                m => m.ExampleTuiButtonModule,
            ),
        data: {
            title: 'Button',
        },
    },
    {
        path: 'tui-calendar',
        loadChildren: () =>
            import(`../components/calendar/calendar.module`).then(
                m => m.ExampleTuiCalendarModule,
            ),
        data: {
            title: 'Calendar',
        },
    },
    {
        path: 'tui-card',
        loadChildren: () =>
            import(`../components/card/card.module`).then(m => m.ExampleTuiCardModule),
        data: {
            title: 'Card',
        },
    },
    {
        path: 'tui-checkbox',
        loadChildren: () =>
            import(`../components/checkbox/checkbox.module`).then(
                m => m.ExampleTuiCheckboxModule,
            ),
        data: {
            title: 'Checkbox',
        },
    },
    {
        path: 'tui-checkbox-block',
        loadChildren: () =>
            import(`../components/checkbox-block/checkbox-block.module`).then(
                m => m.ExampleTuiCheckboxBlockModule,
            ),
        data: {
            title: 'CheckboxBlock',
        },
    },
    {
        path: 'tui-checkbox-labeled',
        loadChildren: () =>
            import(`../components/checkbox-labeled/checkbox-labeled.module`).then(
                m => m.ExampleTuiCheckboxLabeledModule,
            ),
        data: {
            title: 'CheckboxLabeled',
        },
    },
    {
        path: 'tui-color-picker',
        loadChildren: () =>
            import(`../components/color-picker/color-picker.module`).then(
                m => m.ExampleTuiColorPickerModule,
            ),
        data: {
            title: 'ColorPicker',
        },
    },
    {
        path: 'tui-primitive-checkbox',
        loadChildren: () =>
            import(`../components/primitive-checkbox/primitive-checkbox.module`).then(
                m => m.ExampleTuiPrimitiveCheckboxModule,
            ),
        data: {
            title: 'PrimitiveCheckbox',
        },
    },
    {
        path: 'tui-combo-box',
        loadChildren: () =>
            import(`../components/combo-box/combo-box.module`).then(
                m => m.ExampleTuiComboBoxModule,
            ),
        data: {
            title: 'ComboBox',
        },
    },
    {
        path: 'tui-data-list',
        loadChildren: () =>
            import(`../components/data-list/data-list.module`).then(
                m => m.ExampleTuiDataListModule,
            ),
        data: {
            title: 'DataList',
        },
    },
    {
        path: 'tui-error',
        loadChildren: () =>
            import(`../components/error/error.module`).then(m => m.ExampleTuiErrorModule),
        data: {
            title: 'Error',
        },
    },
    {
        path: 'tui-expand',
        loadChildren: () =>
            import(`../components/expand/expand.module`).then(
                m => m.ExampleTuiExpandModule,
            ),
        data: {
            title: 'Expand',
        },
    },
    {
        path: 'tui-field-error',
        loadChildren: () =>
            import(`../components/field-error/field-error.module`).then(
                m => m.ExampleTuiFieldErrorModule,
            ),
        data: {
            title: 'FieldError ',
        },
    },
    {
        path: 'tui-group',
        loadChildren: () =>
            import(`../components/group/group.module`).then(m => m.ExampleTuiGroupModule),
        data: {
            path: 'tui-group',
            title: 'Group',
        },
    },
    {
        path: 'tui-hosted-dropdown',
        loadChildren: () =>
            import(`../components/hosted-dropdown/hosted-dropdown.module`).then(
                m => m.ExampleTuiHostedDropdownModule,
            ),
        data: {
            title: 'HostedDropdown',
        },
    },
    {
        path: 'tui-input-inline',
        loadChildren: () =>
            import(`../components/input-inline/input-inline.module`).then(
                m => m.ExampleTuiInputInlineModule,
            ),
        data: {
            title: 'InputInline',
        },
    },
    {
        path: 'tui-input',
        loadChildren: () =>
            import(`../components/input/input.module`).then(m => m.ExampleTuiInputModule),
        data: {
            title: 'Input',
        },
    },
    {
        path: 'tui-input-date',
        loadChildren: () =>
            import(`../components/input-date/input-date.module`).then(
                m => m.ExampleTuiInputDateModule,
            ),
        data: {
            title: 'InputDate',
        },
    },
    {
        path: 'tui-input-card',
        loadChildren: () =>
            import(`../components/input-card/input-card.module`).then(
                m => m.ExampleTuiInputCardModule,
            ),
        data: {
            title: 'InputCard',
        },
    },
    {
        path: 'tui-input-card-grouped',
        loadChildren: () =>
            import(`../components/input-card-grouped/input-card-grouped.module`).then(
                m => m.ExampleTuiInputCardGroupedModule,
            ),
        data: {
            title: 'InputCardGrouped',
        },
    },
    {
        path: 'tui-input-copy',
        loadChildren: () =>
            import(`../components/input-copy/input-copy.module`).then(
                m => m.ExampleTuiInputCopyModule,
            ),
        data: {
            title: 'InputCopy',
        },
    },
    {
        path: 'tui-input-count',
        loadChildren: () =>
            import(`../components/input-count/input-count.module`).then(
                m => m.ExampleTuiInputCountModule,
            ),
        data: {
            title: 'InputCount',
        },
    },
    {
        path: 'tui-input-date-time',
        loadChildren: () =>
            import(`../components/input-date-time/input-date-time.module`).then(
                m => m.ExampleTuiInputDateTimeModule,
            ),
        data: {
            title: 'InputDateTime',
        },
    },
    {
        path: 'tui-input-file',
        loadChildren: () =>
            import(`../components/input-file/input-file.module`).then(
                m => m.ExampleTuiInputFileModule,
            ),
        data: {
            title: 'InputFile',
        },
    },
    {
        path: 'tui-input-month',
        loadChildren: () =>
            import(`../components/input-month/input-month.module`).then(
                m => m.ExampleInputMonthModule,
            ),
        data: {
            title: 'InputMonth',
        },
    },
    {
        path: 'tui-input-month-range',
        loadChildren: () =>
            import(`../components/input-month-range/input-month-range.module`).then(
                m => m.ExampleTuiInputMonthRangeModule,
            ),
        data: {
            title: 'InputMonthRange',
        },
    },
    {
        path: 'tui-input-number',
        loadChildren: () =>
            import(`../components/input-number/input-number.module`).then(
                m => m.ExampleTuiInputNumberModule,
            ),
        data: {
            title: 'InputNumber',
        },
    },
    {
        path: 'tui-input-password',
        loadChildren: () =>
            import(`../components/input-password/input-password.module`).then(
                m => m.ExampleTuiInputPasswordModule,
            ),
        data: {
            title: 'InputPassword',
        },
    },
    {
        path: 'tui-input-phone',
        loadChildren: () =>
            import(`../components/input-phone/input-phone.module`).then(
                m => m.ExampleTuiInputPhoneModule,
            ),
        data: {
            title: 'InputPhone',
        },
    },
    {
        path: 'tui-input-range',
        loadChildren: () =>
            import(`../components/input-range/input-range.module`).then(
                m => m.ExampleTuiInputRangeModule,
            ),
        data: {
            title: 'InputRange',
        },
    },
    {
        path: 'tui-input-date-range',
        loadChildren: () =>
            import(`../components/input-date-range/input-date-range.module`).then(
                m => m.ExampleTuiInputDateRangeModule,
            ),
        data: {
            title: 'InputDateRange',
        },
    },
    {
        path: 'tui-input-slider',
        loadChildren: () =>
            import(`../components/input-slider/input-slider.module`).then(
                m => m.ExampleTuiInputSliderModule,
            ),
        data: {
            title: 'InputSlider',
        },
    },
    {
        path: 'tui-input-tag',
        loadChildren: () =>
            import(`../components/input-tag/input-tag.module`).then(
                m => m.ExampleTuiInputTagModule,
            ),
        data: {
            title: 'InputTag',
        },
    },
    {
        path: 'tui-input-time',
        loadChildren: () =>
            import(`../components/input-time/input-time.module`).then(
                m => m.ExampleTuiInputTimeModule,
            ),
        data: {
            title: 'InputTime',
        },
    },
    {
        path: 'tui-input-phone-international',
        loadChildren: () =>
            import(
                `../components/input-phone-international/input-phone-international.module`
            ).then(m => m.ExampleTuiInputPhoneInternationalModule),
        data: {
            title: 'InputPhoneInternational',
        },
    },
    {
        path: 'tui-island',
        loadChildren: () =>
            import(`../components/island/island.module`).then(
                m => m.ExampleTuiIslandModule,
            ),
        data: {
            title: 'Island',
        },
    },
    {
        path: 'tui-label',
        loadChildren: () =>
            import(`../components/label/label.module`).then(m => m.ExampleTuiLabelModule),
        data: {
            title: 'Label',
        },
    },
    {
        path: 'tui-line-clamp',
        loadChildren: () =>
            import(`../components/line-clamp/line-clamp.module`).then(
                m => m.ExampleTuiLineClampModule,
            ),
        data: {
            title: 'LineClamp',
        },
    },
    {
        path: 'tui-link',
        loadChildren: () =>
            import(`../components/link/link.module`).then(m => m.ExampleTuiLinkModule),
        data: {
            title: 'Link',
        },
    },
    {
        path: 'tui-loader',
        loadChildren: () =>
            import(`../components/loader/loader.module`).then(
                m => m.ExampleTuiLoaderModule,
            ),
        data: {
            title: 'Loader',
        },
    },
    {
        path: 'tui-marker-icon',
        loadChildren: () =>
            import(`../components/marker-icon/marker-icon.module`).then(
                m => m.ExampleTuiMarkerIconModule,
            ),
        data: {
            path: 'tui-marker-icon',
            title: 'MarkerIcon',
        },
    },
    {
        path: 'mobile-themes',
        loadChildren: () =>
            import(`../components/mobile-themes/mobile-themes.module`).then(
                m => m.ExampleTuiMobileThemesModule,
            ),
        data: {
            title: `Mobile`,
        },
    },
    {
        path: 'tui-notification',
        loadChildren: () =>
            import(`../components/notification/notification.module`).then(
                m => m.ExampleTuiNotificationModule,
            ),
        data: {
            title: 'Notification',
        },
    },
    {
        path: 'tui-mobile-dialog',
        loadChildren: () =>
            import(`../components/mobile-dialog/mobile-dialog.module`).then(
                m => m.ExampleTuiMobileDialogModule,
            ),
        data: {
            title: 'MobileDialog',
        },
    },
    {
        path: 'tui-mobile-calendar',
        loadChildren: () =>
            import(`../components/mobile-calendar/mobile-calendar.module`).then(
                m => m.ExampleTuiMobileCalendarModule,
            ),
        data: {
            title: 'MobileCalendar',
        },
    },
    {
        path: 'tui-pull-to-refresh',
        loadChildren: () =>
            import(`../components/pull-to-refresh/pull-to-refresh.module`).then(
                m => m.ExampleTuiPullToRefreshModule,
            ),
        data: {
            title: 'PullToRefresh',
        },
    },
    {
        path: 'tui-money',
        loadChildren: () =>
            import(`../components/money/money.module`).then(m => m.ExampleTuiMoneyModule),
        data: {
            title: 'Money',
        },
    },
    {
        path: 'tui-calendar-month',
        loadChildren: () =>
            import(`../components/calendar-month/calendar-month.module`).then(
                m => m.ExampleTuiCalendarMonthModule,
            ),
        data: {
            title: 'CalendarMonth',
        },
    },
    {
        path: 'tui-multi-select',
        loadChildren: () =>
            import(`../components/multi-select/multi-select.module`).then(
                m => m.ExampleTuiMultiSelectModule,
            ),
        data: {
            title: 'MultiSelect',
        },
    },
    {
        path: 'tui-pagination',
        loadChildren: () =>
            import(`../components/pagination/pagination.module`).then(
                m => m.ExampleTuiPaginationModule,
            ),
        data: {
            title: 'Pagination',
        },
    },
    {
        path: 'tui-radio',
        loadChildren: () =>
            import(`../components/radio/radio.module`).then(m => m.ExampleTuiRadioModule),
        data: {
            title: 'Radio',
        },
    },
    {
        path: 'tui-radio-block',
        loadChildren: () =>
            import(`../components/radio-block/radio-block.module`).then(
                m => m.ExampleTuiRadioBlockModule,
            ),
        data: {
            title: 'RadioBlock',
        },
    },
    {
        path: 'tui-radio-labeled',
        loadChildren: () =>
            import(`../components/radio-labeled/radio-labeled.module`).then(
                m => m.ExampleTuiRadioLabeledModule,
            ),
        data: {
            title: 'RadioLabeled',
        },
    },
    {
        path: 'tui-radio-list',
        loadChildren: () =>
            import(`../components/radio-list/radio-list.module`).then(
                m => m.ExampleTuiRadioListModule,
            ),
        data: {
            title: 'RadioList',
        },
    },
    {
        path: 'tui-range',
        loadChildren: () =>
            import(`../components/range/range.module`).then(m => m.ExampleTuiRangeModule),
        data: {
            title: 'range',
        },
    },
    {
        path: 'tui-calendar-range',
        loadChildren: () =>
            import(`../components/calendar-range/calendar-range.module`).then(
                m => m.ExampleTuiCalendarRangeModule,
            ),
        data: {
            title: 'CalendarRange',
        },
    },
    {
        path: 'tui-select',
        loadChildren: () =>
            import(`../components/select/select.module`).then(
                m => m.ExampleTuiSelectModule,
            ),
        data: {
            title: 'Select',
        },
    },
    {
        path: 'tui-scrollbar',
        loadChildren: () =>
            import(`../components/scrollbar/scrollbar.module`).then(
                m => m.ExampleTuiScrollbarModule,
            ),
        data: {
            title: 'Scrollbar',
        },
    },
    {
        path: 'tui-slider',
        loadChildren: () =>
            import(`../components/slider/slider.module`).then(
                m => m.ExampleTuiSliderModule,
            ),
        data: {
            title: 'Slider',
        },
    },
    {
        path: 'tui-stepper',
        loadChildren: () =>
            import(`../components/stepper/stepper.module`).then(
                m => m.ExampleTuiStepperModule,
            ),
        data: {
            title: 'Stepper',
        },
    },
    {
        path: 'tui-svg',
        loadChildren: () =>
            import(`../components/svg/svg.module`).then(m => m.ExampleTuiSvgModule),
        data: {
            title: 'Svg',
        },
    },
    {
        path: 'tui-tabs',
        loadChildren: () =>
            import(`../components/tabs/tabs.module`).then(m => m.ExampleTuiTabsModule),
        data: {
            title: 'Tabs',
        },
    },
    {
        path: 'tui-tag',
        loadChildren: () =>
            import(`../components/tag/tag.module`).then(m => m.ExampleTuiTagModule),
        data: {
            title: 'Tag',
        },
    },
    {
        path: 'tui-theme-night',
        loadChildren: () =>
            import(`../components/theme-night/theme-night.module`).then(
                m => m.ExampleTuiThemeNightModule,
            ),
        data: {
            title: 'ThemeNight',
        },
    },
    {
        path: 'tui-text-area',
        loadChildren: () =>
            import(`../components/text-area/text-area.module`).then(
                m => m.ExampleTuiTextAreaModule,
            ),
        data: {
            title: 'TextArea',
        },
    },
    {
        path: 'tui-primitive-textfield',
        loadChildren: () =>
            import(`../components/primitive-textfield/primitive-textfield.module`).then(
                m => m.ExampleTuiPrimitiveTextfieldModule,
            ),
        data: {
            title: 'PrimitiveTextfield',
        },
    },
    {
        path: 'tui-theme-switcher',
        loadChildren: () =>
            import(`../components/theme-switcher/theme-switcher.module`).then(
                m => m.ExampleTuiThemeSwitcherModule,
            ),
        data: {
            title: 'ThemeSwitcher',
        },
    },
    {
        path: 'tui-toggle',
        loadChildren: () =>
            import(`../components/toggle/toggle.module`).then(
                m => m.ExampleTuiToggleModule,
            ),
        data: {
            title: 'Toggle',
        },
    },
    {
        path: 'tui-tooltip',
        loadChildren: () =>
            import(`../components/tooltip/tooltip.module`).then(
                m => m.ExampleTuiTooltipModule,
            ),
        data: {
            title: 'Tooltip',
        },
    },
    {
        path: 'tui-toolbar',
        loadChildren: () =>
            import(`../components/toolbar/toolbar.module`).then(
                m => m.ExampleTuiToolbarModule,
            ),
        data: {
            title: 'Toolbar',
        },
    },
    {
        path: 'tui-editor',
        loadChildren: () =>
            import(`../components/editor/editor.module`).then(
                m => m.ExampleTuiEditorModule,
            ),
        data: {
            title: 'Editor',
        },
    },
    {
        path: 'tui-filter',
        loadChildren: () =>
            import(`../components/filter/filter.module`).then(
                m => m.ExampleTuiFilterModule,
            ),
        data: {
            title: 'Filter',
        },
    },
    // CHARTS
    {
        path: 'tui-axes',
        loadChildren: () =>
            import(`../charts/axes/axes.module`).then(m => m.ExampleTuiAxesModule),
        data: {
            title: 'Axes',
        },
    },
    {
        path: 'tui-bar',
        loadChildren: () =>
            import(`../charts/bar/bar.module`).then(m => m.ExampleTuiBarModule),
        data: {
            title: 'Bar',
        },
    },
    {
        path: 'tui-bar-chart',
        loadChildren: () =>
            import(`../charts/bar-chart/bar-chart.module`).then(
                m => m.ExampleTuiBarChartModule,
            ),
        data: {
            title: 'BarChart',
        },
    },
    {
        path: 'tui-bar-set',
        loadChildren: () =>
            import(`../charts/bar-set/bar-set.module`).then(
                m => m.ExampleTuiBarSetModule,
            ),
        data: {
            title: 'BarSet',
        },
    },
    {
        path: 'tui-legend-item',
        loadChildren: () =>
            import(`../charts/legend-item/legend-item.module`).then(
                m => m.ExampleTuiLegendItemModule,
            ),
        data: {
            title: 'LegendItem',
        },
    },
    {
        path: 'tui-line-chart',
        loadChildren: () =>
            import(`../charts/line-chart/line-chart.module`).then(
                m => m.ExampleTuiLineChartModule,
            ),
        data: {
            title: 'LineChart',
        },
    },
    {
        path: 'tui-line-days-chart',
        loadChildren: () =>
            import(`../charts/line-days-chart/line-days-chart.module`).then(
                m => m.ExampleTuiLineDaysChartModule,
            ),
        data: {
            title: 'LineDaysChart',
        },
    },
    {
        path: 'tui-pie-chart',
        loadChildren: () =>
            import(`../charts/pie-chart/pie-chart.module`).then(
                m => m.ExampleTuiPieChartModule,
            ),
        data: {
            title: 'PieChart',
        },
    },
    {
        path: 'tui-ring-chart',
        loadChildren: () =>
            import(`../charts/ring-chart/ring-chart.module`).then(
                m => m.ExampleTuiRingChartModule,
            ),
        data: {
            title: 'RingChart',
        },
    },
    // STYLES
    {
        path: 'colors',
        loadChildren: () =>
            import(`../markup/colors/colors.module`).then(m => m.ColorsModule),
        data: {
            title: `Colors`,
        },
    },
    {
        path: 'form',
        loadChildren: () => import(`../markup/form/form.module`).then(m => m.FormModule),
        data: {
            title: `Form`,
        },
    },
    {
        path: 'grid',
        loadChildren: () => import(`../markup/grid/grid.module`).then(m => m.GridModule),
        data: {
            title: `Grid`,
        },
    },
    {
        path: 'icons',
        loadChildren: () =>
            import(`../markup/icons/icons.module`).then(m => m.IconsModule),
        data: {
            title: `Icons`,
        },
    },
    {
        path: 'lists',
        loadChildren: () =>
            import(`../markup/lists/lists.module`).then(m => m.ListsModule),
        data: {
            title: `Lists`,
        },
    },
    {
        path: 'shadows',
        loadChildren: () =>
            import(`../markup/shadows/shadows.module`).then(m => m.ShadowsModule),
        data: {
            title: `Shadows`,
        },
    },
    {
        path: 'skeleton',
        loadChildren: () =>
            import(`../markup/skeleton/skeleton.module`).then(m => m.SkeletonModule),
        data: {
            title: `Skeleton`,
        },
    },
    {
        path: 'spaces',
        loadChildren: () =>
            import(`../markup/spaces/spaces.module`).then(m => m.SpacesModule),
        data: {
            title: `Spaces`,
        },
    },
    {
        path: 'tables',
        loadChildren: () =>
            import(`../markup/tables/tables.module`).then(m => m.TablesModule),
        data: {
            title: `Tables`,
        },
    },
    {
        path: 'typography',
        loadChildren: () =>
            import(`../markup/typography/typography.module`).then(
                m => m.TypographyModule,
            ),
        data: {
            title: `Typography`,
        },
    },
    // DIRECTIVES
    {
        path: 'tui-active-zone',
        loadChildren: () =>
            import(`../directives/active-zone/active-zone.module`).then(
                m => m.ExampleTuiActiveZoneModule,
            ),
        data: {
            title: 'ActiveZone',
        },
    },
    {
        path: 'tui-dropdown',
        loadChildren: () =>
            import(`../directives/dropdown/dropdown.module`).then(
                m => m.ExampleTuiDropdownModule,
            ),
        data: {
            title: 'Dropdown',
        },
    },
    {
        path: 'tui-dropdown-selection',
        loadChildren: () =>
            import(`../directives/dropdown-selection/dropdown-selection.module`).then(
                m => m.ExampleTuiDropdownSelectionModule,
            ),
        data: {
            title: 'DropdownSelection',
        },
    },
    {
        path: 'tui-elastic-sticky',
        loadChildren: () =>
            import(`../directives/elastic-sticky/elastic-sticky.module`).then(
                m => m.ExampleTuiElasticStickyModule,
            ),
        data: {
            title: 'ElasticSticky',
        },
    },
    {
        path: 'tui-element',
        loadChildren: () =>
            import(`../directives/element/element.module`).then(
                m => m.ExampleTuiElementModule,
            ),
        data: {
            title: 'Element',
        },
    },
    {
        path: 'tui-highlight',
        loadChildren: () =>
            import(`../directives/highlight/highlight.module`).then(
                m => m.ExampleTuiHighlightModule,
            ),
        data: {
            title: 'Highlight',
        },
    },
    {
        path: 'tui-hint',
        loadChildren: () =>
            import(`../directives/hint/hint.module`).then(m => m.ExampleTuiHintModule),
        data: {
            title: 'Hint',
        },
    },
    {
        path: 'tui-lazy-loading',
        loadChildren: () =>
            import(`../directives/lazy-loading/lazy-loading.module`).then(
                m => m.ExampleTuiLazyLoadingModule,
            ),
        data: {
            title: 'LazyLoading',
        },
    },
    {
        path: 'tui-manual-hint',
        loadChildren: () =>
            import(`../directives/manual-hint/manual-hint.module`).then(
                m => m.ExampleTuiManualHintModule,
            ),
        data: {
            title: 'ManualHint',
        },
    },
    {
        path: 'tui-pointer-hint',
        loadChildren: () =>
            import(`../directives/pointer-hint/pointer-hint.module`).then(
                m => m.ExampleTuiPointerHintModule,
            ),
        data: {
            title: 'PointerHint',
        },
    },
    {
        path: 'tui-let',
        loadChildren: () =>
            import(`../directives/let/let.module`).then(m => m.ExampleTuiLetModule),
        data: {
            title: 'Let',
        },
    },
    {
        path: 'tui-present',
        loadChildren: () =>
            import(`../directives/present/present.module`).then(
                m => m.ExampleTuiPresentModule,
            ),
        data: {
            title: 'Present',
        },
    },
    {
        path: 'tui-resizable-column',
        loadChildren: () =>
            import(`../tables/resizable-column/resizable-column.module`).then(
                m => m.ExampleTuiResizableColumnModule,
            ),
        data: {
            title: 'ResizableColumns',
        },
    },
    {
        path: 'tui-reorder',
        loadChildren: () =>
            import(`../tables/reorder/reorder.module`).then(
                m => m.ExampleTuiReorderModule,
            ),
        data: {
            title: 'ReorderColumns',
        },
    },
    {
        path: 'tui-table-pagination',
        loadChildren: () =>
            import(`../tables/table-pagination/table-pagination.module`).then(
                m => m.ExampleTuiTablePaginationModule,
            ),
        data: {
            title: 'TablePagination',
        },
    },
    {
        path: 'tui-ripple',
        loadChildren: () =>
            import(`../directives/ripple/ripple.module`).then(
                m => m.ExampleTuiRippleModule,
            ),
        data: {
            title: 'Ripple',
        },
    },
    {
        path: 'tui-sidebar',
        loadChildren: () =>
            import(`../directives/sidebar/sidebar.module`).then(
                m => m.ExampleTuiSidebarModule,
            ),
        data: {
            title: 'Sidebar',
        },
    },
    {
        path: 'tui-touchable',
        loadChildren: () =>
            import(`../directives/touchable/touchable.module`).then(
                m => m.ExampleTuiTouchableModule,
            ),
        data: {
            title: 'Touchable',
        },
    },
    {
        path: 'tui-validator',
        loadChildren: () =>
            import(`../directives/validator/validator.module`).then(
                m => m.ExampleTuiValidatorModule,
            ),
        data: {
            title: 'Validator',
        },
    },
    {
        path: 'tui-media',
        loadChildren: () =>
            import(`../directives/media/media.module`).then(m => m.ExampleTuiMediaModule),
        data: {
            title: 'Media',
        },
    },
    {
        path: 'tui-mode',
        loadChildren: () =>
            import(`../directives/mode/mode.module`).then(m => m.ExampleTuiModeModule),
        data: {
            title: 'Mode',
        },
    },
    {
        path: 'tui-auto-focus',
        loadChildren: () =>
            import(`../directives/auto-focus/auto-focus.module`).then(
                m => m.ExampleTuiAutoFocusModule,
            ),
        data: {
            title: 'AutoFocus',
        },
    },
    {
        path: 'tui-color',
        loadChildren: () =>
            import(`../directives/color/color.module`).then(m => m.ExampleTuiColorModule),
        data: {
            title: 'Color',
        },
    },
    // PIPES
    {
        path: 'filter',
        loadChildren: () =>
            import(`../pipes/filter/filter.module`).then(m => m.ExampleTuiFilterModule),
        data: {
            title: 'Filter',
        },
    },
    {
        path: 'format-number',
        loadChildren: () =>
            import(`../pipes/format-number/format-number.module`).then(
                m => m.ExampleTuiFormatNumberModule,
            ),
        data: {
            title: 'FormatNumber',
        },
    },
    {
        path: 'format-phone',
        loadChildren: () =>
            import(`../pipes/format-phone/format-phone.module`).then(
                m => m.ExampleTuiFormatPhoneModule,
            ),
        data: {
            title: 'FormatPhone',
        },
    },
    {
        path: 'mapper',
        loadChildren: () =>
            import(`../pipes/mapper/mapper.module`).then(m => m.ExampleTuiMapperModule),
        data: {
            title: 'Mapper',
        },
    },
    // SERVICES
    {
        path: 'tui-notifications-service',
        loadChildren: () =>
            import(`../services/notifications/notifications.module`).then(
                m => m.ExampleTuiNotificationsModule,
            ),
        data: {
            title: 'NotificationsService',
        },
    },
    {
        path: 'tui-dialog-service',
        loadChildren: () =>
            import(`../services/dialogs/dialogs.module`).then(
                m => m.ExampleTuiDialogsModule,
            ),
        data: {
            title: 'DialogService',
        },
    },
    {
        path: 'tui-scroll-service',
        loadChildren: () =>
            import(`../services/scroll/scroll.module`).then(
                m => m.ExampleTuiScrollModule,
            ),
        data: {
            title: 'ScrollService',
        },
    },
    {
        path: 'tui-svg-service',
        loadChildren: () =>
            import(`../services/svg/svg.module`).then(m => m.ExampleTuiSvgModule),
        data: {
            title: 'SvgService',
        },
    },
    {
        path: 'tui-table-bars-service',
        loadChildren: () =>
            import(`../services/table-bar/table-bar.module`).then(
                m => m.ExampleTuiTableBarModule,
            ),
        data: {
            title: 'TableBarService',
        },
    },
    {
        path: 'tui-dropdown-controller',
        loadChildren: () =>
            import(`../directives/dropdown-controller/dropdown-controller.module`).then(
                m => m.ExampleTuiDropdownControllerModule,
            ),
        data: {
            title: 'DropdownController',
        },
    },
    {
        path: 'tui-hint-controller',
        loadChildren: () =>
            import(`../directives/hint-controller/hint-controller.module`).then(
                m => m.ExampleTuiHintControllerModule,
            ),
        data: {
            title: 'HintController',
        },
    },
    {
        path: 'tui-textfield-controller',
        loadChildren: () =>
            import(`../directives/textfield-controller/textfield-controller.module`).then(
                m => m.ExampleTuiTextfieldControllerModule,
            ),
        data: {
            title: 'TextfieldController',
        },
    },
    // DECORATORS
    {
        path: 'tui-default-prop',
        loadChildren: () =>
            import(`../decorators/default-prop/default-prop.module`).then(
                m => m.ExampleTuiDefaultPropModule,
            ),
        data: {
            title: 'DefaultProp',
        },
    },
    {
        path: 'tui-pure',
        loadChildren: () =>
            import(`../decorators/pure/pure.module`).then(m => m.ExampleTuiPureModule),
        data: {
            title: 'Pure',
        },
    },
    {
        path: 'tui-required-setter',
        loadChildren: () =>
            import(`../decorators/required-setter/required-setter.module`).then(
                m => m.ExampleTuiRequiredSetterModule,
            ),
        data: {
            title: 'RequiredSetter',
        },
    },
    // UTILS
    {
        path: 'math',
        loadChildren: () =>
            import(`../utils/math/math.module`).then(m => m.ExampleMathModule),
        data: {
            title: 'Math',
        },
    },
    {
        path: 'format',
        loadChildren: () =>
            import(`../utils/format/format.module`).then(m => m.ExampleFormatModule),
        data: {
            title: 'Format',
        },
    },
    {
        path: 'dom',
        loadChildren: () =>
            import(`../utils/dom/dom.module`).then(m => m.ExampleDomModule),
        data: {
            title: 'DOM',
        },
    },
    {
        path: 'browser',
        loadChildren: () =>
            import(`../utils/browser/browser.module`).then(m => m.ExampleBrowserModule),
        data: {
            title: 'Browser',
        },
    },
    {
        path: 'miscellaneous',
        loadChildren: () =>
            import(`../utils/miscellaneous/miscellaneous.module`).then(
                m => m.ExampleMiscellaneousModule,
            ),
        data: {
            title: 'Miscellaneous',
        },
    },
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            initialNavigation: 'enabled',
            scrollPositionRestoration: 'top',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
