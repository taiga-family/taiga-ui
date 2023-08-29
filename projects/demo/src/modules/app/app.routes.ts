import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {GettingStartedComponent} from './getting-started/getting-started.component';
import {LandingComponent} from './landing/landing.component';

export const ROUTES: Routes = [
    {
        component: LandingComponent,
        data: {
            title: `A powerful set of open source components for Angular`,
        },
        path: ``,
    },
    // Documentation
    {
        component: GettingStartedComponent,
        data: {
            title: `Getting started`,
        },
        path: `getting-started`,
    },
    {
        data: {
            title: `Browser support`,
        },
        loadChildren: async () =>
            (await import(`../info/browsers/browsers.module`)).BrowsersModule,
        path: `browser-support`,
    },
    {
        data: {
            title: `Changelog`,
        },
        loadChildren: async () =>
            (await import(`../info/changelog/changelog.module`)).ChangelogModule,
        path: `changelog`,
    },
    {
        data: {
            title: `Server Side Rendering (SSR)`,
        },
        loadChildren: async () => (await import(`../info/ssr/ssr.module`)).SsrModule,
        path: `ssr`,
    },
    {
        data: {
            title: `Documentation engine`,
        },
        loadChildren: async () => (await import(`../info/doc/doc.module`)).DocModule,
        path: `tui-doc`,
    },
    {
        data: {
            title: `Taiga UI family`,
        },
        loadChildren: async () =>
            (await import(`../info/related/related.module`)).RelatedModule,
        path: `related`,
    },
    {
        data: {
            title: `Jest`,
        },
        loadChildren: async () =>
            (await import(`../info/testing/jest/jest.module`)).JestModule,
        path: `testing/jest`,
    },
    {
        data: {
            title: `Disable animation`,
        },
        loadChildren: async () =>
            (await import(`../info/testing/disable-animation/disable-animation.module`))
                .DisableAnimationModule,
        path: `testing/disable-animation`,
    },
    {
        data: {
            title: `Our screenshot bot`,
        },
        loadChildren: async () =>
            (
                await import(
                    `../info/testing/screenshot-github-bot/screenshot-github-bot.module`
                )
            ).ScreenshotGithubBotModule,
        path: `testing/screenshot-bot`,
    },
    // Customization
    {
        data: {
            title: `I18n`,
        },
        loadChildren: async () =>
            (await import(`../customization/i18n/i18n.module`)).I18nModule,
        path: `i18n`,
    },
    {
        data: {
            title: `Variables`,
        },
        loadChildren: async () =>
            (await import(`../customization/variables/variables.module`)).VariablesModule,
        path: `variables`,
    },
    {
        data: {
            title: `Wrapper`,
        },
        loadChildren: async () =>
            (await import(`../customization/wrapper/wrapper.module`)).WrapperModule,
        path: `wrapper`,
    },
    {
        data: {
            title: `Custom`,
        },
        loadChildren: async () =>
            (await import(`../customization/dialogs/dialogs.module`)).DialogsModule,
        path: `dialog/custom`,
    },
    {
        data: {
            title: `Routable`,
        },
        loadChildren: async () =>
            (await import(`../customization/routable/eager/routable-dialog.module`))
                .RoutableDialogModule,
        path: `dialog/routable`,
    },
    {
        data: {
            title: `LazyRoutable`,
        },
        loadChildren: async () =>
            (await import(`../customization/routable/lazy/lazy-routable-dialog.module`))
                .LazyRoutableDialogModule,
        path: `dialog/lazy-routable`,
    },
    {
        data: {
            title: `Portals`,
        },
        loadChildren: async () =>
            (await import(`../customization/portals/portals.module`)).PortalsModule,
        path: `portals`,
    },
    // COMPONENTS
    {
        data: {
            title: `Accordion`,
        },
        loadChildren: async () =>
            (await import(`../components/accordion/accordion.module`))
                .ExampleTuiAccordionModule,
        path: `components/accordion`,
    },
    {
        data: {
            title: `Action`,
        },
        loadChildren: async () =>
            (await import(`../components/action/action.module`)).ExampleTuiActionModule,
        path: `components/action`,
    },
    {
        data: {
            title: `Avatar`,
        },
        loadChildren: async () =>
            (await import(`../components/avatar/avatar.module`)).ExampleTuiAvatarModule,
        path: `components/avatar`,
    },
    {
        data: {
            title: `Badge`,
        },
        loadChildren: async () =>
            (await import(`../components/badge/badge.module`)).ExampleTuiBadgeModule,
        path: `components/badge`,
    },
    {
        data: {
            title: `BadgedContent`,
        },
        loadChildren: async () =>
            (await import(`../components/badged-content/badged-content.module`))
                .ExampleTuiBadgedContentModule,
        path: `components/badged-content`,
    },
    {
        data: {
            title: `BlockStatus`,
        },
        loadChildren: async () =>
            (await import(`../components/block-status/block-status.module`))
                .ExampleTuiBlockStatusModule,
        path: `layout/block-status`,
    },
    {
        data: {
            title: `Avatar`,
        },
        loadChildren: async () =>
            (await import(`../experimental/avatar/avatar.module`)).ExampleTuiAvatarModule,
        path: `experimental/avatar`,
    },
    {
        data: {
            title: `Fade`,
        },
        loadChildren: async () =>
            (await import(`../experimental/fade/fade.module`)).ExampleTuiFadeModule,
        path: `experimental/fade`,
    },
    {
        data: {
            title: `Breadcrumbs`,
        },
        loadChildren: async () =>
            (await import(`../components/breadcrumbs/breadcrumbs.module`))
                .ExampleTuiBreadcrumbsModule,
        path: `navigation/breadcrumbs`,
    },
    {
        data: {
            title: `Button`,
        },
        loadChildren: async () =>
            (await import(`../components/button/button.module`)).ExampleTuiButtonModule,
        path: `components/button`,
    },
    {
        data: {
            title: `Calendar`,
        },
        loadChildren: async () =>
            (await import(`../components/calendar/calendar.module`))
                .ExampleTuiCalendarModule,
        path: `components/calendar`,
    },
    {
        data: {
            title: `Carousel`,
        },
        loadChildren: async () =>
            (await import(`../components/carousel/carousel.module`))
                .ExampleTuiCarouselModule,
        path: `components/carousel`,
    },
    {
        data: {
            title: `Card`,
        },
        loadChildren: async () =>
            (await import(`../components/thumbnail-card/thumbnail-card.module`))
                .ExampleTuiThumbnailCardModule,
        path: `components/card`,
    },
    {
        data: {
            title: `Checkbox`,
        },
        loadChildren: async () =>
            (await import(`../components/checkbox/checkbox.module`))
                .ExampleTuiCheckboxModule,
        path: `components/checkbox`,
    },
    {
        data: {
            title: `CheckboxBlock`,
        },
        loadChildren: async () =>
            (await import(`../components/checkbox-block/checkbox-block.module`))
                .ExampleTuiCheckboxBlockModule,
        path: `components/checkbox-block`,
    },
    {
        data: {
            title: `CheckboxLabeled`,
        },
        loadChildren: async () =>
            (await import(`../components/checkbox-labeled/checkbox-labeled.module`))
                .ExampleTuiCheckboxLabeledModule,
        path: `components/checkbox-labeled`,
    },
    {
        data: {
            title: `PrimitiveCheckbox`,
        },
        loadChildren: async () =>
            (await import(`../components/primitive-checkbox/primitive-checkbox.module`))
                .ExampleTuiPrimitiveCheckboxModule,
        path: `components/primitive-checkbox`,
    },
    {
        data: {
            title: `ComboBox`,
        },
        loadChildren: async () =>
            (await import(`../components/combo-box/combo-box.module`))
                .ExampleTuiComboBoxModule,
        path: `components/combo-box`,
    },
    {
        data: {
            title: `DataList`,
        },
        loadChildren: async () =>
            (await import(`../components/data-list/data-list.module`))
                .ExampleTuiDataListModule,
        path: `components/data-list`,
    },
    {
        data: {
            title: `DataListWrapper`,
        },
        loadChildren: async () =>
            (await import(`../components/data-list-wrapper/data-list-wrapper.module`))
                .ExampleTuiDataListWrapperModule,
        path: `components/data-list-wrapper`,
    },
    {
        data: {
            title: `Dialog`,
        },
        loadChildren: async () =>
            (await import(`../components/dialog/dialog.module`)).ExampleTuiDialogModule,
        path: `components/dialog`,
    },
    {
        data: {
            title: `Error`,
        },
        loadChildren: async () =>
            (await import(`../components/error/error.module`)).ExampleTuiErrorModule,
        path: `components/error`,
    },
    {
        data: {
            title: `Expand`,
        },
        loadChildren: async () =>
            (await import(`../components/expand/expand.module`)).ExampleTuiExpandModule,
        path: `components/expand`,
    },
    {
        data: {
            title: `ElasticContainer`,
        },
        loadChildren: async () =>
            (await import(`../components/elastic-container/elastic-container.module`))
                .ExampleTuiElasticContainerModule,
        path: `components/elastic-container`,
    },
    {
        data: {
            title: `FieldError`,
        },
        loadChildren: async () =>
            (await import(`../pipes/field-error/field-error.module`))
                .ExampleTuiFieldErrorModule,
        path: `pipes/field-error`,
    },
    {
        data: {
            title: `InputFiles`,
        },
        loadChildren: async () =>
            (await import(`../components/input-files/input-files.module`))
                .ExampleTuiFilesModule,
        path: `components/input-files`,
    },
    {
        data: {
            path: `tui-group`,
            title: `Group`,
        },
        loadChildren: async () =>
            (await import(`../components/group/group.module`)).ExampleTuiGroupModule,
        path: `components/group`,
    },
    {
        data: {
            title: `HostedDropdown`,
        },
        loadChildren: async () =>
            (await import(`../components/hosted-dropdown/hosted-dropdown.module`))
                .ExampleTuiHostedDropdownModule,
        path: `components/hosted-dropdown`,
    },
    {
        data: {
            title: `Dropdown`,
        },
        loadChildren: async () =>
            (await import(`../directives/dropdown/dropdown.module`))
                .ExampleTuiDropdownModule,
        path: `directives/dropdown`,
    },
    {
        data: {
            title: `DropdownContext`,
        },
        loadChildren: async () =>
            (await import(`../directives/dropdown-context/dropdown-context.module`))
                .ExampleTuiDropdownContextModule,
        path: `directives/dropdown-context`,
    },
    {
        data: {
            title: `DropdownHover`,
        },
        loadChildren: async () =>
            (await import(`../directives/dropdown-hover/dropdown-hover.module`))
                .ExampleTuiDropdownHoverModule,
        path: `directives/dropdown-hover`,
    },
    {
        data: {
            title: `DropdownSelection`,
        },
        loadChildren: async () =>
            (await import(`../directives/dropdown-selection/dropdown-selection.module`))
                .ExampleTuiDropdownSelectionModule,
        path: `directives/dropdown-selection`,
    },
    {
        data: {
            title: `InputInline`,
        },
        loadChildren: async () =>
            (await import(`../components/input-inline/input-inline.module`))
                .ExampleTuiInputInlineModule,
        path: `components/input-inline`,
    },
    {
        data: {
            title: `Input`,
        },
        loadChildren: async () =>
            (await import(`../components/input/input.module`)).ExampleTuiInputModule,
        path: `components/input`,
    },
    {
        data: {
            title: `InputDate`,
        },
        loadChildren: async () =>
            (await import(`../components/input-date/input-date.module`))
                .ExampleTuiInputDateModule,
        path: `components/input-date`,
    },
    {
        data: {
            title: `InputCard`,
        },
        loadChildren: async () =>
            (await import(`../components/input-card/input-card.module`))
                .ExampleTuiInputCardModule,
        path: `components/input-card`,
    },
    {
        data: {
            title: `InputCardGrouped`,
        },
        loadChildren: async () =>
            (await import(`../components/input-card-grouped/input-card-grouped.module`))
                .ExampleTuiInputCardGroupedModule,
        path: `components/input-card-grouped`,
    },
    {
        data: {
            title: `InputCopy`,
        },
        loadChildren: async () =>
            (await import(`../components/input-copy/input-copy.module`))
                .ExampleTuiInputCopyModule,
        path: `components/input-copy`,
    },
    {
        data: {
            title: `InputCount`,
        },
        loadChildren: async () =>
            (await import(`../components/input-count/input-count.module`))
                .ExampleTuiInputCountModule,
        path: `components/input-count`,
    },
    {
        data: {
            title: `InputDateTime`,
        },
        loadChildren: async () =>
            (await import(`../components/input-date-time/input-date-time.module`))
                .ExampleTuiInputDateTimeModule,
        path: `components/input-date-time`,
    },
    {
        data: {
            title: `InputMonth`,
        },
        loadChildren: async () =>
            (await import(`../components/input-month/input-month.module`))
                .ExampleInputMonthModule,
        path: `components/input-month`,
    },
    {
        data: {
            title: `InputMonthRange`,
        },
        loadChildren: async () =>
            (await import(`../components/input-month-range/input-month-range.module`))
                .ExampleTuiInputMonthRangeModule,
        path: `components/input-month-range`,
    },
    {
        data: {
            title: `InputNumber`,
        },
        loadChildren: async () =>
            (await import(`../components/input-number/input-number.module`))
                .ExampleTuiInputNumberModule,
        path: `components/input-number`,
    },
    {
        data: {
            title: `InputPassword`,
        },
        loadChildren: async () =>
            (await import(`../components/input-password/input-password.module`))
                .ExampleTuiInputPasswordModule,
        path: `components/input-password`,
    },
    {
        data: {
            title: `InputPhone`,
        },
        loadChildren: async () =>
            (await import(`../components/input-phone/input-phone.module`))
                .ExampleTuiInputPhoneModule,
        path: `components/input-phone`,
    },
    {
        data: {
            title: `InputRange`,
        },
        loadChildren: async () =>
            (await import(`../components/input-range/input-range.module`))
                .ExampleTuiInputRangeModule,
        path: `components/input-range`,
    },
    {
        data: {
            title: `InputDateRange`,
        },
        loadChildren: async () =>
            (await import(`../components/input-date-range/input-date-range.module`))
                .ExampleTuiInputDateRangeModule,
        path: `components/input-date-range`,
    },
    {
        data: {
            title: `InputSlider`,
        },
        loadChildren: async () =>
            (await import(`../components/input-slider/input-slider.module`))
                .ExampleTuiInputSliderModule,
        path: `components/input-slider`,
    },
    {
        data: {
            title: `InputTag`,
        },
        loadChildren: async () =>
            (await import(`../components/input-tag/input-tag.module`))
                .ExampleTuiInputTagModule,
        path: `components/input-tag`,
    },
    {
        data: {
            title: `InputTime`,
        },
        loadChildren: async () =>
            (await import(`../components/input-time/input-time.module`))
                .ExampleTuiInputTimeModule,
        path: `components/input-time`,
    },
    {
        data: {
            title: `InputPhoneInternational`,
        },
        loadChildren: async () =>
            (
                await import(
                    `../components/input-phone-international/input-phone-international.module`
                )
            ).ExampleTuiInputPhoneInternationalModule,
        path: `components/input-phone-international`,
    },
    {
        data: {
            title: `InputYear`,
        },
        loadChildren: async () =>
            (await import(`../components/input-year/input-year.module`))
                .ExampleInputYearModule,
        path: `components/input-year`,
    },
    {
        data: {
            title: `Island`,
        },
        loadChildren: async () =>
            (await import(`../components/island/island.module`)).ExampleTuiIslandModule,
        path: `components/island`,
    },
    {
        data: {
            title: `ItemsWithMore`,
        },
        loadChildren: async () =>
            (await import(`../components/items-with-more/items-with-more.module`))
                .ExampleTuiItemsWithMoreModule,
        path: `components/items-with-more`,
    },
    {
        data: {
            title: `Label`,
        },
        loadChildren: async () =>
            (await import(`../components/label/label.module`)).ExampleTuiLabelModule,
        path: `components/label`,
    },
    {
        data: {
            title: `LineClamp`,
        },
        loadChildren: async () =>
            (await import(`../components/line-clamp/line-clamp.module`))
                .ExampleTuiLineClampModule,
        path: `components/line-clamp`,
    },
    {
        data: {
            title: `Link`,
        },
        loadChildren: async () =>
            (await import(`../components/link/link.module`)).ExampleTuiLinkModule,
        path: `components/link`,
    },
    {
        data: {
            title: `Loader`,
        },
        loadChildren: async () =>
            (await import(`../components/loader/loader.module`)).ExampleTuiLoaderModule,
        path: `components/loader`,
    },
    {
        data: {
            title: `Mobile`,
        },
        loadChildren: async () =>
            (await import(`../components/mobile-themes/mobile-themes.module`))
                .ExampleTuiMobileThemesModule,
        path: `mobile-themes`,
    },
    {
        data: {
            title: `Notification`,
        },
        loadChildren: async () =>
            (await import(`../components/notification/notification.module`))
                .ExampleTuiNotificationModule,
        path: `components/notification`,
    },
    {
        data: {
            title: `Push`,
        },
        loadChildren: async () =>
            import(`../components/push/push.module`).then(m => m.ExampleTuiPushModule),
        path: `components/push`,
    },
    {
        data: {
            title: `MobileDialog`,
        },
        loadChildren: async () =>
            (await import(`../components/mobile-dialog/mobile-dialog.module`))
                .ExampleTuiMobileDialogModule,
        path: `components/mobile-dialog`,
    },
    {
        data: {
            title: `MobileCalendar`,
        },
        loadChildren: async () =>
            (await import(`../components/mobile-calendar/mobile-calendar.module`))
                .ExampleTuiMobileCalendarModule,
        path: `components/mobile-calendar`,
    },
    {
        data: {
            title: `PullToRefresh`,
        },
        loadChildren: async () =>
            (await import(`../components/pull-to-refresh/pull-to-refresh.module`))
                .ExampleTuiPullToRefreshModule,
        path: `components/pull-to-refresh`,
    },
    {
        data: {
            title: `Money`,
        },
        loadChildren: async () =>
            (await import(`../components/money/money.module`)).ExampleTuiMoneyModule,
        path: `components/money`,
    },
    {
        data: {
            title: `CalendarMonth`,
        },
        loadChildren: async () =>
            (await import(`../components/calendar-month/calendar-month.module`))
                .ExampleTuiCalendarMonthModule,
        path: `components/calendar-month`,
    },
    {
        data: {
            title: `MultiSelect`,
        },
        loadChildren: async () =>
            (await import(`../components/multi-select/multi-select.module`))
                .ExampleTuiMultiSelectModule,
        path: `components/multi-select`,
    },
    {
        data: {
            title: `Pagination`,
        },
        loadChildren: async () =>
            (await import(`../components/pagination/pagination.module`))
                .ExampleTuiPaginationModule,
        path: `navigation/pagination`,
    },
    {
        data: {
            title: `Radio`,
        },
        loadChildren: async () =>
            (await import(`../components/radio/radio.module`)).ExampleTuiRadioModule,
        path: `components/radio`,
    },
    {
        data: {
            title: `RadioBlock`,
        },
        loadChildren: async () =>
            (await import(`../components/radio-block/radio-block.module`))
                .ExampleTuiRadioBlockModule,
        path: `components/radio-block`,
    },
    {
        data: {
            title: `RadioLabeled`,
        },
        loadChildren: async () =>
            (await import(`../components/radio-labeled/radio-labeled.module`))
                .ExampleTuiRadioLabeledModule,
        path: `components/radio-labeled`,
    },
    {
        data: {
            title: `RadioList`,
        },
        loadChildren: async () =>
            (await import(`../components/radio-list/radio-list.module`))
                .ExampleTuiRadioListModule,
        path: `components/radio-list`,
    },
    {
        data: {
            title: `Rating`,
        },
        loadChildren: async () =>
            (await import(`../components/rating/rating.module`)).ExampleTuiRatingModule,
        path: `components/rating`,
    },
    {
        data: {
            title: `Range`,
        },
        loadChildren: async () =>
            (await import(`../components/range/range.module`)).ExampleTuiRangeModule,
        path: `components/range`,
    },
    {
        data: {
            title: `CalendarRange`,
        },
        loadChildren: async () =>
            (await import(`../components/calendar-range/calendar-range.module`))
                .ExampleTuiCalendarRangeModule,
        path: `components/calendar-range`,
    },
    {
        data: {
            title: `Select`,
        },
        loadChildren: async () =>
            (await import(`../components/select/select.module`)).ExampleTuiSelectModule,
        path: `components/select`,
    },
    {
        data: {
            title: `Scrollbar`,
        },
        loadChildren: async () =>
            (await import(`../components/scrollbar/scrollbar.module`))
                .ExampleTuiScrollbarModule,
        path: `components/scrollbar`,
    },
    {
        data: {
            title: `Sheet`,
        },
        loadChildren: async () =>
            (await import(`../components/sheet/sheet.module`)).ExampleTuiSheetModule,
        path: `components/sheet`,
    },
    {
        data: {
            title: `SheetDialog`,
        },
        loadChildren: async () =>
            (await import(`../components/sheet-dialog/sheet-dialog.module`))
                .ExampleTuiSheetDialogModule,
        path: `components/sheet-dialog`,
    },
    {
        data: {
            title: `Slider`,
        },
        loadChildren: async () =>
            (await import(`../components/slider/slider.module`)).ExampleTuiSliderModule,
        path: `components/slider`,
    },
    {
        data: {
            title: `Stepper`,
        },
        loadChildren: async () =>
            (await import(`../components/stepper/stepper.module`))
                .ExampleTuiStepperModule,
        path: `navigation/stepper`,
    },
    {
        data: {
            title: `Preview`,
        },
        loadChildren: async () =>
            (await import(`../components/preview/preview.module`))
                .ExampleTuiPreviewModule,
        path: `components/preview`,
    },
    {
        data: {
            title: `AppBar`,
        },
        loadChildren: async () =>
            (await import(`../components/app-bar/app-bar.module`)).ExampleTuiAppBarModule,
        path: `navigation/app-bar`,
    },
    {
        data: {
            title: `TabBar`,
        },
        loadChildren: async () =>
            (await import(`../components/tab-bar/tab-bar.module`)).ExampleTuiTabBarModule,
        path: `navigation/tab-bar`,
    },
    {
        data: {
            title: `Tabs`,
        },
        loadChildren: async () =>
            (await import(`../components/tabs/tabs.module`)).ExampleTuiTabsModule,
        path: `navigation/tabs`,
    },
    {
        data: {
            title: `Tag`,
        },
        loadChildren: async () =>
            (await import(`../components/tag/tag.module`)).ExampleTuiTagModule,
        path: `components/tag`,
    },
    {
        data: {
            title: `ThemeNight`,
        },
        loadChildren: async () =>
            (await import(`../components/theme-night/theme-night.module`))
                .ExampleTuiThemeNightModule,
        path: `components/theme-night`,
    },
    {
        data: {
            title: `Textarea`,
        },
        loadChildren: async () =>
            (await import(`../components/textarea/textarea.module`))
                .ExampleTuiTextareaModule,
        path: `components/textarea`,
    },
    {
        data: {
            title: `PrimitiveTextfield`,
        },
        loadChildren: async () =>
            (await import(`../components/primitive-textfield/primitive-textfield.module`))
                .ExampleTuiPrimitiveTextfieldModule,
        path: `components/primitive-textfield`,
    },
    {
        data: {
            title: `PdfViewer`,
        },
        loadChildren: async () =>
            (await import(`../components/pdf-viewer/pdf-viewer.module`))
                .ExampleTuiPdfViewerModule,
        path: `components/pdf-viewer`,
    },
    {
        data: {
            title: `ProgressBar`,
        },
        loadChildren: async () =>
            (await import(`../components/progress-bar/progress-bar.module`))
                .ExampleTuiProgressBarModule,
        path: `components/progress-bar`,
    },
    {
        data: {
            title: `ProgressCircle`,
        },
        loadChildren: async () =>
            (await import(`../components/progress-circle/progress-circle.module`))
                .ExampleTuiProgressCircleModule,
        path: `components/progress-circle`,
    },
    {
        data: {
            title: `ProgressSegmented`,
        },
        loadChildren: async () =>
            (await import(`../components/progress-segmented/progress-segmented.module`))
                .ExampleTuiProgressSegmentedModule,
        path: `components/progress-segmented`,
    },
    {
        data: {
            title: `Prompt`,
        },
        loadChildren: async () =>
            (await import(`../components/prompt/prompt.module`)).ExampleTuiPromptModule,
        path: `components/prompt`,
    },
    {
        data: {
            title: `ThemeSwitcher`,
        },
        loadChildren: async () =>
            (await import(`../components/theme-switcher/theme-switcher.module`))
                .ExampleTuiThemeSwitcherModule,
        path: `components/theme-switcher`,
    },
    {
        data: {
            title: `Tiles`,
        },
        loadChildren: async () =>
            (await import(`../components/tiles/tiles.module`)).ExampleTuiTilesModule,
        path: `components/tiles`,
    },
    {
        data: {
            title: `Toggle`,
        },
        loadChildren: async () =>
            (await import(`../components/toggle/toggle.module`)).ExampleTuiToggleModule,
        path: `components/toggle`,
    },
    {
        data: {
            title: `Tooltip`,
        },
        loadChildren: async () =>
            (await import(`../components/tooltip/tooltip.module`))
                .ExampleTuiTooltipModule,
        path: `components/tooltip`,
    },
    {
        data: {
            title: `Tree`,
        },
        loadChildren: async () =>
            (await import(`../components/tree/tree.module`)).ExampleTuiTreeModule,
        path: `components/tree`,
    },
    // ICONS
    {
        data: {
            title: `Overview`,
        },
        loadChildren: async () => (await import(`../icons/icons.module`)).IconsModule,
        path: `icons/overview`,
    },
    {
        data: {
            title: `Icons mapping`,
        },
        loadChildren: async () =>
            (await import(`../icons/icons-mapping/icons-mapping.module`))
                .IconsMappingModule,
        path: `icons/mapping`,
    },
    {
        data: {
            title: `Icons bundled`,
        },
        loadChildren: async () =>
            (await import(`../icons/icons-bundled/icons-bundled.module`))
                .IconsBundledModule,
        path: `icons/bundled`,
    },
    {
        data: {
            title: `Icons customization`,
        },
        loadChildren: async () =>
            (await import(`../icons/customization/icons-customization.module`))
                .IconsCustomizationModule,
        path: `icons/customization`,
    },
    {
        data: {
            path: `tui-marker-icon`,
            title: `MarkerIcon`,
        },
        loadChildren: async () =>
            (await import(`../icons/marker-icon/marker-icon.module`))
                .ExampleTuiMarkerIconModule,
        path: `icons/marker-icon`,
    },
    // FILTER
    {
        data: {
            title: `Filter`,
        },
        loadChildren: async () =>
            (await import(`../components/filter/filter.module`)).ExampleTuiFilterModule,
        path: `components/filter`,
    },
    // CHARTS
    {
        data: {
            title: `ArcChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/arc-chart/arc-chart.module`))
                .ExampleTuiArcChartModule,
        path: `charts/arc-chart`,
    },
    {
        data: {
            title: `Axes`,
        },
        loadChildren: async () =>
            (await import(`../charts/axes/axes.module`)).ExampleTuiAxesModule,
        path: `charts/axes`,
    },
    {
        data: {
            title: `Bar`,
        },
        loadChildren: async () =>
            (await import(`../charts/bar/bar.module`)).ExampleTuiBarModule,
        path: `charts/bar`,
    },
    {
        data: {
            title: `BarChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/bar-chart/bar-chart.module`))
                .ExampleTuiBarChartModule,
        path: `charts/bar-chart`,
    },
    {
        data: {
            title: `BarSet`,
        },
        loadChildren: async () =>
            (await import(`../charts/bar-set/bar-set.module`)).ExampleTuiBarSetModule,
        path: `charts/bar-set`,
    },
    {
        data: {
            title: `LegendItem`,
        },
        loadChildren: async () =>
            (await import(`../charts/legend-item/legend-item.module`))
                .ExampleTuiLegendItemModule,
        path: `charts/legend-item`,
    },
    {
        data: {
            title: `LineChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/line-chart/line-chart.module`))
                .ExampleTuiLineChartModule,
        path: `charts/line-chart`,
    },
    {
        data: {
            title: `LineDaysChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/line-days-chart/line-days-chart.module`))
                .ExampleTuiLineDaysChartModule,
        path: `charts/line-days-chart`,
    },
    {
        data: {
            title: `PieChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/pie-chart/pie-chart.module`))
                .ExampleTuiPieChartModule,
        path: `charts/pie-chart`,
    },
    {
        data: {
            title: `RingChart`,
        },
        loadChildren: async () =>
            (await import(`../charts/ring-chart/ring-chart.module`))
                .ExampleTuiRingChartModule,
        path: `charts/ring-chart`,
    },
    // STYLES
    {
        data: {
            title: `Colors`,
        },
        loadChildren: async () =>
            (await import(`../markup/colors/colors.module`)).ColorsModule,
        path: `colors`,
    },
    {
        data: {
            title: `Form`,
        },
        loadChildren: async () => (await import(`../markup/form/form.module`)).FormModule,
        path: `form`,
    },
    {
        data: {
            title: `Lists`,
        },
        loadChildren: async () =>
            (await import(`../markup/lists/lists.module`)).ListsModule,
        path: `lists`,
    },
    {
        data: {
            title: `Shadows`,
        },
        loadChildren: async () =>
            (await import(`../markup/shadows/shadows.module`)).ShadowsModule,
        path: `shadows`,
    },
    {
        data: {
            title: `Skeleton`,
        },
        loadChildren: async () =>
            (await import(`../markup/skeleton/skeleton.module`)).SkeletonModule,
        path: `skeleton`,
    },
    {
        data: {
            title: `Spaces`,
        },
        loadChildren: async () =>
            (await import(`../markup/spaces/spaces.module`)).SpacesModule,
        path: `spaces`,
    },
    {
        data: {
            title: `Tables`,
        },
        loadChildren: async () =>
            (await import(`../markup/tables/tables.module`)).TablesModule,
        path: `tables`,
    },
    {
        data: {
            title: `Typography`,
        },
        loadChildren: async () =>
            (await import(`../markup/typography/typography.module`)).TypographyModule,
        path: `typography`,
    },
    {
        data: {
            title: `Breakpoints`,
        },
        loadChildren: async () =>
            (await import(`../markup/breakpoints/breakpoints.module`)).BreakpointsModule,
        path: `breakpoints`,
    },
    // DIRECTIVES
    {
        data: {
            title: `ActiveZone`,
        },
        loadChildren: async () =>
            (await import(`../directives/active-zone/active-zone.module`))
                .ExampleTuiActiveZoneModule,
        path: `directives/active-zone`,
    },
    {
        data: {
            title: `CopyProcessor`,
        },
        loadChildren: async () =>
            (await import(`../directives/copy-processor/copy-processor.module`))
                .ExampleTuiCopyProcessorModule,
        path: `directives/copy-processor`,
    },
    {
        data: {
            title: `ElasticSticky`,
        },
        loadChildren: async () =>
            (await import(`../directives/elastic-sticky/elastic-sticky.module`))
                .ExampleTuiElasticStickyModule,
        path: `directives/elastic-sticky`,
    },
    {
        data: {
            title: `Element`,
        },
        loadChildren: async () =>
            (await import(`../directives/element/element.module`))
                .ExampleTuiElementModule,
        path: `directives/element`,
    },
    {
        data: {
            title: `For`,
        },
        loadChildren: async () =>
            (await import(`../directives/for/for.module`)).ExampleTuiForModule,
        path: `directives/for`,
    },
    {
        data: {
            title: `Highlight`,
        },
        loadChildren: async () =>
            (await import(`../directives/highlight/highlight.module`))
                .ExampleTuiHighlightModule,
        path: `directives/highlight`,
    },
    {
        data: {
            title: `Hint`,
        },
        loadChildren: async () =>
            (await import(`../directives/hint/hint.module`)).ExampleTuiHintModule,
        path: `directives/hint`,
    },
    {
        data: {
            title: `HintDescribe`,
        },
        loadChildren: async () =>
            (await import(`../directives/hint-describe/hint-describe.module`))
                .ExampleTuiHintDescribeModule,
        path: `directives/hint-describe`,
    },
    {
        data: {
            title: `HintManual`,
        },
        loadChildren: async () =>
            (await import(`../directives/hint-manual/hint-manual.module`))
                .ExampleTuiHintManualModule,
        path: `directives/hint-manual`,
    },
    {
        data: {
            title: `HintPointer`,
        },
        loadChildren: async () =>
            (await import(`../directives/hint-pointer/hint-pointer.module`))
                .ExampleTuiHintPointerModule,
        path: `directives/hint-pointer`,
    },
    {
        data: {
            title: `LazyLoading`,
        },
        loadChildren: async () =>
            (await import(`../directives/lazy-loading/lazy-loading.module`))
                .ExampleTuiLazyLoadingModule,
        path: `directives/lazy-loading`,
    },
    {
        data: {
            title: `Pan`,
        },
        loadChildren: async () =>
            (await import(`../directives/pan/pan.module`)).ExampleTuiPanModule,
        path: `directives/pan`,
    },
    {
        data: {
            title: `Portal`,
        },
        loadChildren: async () =>
            (await import(`../directives/portal/portal.module`)).ExampleTuiPortalModule,
        path: `directives/portal`,
    },
    {
        data: {
            title: `Resizer`,
        },
        loadChildren: async () =>
            (await import(`../directives/resizer/resizer.module`))
                .ExampleTuiResizerModule,
        path: `directives/resizer`,
    },
    {
        data: {
            title: `Swipe`,
        },
        loadChildren: async () =>
            (await import(`../directives/swipe/swipe.module`)).ExampleTuiSwipeModule,
        path: `directives/swipe`,
    },
    {
        data: {
            title: `Let`,
        },
        loadChildren: async () =>
            (await import(`../directives/let/let.module`)).ExampleTuiLetModule,
        path: `directives/let`,
    },
    {
        data: {
            title: `Zoom`,
        },
        loadChildren: async () =>
            (await import(`../directives/zoom/zoom.module`)).ExampleTuiZoomModule,
        path: `directives/zoom`,
    },
    {
        data: {
            title: `Overscroll`,
        },
        loadChildren: async () =>
            (await import(`../directives/overscroll/overscroll.module`))
                .ExampleTuiOverscrollModule,
        path: `directives/overscroll`,
    },
    {
        data: {
            title: `Present`,
        },
        loadChildren: async () =>
            (await import(`../directives/present/present.module`))
                .ExampleTuiPresentModule,
        path: `directives/present`,
    },
    {
        data: {
            title: `HoveredChange`,
        },
        loadChildren: async () =>
            (await import(`../directives/hovered-change/hovered-change.module`))
                .ExampleTuiHoveredChangeModule,
        path: `directives/hovered-change`,
    },
    {
        data: {
            title: `ReorderColumns`,
        },
        loadChildren: async () =>
            (await import(`../tables/reorder/reorder.module`)).ExampleTuiReorderModule,
        path: `components/reorder`,
    },
    {
        data: {
            title: `Table`,
        },
        loadChildren: async () =>
            (await import(`../tables/table/table.module`)).ExampleTuiTableModule,
        path: `components/table`,
    },
    {
        data: {
            title: `TableFilters`,
        },
        loadChildren: async () =>
            (await import(`../tables/table-filters/table-filters.module`))
                .ExampleTuiTableFiltersModule,
        path: `components/table-filters`,
    },
    {
        data: {
            title: `TablePagination`,
        },
        loadChildren: async () =>
            (await import(`../tables/table-pagination/table-pagination.module`))
                .ExampleTuiTablePaginationModule,
        path: `components/table-pagination`,
    },
    {
        data: {
            title: `Ripple`,
        },
        loadChildren: async () =>
            (await import(`../directives/ripple/ripple.module`)).ExampleTuiRippleModule,
        path: `directives/ripple`,
    },
    {
        data: {
            title: `Sidebar`,
        },
        loadChildren: async () =>
            (await import(`../directives/sidebar/sidebar.module`))
                .ExampleTuiSidebarModule,
        path: `directives/sidebar`,
    },
    {
        data: {
            title: `Touchable`,
        },
        loadChildren: async () =>
            (await import(`../directives/touchable/touchable.module`))
                .ExampleTuiTouchableModule,
        path: `directives/touchable`,
    },
    {
        data: {
            title: `Validator`,
        },
        loadChildren: async () =>
            (await import(`../directives/validator/validator.module`))
                .ExampleTuiValidatorModule,
        path: `directives/validator`,
    },
    {
        data: {
            title: `ValueChanges`,
        },
        loadChildren: async () =>
            (await import(`../directives/value-changes/value-changes.module`))
                .ExampleTuiValueChangesModule,
        path: `directives/value-changes`,
    },
    {
        data: {
            title: `Media`,
        },
        loadChildren: async () =>
            (await import(`../directives/media/media.module`)).ExampleTuiMediaModule,
        path: `directives/media`,
    },
    {
        data: {
            title: `Mode`,
        },
        loadChildren: async () =>
            (await import(`../directives/mode/mode.module`)).ExampleTuiModeModule,
        path: `directives/mode`,
    },
    {
        data: {
            title: `AutoFocus`,
        },
        loadChildren: async () =>
            (await import(`../directives/auto-focus/auto-focus.module`))
                .ExampleTuiAutoFocusModule,
        path: `directives/auto-focus`,
    },
    // PIPES
    {
        data: {
            title: `Currency`,
        },
        loadChildren: async () =>
            (await import(`../pipes/currency/currency.module`)).ExampleTuiCurrencyModule,
        path: `pipes/currency`,
    },
    {
        data: {
            title: `Filter`,
        },
        loadChildren: async () =>
            (await import(`../pipes/filter/filter.module`)).ExampleTuiFilterModule,
        path: `pipes/filter`,
    },
    {
        data: {
            title: `FilterByInput`,
        },
        loadChildren: async () =>
            (await import(`../pipes/filter-by-input/filter-by-input.module`))
                .ExampleTuiFilterByInputModule,
        path: `pipes/filter-by-input`,
    },
    {
        data: {
            title: `Flag`,
        },
        loadChildren: async () =>
            (await import(`../pipes/flag/flag.module`)).ExampleTuiFlagModule,
        path: `pipes/flag`,
    },
    {
        data: {
            title: `FormatDate`,
        },
        loadChildren: async () =>
            import(`../pipes/format-date/format-date.module`).then(
                m => m.ExampleTuiFormatDateModule,
            ),
        path: `pipes/format-date`,
    },
    {
        data: {
            title: `FormatNumber`,
        },
        loadChildren: async () =>
            (await import(`../pipes/format-number/format-number.module`))
                .ExampleTuiFormatNumberModule,
        path: `pipes/format-number`,
    },
    {
        data: {
            title: `FormatPhone`,
        },
        loadChildren: async () =>
            (await import(`../pipes/format-phone/format-phone.module`))
                .ExampleTuiFormatPhoneModule,
        path: `pipes/format-phone`,
    },
    {
        data: {
            title: `IsPresent`,
        },
        loadChildren: async () =>
            (await import(`../pipes/is-present/is-present.module`))
                .ExampleTuiIsPresentModule,
        path: `pipes/is-present`,
    },
    {
        data: {
            title: `Mapper`,
        },
        loadChildren: async () =>
            (await import(`../pipes/mapper/mapper.module`)).ExampleTuiMapperModule,
        path: `pipes/mapper`,
    },
    {
        data: {
            title: `Stringify`,
        },
        loadChildren: async () =>
            (await import(`../pipes/stringify/stringify.module`))
                .ExampleTuiStringifyModule,
        path: `pipes/stringify`,
    },
    {
        data: {
            title: `StringifyContent`,
        },
        loadChildren: async () =>
            (await import(`../pipes/stringify-content/stringify-content.module`))
                .ExampleTuiStringifyContentModule,
        path: `pipes/stringify-content`,
    },
    // SERVICES
    {
        data: {
            title: `AlertService`,
        },
        loadChildren: async () =>
            (await import(`../services/alerts/alerts.module`)).ExampleTuiAlertsModule,
        path: `services/alert-service`,
    },
    {
        data: {
            title: `BreakpointService`,
        },
        loadChildren: async () =>
            (await import(`../services/breakpoint/breakpoint.module`))
                .ExampleTuiBreakpointModule,
        path: `services/breakpoint-service`,
    },
    {
        data: {
            title: `DestroyService`,
        },
        loadChildren: async () =>
            (await import(`../services/destroy/destroy.module`)).ExampleTuiDestroyModule,
        path: `services/destroy-service`,
    },
    {
        data: {
            title: `ScrollService`,
        },
        loadChildren: async () =>
            (await import(`../services/scroll/scroll.module`)).ExampleTuiScrollModule,
        path: `services/scroll-service`,
    },
    {
        data: {
            title: `TableBarService`,
        },
        loadChildren: async () =>
            (await import(`../services/table-bar/table-bar.module`))
                .ExampleTuiTableBarModule,
        path: `services/table-bars-service`,
    },
    {
        data: {
            title: `TextfieldController`,
        },
        loadChildren: async () =>
            (
                await import(
                    `../directives/textfield-controller/textfield-controller.module`
                )
            ).ExampleTuiTextfieldControllerModule,
        path: `directives/textfield-controller`,
    },

    // UTILS
    {
        data: {
            title: `Math`,
        },
        loadChildren: async () =>
            (await import(`../utils/math/math.module`)).ExampleMathModule,
        path: `utils/math`,
    },
    {
        data: {
            title: `Format`,
        },
        loadChildren: async () =>
            (await import(`../utils/format/format.module`)).ExampleFormatModule,
        path: `utils/format`,
    },
    {
        data: {
            title: `DOM`,
        },
        loadChildren: async () =>
            (await import(`../utils/dom/dom.module`)).ExampleDomModule,
        path: `utils/dom`,
    },
    {
        data: {
            title: `Browser`,
        },
        loadChildren: async () =>
            (await import(`../utils/browser/browser.module`)).ExampleBrowserModule,
        path: `utils/browser`,
    },
    {
        data: {
            title: `Miscellaneous`,
        },
        loadChildren: async () =>
            (await import(`../utils/miscellaneous/miscellaneous.module`))
                .ExampleMiscellaneousModule,
        path: `utils/miscellaneous`,
    },
    {
        data: {
            title: `Tokens`,
        },
        loadChildren: async () =>
            (await import(`../utils/tokens/tokens.module`)).ExampleTokensModule,
        path: `utils/tokens`,
    },
    {
        data: {
            title: `Pure`,
        },
        loadChildren: async () =>
            (await import(`../utils/pure/pure.module`)).ExampleTuiPureModule,
        path: `utils/pure`,
    },

    // ANIMATIONS
    {
        data: {
            title: `Animations`,
        },
        loadChildren: async () =>
            (await import(`../animations/animations.module`)).ExampleAnimationsModule,
        path: `animations`,
    },

    {
        data: {
            title: `Stackblitz Starter`,
        },
        loadChildren: async () =>
            (await import(`./stackblitz/starter/stackblitz-starter.module`))
                .StackblitzStarterModule,
        path: `stackblitz`,
    },
    {
        data: {
            title: `Cypress tests 🤫`,
        },
        loadChildren: async () =>
            import(`../cypress/cypress.module`).then(m => m.CypressDocPageModule),
        path: `cypress`,
    },
    {
        path: `**`,
        redirectTo: ``,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            initialNavigation: `enabledBlocking`,
            scrollPositionRestoration: `enabled`,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
