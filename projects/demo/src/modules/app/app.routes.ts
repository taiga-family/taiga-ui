import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {GettingStartedComponent} from './getting-started/getting-started.component';
import {LandingComponent} from './landing/landing.component';

export const ROUTES = [
    {
        path: ``,
        component: LandingComponent,
        data: {
            title: `A powerful set of open source components for Angular`,
        },
    },
    // Documentation
    {
        path: `getting-started`,
        component: GettingStartedComponent,
        data: {
            title: `Getting started`,
        },
    },
    {
        path: `browser-support`,
        loadChildren: async () =>
            (await import(`../info/browsers/browsers.module`)).BrowsersModule,
        data: {
            title: `Browser support`,
        },
    },
    {
        path: `changelog`,
        loadChildren: async () =>
            (await import(`../info/changelog/changelog.module`)).ChangelogModule,
        data: {
            title: `Changelog`,
        },
    },
    {
        path: `ssr`,
        loadChildren: async () => (await import(`../info/ssr/ssr.module`)).SsrModule,
        data: {
            title: `Server Side Rendering (SSR)`,
        },
    },
    {
        path: `tui-doc`,
        loadChildren: async () => (await import(`../info/doc/doc.module`)).DocModule,
        data: {
            title: `Documentation engine`,
        },
    },
    {
        path: `related`,
        loadChildren: async () =>
            (await import(`../info/related/related.module`)).RelatedModule,
        data: {
            title: `Friendly libraries`,
        },
    },
    {
        path: `testing/jest`,
        loadChildren: async () =>
            (await import(`../info/testing/jest/jest.module`)).JestModule,
        data: {
            title: `Jest`,
        },
    },
    {
        path: `testing/disable-animation`,
        loadChildren: async () =>
            (await import(`../info/testing/disable-animation/disable-animation.module`))
                .DisableAnimationModule,
        data: {
            title: `Disable animation`,
        },
    },
    {
        path: `testing/screenshot-bot`,
        loadChildren: async () =>
            (
                await import(
                    `../info/testing/screenshot-github-bot/screenshot-github-bot.module`
                )
            ).ScreenshotGithubBotModule,
        data: {
            title: `Our screenshot bot`,
        },
    },
    // Customization
    {
        path: `i18n`,
        loadChildren: async () =>
            (await import(`../customization/i18n/i18n.module`)).I18nModule,
        data: {
            title: `I18n`,
        },
    },
    {
        path: `variables`,
        loadChildren: async () =>
            (await import(`../customization/variables/variables.module`)).VariablesModule,
        data: {
            title: `Variables`,
        },
    },
    {
        path: `wrapper`,
        loadChildren: async () =>
            (await import(`../customization/wrapper/wrapper.module`)).WrapperModule,
        data: {
            title: `Wrapper`,
        },
    },
    {
        path: `dialogs`,
        loadChildren: async () =>
            (await import(`../customization/dialogs/dialogs.module`)).DialogsModule,
        data: {
            title: `Dialogs`,
        },
    },
    {
        path: `portals`,
        loadChildren: async () =>
            (await import(`../customization/portals/portals.module`)).PortalsModule,
        data: {
            title: `Portals`,
        },
    },
    {
        path: `icon-set`,
        loadChildren: async () =>
            (await import(`../customization/icon-set/icon-set.module`)).IconSetModule,
        data: {
            title: `Icon set`,
        },
    },
    // COMPONENTS
    {
        path: `components/accordion`,
        loadChildren: async () =>
            (await import(`../components/accordion/accordion.module`))
                .ExampleTuiAccordionModule,
        data: {
            title: `Accordion`,
        },
    },
    {
        path: `components/action`,
        loadChildren: async () =>
            (await import(`../components/action/action.module`)).ExampleTuiActionModule,
        data: {
            title: `Action`,
        },
    },
    {
        path: `components/avatar`,
        loadChildren: async () =>
            (await import(`../components/avatar/avatar.module`)).ExampleTuiAvatarModule,
        data: {
            title: `Avatar`,
        },
    },
    {
        path: `components/badge`,
        loadChildren: async () =>
            (await import(`../components/badge/badge.module`)).ExampleTuiBadgeModule,
        data: {
            title: `Badge`,
        },
    },
    {
        path: `components/badged-content`,
        loadChildren: async () =>
            (await import(`../components/badged-content/badged-content.module`))
                .ExampleTuiBadgedContentModule,
        data: {
            title: `BadgedContent`,
        },
    },
    {
        path: `navigation/breadcrumbs`,
        loadChildren: async () =>
            (await import(`../components/breadcrumbs/breadcrumbs.module`))
                .ExampleTuiBreadcrumbsModule,
        data: {
            title: `Breadcrumbs`,
        },
    },
    {
        path: `components/button`,
        loadChildren: async () =>
            (await import(`../components/button/button.module`)).ExampleTuiButtonModule,
        data: {
            title: `Button`,
        },
    },
    {
        path: `components/calendar`,
        loadChildren: async () =>
            (await import(`../components/calendar/calendar.module`))
                .ExampleTuiCalendarModule,
        data: {
            title: `Calendar`,
        },
    },
    {
        path: `components/carousel`,
        loadChildren: async () =>
            (await import(`../components/carousel/carousel.module`))
                .ExampleTuiCarouselModule,
        data: {
            title: `Carousel`,
        },
    },
    {
        path: `components/card`,
        loadChildren: async () =>
            (await import(`../components/card/card.module`)).ExampleTuiCardModule,
        data: {
            title: `Card`,
        },
    },
    {
        path: `components/checkbox`,
        loadChildren: async () =>
            (await import(`../components/checkbox/checkbox.module`))
                .ExampleTuiCheckboxModule,
        data: {
            title: `Checkbox`,
        },
    },
    {
        path: `components/checkbox-block`,
        loadChildren: async () =>
            (await import(`../components/checkbox-block/checkbox-block.module`))
                .ExampleTuiCheckboxBlockModule,
        data: {
            title: `CheckboxBlock`,
        },
    },
    {
        path: `components/checkbox-labeled`,
        loadChildren: async () =>
            (await import(`../components/checkbox-labeled/checkbox-labeled.module`))
                .ExampleTuiCheckboxLabeledModule,
        data: {
            title: `CheckboxLabeled`,
        },
    },
    {
        path: `components/color-picker`,
        loadChildren: async () =>
            (await import(`../components/color-picker/color-picker.module`))
                .ExampleTuiColorPickerModule,
        data: {
            title: `ColorPicker`,
        },
    },
    {
        path: `components/primitive-checkbox`,
        loadChildren: async () =>
            (await import(`../components/primitive-checkbox/primitive-checkbox.module`))
                .ExampleTuiPrimitiveCheckboxModule,
        data: {
            title: `PrimitiveCheckbox`,
        },
    },
    {
        path: `components/combo-box`,
        loadChildren: async () =>
            (await import(`../components/combo-box/combo-box.module`))
                .ExampleTuiComboBoxModule,
        data: {
            title: `ComboBox`,
        },
    },
    {
        path: `components/data-list`,
        loadChildren: async () =>
            (await import(`../components/data-list/data-list.module`))
                .ExampleTuiDataListModule,
        data: {
            title: `DataList`,
        },
    },
    {
        path: `components/dialog`,
        loadChildren: async () =>
            (await import(`../components/dialog/dialog.module`)).ExampleTuiDialogModule,
        data: {
            title: `Dialog`,
        },
    },
    {
        path: `components/error`,
        loadChildren: async () =>
            (await import(`../components/error/error.module`)).ExampleTuiErrorModule,
        data: {
            title: `Error`,
        },
    },
    {
        path: `components/expand`,
        loadChildren: async () =>
            (await import(`../components/expand/expand.module`)).ExampleTuiExpandModule,
        data: {
            title: `Expand`,
        },
    },
    {
        path: `pipes/field-error`,
        loadChildren: async () =>
            (await import(`../pipes/field-error/field-error.module`))
                .ExampleTuiFieldErrorModule,
        data: {
            title: `FieldError`,
        },
    },
    {
        path: `components/input-files`,
        loadChildren: async () =>
            (await import(`../components/input-files/input-files.module`))
                .ExampleTuiFilesModule,
        data: {
            title: `InputFiles`,
        },
    },
    {
        path: `components/group`,
        loadChildren: async () =>
            (await import(`../components/group/group.module`)).ExampleTuiGroupModule,
        data: {
            path: `tui-group`,
            title: `Group`,
        },
    },
    {
        path: `components/hosted-dropdown`,
        loadChildren: async () =>
            (await import(`../components/hosted-dropdown/hosted-dropdown.module`))
                .ExampleTuiHostedDropdownModule,
        data: {
            title: `HostedDropdown`,
        },
    },
    {
        path: `components/input-inline`,
        loadChildren: async () =>
            (await import(`../components/input-inline/input-inline.module`))
                .ExampleTuiInputInlineModule,
        data: {
            title: `InputInline`,
        },
    },
    {
        path: `components/input`,
        loadChildren: async () =>
            (await import(`../components/input/input.module`)).ExampleTuiInputModule,
        data: {
            title: `Input`,
        },
    },
    {
        path: `components/input-date`,
        loadChildren: async () =>
            (await import(`../components/input-date/input-date.module`))
                .ExampleTuiInputDateModule,
        data: {
            title: `InputDate`,
        },
    },
    {
        path: `components/input-card`,
        loadChildren: async () =>
            (await import(`../components/input-card/input-card.module`))
                .ExampleTuiInputCardModule,
        data: {
            title: `InputCard`,
        },
    },
    {
        path: `components/input-card-grouped`,
        loadChildren: async () =>
            (await import(`../components/input-card-grouped/input-card-grouped.module`))
                .ExampleTuiInputCardGroupedModule,
        data: {
            title: `InputCardGrouped`,
        },
    },
    {
        path: `components/input-copy`,
        loadChildren: async () =>
            (await import(`../components/input-copy/input-copy.module`))
                .ExampleTuiInputCopyModule,
        data: {
            title: `InputCopy`,
        },
    },
    {
        path: `components/input-count`,
        loadChildren: async () =>
            (await import(`../components/input-count/input-count.module`))
                .ExampleTuiInputCountModule,
        data: {
            title: `InputCount`,
        },
    },
    {
        path: `components/input-date-time`,
        loadChildren: async () =>
            (await import(`../components/input-date-time/input-date-time.module`))
                .ExampleTuiInputDateTimeModule,
        data: {
            title: `InputDateTime`,
        },
    },
    {
        path: `components/input-month`,
        loadChildren: async () =>
            (await import(`../components/input-month/input-month.module`))
                .ExampleInputMonthModule,
        data: {
            title: `InputMonth`,
        },
    },
    {
        path: `components/input-month-range`,
        loadChildren: async () =>
            (await import(`../components/input-month-range/input-month-range.module`))
                .ExampleTuiInputMonthRangeModule,
        data: {
            title: `InputMonthRange`,
        },
    },
    {
        path: `components/input-number`,
        loadChildren: async () =>
            (await import(`../components/input-number/input-number.module`))
                .ExampleTuiInputNumberModule,
        data: {
            title: `InputNumber`,
        },
    },
    {
        path: `components/input-password`,
        loadChildren: async () =>
            (await import(`../components/input-password/input-password.module`))
                .ExampleTuiInputPasswordModule,
        data: {
            title: `InputPassword`,
        },
    },
    {
        path: `components/input-phone`,
        loadChildren: async () =>
            (await import(`../components/input-phone/input-phone.module`))
                .ExampleTuiInputPhoneModule,
        data: {
            title: `InputPhone`,
        },
    },
    {
        path: `components/input-range`,
        loadChildren: async () =>
            (await import(`../components/input-range/input-range.module`))
                .ExampleTuiInputRangeModule,
        data: {
            title: `InputRange`,
        },
    },
    {
        path: `components/input-date-range`,
        loadChildren: async () =>
            (await import(`../components/input-date-range/input-date-range.module`))
                .ExampleTuiInputDateRangeModule,
        data: {
            title: `InputDateRange`,
        },
    },
    {
        path: `components/input-slider`,
        loadChildren: async () =>
            (await import(`../components/input-slider/input-slider.module`))
                .ExampleTuiInputSliderModule,
        data: {
            title: `InputSlider`,
        },
    },
    {
        path: `components/input-tag`,
        loadChildren: async () =>
            (await import(`../components/input-tag/input-tag.module`))
                .ExampleTuiInputTagModule,
        data: {
            title: `InputTag`,
        },
    },
    {
        path: `components/input-time`,
        loadChildren: async () =>
            (await import(`../components/input-time/input-time.module`))
                .ExampleTuiInputTimeModule,
        data: {
            title: `InputTime`,
        },
    },
    {
        path: `components/input-phone-international`,
        loadChildren: async () =>
            (
                await import(
                    `../components/input-phone-international/input-phone-international.module`
                )
            ).ExampleTuiInputPhoneInternationalModule,
        data: {
            title: `InputPhoneInternational`,
        },
    },
    {
        path: `components/island`,
        loadChildren: async () =>
            (await import(`../components/island/island.module`)).ExampleTuiIslandModule,
        data: {
            title: `Island`,
        },
    },
    {
        path: `components/label`,
        loadChildren: async () =>
            (await import(`../components/label/label.module`)).ExampleTuiLabelModule,
        data: {
            title: `Label`,
        },
    },
    {
        path: `components/line-clamp`,
        loadChildren: async () =>
            (await import(`../components/line-clamp/line-clamp.module`))
                .ExampleTuiLineClampModule,
        data: {
            title: `LineClamp`,
        },
    },
    {
        path: `components/link`,
        loadChildren: async () =>
            (await import(`../components/link/link.module`)).ExampleTuiLinkModule,
        data: {
            title: `Link`,
        },
    },
    {
        path: `components/loader`,
        loadChildren: async () =>
            (await import(`../components/loader/loader.module`)).ExampleTuiLoaderModule,
        data: {
            title: `Loader`,
        },
    },
    {
        path: `components/marker-icon`,
        loadChildren: async () =>
            (await import(`../components/marker-icon/marker-icon.module`))
                .ExampleTuiMarkerIconModule,
        data: {
            path: `tui-marker-icon`,
            title: `MarkerIcon`,
        },
    },
    {
        path: `mobile-themes`,
        loadChildren: async () =>
            (await import(`../components/mobile-themes/mobile-themes.module`))
                .ExampleTuiMobileThemesModule,
        data: {
            title: `Mobile`,
        },
    },
    {
        path: `components/notification`,
        loadChildren: async () =>
            (await import(`../components/notification/notification.module`))
                .ExampleTuiNotificationModule,
        data: {
            title: `Notification`,
        },
    },
    {
        path: `components/push`,
        loadChildren: async () =>
            import(`../components/push/push.module`).then(m => m.ExampleTuiPushModule),
        data: {
            title: `Push`,
        },
    },
    {
        path: `components/mobile-dialog`,
        loadChildren: async () =>
            (await import(`../components/mobile-dialog/mobile-dialog.module`))
                .ExampleTuiMobileDialogModule,
        data: {
            title: `MobileDialog`,
        },
    },
    {
        path: `components/mobile-calendar`,
        loadChildren: async () =>
            (await import(`../components/mobile-calendar/mobile-calendar.module`))
                .ExampleTuiMobileCalendarModule,
        data: {
            title: `MobileCalendar`,
        },
    },
    {
        path: `components/pull-to-refresh`,
        loadChildren: async () =>
            (await import(`../components/pull-to-refresh/pull-to-refresh.module`))
                .ExampleTuiPullToRefreshModule,
        data: {
            title: `PullToRefresh`,
        },
    },
    {
        path: `components/money`,
        loadChildren: async () =>
            (await import(`../components/money/money.module`)).ExampleTuiMoneyModule,
        data: {
            title: `Money`,
        },
    },
    {
        path: `components/calendar-month`,
        loadChildren: async () =>
            (await import(`../components/calendar-month/calendar-month.module`))
                .ExampleTuiCalendarMonthModule,
        data: {
            title: `CalendarMonth`,
        },
    },
    {
        path: `components/multi-select`,
        loadChildren: async () =>
            (await import(`../components/multi-select/multi-select.module`))
                .ExampleTuiMultiSelectModule,
        data: {
            title: `MultiSelect`,
        },
    },
    {
        path: `navigation/pagination`,
        loadChildren: async () =>
            (await import(`../components/pagination/pagination.module`))
                .ExampleTuiPaginationModule,
        data: {
            title: `Pagination`,
        },
    },
    {
        path: `components/radio`,
        loadChildren: async () =>
            (await import(`../components/radio/radio.module`)).ExampleTuiRadioModule,
        data: {
            title: `Radio`,
        },
    },
    {
        path: `components/radio-block`,
        loadChildren: async () =>
            (await import(`../components/radio-block/radio-block.module`))
                .ExampleTuiRadioBlockModule,
        data: {
            title: `RadioBlock`,
        },
    },
    {
        path: `components/radio-labeled`,
        loadChildren: async () =>
            (await import(`../components/radio-labeled/radio-labeled.module`))
                .ExampleTuiRadioLabeledModule,
        data: {
            title: `RadioLabeled`,
        },
    },
    {
        path: `components/radio-list`,
        loadChildren: async () =>
            (await import(`../components/radio-list/radio-list.module`))
                .ExampleTuiRadioListModule,
        data: {
            title: `RadioList`,
        },
    },
    {
        path: `components/rating`,
        loadChildren: async () =>
            (await import(`../components/rating/rating.module`)).ExampleTuiRatingModule,
        data: {
            title: `Rating`,
        },
    },
    {
        path: `components/range`,
        loadChildren: async () =>
            (await import(`../components/range/range.module`)).ExampleTuiRangeModule,
        data: {
            title: `range`,
        },
    },
    {
        path: `components/calendar-range`,
        loadChildren: async () =>
            (await import(`../components/calendar-range/calendar-range.module`))
                .ExampleTuiCalendarRangeModule,
        data: {
            title: `CalendarRange`,
        },
    },
    {
        path: `components/select`,
        loadChildren: async () =>
            (await import(`../components/select/select.module`)).ExampleTuiSelectModule,
        data: {
            title: `Select`,
        },
    },
    {
        path: `components/scrollbar`,
        loadChildren: async () =>
            (await import(`../components/scrollbar/scrollbar.module`))
                .ExampleTuiScrollbarModule,
        data: {
            title: `Scrollbar`,
        },
    },
    {
        path: `components/sheet`,
        loadChildren: async () =>
            (await import(`../components/sheet/sheet.module`)).ExampleTuiSheetModule,
        data: {
            title: `Sheet`,
        },
    },
    {
        path: `components/slider`,
        loadChildren: async () =>
            (await import(`../components/slider/slider.module`)).ExampleTuiSliderModule,
        data: {
            title: `Slider`,
        },
    },
    {
        path: `navigation/stepper`,
        loadChildren: async () =>
            (await import(`../components/stepper/stepper.module`))
                .ExampleTuiStepperModule,
        data: {
            title: `Stepper`,
        },
    },
    {
        path: `components/preview`,
        loadChildren: async () =>
            (await import(`../components/preview/preview.module`))
                .ExampleTuiPreviewModule,
        data: {
            title: `Preview`,
        },
    },
    {
        path: `components/svg`,
        loadChildren: async () =>
            (await import(`../components/svg/svg.module`)).ExampleTuiSvgModule,
        data: {
            title: `Svg`,
        },
    },
    {
        path: `navigation/tabs`,
        loadChildren: async () =>
            (await import(`../components/tabs/tabs.module`)).ExampleTuiTabsModule,
        data: {
            title: `Tabs`,
        },
    },
    {
        path: `components/tag`,
        loadChildren: async () =>
            (await import(`../components/tag/tag.module`)).ExampleTuiTagModule,
        data: {
            title: `Tag`,
        },
    },
    {
        path: `components/theme-night`,
        loadChildren: async () =>
            (await import(`../components/theme-night/theme-night.module`))
                .ExampleTuiThemeNightModule,
        data: {
            title: `ThemeNight`,
        },
    },
    {
        path: `components/text-area`,
        loadChildren: async () =>
            (await import(`../components/text-area/text-area.module`))
                .ExampleTuiTextAreaModule,
        data: {
            title: `TextArea`,
        },
    },
    {
        path: `components/primitive-textfield`,
        loadChildren: async () =>
            (await import(`../components/primitive-textfield/primitive-textfield.module`))
                .ExampleTuiPrimitiveTextfieldModule,
        data: {
            title: `PrimitiveTextfield`,
        },
    },
    {
        path: `components/pdf-viewer`,
        loadChildren: async () =>
            (await import(`../components/pdf-viewer/pdf-viewer.module`))
                .ExampleTuiPdfViewerModule,
        data: {
            title: `PdfViewer`,
        },
    },
    {
        path: `components/progress-bar`,
        loadChildren: async () =>
            (await import(`../components/progress-bar/progress-bar.module`))
                .ExampleTuiProgressBarModule,
        data: {
            title: `ProgressBar`,
        },
    },
    {
        path: `components/progress-circle`,
        loadChildren: async () =>
            (await import(`../components/progress-circle/progress-circle.module`))
                .ExampleTuiProgressCircleModule,
        data: {
            title: `ProgressCircle`,
        },
    },
    {
        path: `components/progress-segmented`,
        loadChildren: async () =>
            (await import(`../components/progress-segmented/progress-segmented.module`))
                .ExampleTuiProgressSegmentedModule,
        data: {
            title: `ProgressSegmented`,
        },
    },
    {
        path: `components/theme-switcher`,
        loadChildren: async () =>
            (await import(`../components/theme-switcher/theme-switcher.module`))
                .ExampleTuiThemeSwitcherModule,
        data: {
            title: `ThemeSwitcher`,
        },
    },
    {
        path: `components/toggle`,
        loadChildren: async () =>
            (await import(`../components/toggle/toggle.module`)).ExampleTuiToggleModule,
        data: {
            title: `Toggle`,
        },
    },
    {
        path: `components/tooltip`,
        loadChildren: async () =>
            (await import(`../components/tooltip/tooltip.module`))
                .ExampleTuiTooltipModule,
        data: {
            title: `Tooltip`,
        },
    },
    {
        path: `components/tree`,
        loadChildren: async () =>
            (await import(`../components/tree/tree.module`)).ExampleTuiTreeModule,
        data: {
            title: `Tree`,
        },
    },
    {
        path: `components/editor`,
        loadChildren: async () =>
            (await import(`../components/editor/editor.module`)).ExampleTuiEditorModule,
        data: {
            title: `Editor`,
        },
    },
    {
        path: `components/filter`,
        loadChildren: async () =>
            (await import(`../components/filter/filter.module`)).ExampleTuiFilterModule,
        data: {
            title: `Filter`,
        },
    },
    // CHARTS
    {
        path: `components/arc-chart`,
        loadChildren: async () =>
            (await import(`../charts/arc-chart/arc-chart.module`))
                .ExampleTuiArcChartModule,
        data: {
            title: `ArcChart`,
        },
    },
    {
        path: `components/axes`,
        loadChildren: async () =>
            (await import(`../charts/axes/axes.module`)).ExampleTuiAxesModule,
        data: {
            title: `Axes`,
        },
    },
    {
        path: `components/bar`,
        loadChildren: async () =>
            (await import(`../charts/bar/bar.module`)).ExampleTuiBarModule,
        data: {
            title: `Bar`,
        },
    },
    {
        path: `components/bar-chart`,
        loadChildren: async () =>
            (await import(`../charts/bar-chart/bar-chart.module`))
                .ExampleTuiBarChartModule,
        data: {
            title: `BarChart`,
        },
    },
    {
        path: `components/bar-set`,
        loadChildren: async () =>
            (await import(`../charts/bar-set/bar-set.module`)).ExampleTuiBarSetModule,
        data: {
            title: `BarSet`,
        },
    },
    {
        path: `components/legend-item`,
        loadChildren: async () =>
            (await import(`../charts/legend-item/legend-item.module`))
                .ExampleTuiLegendItemModule,
        data: {
            title: `LegendItem`,
        },
    },
    {
        path: `components/line-chart`,
        loadChildren: async () =>
            (await import(`../charts/line-chart/line-chart.module`))
                .ExampleTuiLineChartModule,
        data: {
            title: `LineChart`,
        },
    },
    {
        path: `components/line-days-chart`,
        loadChildren: async () =>
            (await import(`../charts/line-days-chart/line-days-chart.module`))
                .ExampleTuiLineDaysChartModule,
        data: {
            title: `LineDaysChart`,
        },
    },
    {
        path: `components/pie-chart`,
        loadChildren: async () =>
            (await import(`../charts/pie-chart/pie-chart.module`))
                .ExampleTuiPieChartModule,
        data: {
            title: `PieChart`,
        },
    },
    {
        path: `components/ring-chart`,
        loadChildren: async () =>
            (await import(`../charts/ring-chart/ring-chart.module`))
                .ExampleTuiRingChartModule,
        data: {
            title: `RingChart`,
        },
    },
    // STYLES
    {
        path: `colors`,
        loadChildren: async () =>
            (await import(`../markup/colors/colors.module`)).ColorsModule,
        data: {
            title: `Colors`,
        },
    },
    {
        path: `form`,
        loadChildren: async () => (await import(`../markup/form/form.module`)).FormModule,
        data: {
            title: `Form`,
        },
    },
    {
        path: `grid`,
        loadChildren: async () => (await import(`../markup/grid/grid.module`)).GridModule,
        data: {
            title: `Grid`,
        },
    },
    {
        path: `icons`,
        loadChildren: async () =>
            (await import(`../markup/icons/icons.module`)).IconsModule,
        data: {
            title: `Icons`,
        },
    },
    {
        path: `lists`,
        loadChildren: async () =>
            (await import(`../markup/lists/lists.module`)).ListsModule,
        data: {
            title: `Lists`,
        },
    },
    {
        path: `shadows`,
        loadChildren: async () =>
            (await import(`../markup/shadows/shadows.module`)).ShadowsModule,
        data: {
            title: `Shadows`,
        },
    },
    {
        path: `skeleton`,
        loadChildren: async () =>
            (await import(`../markup/skeleton/skeleton.module`)).SkeletonModule,
        data: {
            title: `Skeleton`,
        },
    },
    {
        path: `spaces`,
        loadChildren: async () =>
            (await import(`../markup/spaces/spaces.module`)).SpacesModule,
        data: {
            title: `Spaces`,
        },
    },
    {
        path: `tables`,
        loadChildren: async () =>
            (await import(`../markup/tables/tables.module`)).TablesModule,
        data: {
            title: `Tables`,
        },
    },
    {
        path: `typography`,
        loadChildren: async () =>
            (await import(`../markup/typography/typography.module`)).TypographyModule,
        data: {
            title: `Typography`,
        },
    },
    {
        path: `breakpoints`,
        loadChildren: async () =>
            (await import(`../markup/breakpoints/breakpoints.module`)).BreakpointsModule,
        data: {
            title: `Breakpoints`,
        },
    },
    // DIRECTIVES
    {
        path: `directives/active-zone`,
        loadChildren: async () =>
            (await import(`../directives/active-zone/active-zone.module`))
                .ExampleTuiActiveZoneModule,
        data: {
            title: `ActiveZone`,
        },
    },
    {
        path: `directives/copy-processor`,
        loadChildren: async () =>
            (await import(`../directives/copy-processor/copy-processor.module`))
                .ExampleTuiCopyProcessorModule,
        data: {
            title: `CopyProcessor`,
        },
    },
    {
        path: `directives/dropdown`,
        loadChildren: async () =>
            (await import(`../directives/dropdown/dropdown.module`))
                .ExampleTuiDropdownModule,
        data: {
            title: `Dropdown`,
        },
    },
    {
        path: `directives/dropdown-context`,
        loadChildren: async () =>
            (await import(`../directives/dropdown-context/dropdown-context.module`))
                .ExampleTuiDropdownContextModule,
        data: {
            title: `DropdownContext`,
        },
    },
    {
        path: `directives/dropdown-selection`,
        loadChildren: async () =>
            (await import(`../directives/dropdown-selection/dropdown-selection.module`))
                .ExampleTuiDropdownSelectionModule,
        data: {
            title: `DropdownSelection`,
        },
    },
    {
        path: `directives/described-by`,
        loadChildren: async () =>
            (await import(`../directives/described-by/described-by.module`))
                .ExampleTuiDescribedByModule,
        data: {
            title: `DescribedBy`,
        },
    },
    {
        path: `directives/elastic-sticky`,
        loadChildren: async () =>
            (await import(`../directives/elastic-sticky/elastic-sticky.module`))
                .ExampleTuiElasticStickyModule,
        data: {
            title: `ElasticSticky`,
        },
    },
    {
        path: `directives/element`,
        loadChildren: async () =>
            (await import(`../directives/element/element.module`))
                .ExampleTuiElementModule,
        data: {
            title: `Element`,
        },
    },
    {
        path: `directives/for`,
        loadChildren: async () =>
            (await import(`../directives/for/for.module`)).ExampleTuiForModule,
        data: {
            title: `For`,
        },
    },
    {
        path: `directives/highlight`,
        loadChildren: async () =>
            (await import(`../directives/highlight/highlight.module`))
                .ExampleTuiHighlightModule,
        data: {
            title: `Highlight`,
        },
    },
    {
        path: `directives/hint`,
        loadChildren: async () =>
            (await import(`../directives/hint/hint.module`)).ExampleTuiHintModule,
        data: {
            title: `Hint`,
        },
    },
    {
        path: `directives/lazy-loading`,
        loadChildren: async () =>
            (await import(`../directives/lazy-loading/lazy-loading.module`))
                .ExampleTuiLazyLoadingModule,
        data: {
            title: `LazyLoading`,
        },
    },
    {
        path: `directives/hint-manual`,
        loadChildren: async () =>
            (await import(`../directives/hint-manual/hint-manual.module`))
                .ExampleTuiHintManualModule,
        data: {
            title: `HintManual`,
        },
    },
    {
        path: `directives/hint-pointer`,
        loadChildren: async () =>
            (await import(`../directives/hint-pointer/hint-pointer.module`))
                .ExampleTuiHintPointerModule,
        data: {
            title: `HintPointer`,
        },
    },
    {
        path: `directives/pan`,
        loadChildren: async () =>
            (await import(`../directives/pan/pan.module`)).ExampleTuiPanModule,
        data: {
            title: `Pan`,
        },
    },
    {
        path: `directives/portal`,
        loadChildren: async () =>
            (await import(`../directives/portal/portal.module`)).ExampleTuiPortalModule,
        data: {
            title: `Portal`,
        },
    },
    {
        path: `directives/swipe`,
        loadChildren: async () =>
            (await import(`../directives/swipe/swipe.module`)).ExampleTuiSwipeModule,
        data: {
            title: `Swipe`,
        },
    },
    {
        path: `directives/let`,
        loadChildren: async () =>
            (await import(`../directives/let/let.module`)).ExampleTuiLetModule,
        data: {
            title: `Let`,
        },
    },
    {
        path: `directives/zoom`,
        loadChildren: async () =>
            (await import(`../directives/zoom/zoom.module`)).ExampleTuiZoomModule,
        data: {
            title: `Zoom`,
        },
    },
    {
        path: `directives/overscroll`,
        loadChildren: async () =>
            (await import(`../directives/overscroll/overscroll.module`))
                .ExampleTuiOverscrollModule,
        data: {
            title: `Overscroll`,
        },
    },
    {
        path: `directives/present`,
        loadChildren: async () =>
            (await import(`../directives/present/present.module`))
                .ExampleTuiPresentModule,
        data: {
            title: `Present`,
        },
    },
    {
        path: `components/reorder`,
        loadChildren: async () =>
            (await import(`../tables/reorder/reorder.module`)).ExampleTuiReorderModule,
        data: {
            title: `ReorderColumns`,
        },
    },
    {
        path: `components/table`,
        loadChildren: async () =>
            (await import(`../tables/table/table.module`)).ExampleTuiTableModule,
        data: {
            title: `Table`,
        },
    },
    {
        path: `components/table-filters`,
        loadChildren: async () =>
            (await import(`../tables/table-filters/table-filters.module`))
                .ExampleTuiTableFiltersModule,
        data: {
            title: `TableFilters`,
        },
    },
    {
        path: `components/table-pagination`,
        loadChildren: async () =>
            (await import(`../tables/table-pagination/table-pagination.module`))
                .ExampleTuiTablePaginationModule,
        data: {
            title: `TablePagination`,
        },
    },
    {
        path: `directives/ripple`,
        loadChildren: async () =>
            (await import(`../directives/ripple/ripple.module`)).ExampleTuiRippleModule,
        data: {
            title: `Ripple`,
        },
    },
    {
        path: `directives/sidebar`,
        loadChildren: async () =>
            (await import(`../directives/sidebar/sidebar.module`))
                .ExampleTuiSidebarModule,
        data: {
            title: `Sidebar`,
        },
    },
    {
        path: `directives/touchable`,
        loadChildren: async () =>
            (await import(`../directives/touchable/touchable.module`))
                .ExampleTuiTouchableModule,
        data: {
            title: `Touchable`,
        },
    },
    {
        path: `directives/validator`,
        loadChildren: async () =>
            (await import(`../directives/validator/validator.module`))
                .ExampleTuiValidatorModule,
        data: {
            title: `Validator`,
        },
    },
    {
        path: `directives/media`,
        loadChildren: async () =>
            (await import(`../directives/media/media.module`)).ExampleTuiMediaModule,
        data: {
            title: `Media`,
        },
    },
    {
        path: `directives/mode`,
        loadChildren: async () =>
            (await import(`../directives/mode/mode.module`)).ExampleTuiModeModule,
        data: {
            title: `Mode`,
        },
    },
    {
        path: `directives/auto-focus`,
        loadChildren: async () =>
            (await import(`../directives/auto-focus/auto-focus.module`))
                .ExampleTuiAutoFocusModule,
        data: {
            title: `AutoFocus`,
        },
    },
    // PIPES
    {
        path: `pipes/currency`,
        loadChildren: async () =>
            (await import(`../pipes/currency/currency.module`)).ExampleTuiCurrencyModule,
        data: {
            title: `Currency`,
        },
    },
    {
        path: `pipes/filter`,
        loadChildren: async () =>
            (await import(`../pipes/filter/filter.module`)).ExampleTuiFilterModule,
        data: {
            title: `Filter`,
        },
    },
    {
        path: `pipes/filter-by-input`,
        loadChildren: async () =>
            (await import(`../pipes/filter-by-input/filter-by-input.module`))
                .ExampleTuiFilterByInputModule,
        data: {
            title: `FilterByInput`,
        },
    },
    {
        path: `pipes/format-date`,
        loadChildren: async () =>
            import(`../pipes/format-date/format-date.module`).then(
                m => m.ExampleTuiFormatDateModule,
            ),
        data: {
            title: `FormatDate`,
        },
    },
    {
        path: `pipes/format-number`,
        loadChildren: async () =>
            (await import(`../pipes/format-number/format-number.module`))
                .ExampleTuiFormatNumberModule,
        data: {
            title: `FormatNumber`,
        },
    },
    {
        path: `pipes/format-phone`,
        loadChildren: async () =>
            (await import(`../pipes/format-phone/format-phone.module`))
                .ExampleTuiFormatPhoneModule,
        data: {
            title: `FormatPhone`,
        },
    },
    {
        path: `pipes/mapper`,
        loadChildren: async () =>
            (await import(`../pipes/mapper/mapper.module`)).ExampleTuiMapperModule,
        data: {
            title: `Mapper`,
        },
    },
    {
        path: `pipes/stringify`,
        loadChildren: async () =>
            (await import(`../pipes/stringify/stringify.module`))
                .ExampleTuiStringifyModule,
        data: {
            title: `Stringify`,
        },
    },
    {
        path: `pipes/stringify-content`,
        loadChildren: async () =>
            (await import(`../pipes/stringify-content/stringify-content.module`))
                .ExampleTuiStringifyContentModule,
        data: {
            title: `StringifyContent`,
        },
    },
    // SERVICES
    {
        path: `services/alert-service`,
        loadChildren: async () =>
            (await import(`../services/alerts/alerts.module`)).ExampleTuiAlertsModule,
        data: {
            title: `AlertService`,
        },
    },
    {
        path: `services/destroy-service`,
        loadChildren: async () =>
            (await import(`../services/destroy/destroy.module`)).ExampleTuiDestroyModule,
        data: {
            title: `DestroyService`,
        },
    },
    {
        path: `services/scroll-service`,
        loadChildren: async () =>
            (await import(`../services/scroll/scroll.module`)).ExampleTuiScrollModule,
        data: {
            title: `ScrollService`,
        },
    },
    {
        path: `services/svg-service`,
        loadChildren: async () =>
            (await import(`../services/svg/svg.module`)).ExampleTuiSvgModule,
        data: {
            title: `SvgService`,
        },
    },
    {
        path: `services/table-bars-service`,
        loadChildren: async () =>
            (await import(`../services/table-bar/table-bar.module`))
                .ExampleTuiTableBarModule,
        data: {
            title: `TableBarService`,
        },
    },
    {
        path: `directives/dropdown-controller`,
        loadChildren: async () =>
            (await import(`../directives/dropdown-controller/dropdown-controller.module`))
                .ExampleTuiDropdownControllerModule,
        data: {
            title: `DropdownController`,
        },
    },
    {
        path: `directives/hint-controller`,
        loadChildren: async () =>
            (await import(`../directives/hint-controller/hint-controller.module`))
                .ExampleTuiHintControllerModule,
        data: {
            title: `HintController`,
        },
    },
    {
        path: `directives/textfield-controller`,
        loadChildren: async () =>
            (
                await import(
                    `../directives/textfield-controller/textfield-controller.module`
                )
            ).ExampleTuiTextfieldControllerModule,
        data: {
            title: `TextfieldController`,
        },
    },
    // DECORATORS
    {
        path: `decorators/default-prop`,
        loadChildren: async () =>
            (await import(`../decorators/default-prop/default-prop.module`))
                .ExampleTuiDefaultPropModule,
        data: {
            title: `DefaultProp`,
        },
    },
    {
        path: `decorators/pure`,
        loadChildren: async () =>
            (await import(`../decorators/pure/pure.module`)).ExampleTuiPureModule,
        data: {
            title: `Pure`,
        },
    },
    {
        path: `decorators/required-setter`,
        loadChildren: async () =>
            (await import(`../decorators/required-setter/required-setter.module`))
                .ExampleTuiRequiredSetterModule,
        data: {
            title: `RequiredSetter`,
        },
    },

    // UTILS
    {
        path: `utils/math`,
        loadChildren: async () =>
            (await import(`../utils/math/math.module`)).ExampleMathModule,
        data: {
            title: `Math`,
        },
    },
    {
        path: `utils/format`,
        loadChildren: async () =>
            (await import(`../utils/format/format.module`)).ExampleFormatModule,
        data: {
            title: `Format`,
        },
    },
    {
        path: `utils/dom`,
        loadChildren: async () =>
            (await import(`../utils/dom/dom.module`)).ExampleDomModule,
        data: {
            title: `DOM`,
        },
    },
    {
        path: `utils/browser`,
        loadChildren: async () =>
            (await import(`../utils/browser/browser.module`)).ExampleBrowserModule,
        data: {
            title: `Browser`,
        },
    },
    {
        path: `utils/miscellaneous`,
        loadChildren: async () =>
            (await import(`../utils/miscellaneous/miscellaneous.module`))
                .ExampleMiscellaneousModule,
        data: {
            title: `Miscellaneous`,
        },
    },
    {
        path: `utils/tokens`,
        loadChildren: async () =>
            (await import(`../utils/tokens/tokens.module`)).ExampleTokensModule,
        data: {
            title: `Tokens`,
        },
    },

    // ANIMATIONS
    {
        path: `animations`,
        loadChildren: async () =>
            (await import(`../animations/animations.module`)).ExampleAnimationsModule,
        data: {
            title: `Animations`,
        },
    },

    {path: `**`, redirectTo: ``},
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            initialNavigation: `enabled`,
            scrollPositionRestoration: `top`,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
