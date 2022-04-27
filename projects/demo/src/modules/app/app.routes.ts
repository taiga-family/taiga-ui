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
    // Documentation
    {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {
            title: 'Getting started',
        },
    },
    {
        path: 'browser-support',
        loadChildren: async () =>
            import('../info/browsers/browsers.module').then(m => m.BrowsersModule),
        data: {
            title: 'Browser support',
        },
    },
    {
        path: 'changelog',
        loadChildren: async () =>
            import('../info/changelog/changelog.module').then(m => m.ChangelogModule),
        data: {
            title: 'Changelog',
        },
    },
    {
        path: 'tui-doc',
        loadChildren: async () => import('../info/doc/doc.module').then(m => m.DocModule),
        data: {
            title: 'Documentation engine',
        },
    },
    {
        path: 'related',
        loadChildren: async () =>
            import('../info/related/related.module').then(m => m.RelatedModule),
        data: {
            title: 'Friendly libraries',
        },
    },
    {
        path: 'testing/disable-animation',
        loadChildren: async () =>
            import('../info/testing/disable-animation/disable-animation.module').then(
                m => m.DisableAnimationModule,
            ),
        data: {
            title: 'Disable animation',
        },
    },
    {
        path: 'testing/screenshot-bot',
        loadChildren: async () =>
            import(
                '../info/testing/screenshot-github-bot/screenshot-github-bot.module'
            ).then(m => m.ScreenshotGithubBotModule),
        data: {
            title: 'Our screenshot bot',
        },
    },
    // Customization
    {
        path: 'i18n',
        loadChildren: async () =>
            import('../customization/i18n/i18n.module').then(m => m.I18nModule),
        data: {
            title: 'I18n',
        },
    },
    {
        path: 'variables',
        loadChildren: async () =>
            import('../customization/variables/variables.module').then(
                m => m.VariablesModule,
            ),
        data: {
            title: 'Variables',
        },
    },
    {
        path: 'wrapper',
        loadChildren: async () =>
            import('../customization/wrapper/wrapper.module').then(m => m.WrapperModule),
        data: {
            title: 'Wrapper',
        },
    },
    {
        path: 'dialogs',
        loadChildren: async () =>
            import('../customization/dialogs/dialogs.module').then(m => m.DialogsModule),
        data: {
            title: 'Dialogs',
        },
    },
    {
        path: 'portals',
        loadChildren: async () =>
            import('../customization/portals/portals.module').then(m => m.PortalsModule),
        data: {
            title: 'Portals',
        },
    },
    {
        path: 'icon-set',
        loadChildren: async () =>
            import('../customization/icon-set/icon-set.module').then(
                m => m.IconSetModule,
            ),
        data: {
            title: 'Icon set',
        },
    },
    // COMPONENTS
    {
        path: 'components/accordion',
        loadChildren: async () =>
            import('../components/accordion/accordion.module').then(
                m => m.ExampleTuiAccordionModule,
            ),
        data: {
            title: 'Accordion',
        },
    },
    {
        path: 'components/action',
        loadChildren: async () =>
            import('../components/action/action.module').then(
                m => m.ExampleTuiActionModule,
            ),
        data: {
            title: 'Action',
        },
    },
    {
        path: 'components/avatar',
        loadChildren: async () =>
            import('../components/avatar/avatar.module').then(
                m => m.ExampleTuiAvatarModule,
            ),
        data: {
            title: 'Avatar',
        },
    },
    {
        path: 'components/badge',
        loadChildren: async () =>
            import('../components/badge/badge.module').then(m => m.ExampleTuiBadgeModule),
        data: {
            title: 'Badge',
        },
    },
    {
        path: 'components/badged-content',
        loadChildren: async () =>
            import('../components/badged-content/badged-content.module').then(
                m => m.ExampleTuiBadgedContentModule,
            ),
        data: {
            title: 'BadgedContent',
        },
    },
    {
        path: 'navigation/breadcrumbs',
        loadChildren: async () =>
            import('../components/breadcrumbs/breadcrumbs.module').then(
                m => m.ExampleTuiBreadcrumbsModule,
            ),
        data: {
            title: 'Breadcrumbs',
        },
    },
    {
        path: 'components/button',
        loadChildren: async () =>
            import('../components/button/button.module').then(
                m => m.ExampleTuiButtonModule,
            ),
        data: {
            title: 'Button',
        },
    },
    {
        path: 'components/calendar',
        loadChildren: async () =>
            import('../components/calendar/calendar.module').then(
                m => m.ExampleTuiCalendarModule,
            ),
        data: {
            title: 'Calendar',
        },
    },
    {
        path: 'components/carousel',
        loadChildren: async () =>
            import('../components/carousel/carousel.module').then(
                m => m.ExampleTuiCarouselModule,
            ),
        data: {
            title: 'Carousel',
        },
    },
    {
        path: 'components/card',
        loadChildren: async () =>
            import('../components/card/card.module').then(m => m.ExampleTuiCardModule),
        data: {
            title: 'Card',
        },
    },
    {
        path: 'components/checkbox',
        loadChildren: async () =>
            import('../components/checkbox/checkbox.module').then(
                m => m.ExampleTuiCheckboxModule,
            ),
        data: {
            title: 'Checkbox',
        },
    },
    {
        path: 'components/checkbox-block',
        loadChildren: async () =>
            import('../components/checkbox-block/checkbox-block.module').then(
                m => m.ExampleTuiCheckboxBlockModule,
            ),
        data: {
            title: 'CheckboxBlock',
        },
    },
    {
        path: 'components/checkbox-labeled',
        loadChildren: async () =>
            import('../components/checkbox-labeled/checkbox-labeled.module').then(
                m => m.ExampleTuiCheckboxLabeledModule,
            ),
        data: {
            title: 'CheckboxLabeled',
        },
    },
    {
        path: 'components/color-picker',
        loadChildren: async () =>
            import('../components/color-picker/color-picker.module').then(
                m => m.ExampleTuiColorPickerModule,
            ),
        data: {
            title: 'ColorPicker',
        },
    },
    {
        path: 'components/primitive-checkbox',
        loadChildren: async () =>
            import('../components/primitive-checkbox/primitive-checkbox.module').then(
                m => m.ExampleTuiPrimitiveCheckboxModule,
            ),
        data: {
            title: 'PrimitiveCheckbox',
        },
    },
    {
        path: 'components/combo-box',
        loadChildren: async () =>
            import('../components/combo-box/combo-box.module').then(
                m => m.ExampleTuiComboBoxModule,
            ),
        data: {
            title: 'ComboBox',
        },
    },
    {
        path: 'components/data-list',
        loadChildren: async () =>
            import('../components/data-list/data-list.module').then(
                m => m.ExampleTuiDataListModule,
            ),
        data: {
            title: 'DataList',
        },
    },
    {
        path: 'components/dialog',
        loadChildren: async () =>
            import('../components/dialog/dialog.module').then(
                m => m.ExampleTuiDialogModule,
            ),
        data: {
            title: 'Dialog',
        },
    },
    {
        path: 'components/error',
        loadChildren: async () =>
            import('../components/error/error.module').then(m => m.ExampleTuiErrorModule),
        data: {
            title: 'Error',
        },
    },
    {
        path: 'components/expand',
        loadChildren: async () =>
            import('../components/expand/expand.module').then(
                m => m.ExampleTuiExpandModule,
            ),
        data: {
            title: 'Expand',
        },
    },
    {
        path: 'components/field-error',
        loadChildren: async () =>
            import('../components/field-error/field-error.module').then(
                m => m.ExampleTuiFieldErrorModule,
            ),
        data: {
            title: 'FieldError',
        },
    },
    {
        path: 'pipes/field-error',
        loadChildren: async () =>
            import('../pipes/field-error/field-error.module').then(
                m => m.ExampleTuiFieldErrorModule,
            ),
        data: {
            title: 'FieldError',
        },
    },
    {
        path: 'components/input-files',
        loadChildren: async () =>
            import('../components/input-files/input-files.module').then(
                m => m.ExampleTuiFilesModule,
            ),
        data: {
            title: 'InputFiles',
        },
    },
    {
        path: 'components/group',
        loadChildren: async () =>
            import('../components/group/group.module').then(m => m.ExampleTuiGroupModule),
        data: {
            path: 'tui-group',
            title: 'Group',
        },
    },
    {
        path: 'components/hosted-dropdown',
        loadChildren: async () =>
            import('../components/hosted-dropdown/hosted-dropdown.module').then(
                m => m.ExampleTuiHostedDropdownModule,
            ),
        data: {
            title: 'HostedDropdown',
        },
    },
    {
        path: 'components/input-inline',
        loadChildren: async () =>
            import('../components/input-inline/input-inline.module').then(
                m => m.ExampleTuiInputInlineModule,
            ),
        data: {
            title: 'InputInline',
        },
    },
    {
        path: 'components/input',
        loadChildren: async () =>
            import('../components/input/input.module').then(m => m.ExampleTuiInputModule),
        data: {
            title: 'Input',
        },
    },
    {
        path: 'components/input-date',
        loadChildren: async () =>
            import('../components/input-date/input-date.module').then(
                m => m.ExampleTuiInputDateModule,
            ),
        data: {
            title: 'InputDate',
        },
    },
    {
        path: 'components/input-card',
        loadChildren: async () =>
            import('../components/input-card/input-card.module').then(
                m => m.ExampleTuiInputCardModule,
            ),
        data: {
            title: 'InputCard',
        },
    },
    {
        path: 'components/input-card-grouped',
        loadChildren: async () =>
            import('../components/input-card-grouped/input-card-grouped.module').then(
                m => m.ExampleTuiInputCardGroupedModule,
            ),
        data: {
            title: 'InputCardGrouped',
        },
    },
    {
        path: 'components/input-copy',
        loadChildren: async () =>
            import('../components/input-copy/input-copy.module').then(
                m => m.ExampleTuiInputCopyModule,
            ),
        data: {
            title: 'InputCopy',
        },
    },
    {
        path: 'components/input-count',
        loadChildren: async () =>
            import('../components/input-count/input-count.module').then(
                m => m.ExampleTuiInputCountModule,
            ),
        data: {
            title: 'InputCount',
        },
    },
    {
        path: 'components/input-date-time',
        loadChildren: async () =>
            import('../components/input-date-time/input-date-time.module').then(
                m => m.ExampleTuiInputDateTimeModule,
            ),
        data: {
            title: 'InputDateTime',
        },
    },
    {
        path: 'components/input-file',
        loadChildren: async () =>
            import('../components/input-file/input-file.module').then(
                m => m.ExampleTuiInputFileModule,
            ),
        data: {
            title: 'InputFile',
        },
    },
    {
        path: 'components/input-month',
        loadChildren: async () =>
            import('../components/input-month/input-month.module').then(
                m => m.ExampleInputMonthModule,
            ),
        data: {
            title: 'InputMonth',
        },
    },
    {
        path: 'components/input-month-range',
        loadChildren: async () =>
            import('../components/input-month-range/input-month-range.module').then(
                m => m.ExampleTuiInputMonthRangeModule,
            ),
        data: {
            title: 'InputMonthRange',
        },
    },
    {
        path: 'components/input-number',
        loadChildren: async () =>
            import('../components/input-number/input-number.module').then(
                m => m.ExampleTuiInputNumberModule,
            ),
        data: {
            title: 'InputNumber',
        },
    },
    {
        path: 'components/input-password',
        loadChildren: async () =>
            import('../components/input-password/input-password.module').then(
                m => m.ExampleTuiInputPasswordModule,
            ),
        data: {
            title: 'InputPassword',
        },
    },
    {
        path: 'components/input-phone',
        loadChildren: async () =>
            import('../components/input-phone/input-phone.module').then(
                m => m.ExampleTuiInputPhoneModule,
            ),
        data: {
            title: 'InputPhone',
        },
    },
    {
        path: 'components/input-range',
        loadChildren: async () =>
            import('../components/input-range/input-range.module').then(
                m => m.ExampleTuiInputRangeModule,
            ),
        data: {
            title: 'InputRange',
        },
    },
    {
        path: 'components/input-date-range',
        loadChildren: async () =>
            import('../components/input-date-range/input-date-range.module').then(
                m => m.ExampleTuiInputDateRangeModule,
            ),
        data: {
            title: 'InputDateRange',
        },
    },
    {
        path: 'components/input-slider',
        loadChildren: async () =>
            import('../components/input-slider/input-slider.module').then(
                m => m.ExampleTuiInputSliderModule,
            ),
        data: {
            title: 'InputSlider',
        },
    },
    {
        path: 'components/input-tag',
        loadChildren: async () =>
            import('../components/input-tag/input-tag.module').then(
                m => m.ExampleTuiInputTagModule,
            ),
        data: {
            title: 'InputTag',
        },
    },
    {
        path: 'components/input-time',
        loadChildren: async () =>
            import('../components/input-time/input-time.module').then(
                m => m.ExampleTuiInputTimeModule,
            ),
        data: {
            title: 'InputTime',
        },
    },
    {
        path: 'components/input-phone-international',
        loadChildren: async () =>
            import(
                '../components/input-phone-international/input-phone-international.module'
            ).then(m => m.ExampleTuiInputPhoneInternationalModule),
        data: {
            title: 'InputPhoneInternational',
        },
    },
    {
        path: 'components/island',
        loadChildren: async () =>
            import('../components/island/island.module').then(
                m => m.ExampleTuiIslandModule,
            ),
        data: {
            title: 'Island',
        },
    },
    {
        path: 'components/label',
        loadChildren: async () =>
            import('../components/label/label.module').then(m => m.ExampleTuiLabelModule),
        data: {
            title: 'Label',
        },
    },
    {
        path: 'components/line-clamp',
        loadChildren: async () =>
            import('../components/line-clamp/line-clamp.module').then(
                m => m.ExampleTuiLineClampModule,
            ),
        data: {
            title: 'LineClamp',
        },
    },
    {
        path: 'components/link',
        loadChildren: async () =>
            import('../components/link/link.module').then(m => m.ExampleTuiLinkModule),
        data: {
            title: 'Link',
        },
    },
    {
        path: 'components/loader',
        loadChildren: async () =>
            import('../components/loader/loader.module').then(
                m => m.ExampleTuiLoaderModule,
            ),
        data: {
            title: 'Loader',
        },
    },
    {
        path: 'components/marker-icon',
        loadChildren: async () =>
            import('../components/marker-icon/marker-icon.module').then(
                m => m.ExampleTuiMarkerIconModule,
            ),
        data: {
            path: 'tui-marker-icon',
            title: 'MarkerIcon',
        },
    },
    {
        path: 'mobile-themes',
        loadChildren: async () =>
            import('../components/mobile-themes/mobile-themes.module').then(
                m => m.ExampleTuiMobileThemesModule,
            ),
        data: {
            title: 'Mobile',
        },
    },
    {
        path: 'components/notification',
        loadChildren: async () =>
            import('../components/notification/notification.module').then(
                m => m.ExampleTuiNotificationModule,
            ),
        data: {
            title: 'Notification',
        },
    },
    {
        path: 'components/mobile-dialog',
        loadChildren: async () =>
            import('../components/mobile-dialog/mobile-dialog.module').then(
                m => m.ExampleTuiMobileDialogModule,
            ),
        data: {
            title: 'MobileDialog',
        },
    },
    {
        path: 'components/mobile-calendar',
        loadChildren: async () =>
            import('../components/mobile-calendar/mobile-calendar.module').then(
                m => m.ExampleTuiMobileCalendarModule,
            ),
        data: {
            title: 'MobileCalendar',
        },
    },
    {
        path: 'components/pull-to-refresh',
        loadChildren: async () =>
            import('../components/pull-to-refresh/pull-to-refresh.module').then(
                m => m.ExampleTuiPullToRefreshModule,
            ),
        data: {
            title: 'PullToRefresh',
        },
    },
    {
        path: 'components/money',
        loadChildren: async () =>
            import('../components/money/money.module').then(m => m.ExampleTuiMoneyModule),
        data: {
            title: 'Money',
        },
    },
    {
        path: 'components/calendar-month',
        loadChildren: async () =>
            import('../components/calendar-month/calendar-month.module').then(
                m => m.ExampleTuiCalendarMonthModule,
            ),
        data: {
            title: 'CalendarMonth',
        },
    },
    {
        path: 'components/multi-select',
        loadChildren: async () =>
            import('../components/multi-select/multi-select.module').then(
                m => m.ExampleTuiMultiSelectModule,
            ),
        data: {
            title: 'MultiSelect',
        },
    },
    {
        path: 'navigation/pagination',
        loadChildren: async () =>
            import('../components/pagination/pagination.module').then(
                m => m.ExampleTuiPaginationModule,
            ),
        data: {
            title: 'Pagination',
        },
    },
    {
        path: 'components/radio',
        loadChildren: async () =>
            import('../components/radio/radio.module').then(m => m.ExampleTuiRadioModule),
        data: {
            title: 'Radio',
        },
    },
    {
        path: 'components/radio-block',
        loadChildren: async () =>
            import('../components/radio-block/radio-block.module').then(
                m => m.ExampleTuiRadioBlockModule,
            ),
        data: {
            title: 'RadioBlock',
        },
    },
    {
        path: 'components/radio-labeled',
        loadChildren: async () =>
            import('../components/radio-labeled/radio-labeled.module').then(
                m => m.ExampleTuiRadioLabeledModule,
            ),
        data: {
            title: 'RadioLabeled',
        },
    },
    {
        path: 'components/radio-list',
        loadChildren: async () =>
            import('../components/radio-list/radio-list.module').then(
                m => m.ExampleTuiRadioListModule,
            ),
        data: {
            title: 'RadioList',
        },
    },
    {
        path: 'components/rating',
        loadChildren: async () =>
            import('../components/rating/rating.module').then(
                m => m.ExampleTuiRatingModule,
            ),
        data: {
            title: 'Rating',
        },
    },
    {
        path: 'components/range',
        loadChildren: async () =>
            import('../components/range/range.module').then(m => m.ExampleTuiRangeModule),
        data: {
            title: 'range',
        },
    },
    {
        path: 'components/calendar-range',
        loadChildren: async () =>
            import('../components/calendar-range/calendar-range.module').then(
                m => m.ExampleTuiCalendarRangeModule,
            ),
        data: {
            title: 'CalendarRange',
        },
    },
    {
        path: 'components/select',
        loadChildren: async () =>
            import('../components/select/select.module').then(
                m => m.ExampleTuiSelectModule,
            ),
        data: {
            title: 'Select',
        },
    },
    {
        path: 'components/scrollbar',
        loadChildren: async () =>
            import('../components/scrollbar/scrollbar.module').then(
                m => m.ExampleTuiScrollbarModule,
            ),
        data: {
            title: 'Scrollbar',
        },
    },
    {
        path: 'components/sheet',
        loadChildren: async () =>
            import('../components/sheet/sheet.module').then(m => m.ExampleTuiSheetModule),
        data: {
            title: 'Sheet',
        },
    },
    {
        path: 'components/slider',
        loadChildren: async () =>
            import('../components/slider/slider.module').then(
                m => m.ExampleTuiSliderModule,
            ),
        data: {
            title: 'Slider',
        },
    },
    {
        path: 'components/slider-deprecated',
        loadChildren: async () =>
            import('../components/slider-old/slider-old.module').then(
                m => m.ExampleTuiSliderOldModule,
            ),
        data: {
            title: 'Slider[deprecated]',
        },
    },
    {
        path: 'navigation/stepper',
        loadChildren: async () =>
            import('../components/stepper/stepper.module').then(
                m => m.ExampleTuiStepperModule,
            ),
        data: {
            title: 'Stepper',
        },
    },
    {
        path: 'components/preview',
        loadChildren: async () =>
            import('../components/preview/preview.module').then(
                m => m.ExampleTuiPreviewModule,
            ),
        data: {
            title: 'Preview',
        },
    },
    {
        path: 'components/svg',
        loadChildren: async () =>
            import('../components/svg/svg.module').then(m => m.ExampleTuiSvgModule),
        data: {
            title: 'Svg',
        },
    },
    {
        path: 'navigation/tabs',
        loadChildren: async () =>
            import('../components/tabs/tabs.module').then(m => m.ExampleTuiTabsModule),
        data: {
            title: 'Tabs',
        },
    },
    {
        path: 'components/tag',
        loadChildren: async () =>
            import('../components/tag/tag.module').then(m => m.ExampleTuiTagModule),
        data: {
            title: 'Tag',
        },
    },
    {
        path: 'components/theme-night',
        loadChildren: async () =>
            import('../components/theme-night/theme-night.module').then(
                m => m.ExampleTuiThemeNightModule,
            ),
        data: {
            title: 'ThemeNight',
        },
    },
    {
        path: 'components/text-area',
        loadChildren: async () =>
            import('../components/text-area/text-area.module').then(
                m => m.ExampleTuiTextAreaModule,
            ),
        data: {
            title: 'TextArea',
        },
    },
    {
        path: 'components/primitive-textfield',
        loadChildren: async () =>
            import('../components/primitive-textfield/primitive-textfield.module').then(
                m => m.ExampleTuiPrimitiveTextfieldModule,
            ),
        data: {
            title: 'PrimitiveTextfield',
        },
    },
    {
        path: 'components/pdf-viewer',
        loadChildren: async () =>
            import('../components/pdf-viewer/pdf-viewer.module').then(
                m => m.ExampleTuiPdfViewerModule,
            ),
        data: {
            title: 'PdfViewer',
        },
    },
    {
        path: 'components/progress-bar',
        loadChildren: async () =>
            import('../components/progress-bar/progress-bar.module').then(
                m => m.ExampleTuiProgressBarModule,
            ),
        data: {
            title: 'ProgressBar',
        },
    },
    {
        path: 'components/progress-circle',
        loadChildren: async () =>
            import('../components/progress-circle/progress-circle.module').then(
                m => m.ExampleTuiProgressCircleModule,
            ),
        data: {
            title: 'ProgressCircle',
        },
    },
    {
        path: 'components/progress-segmented',
        loadChildren: async () =>
            import('../components/progress-segmented/progress-segmented.module').then(
                m => m.ExampleTuiProgressSegmentedModule,
            ),
        data: {
            title: 'ProgressSegmented',
        },
    },
    {
        path: 'components/theme-switcher',
        loadChildren: async () =>
            import('../components/theme-switcher/theme-switcher.module').then(
                m => m.ExampleTuiThemeSwitcherModule,
            ),
        data: {
            title: 'ThemeSwitcher',
        },
    },
    {
        path: 'components/toggle',
        loadChildren: async () =>
            import('../components/toggle/toggle.module').then(
                m => m.ExampleTuiToggleModule,
            ),
        data: {
            title: 'Toggle',
        },
    },
    {
        path: 'components/tooltip',
        loadChildren: async () =>
            import('../components/tooltip/tooltip.module').then(
                m => m.ExampleTuiTooltipModule,
            ),
        data: {
            title: 'Tooltip',
        },
    },
    {
        path: 'components/tree',
        loadChildren: async () =>
            import('../components/tree/tree.module').then(m => m.ExampleTuiTreeModule),
        data: {
            title: 'Tree',
        },
    },
    {
        path: 'components/toolbar',
        loadChildren: async () =>
            import('../components/toolbar/toolbar.module').then(
                m => m.ExampleTuiToolbarModule,
            ),
        data: {
            title: 'Toolbar',
        },
    },
    {
        path: 'components/editor',
        loadChildren: async () =>
            import('../components/editor/editor.module').then(
                m => m.ExampleTuiEditorModule,
            ),
        data: {
            title: 'Editor',
        },
    },
    {
        path: 'components/editor-new',
        loadChildren: async () =>
            import('../components/editor-new/editor-new.module').then(
                m => m.ExampleTuiEditorNewModule,
            ),
        data: {
            title: 'Editor[new]',
        },
    },
    {
        path: 'components/filter',
        loadChildren: async () =>
            import('../components/filter/filter.module').then(
                m => m.ExampleTuiFilterModule,
            ),
        data: {
            title: 'Filter',
        },
    },
    // CHARTS
    {
        path: 'components/arc-chart',
        loadChildren: async () =>
            import('../charts/arc-chart/arc-chart.module').then(
                m => m.ExampleTuiArcChartModule,
            ),
        data: {
            title: 'ArcChart',
        },
    },
    {
        path: 'components/axes',
        loadChildren: async () =>
            import('../charts/axes/axes.module').then(m => m.ExampleTuiAxesModule),
        data: {
            title: 'Axes',
        },
    },
    {
        path: 'components/bar',
        loadChildren: async () =>
            import('../charts/bar/bar.module').then(m => m.ExampleTuiBarModule),
        data: {
            title: 'Bar',
        },
    },
    {
        path: 'components/bar-chart',
        loadChildren: async () =>
            import('../charts/bar-chart/bar-chart.module').then(
                m => m.ExampleTuiBarChartModule,
            ),
        data: {
            title: 'BarChart',
        },
    },
    {
        path: 'components/bar-set',
        loadChildren: async () =>
            import('../charts/bar-set/bar-set.module').then(
                m => m.ExampleTuiBarSetModule,
            ),
        data: {
            title: 'BarSet',
        },
    },
    {
        path: 'components/legend-item',
        loadChildren: async () =>
            import('../charts/legend-item/legend-item.module').then(
                m => m.ExampleTuiLegendItemModule,
            ),
        data: {
            title: 'LegendItem',
        },
    },
    {
        path: 'components/line-chart',
        loadChildren: async () =>
            import('../charts/line-chart/line-chart.module').then(
                m => m.ExampleTuiLineChartModule,
            ),
        data: {
            title: 'LineChart',
        },
    },
    {
        path: 'components/line-days-chart',
        loadChildren: async () =>
            import('../charts/line-days-chart/line-days-chart.module').then(
                m => m.ExampleTuiLineDaysChartModule,
            ),
        data: {
            title: 'LineDaysChart',
        },
    },
    {
        path: 'components/pie-chart',
        loadChildren: async () =>
            import('../charts/pie-chart/pie-chart.module').then(
                m => m.ExampleTuiPieChartModule,
            ),
        data: {
            title: 'PieChart',
        },
    },
    {
        path: 'components/ring-chart',
        loadChildren: async () =>
            import('../charts/ring-chart/ring-chart.module').then(
                m => m.ExampleTuiRingChartModule,
            ),
        data: {
            title: 'RingChart',
        },
    },
    // STYLES
    {
        path: 'colors',
        loadChildren: async () =>
            import('../markup/colors/colors.module').then(m => m.ColorsModule),
        data: {
            title: 'Colors',
        },
    },
    {
        path: 'form',
        loadChildren: async () =>
            import('../markup/form/form.module').then(m => m.FormModule),
        data: {
            title: 'Form',
        },
    },
    {
        path: 'grid',
        loadChildren: async () =>
            import('../markup/grid/grid.module').then(m => m.GridModule),
        data: {
            title: 'Grid',
        },
    },
    {
        path: 'icons',
        loadChildren: async () =>
            import('../markup/icons/icons.module').then(m => m.IconsModule),
        data: {
            title: 'Icons',
        },
    },
    {
        path: 'lists',
        loadChildren: async () =>
            import('../markup/lists/lists.module').then(m => m.ListsModule),
        data: {
            title: 'Lists',
        },
    },
    {
        path: 'shadows',
        loadChildren: async () =>
            import('../markup/shadows/shadows.module').then(m => m.ShadowsModule),
        data: {
            title: 'Shadows',
        },
    },
    {
        path: 'skeleton',
        loadChildren: async () =>
            import('../markup/skeleton/skeleton.module').then(m => m.SkeletonModule),
        data: {
            title: 'Skeleton',
        },
    },
    {
        path: 'spaces',
        loadChildren: async () =>
            import('../markup/spaces/spaces.module').then(m => m.SpacesModule),
        data: {
            title: 'Spaces',
        },
    },
    {
        path: 'tables',
        loadChildren: async () =>
            import('../markup/tables/tables.module').then(m => m.TablesModule),
        data: {
            title: 'Tables',
        },
    },
    {
        path: 'typography',
        loadChildren: async () =>
            import('../markup/typography/typography.module').then(
                m => m.TypographyModule,
            ),
        data: {
            title: 'Typography',
        },
    },
    // DIRECTIVES
    {
        path: 'directives/active-zone',
        loadChildren: async () =>
            import('../directives/active-zone/active-zone.module').then(
                m => m.ExampleTuiActiveZoneModule,
            ),
        data: {
            title: 'ActiveZone',
        },
    },
    {
        path: 'directives/copy-processor',
        loadChildren: async () =>
            import('../directives/copy-processor/copy-processor.module').then(
                m => m.ExampleTuiCopyProcessorModule,
            ),
        data: {
            title: 'CopyProcessor',
        },
    },
    {
        path: 'directives/dropdown',
        loadChildren: async () =>
            import('../directives/dropdown/dropdown.module').then(
                m => m.ExampleTuiDropdownModule,
            ),
        data: {
            title: 'Dropdown',
        },
    },
    {
        path: 'directives/dropdown-context',
        loadChildren: async () =>
            import('../directives/dropdown-context/dropdown-context.module').then(
                m => m.ExampleTuiDropdownContextModule,
            ),
        data: {
            title: 'DropdownContext',
        },
    },
    {
        path: 'directives/dropdown-selection',
        loadChildren: async () =>
            import('../directives/dropdown-selection/dropdown-selection.module').then(
                m => m.ExampleTuiDropdownSelectionModule,
            ),
        data: {
            title: 'DropdownSelection',
        },
    },
    {
        path: 'directives/described-by',
        loadChildren: async () =>
            import('../directives/described-by/described-by.module').then(
                m => m.ExampleTuiDescribedByModule,
            ),
        data: {
            title: 'DescribedBy',
        },
    },
    {
        path: 'directives/elastic-sticky',
        loadChildren: async () =>
            import('../directives/elastic-sticky/elastic-sticky.module').then(
                m => m.ExampleTuiElasticStickyModule,
            ),
        data: {
            title: 'ElasticSticky',
        },
    },
    {
        path: 'directives/element',
        loadChildren: async () =>
            import('../directives/element/element.module').then(
                m => m.ExampleTuiElementModule,
            ),
        data: {
            title: 'Element',
        },
    },
    {
        path: 'directives/for',
        loadChildren: async () =>
            import('../directives/for/for.module').then(m => m.ExampleTuiForModule),
        data: {
            title: 'For',
        },
    },
    {
        path: 'directives/highlight',
        loadChildren: async () =>
            import('../directives/highlight/highlight.module').then(
                m => m.ExampleTuiHighlightModule,
            ),
        data: {
            title: 'Highlight',
        },
    },
    {
        path: 'directives/hint',
        loadChildren: async () =>
            import('../directives/hint/hint.module').then(m => m.ExampleTuiHintModule),
        data: {
            title: 'Hint',
        },
    },
    {
        path: 'directives/lazy-loading',
        loadChildren: async () =>
            import('../directives/lazy-loading/lazy-loading.module').then(
                m => m.ExampleTuiLazyLoadingModule,
            ),
        data: {
            title: 'LazyLoading',
        },
    },
    {
        path: 'directives/manual-hint',
        loadChildren: async () =>
            import('../directives/manual-hint/manual-hint.module').then(
                m => m.ExampleTuiManualHintModule,
            ),
        data: {
            title: 'ManualHint',
        },
    },
    {
        path: 'directives/pointer-hint',
        loadChildren: async () =>
            import('../directives/pointer-hint/pointer-hint.module').then(
                m => m.ExampleTuiPointerHintModule,
            ),
        data: {
            title: 'PointerHint',
        },
    },
    {
        path: 'directives/pan',
        loadChildren: async () =>
            import('../directives/pan/pan.module').then(m => m.ExampleTuiPanModule),
        data: {
            title: 'Pan',
        },
    },
    {
        path: 'directives/portal',
        loadChildren: async () =>
            import('../directives/portal/portal.module').then(
                m => m.ExampleTuiPortalModule,
            ),
        data: {
            title: 'Portal',
        },
    },
    {
        path: 'directives/swipe',
        loadChildren: async () =>
            import('../directives/swipe/swipe.module').then(m => m.ExampleTuiSwipeModule),
        data: {
            title: 'Swipe',
        },
    },
    {
        path: 'directives/let',
        loadChildren: async () =>
            import('../directives/let/let.module').then(m => m.ExampleTuiLetModule),
        data: {
            title: 'Let',
        },
    },
    {
        path: 'directives/zoom',
        loadChildren: async () =>
            import('../directives/zoom/zoom.module').then(m => m.ExampleTuiZoomModule),
        data: {
            title: 'Zoom',
        },
    },
    {
        path: 'directives/overscroll',
        loadChildren: async () =>
            import('../directives/overscroll/overscroll.module').then(
                m => m.ExampleTuiOverscrollModule,
            ),
        data: {
            title: 'Overscroll',
        },
    },
    {
        path: 'directives/present',
        loadChildren: async () =>
            import('../directives/present/present.module').then(
                m => m.ExampleTuiPresentModule,
            ),
        data: {
            title: 'Present',
        },
    },
    {
        path: 'components/resizable-column',
        loadChildren: async () =>
            import('../tables/resizable-column/resizable-column.module').then(
                m => m.ExampleTuiResizableColumnModule,
            ),
        data: {
            title: 'ResizableColumns',
        },
    },
    {
        path: 'components/reorder',
        loadChildren: async () =>
            import('../tables/reorder/reorder.module').then(
                m => m.ExampleTuiReorderModule,
            ),
        data: {
            title: 'ReorderColumns',
        },
    },
    {
        path: 'components/table',
        loadChildren: async () =>
            import('../tables/table/table.module').then(m => m.ExampleTuiTableModule),
        data: {
            title: 'Table',
        },
    },
    {
        path: 'components/table-pagination',
        loadChildren: async () =>
            import('../tables/table-pagination/table-pagination.module').then(
                m => m.ExampleTuiTablePaginationModule,
            ),
        data: {
            title: 'TablePagination',
        },
    },
    {
        path: 'directives/ripple',
        loadChildren: async () =>
            import('../directives/ripple/ripple.module').then(
                m => m.ExampleTuiRippleModule,
            ),
        data: {
            title: 'Ripple',
        },
    },
    {
        path: 'directives/sidebar',
        loadChildren: async () =>
            import('../directives/sidebar/sidebar.module').then(
                m => m.ExampleTuiSidebarModule,
            ),
        data: {
            title: 'Sidebar',
        },
    },
    {
        path: 'directives/touchable',
        loadChildren: async () =>
            import('../directives/touchable/touchable.module').then(
                m => m.ExampleTuiTouchableModule,
            ),
        data: {
            title: 'Touchable',
        },
    },
    {
        path: 'directives/validator',
        loadChildren: async () =>
            import('../directives/validator/validator.module').then(
                m => m.ExampleTuiValidatorModule,
            ),
        data: {
            title: 'Validator',
        },
    },
    {
        path: 'directives/media',
        loadChildren: async () =>
            import('../directives/media/media.module').then(m => m.ExampleTuiMediaModule),
        data: {
            title: 'Media',
        },
    },
    {
        path: 'directives/mode',
        loadChildren: async () =>
            import('../directives/mode/mode.module').then(m => m.ExampleTuiModeModule),
        data: {
            title: 'Mode',
        },
    },
    {
        path: 'directives/auto-focus',
        loadChildren: async () =>
            import('../directives/auto-focus/auto-focus.module').then(
                m => m.ExampleTuiAutoFocusModule,
            ),
        data: {
            title: 'AutoFocus',
        },
    },
    // PIPES
    {
        path: 'pipes/currency',
        loadChildren: async () =>
            import('../pipes/currency/currency.module').then(
                m => m.ExampleTuiCurrencyModule,
            ),
        data: {
            title: 'Currency',
        },
    },
    {
        path: 'pipes/filter',
        loadChildren: async () =>
            import('../pipes/filter/filter.module').then(m => m.ExampleTuiFilterModule),
        data: {
            title: 'Filter',
        },
    },
    {
        path: 'pipes/filter-by-input',
        loadChildren: async () =>
            import('../pipes/filter-by-input/filter-by-input.module').then(
                m => m.ExampleTuiFilterByInputModule,
            ),
        data: {
            title: 'FilterByInput',
        },
    },
    {
        path: 'pipes/format-number',
        loadChildren: async () =>
            import('../pipes/format-number/format-number.module').then(
                m => m.ExampleTuiFormatNumberModule,
            ),
        data: {
            title: 'FormatNumber',
        },
    },
    {
        path: 'pipes/format-phone',
        loadChildren: async () =>
            import('../pipes/format-phone/format-phone.module').then(
                m => m.ExampleTuiFormatPhoneModule,
            ),
        data: {
            title: 'FormatPhone',
        },
    },
    {
        path: 'pipes/mapper',
        loadChildren: async () =>
            import('../pipes/mapper/mapper.module').then(m => m.ExampleTuiMapperModule),
        data: {
            title: 'Mapper',
        },
    },
    {
        path: 'pipes/stringify',
        loadChildren: async () =>
            import('../pipes/stringify/stringify.module').then(
                m => m.ExampleTuiStringifyModule,
            ),
        data: {
            title: 'Stringify',
        },
    },
    {
        path: 'pipes/stringify-content',
        loadChildren: async () =>
            import('../pipes/stringify-content/stringify-content.module').then(
                m => m.ExampleTuiStringifyContentModule,
            ),
        data: {
            title: 'StringifyContent',
        },
    },
    // SERVICES
    {
        path: 'services/notifications-service',
        loadChildren: async () =>
            import('../services/notifications/notifications.module').then(
                m => m.ExampleTuiNotificationsModule,
            ),
        data: {
            title: 'NotificationsService',
        },
    },
    {
        path: 'services/destroy-service',
        loadChildren: async () =>
            import('../services/destroy/destroy.module').then(
                m => m.ExampleTuiDestroyModule,
            ),
        data: {
            title: 'DestroyService',
        },
    },
    {
        path: 'services/scroll-service',
        loadChildren: async () =>
            import('../services/scroll/scroll.module').then(
                m => m.ExampleTuiScrollModule,
            ),
        data: {
            title: 'ScrollService',
        },
    },
    {
        path: 'services/svg-service',
        loadChildren: async () =>
            import('../services/svg/svg.module').then(m => m.ExampleTuiSvgModule),
        data: {
            title: 'SvgService',
        },
    },
    {
        path: 'services/table-bars-service',
        loadChildren: async () =>
            import('../services/table-bar/table-bar.module').then(
                m => m.ExampleTuiTableBarModule,
            ),
        data: {
            title: 'TableBarService',
        },
    },
    {
        path: 'directives/dropdown-controller',
        loadChildren: async () =>
            import('../directives/dropdown-controller/dropdown-controller.module').then(
                m => m.ExampleTuiDropdownControllerModule,
            ),
        data: {
            title: 'DropdownController',
        },
    },
    {
        path: 'directives/hint-controller',
        loadChildren: async () =>
            import('../directives/hint-controller/hint-controller.module').then(
                m => m.ExampleTuiHintControllerModule,
            ),
        data: {
            title: 'HintController',
        },
    },
    {
        path: 'directives/textfield-controller',
        loadChildren: async () =>
            import('../directives/textfield-controller/textfield-controller.module').then(
                m => m.ExampleTuiTextfieldControllerModule,
            ),
        data: {
            title: 'TextfieldController',
        },
    },
    // DECORATORS
    {
        path: 'decorators/default-prop',
        loadChildren: async () =>
            import('../decorators/default-prop/default-prop.module').then(
                m => m.ExampleTuiDefaultPropModule,
            ),
        data: {
            title: 'DefaultProp',
        },
    },
    {
        path: 'decorators/pure',
        loadChildren: async () =>
            import('../decorators/pure/pure.module').then(m => m.ExampleTuiPureModule),
        data: {
            title: 'Pure',
        },
    },
    {
        path: 'decorators/required-setter',
        loadChildren: async () =>
            import('../decorators/required-setter/required-setter.module').then(
                m => m.ExampleTuiRequiredSetterModule,
            ),
        data: {
            title: 'RequiredSetter',
        },
    },

    // UTILS
    {
        path: 'utils/math',
        loadChildren: async () =>
            import('../utils/math/math.module').then(m => m.ExampleMathModule),
        data: {
            title: 'Math',
        },
    },
    {
        path: 'utils/format',
        loadChildren: async () =>
            import('../utils/format/format.module').then(m => m.ExampleFormatModule),
        data: {
            title: 'Format',
        },
    },
    {
        path: 'utils/dom',
        loadChildren: async () =>
            import('../utils/dom/dom.module').then(m => m.ExampleDomModule),
        data: {
            title: 'DOM',
        },
    },
    {
        path: 'utils/browser',
        loadChildren: async () =>
            import('../utils/browser/browser.module').then(m => m.ExampleBrowserModule),
        data: {
            title: 'Browser',
        },
    },
    {
        path: 'utils/miscellaneous',
        loadChildren: async () =>
            import('../utils/miscellaneous/miscellaneous.module').then(
                m => m.ExampleMiscellaneousModule,
            ),
        data: {
            title: 'Miscellaneous',
        },
    },
    {
        path: 'utils/tokens',
        loadChildren: async () =>
            import('../utils/tokens/tokens.module').then(m => m.ExampleTokensModule),
        data: {
            title: 'Tokens',
        },
    },

    // ANIMATIONS
    {
        path: 'animations',
        loadChildren: async () =>
            import('../animations/animations.module').then(
                m => m.ExampleAnimationsModule,
            ),
        data: {
            title: 'Animations',
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
