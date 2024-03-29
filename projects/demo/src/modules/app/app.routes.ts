import {NgModule} from '@angular/core';
import type {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

export const ROUTES: Routes = [
    route({
        path: '',
        title: 'A powerful set of open source components for Angular',
        loadComponent: async () => import('./landing/landing.component'),
    }),
    // Documentation
    route({
        path: 'getting-started',
        title: 'Getting started',
        loadComponent: async () => import('./getting-started/getting-started.component'),
    }),
    route({
        path: 'browser-support',
        title: 'Browser support',
        loadComponent: async () => import('../info/browsers/browsers.component'),
    }),
    route({
        path: 'changelog',
        title: 'Changelog',
        loadComponent: async () => import('../info/changelog/changelog.component'),
    }),
    route({
        path: 'ssr',
        title: 'Server Side Rendering (SSR)',
        loadComponent: async () => import('../info/ssr/ssr.component'),
    }),
    route({
        path: 'tui-doc',
        title: 'Documentation engine',
        loadComponent: async () => import('../info/doc/doc.component'),
    }),
    route({
        path: 'related',
        title: 'Taiga UI family',
        loadComponent: async () => import('../info/related/related.component'),
    }),
    route({
        path: 'testing/jest',
        title: 'Jest',
        loadComponent: async () => import('../info/testing/jest/jest.component'),
    }),
    route({
        path: 'testing/disable-animation',
        title: 'Disable animation',
        loadComponent: async () =>
            import('../info/testing/disable-animation/disable-animation.component'),
    }),
    route({
        path: 'testing/screenshot-bot',
        title: 'Our screenshot bot',
        loadComponent: async () =>
            import(
                '../info/testing/screenshot-github-bot/screenshot-github-bot.component'
            ),
    }),
    // Customization
    route({
        path: 'i18n',
        title: 'I18n',
        loadComponent: async () => import('../customization/i18n/i18n.component'),
    }),
    route({
        path: 'variables',
        title: 'Variables',
        loadComponent: async () =>
            import('../customization/variables/variables.component'),
    }),
    route({
        path: 'wrapper',
        title: 'Wrapper',
        loadComponent: async () => import('../customization/wrapper/wrapper.component'),
    }),
    route({
        path: 'dialog/custom',
        title: 'Custom',
        loadComponent: async () => import('../customization/dialogs/dialogs.component'),
    }),
    route({
        path: 'dialog/routable',
        title: 'Routable',
        loadComponent: async () =>
            import('../customization/routable/eager/routable-dialog.component'),
        loadChildren: async () =>
            import('../customization/routable/eager/routable-dialog.routes'),
    }),
    route({
        path: 'dialog/lazy-routable',
        title: 'LazyRoutable',
        loadComponent: async () =>
            import('../customization/routable/lazy/lazy-routable-dialog.component'),
        loadChildren: async () =>
            import('../customization/routable/lazy/lazy-routable-dialog.routes'),
    }),
    route({
        path: 'portals',
        title: 'Portals',
        loadComponent: async () => import('../customization/portals/portals.component'),
    }),
    route({
        path: 'viewport',
        title: 'Viewport',
        loadComponent: async () => import('../customization/viewport/viewport.component'),
    }),
    // COMPONENTS
    route({
        path: 'components/accordion',
        title: 'Accordion',
        loadComponent: async () => import('../components/accordion/accordion.component'),
    }),
    route({
        path: 'components/action',
        title: 'Action',
        loadComponent: async () => import('../components/action/action.component'),
    }),
    route({
        path: 'components/avatar',
        title: 'Avatar',
        loadComponent: async () => import('../components/avatar'),
    }),
    route({
        path: 'components/badge',
        loadComponent: async () => import('../components/badge/badge.component'),
        title: 'Badge',
    }),
    {
        path: 'components/badged-content',
        loadChildren: async () =>
            (await import('../components/badged-content/badged-content.module'))
                .ExampleTuiBadgedContentModule,
        data: {
            title: 'BadgedContent',
        },
    },
    {
        path: 'components/block',
        loadChildren: async () =>
            (await import('../components/block/block.module')).ExampleTuiBlockModule,
        data: {
            title: 'Block',
        },
    },
    {
        path: 'layout/block-status',
        loadChildren: async () =>
            (await import('../components/block-status/block-status.module'))
                .ExampleTuiBlockStatusModule,
        data: {
            title: 'BlockStatus',
        },
    },
    {
        path: 'pipes/amount',
        loadChildren: async () =>
            (await import('../pipes/amount/amount.module')).ExampleTuiAmountModule,
        data: {
            title: 'Amount',
        },
    },
    {
        path: 'components/appearance',
        loadChildren: async () =>
            (await import('../directives/appearance/appearance.module'))
                .ExampleTuiAppearanceModule,
        data: {
            title: 'Appearance',
        },
    },
    {
        path: 'experimental/chip',
        loadChildren: async () =>
            (await import('../experimental/chip/chip.module')).ExampleTuiChipModule,
        data: {
            title: 'Chip',
        },
    },
    route({
        path: 'components/title',
        title: 'Title',
        loadComponent: async () => import('../directives/title'),
    }),
    {
        path: 'experimental/tooltip',
        loadChildren: async () =>
            (await import('../experimental/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        data: {
            title: 'Tooltip ',
        },
    },
    {
        path: 'experimental/card-medium',
        loadChildren: async () =>
            (await import('../experimental/card-medium/card-medium.module'))
                .ExampleTuiCardMediumModule,
        data: {
            title: 'CardMedium',
        },
    },
    {
        path: 'experimental/card-large',
        loadChildren: async () =>
            (await import('../experimental/card-large/card-large.module'))
                .ExampleTuiCardLargeModule,
        data: {
            title: 'CardLarge',
        },
    },
    route({
        path: 'components/badge-notification',
        loadComponent: async () =>
            import('../components/badge-notification/badge-notification.component'),
        title: 'BadgeNotification',
    }),
    {
        path: 'experimental/button',
        loadChildren: async () =>
            (await import('../experimental/button/button.module')).ExampleTuiButtonModule,
        data: {
            title: 'Button ',
        },
    },
    route({
        path: 'layout/block-details',
        loadComponent: async () =>
            import('../components/block-details/block-details.component'),
        title: 'BlockDetails',
    }),
    {
        path: 'experimental/button-vertical',
        loadChildren: async () =>
            (await import('../experimental/button-vertical/button-vertical.module'))
                .ExampleTuiButtonModule,
        data: {
            title: 'ButtonVertical',
        },
    },
    {
        path: 'experimental/button-close',
        loadChildren: async () =>
            (await import('../experimental/button-close/button-close.module'))
                .ExampleTuiButtonCloseModule,
        data: {
            title: 'ButtonClose',
        },
    },
    {
        path: 'experimental/button-group',
        loadChildren: async () =>
            (await import('../experimental/button-group/button-group.module'))
                .ExampleTuiButtonGroupModule,
        data: {
            title: 'ButtonGroup',
        },
    },
    {
        path: 'experimental/cell',
        loadChildren: async () =>
            (await import('../experimental/cell/cell.module')).ExampleTuiCellModule,
        data: {
            title: 'Cell',
        },
    },
    route({
        path: 'components/comment',
        loadComponent: async () => import('../directives/comment/comment.component'),
        title: 'Comment',
    }),
    route({
        path: 'layout/header',
        title: 'Header',
        loadComponent: async () => import('../directives/header'),
    }),
    {
        path: 'components/icon',
        loadChildren: async () =>
            (await import('../components/icon/icon.module')).ExampleTuiIconModule,
        data: {
            title: 'Icon',
        },
    },
    route({
        path: 'experimental/label',
        title: 'Label ',
        loadComponent: async () => import('../experimental/label'),
    }),
    {
        path: 'experimental/rating',
        loadChildren: async () =>
            (await import('../experimental/rating/rating.module')).ExampleTuiRatingModule,
        data: {
            title: 'Rating',
        },
    },
    {
        path: 'experimental/segmented',
        loadChildren: async () =>
            (await import('../experimental/segmented/segmented.module'))
                .ExampleTuiSegmentedModule,
        data: {
            title: 'Segmented',
        },
    },
    {
        path: 'experimental/surface',
        loadChildren: async () =>
            (await import('../experimental/surface/surface.module'))
                .ExampleTuiSurfaceModule,
        data: {
            title: 'Surface',
        },
    },
    {
        path: 'components/swipe-actions',
        loadChildren: async () =>
            (await import('../components/swipe-action/swipe-actions.module'))
                .ExampleTuiSwipeActionsModule,
        data: {
            title: 'SwipeActions',
        },
    },
    {
        path: 'experimental/textfield',
        loadChildren: async () =>
            (await import('../experimental/textfield/textfield.module'))
                .ExampleTuiTextfieldModule,
        data: {
            title: 'Textfield',
        },
    },
    {
        path: 'experimental/thumbnail-card',
        loadChildren: async () =>
            (await import('../experimental/thumbnail-card/thumbnail-card.module'))
                .ExampleTuiThumbnailCardModule,
        data: {
            title: 'ThumbnailCard ',
        },
    },
    {
        path: 'experimental/navigation',
        loadChildren: async () =>
            (await import('../experimental/navigation/navigation.module'))
                .ExampleTuiNavigationModule,
        data: {
            title: 'Navigation',
        },
    },
    {
        path: 'navigation/breadcrumbs',
        loadChildren: async () =>
            (await import('../components/breadcrumbs/breadcrumbs.module'))
                .ExampleTuiBreadcrumbsModule,
        data: {
            title: 'Breadcrumbs',
        },
    },
    {
        path: 'components/button',
        loadChildren: async () =>
            (await import('../components/button/button.module')).ExampleTuiButtonModule,
        data: {
            title: 'Button',
        },
    },
    {
        path: 'components/calendar',
        loadChildren: async () =>
            (await import('../components/calendar/calendar.module'))
                .ExampleTuiCalendarModule,
        data: {
            title: 'Calendar',
        },
    },
    {
        path: 'components/carousel',
        loadChildren: async () =>
            (await import('../components/carousel/carousel.module'))
                .ExampleTuiCarouselModule,
        data: {
            title: 'Carousel',
        },
    },
    {
        path: 'components/thumbnail-card',
        loadChildren: async () =>
            (await import('../components/thumbnail-card/thumbnail-card.module'))
                .ExampleTuiThumbnailCardModule,
        data: {
            title: 'ThumbnailCard',
        },
    },
    route({
        path: 'components/checkbox',
        title: 'Checkbox',
        loadComponent: async () => import('../components/checkbox'),
    }),
    {
        path: 'components/combo-box',
        loadChildren: async () =>
            (await import('../components/combo-box/combo-box.module'))
                .ExampleTuiComboBoxModule,
        data: {
            title: 'ComboBox',
        },
    },
    {
        path: 'components/data-list',
        loadChildren: async () =>
            (await import('../components/data-list/data-list.module'))
                .ExampleTuiDataListModule,
        data: {
            title: 'DataList',
        },
    },
    {
        path: 'components/data-list-wrapper',
        loadChildren: async () =>
            (await import('../components/data-list-wrapper/data-list-wrapper.module'))
                .ExampleTuiDataListWrapperModule,
        data: {
            title: 'DataListWrapper',
        },
    },
    {
        path: 'components/dialog',
        loadChildren: async () =>
            (await import('../components/dialog/dialog.module')).ExampleTuiDialogModule,
        data: {
            title: 'Dialog',
        },
    },
    {
        path: 'components/error',
        loadChildren: async () =>
            (await import('../components/error/error.module')).ExampleTuiErrorModule,
        data: {
            title: 'Error',
        },
    },
    {
        path: 'components/expand',
        loadChildren: async () =>
            (await import('../components/expand/expand.module')).ExampleTuiExpandModule,
        data: {
            title: 'Expand',
        },
    },
    {
        path: 'components/elastic-container',
        loadChildren: async () =>
            (await import('../components/elastic-container/elastic-container.module'))
                .ExampleTuiElasticContainerModule,
        data: {
            title: 'ElasticContainer',
        },
    },
    {
        path: 'pipes/field-error',
        loadChildren: async () =>
            (await import('../pipes/field-error/field-error.module'))
                .ExampleTuiFieldErrorModule,
        data: {
            title: 'FieldError',
        },
    },
    {
        path: 'components/input-files',
        loadChildren: async () =>
            (await import('../components/input-files/input-files.module'))
                .ExampleTuiFilesModule,
        data: {
            title: 'InputFiles',
        },
    },
    {
        path: 'components/group',
        loadChildren: async () =>
            (await import('../components/group/group.module')).ExampleTuiGroupModule,
        data: {
            path: 'tui-group',
            title: 'Group',
        },
    },
    {
        path: 'components/hosted-dropdown',
        loadChildren: async () =>
            (await import('../components/hosted-dropdown/hosted-dropdown.module'))
                .ExampleTuiHostedDropdownModule,
        data: {
            title: 'HostedDropdown',
        },
    },
    {
        path: 'directives/dropdown',
        loadChildren: async () =>
            (await import('../directives/dropdown/dropdown.module'))
                .ExampleTuiDropdownModule,
        data: {
            title: 'Dropdown',
        },
    },
    {
        path: 'directives/dropdown-open',
        loadChildren: async () =>
            (await import('../directives/dropdown-open/dropdown-open.module'))
                .ExampleTuiDropdownOpenModule,
        data: {
            title: 'DropdownOpen',
        },
    },
    {
        path: 'directives/dropdown-context',
        loadChildren: async () =>
            (await import('../directives/dropdown-context/dropdown-context.module'))
                .ExampleTuiDropdownContextModule,
        data: {
            title: 'DropdownContext',
        },
    },
    {
        path: 'directives/dropdown-hover',
        loadChildren: async () =>
            (await import('../directives/dropdown-hover/dropdown-hover.module'))
                .ExampleTuiDropdownHoverModule,
        data: {
            title: 'DropdownHover',
        },
    },
    {
        path: 'directives/dropdown-selection',
        loadChildren: async () =>
            (await import('../directives/dropdown-selection/dropdown-selection.module'))
                .ExampleTuiDropdownSelectionModule,
        data: {
            title: 'DropdownSelection',
        },
    },
    {
        path: 'directives/fade',
        loadChildren: async () =>
            (await import('../directives/fade/fade.module')).ExampleTuiFadeDirective,
        data: {
            title: 'Fade',
        },
    },
    {
        path: 'directives/sensitive',
        loadChildren: async () =>
            (await import('../directives/sensitive/sensitive.module'))
                .ExampleTuiSensitiveModule,
        data: {
            title: 'Sensitive',
        },
    },
    {
        path: 'directives/skeleton',
        loadChildren: async () =>
            (await import('../directives/skeleton/skeleton.module'))
                .ExampleTuiSkeletonModule,
        data: {
            title: 'Skeleton',
        },
    },
    {
        path: 'components/input-inline',
        loadChildren: async () =>
            (await import('../components/input-inline/input-inline.module'))
                .ExampleTuiInputInlineModule,
        data: {
            title: 'InputInline',
        },
    },
    {
        path: 'components/input',
        loadChildren: async () =>
            (await import('../components/input/input.module')).ExampleTuiInputModule,
        data: {
            title: 'Input',
        },
    },
    route({
        path: 'components/input-date',
        title: 'InputDate',
        loadComponent: async () => import('../components/input-date'),
    }),
    {
        path: 'components/input-date-multi',
        loadChildren: async () =>
            (await import('../components/input-date-multi/input-date-multi.module'))
                .ExampleTuiInputDateMultiModule,
        data: {
            title: 'InputDateMulti',
        },
    },
    {
        path: 'components/input-card',
        loadChildren: async () =>
            (await import('../components/input-card/input-card.module'))
                .ExampleTuiInputCardModule,
        data: {
            title: 'InputCard',
        },
    },
    {
        path: 'components/input-card-grouped',
        loadChildren: async () =>
            (await import('../components/input-card-grouped/input-card-grouped.module'))
                .ExampleTuiInputCardGroupedModule,
        data: {
            title: 'InputCardGrouped',
        },
    },
    {
        path: 'components/input-copy',
        loadChildren: async () =>
            (await import('../components/input-copy/input-copy.module'))
                .ExampleTuiInputCopyModule,
        data: {
            title: 'InputCopy',
        },
    },
    {
        path: 'components/input-date-time',
        loadChildren: async () =>
            (await import('../components/input-date-time/input-date-time.module'))
                .ExampleTuiInputDateTimeModule,
        data: {
            title: 'InputDateTime',
        },
    },
    {
        path: 'components/input-month',
        loadChildren: async () =>
            (await import('../components/input-month/input-month.module'))
                .ExampleInputMonthModule,
        data: {
            title: 'InputMonth',
        },
    },
    {
        path: 'components/input-month-range',
        loadChildren: async () =>
            (await import('../components/input-month-range/input-month-range.module'))
                .ExampleTuiInputMonthRangeModule,
        data: {
            title: 'InputMonthRange',
        },
    },
    {
        path: 'components/input-number',
        loadChildren: async () =>
            (await import('../components/input-number/input-number.module'))
                .ExampleTuiInputNumberModule,
        data: {
            title: 'InputNumber',
        },
    },
    {
        path: 'components/input-password',
        loadChildren: async () =>
            (await import('../components/input-password/input-password.module'))
                .ExampleTuiInputPasswordModule,
        data: {
            title: 'InputPassword',
        },
    },
    {
        path: 'components/input-phone',
        loadChildren: async () =>
            (await import('../components/input-phone/input-phone.module'))
                .ExampleTuiInputPhoneModule,
        data: {
            title: 'InputPhone',
        },
    },
    {
        path: 'components/input-range',
        loadChildren: async () =>
            (await import('../components/input-range/input-range.module'))
                .ExampleTuiInputRangeModule,
        data: {
            title: 'InputRange',
        },
    },
    {
        path: 'components/input-date-range',
        loadChildren: async () =>
            (await import('../components/input-date-range/input-date-range.module'))
                .ExampleTuiInputDateRangeModule,
        data: {
            title: 'InputDateRange',
        },
    },
    {
        path: 'components/input-slider',
        loadChildren: async () =>
            (await import('../components/input-slider/input-slider.module'))
                .ExampleTuiInputSliderModule,
        data: {
            title: 'InputSlider',
        },
    },
    {
        path: 'components/input-tag',
        loadChildren: async () =>
            (await import('../components/input-tag/input-tag.module'))
                .ExampleTuiInputTagModule,
        data: {
            title: 'InputTag',
        },
    },
    {
        path: 'components/input-time',
        loadChildren: async () =>
            (await import('../components/input-time/input-time.module'))
                .ExampleTuiInputTimeModule,
        data: {
            title: 'InputTime',
        },
    },
    {
        path: 'components/input-phone-international',
        loadChildren: async () =>
            (
                await import(
                    '../components/input-phone-international/input-phone-international.module'
                )
            ).ExampleTuiInputPhoneInternationalModule,
        data: {
            title: 'InputPhoneInternational',
        },
    },
    {
        path: 'components/input-year',
        loadChildren: async () =>
            (await import('../components/input-year/input-year.module'))
                .ExampleInputYearModule,
        data: {
            title: 'InputYear',
        },
    },
    {
        path: 'components/island',
        loadChildren: async () =>
            (await import('../components/island/island.module')).ExampleTuiIslandModule,
        data: {
            title: 'Island',
        },
    },
    {
        path: 'components/items-with-more',
        loadChildren: async () =>
            (await import('../components/items-with-more/items-with-more.module'))
                .ExampleTuiItemsWithMoreModule,
        data: {
            title: 'ItemsWithMore',
        },
    },
    {
        path: 'components/label',
        loadChildren: async () =>
            (await import('../components/label/label.module')).ExampleTuiLabelModule,
        data: {
            title: 'Label',
        },
    },
    {
        path: 'components/line-clamp',
        loadChildren: async () =>
            (await import('../components/line-clamp/line-clamp.module'))
                .ExampleTuiLineClampModule,
        data: {
            title: 'LineClamp',
        },
    },
    {
        path: 'components/link',
        loadChildren: async () =>
            (await import('../components/link/link.module')).ExampleTuiLinkModule,
        data: {
            title: 'Link',
        },
    },
    {
        path: 'components/loader',
        loadChildren: async () =>
            (await import('../components/loader/loader.module')).ExampleTuiLoaderModule,
        data: {
            title: 'Loader',
        },
    },
    {
        path: 'mobile-themes',
        loadChildren: async () =>
            (await import('../components/mobile-themes/mobile-themes.module'))
                .ExampleTuiMobileThemesModule,
        data: {
            title: 'Mobile',
        },
    },
    {
        path: 'components/notification',
        loadChildren: async () =>
            (await import('../components/notification/notification.module'))
                .ExampleTuiNotificationModule,
        data: {
            title: 'Notification',
        },
    },
    {
        path: 'components/push',
        loadChildren: async () =>
            (await import('../components/push/push.module')).ExampleTuiPushModule,
        data: {
            title: 'Push',
        },
    },
    {
        path: 'components/mobile-dialog',
        loadChildren: async () =>
            (await import('../components/mobile-dialog/mobile-dialog.module'))
                .ExampleTuiMobileDialogModule,
        data: {
            title: 'MobileDialog',
        },
    },
    {
        path: 'components/mobile-calendar',
        loadChildren: async () =>
            (await import('../components/mobile-calendar/mobile-calendar.module'))
                .ExampleTuiMobileCalendarModule,
        data: {
            title: 'MobileCalendar',
        },
    },
    {
        path: 'components/pull-to-refresh',
        loadChildren: async () =>
            (await import('../components/pull-to-refresh/pull-to-refresh.module'))
                .ExampleTuiPullToRefreshModule,
        data: {
            title: 'PullToRefresh',
        },
    },
    {
        path: 'components/calendar-month',
        loadChildren: async () =>
            (await import('../components/calendar-month/calendar-month.module'))
                .ExampleTuiCalendarMonthModule,
        data: {
            title: 'CalendarMonth',
        },
    },
    {
        path: 'components/multi-select',
        loadChildren: async () =>
            (await import('../components/multi-select/multi-select.module'))
                .ExampleTuiMultiSelectModule,
        data: {
            title: 'MultiSelect',
        },
    },
    {
        path: 'navigation/pagination',
        loadChildren: async () =>
            (await import('../components/pagination/pagination.module'))
                .ExampleTuiPaginationModule,
        data: {
            title: 'Pagination',
        },
    },
    route({
        path: 'components/radio',
        title: 'Radio',
        loadComponent: async () => import('../components/radio'),
    }),
    {
        path: 'components/rating',
        loadChildren: async () =>
            (await import('../components/rating/rating.module')).ExampleTuiRatingModule,
        data: {
            title: 'Rating',
        },
    },
    {
        path: 'components/range',
        loadChildren: async () =>
            (await import('../components/range/range.module')).ExampleTuiRangeModule,
        data: {
            title: 'Range',
        },
    },
    {
        path: 'components/calendar-range',
        loadChildren: async () =>
            (await import('../components/calendar-range/calendar-range.module'))
                .ExampleTuiCalendarRangeModule,
        data: {
            title: 'CalendarRange',
        },
    },
    {
        path: 'components/select',
        loadChildren: async () =>
            (await import('../components/select/select.module')).ExampleTuiSelectModule,
        data: {
            title: 'Select',
        },
    },
    {
        path: 'components/scrollbar',
        loadChildren: async () =>
            (await import('../components/scrollbar/scrollbar.module'))
                .ExampleTuiScrollbarModule,
        data: {
            title: 'Scrollbar',
        },
    },
    {
        path: 'components/sheet',
        loadChildren: async () =>
            (await import('../components/sheet/sheet.module')).ExampleTuiSheetModule,
        data: {
            title: 'Sheet',
        },
    },
    {
        path: 'components/sheet-dialog',
        loadChildren: async () =>
            (await import('../components/sheet-dialog/sheet-dialog.module'))
                .ExampleTuiSheetDialogModule,
        data: {
            title: 'SheetDialog',
        },
    },
    {
        path: 'components/slider',
        loadChildren: async () =>
            (await import('../components/slider/slider.module')).ExampleTuiSliderModule,
        data: {
            title: 'Slider',
        },
    },
    route({
        path: 'navigation/stepper',
        loadComponent: async () => import('../components/stepper/stepper.component'),
        title: 'Stepper',
    }),
    {
        path: 'components/preview',
        loadChildren: async () =>
            (await import('../components/preview/preview.module'))
                .ExampleTuiPreviewModule,
        data: {
            title: 'Preview',
        },
    },
    route({
        path: 'navigation/app-bar',
        loadComponent: async () => import('../components/app-bar/app-bar.component'),
        title: 'AppBar',
    }),
    {
        path: 'navigation/tab-bar',
        loadChildren: async () =>
            (await import('../components/tab-bar/tab-bar.module')).ExampleTuiTabBarModule,
        data: {
            title: 'TabBar',
        },
    },
    {
        path: 'navigation/tabs',
        loadChildren: async () =>
            (await import('../components/tabs/tabs.module')).ExampleTuiTabsModule,
        data: {
            title: 'Tabs',
        },
    },
    {
        path: 'components/tag',
        loadChildren: async () =>
            (await import('../components/tag/tag.module')).ExampleTuiTagModule,
        data: {
            title: 'Tag',
        },
    },
    {
        path: 'components/theme-night',
        loadChildren: async () =>
            (await import('../components/theme-night/theme-night.module'))
                .ExampleTuiThemeNightModule,
        data: {
            title: 'ThemeNight',
        },
    },
    {
        path: 'components/textarea',
        loadChildren: async () =>
            (await import('../components/textarea/textarea.module'))
                .ExampleTuiTextareaModule,
        data: {
            title: 'Textarea',
        },
    },
    {
        path: 'components/primitive-textfield',
        loadChildren: async () =>
            (await import('../components/primitive-textfield/primitive-textfield.module'))
                .ExampleTuiPrimitiveTextfieldModule,
        data: {
            title: 'PrimitiveTextfield',
        },
    },
    {
        path: 'components/pdf-viewer',
        loadChildren: async () =>
            (await import('../components/pdf-viewer/pdf-viewer.module'))
                .ExampleTuiPdfViewerModule,
        data: {
            title: 'PdfViewer',
        },
    },
    route({
        path: 'components/pin',
        title: 'Pin',
        loadComponent: async () => import('../components/pin'),
    }),
    route({
        path: 'components/compass',
        title: 'Compass',
        loadComponent: async () => import('../components/compass'),
    }),
    {
        path: 'components/progress-bar',
        loadChildren: async () =>
            (await import('../components/progress-bar/progress-bar.module'))
                .ExampleTuiProgressBarModule,
        data: {
            title: 'ProgressBar',
        },
    },
    {
        path: 'components/progress-circle',
        loadChildren: async () =>
            (await import('../components/progress-circle/progress-circle.module'))
                .ExampleTuiProgressCircleModule,
        data: {
            title: 'ProgressCircle',
        },
    },
    route({
        path: 'components/progress-segmented',
        title: 'ProgressSegmented',
        loadComponent: async () => import('../directives/progress-segmented'),
    }),
    {
        path: 'components/confirm',
        loadChildren: async () =>
            (await import('../components/confirm/confirm.module'))
                .ExampleTuiConfirmModule,
        data: {
            title: 'Confirm',
        },
    },
    {
        path: 'components/theme-switcher',
        loadChildren: async () =>
            (await import('../components/theme-switcher/theme-switcher.module'))
                .ExampleTuiThemeSwitcherModule,
        data: {
            title: 'ThemeSwitcher',
        },
    },
    {
        path: 'components/tiles',
        loadChildren: async () =>
            (await import('../components/tiles/tiles.module')).ExampleTuiTilesModule,
        data: {
            title: 'Tiles',
        },
    },
    route({
        path: 'components/switch',
        title: 'Switch',
        loadComponent: async () => import('../components/switch'),
    }),
    {
        path: 'components/tooltip',
        loadChildren: async () =>
            (await import('../components/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        data: {
            title: 'Tooltip',
        },
    },
    {
        path: 'components/tree',
        loadChildren: async () =>
            (await import('../components/tree/tree.module')).ExampleTuiTreeModule,
        data: {
            title: 'Tree',
        },
    },
    // ICONS
    {
        path: 'icons/overview',
        loadChildren: async () => (await import('../icons/icons.module')).IconsModule,
        data: {
            title: 'Overview',
        },
    },
    {
        path: 'icons/mapping',
        loadChildren: async () =>
            (await import('../icons/icons-mapping/icons-mapping.module'))
                .IconsMappingModule,
        data: {
            title: 'Icons mapping',
        },
    },
    {
        path: 'icons/bundled',
        loadChildren: async () =>
            (await import('../icons/icons-bundled/icons-bundled.module'))
                .IconsBundledModule,
        data: {
            title: 'Icons bundled',
        },
    },
    {
        path: 'icons/customization',
        loadChildren: async () =>
            (await import('../icons/customization/icons-customization.module'))
                .IconsCustomizationModule,
        data: {
            title: 'Icons customization',
        },
    },
    {
        path: 'icons/marker-icon',
        loadChildren: async () =>
            (await import('../icons/marker-icon/marker-icon.module'))
                .ExampleTuiMarkerIconModule,
        data: {
            path: 'tui-marker-icon',
            title: 'MarkerIcon',
        },
    },
    // FILTER
    {
        path: 'components/filter',
        loadChildren: async () =>
            (await import('../components/filter/filter.module')).ExampleTuiFilterModule,
        data: {
            title: 'Filter',
        },
    },
    // CHARTS
    {
        path: 'charts/arc-chart',
        loadChildren: async () =>
            (await import('../charts/arc-chart/arc-chart.module'))
                .ExampleTuiArcChartModule,
        data: {
            title: 'ArcChart',
        },
    },
    {
        path: 'charts/axes',
        loadChildren: async () =>
            (await import('../charts/axes/axes.module')).ExampleTuiAxesModule,
        data: {
            title: 'Axes',
        },
    },
    {
        path: 'charts/bar',
        loadChildren: async () =>
            (await import('../charts/bar/bar.module')).ExampleTuiBarModule,
        data: {
            title: 'Bar',
        },
    },
    {
        path: 'charts/bar-chart',
        loadChildren: async () =>
            (await import('../charts/bar-chart/bar-chart.module'))
                .ExampleTuiBarChartModule,
        data: {
            title: 'BarChart',
        },
    },
    {
        path: 'charts/bar-set',
        loadChildren: async () =>
            (await import('../charts/bar-set/bar-set.module')).ExampleTuiBarSetModule,
        data: {
            title: 'BarSet',
        },
    },
    {
        path: 'charts/legend-item',
        loadChildren: async () =>
            (await import('../charts/legend-item/legend-item.module'))
                .ExampleTuiLegendItemModule,
        data: {
            title: 'LegendItem',
        },
    },
    {
        path: 'charts/line-chart',
        loadChildren: async () =>
            (await import('../charts/line-chart/line-chart.module'))
                .ExampleTuiLineChartModule,
        data: {
            title: 'LineChart',
        },
    },
    {
        path: 'charts/line-days-chart',
        loadChildren: async () =>
            (await import('../charts/line-days-chart/line-days-chart.module'))
                .ExampleTuiLineDaysChartModule,
        data: {
            title: 'LineDaysChart',
        },
    },
    {
        path: 'charts/pie-chart',
        loadChildren: async () =>
            (await import('../charts/pie-chart/pie-chart.module'))
                .ExampleTuiPieChartModule,
        data: {
            title: 'PieChart',
        },
    },
    {
        path: 'charts/ring-chart',
        loadChildren: async () =>
            (await import('../charts/ring-chart/ring-chart.module'))
                .ExampleTuiRingChartModule,
        data: {
            title: 'RingChart',
        },
    },
    // STYLES
    {
        path: 'colors',
        loadChildren: async () =>
            (await import('../markup/colors/colors.module')).ColorsModule,
        data: {
            title: 'Colors',
        },
    },
    {
        path: 'form',
        loadChildren: async () => (await import('../markup/form/form.module')).FormModule,
        data: {
            title: 'Form',
        },
    },
    {
        path: 'lists',
        loadChildren: async () =>
            (await import('../markup/lists/lists.module')).ListsModule,
        data: {
            title: 'Lists',
        },
    },
    {
        path: 'shadows',
        loadChildren: async () =>
            (await import('../markup/shadows/shadows.module')).ShadowsModule,
        data: {
            title: 'Shadows',
        },
    },
    {
        path: 'spaces',
        loadChildren: async () =>
            (await import('../markup/spaces/spaces.module')).SpacesModule,
        data: {
            title: 'Spaces',
        },
    },
    {
        path: 'tables',
        loadChildren: async () =>
            (await import('../markup/tables/tables.module')).TablesModule,
        data: {
            title: 'Tables',
        },
    },
    {
        path: 'typography',
        loadChildren: async () =>
            (await import('../markup/typography/typography.module')).TypographyModule,
        data: {
            title: 'Typography',
        },
    },
    {
        path: 'breakpoints',
        loadChildren: async () =>
            (await import('../markup/breakpoints/breakpoints.module')).BreakpointsModule,
        data: {
            title: 'Breakpoints',
        },
    },
    // DIRECTIVES
    {
        path: 'directives/active-zone',
        loadChildren: async () =>
            (await import('../directives/active-zone/active-zone.module'))
                .ExampleTuiActiveZoneModule,
        data: {
            title: 'ActiveZone',
        },
    },
    {
        path: 'directives/copy-processor',
        loadChildren: async () =>
            (await import('../directives/copy-processor/copy-processor.module'))
                .ExampleTuiCopyProcessorModule,
        data: {
            title: 'CopyProcessor',
        },
    },
    {
        path: 'directives/elastic-sticky',
        loadChildren: async () =>
            (await import('../directives/elastic-sticky/elastic-sticky.module'))
                .ExampleTuiElasticStickyModule,
        data: {
            title: 'ElasticSticky',
        },
    },
    {
        path: 'directives/element',
        loadChildren: async () =>
            (await import('../directives/element/element.module'))
                .ExampleTuiElementModule,
        data: {
            title: 'Element',
        },
    },
    {
        path: 'directives/for',
        loadChildren: async () =>
            (await import('../directives/for/for.module')).ExampleTuiForModule,
        data: {
            title: 'For',
        },
    },
    {
        path: 'directives/highlight',
        loadChildren: async () =>
            (await import('../directives/highlight/highlight.module'))
                .ExampleTuiHighlightModule,
        data: {
            title: 'Highlight',
        },
    },
    {
        path: 'directives/hint',
        loadChildren: async () =>
            (await import('../directives/hint/hint.module')).ExampleTuiHintModule,
        data: {
            title: 'Hint',
        },
    },
    {
        path: 'directives/hint-describe',
        loadChildren: async () =>
            (await import('../directives/hint-describe/hint-describe.module'))
                .ExampleTuiHintDescribeModule,
        data: {
            title: 'HintDescribe',
        },
    },
    {
        path: 'directives/hint-manual',
        loadChildren: async () =>
            (await import('../directives/hint-manual/hint-manual.module'))
                .ExampleTuiHintManualModule,
        data: {
            title: 'HintManual',
        },
    },
    {
        path: 'directives/hint-pointer',
        loadChildren: async () =>
            (await import('../directives/hint-pointer/hint-pointer.module'))
                .ExampleTuiHintPointerModule,
        data: {
            title: 'HintPointer',
        },
    },
    {
        path: 'directives/lazy-loading',
        loadChildren: async () =>
            (await import('../directives/lazy-loading/lazy-loading.module'))
                .ExampleTuiLazyLoadingModule,
        data: {
            title: 'LazyLoading',
        },
    },
    {
        path: 'directives/pan',
        loadChildren: async () =>
            (await import('../directives/pan/pan.module')).ExampleTuiPanModule,
        data: {
            title: 'Pan',
        },
    },
    {
        path: 'directives/resizer',
        loadChildren: async () =>
            (await import('../directives/resizer/resizer.module'))
                .ExampleTuiResizerModule,
        data: {
            title: 'Resizer',
        },
    },
    {
        path: 'directives/swipe',
        loadChildren: async () =>
            (await import('../directives/swipe/swipe.module')).ExampleTuiSwipeModule,
        data: {
            title: 'Swipe',
        },
    },
    {
        path: 'directives/let',
        loadChildren: async () =>
            (await import('../directives/let/let.module')).ExampleTuiLetModule,
        data: {
            title: 'Let',
        },
    },
    {
        path: 'directives/zoom',
        loadChildren: async () =>
            (await import('../directives/zoom/zoom.module')).ExampleTuiZoomModule,
        data: {
            title: 'Zoom',
        },
    },
    {
        path: 'directives/overscroll',
        loadChildren: async () =>
            (await import('../directives/overscroll/overscroll.module'))
                .ExampleTuiOverscrollModule,
        data: {
            title: 'Overscroll',
        },
    },
    {
        path: 'directives/present',
        loadChildren: async () =>
            (await import('../directives/present/present.module'))
                .ExampleTuiPresentDirective,
        data: {
            title: 'Present',
        },
    },
    {
        path: 'directives/hovered-change',
        loadChildren: async () =>
            (await import('../directives/hovered-change/hovered-change.module'))
                .ExampleTuiHoveredChangeModule,
        data: {
            title: 'HoveredChange',
        },
    },
    {
        path: 'components/reorder',
        loadChildren: async () =>
            (await import('../tables/reorder/reorder.module')).ExampleTuiReorderModule,
        data: {
            title: 'ReorderColumns',
        },
    },
    {
        path: 'components/table',
        loadChildren: async () =>
            (await import('../tables/table/table.module')).ExampleTuiTableModule,
        data: {
            title: 'Table',
        },
    },
    {
        path: 'components/table-filters',
        loadChildren: async () =>
            (await import('../tables/table-filters/table-filters.module'))
                .ExampleTuiTableFiltersModule,
        data: {
            title: 'TableFilters',
        },
    },
    {
        path: 'components/table-pagination',
        loadChildren: async () =>
            (await import('../tables/table-pagination/table-pagination.module'))
                .ExampleTuiTablePaginationModule,
        data: {
            title: 'TablePagination',
        },
    },
    {
        path: 'directives/ripple',
        loadChildren: async () =>
            (await import('../directives/ripple/ripple.module')).ExampleTuiRippleModule,
        data: {
            title: 'Ripple',
        },
    },
    {
        path: 'directives/sidebar',
        loadChildren: async () =>
            (await import('../directives/sidebar/sidebar.module'))
                .ExampleTuiSidebarModule,
        data: {
            title: 'Sidebar',
        },
    },
    {
        path: 'directives/touchable',
        loadChildren: async () =>
            (await import('../directives/touchable/touchable.module'))
                .ExampleTuiTouchableModule,
        data: {
            title: 'Touchable',
        },
    },
    {
        path: 'directives/validator',
        loadChildren: async () =>
            (await import('../directives/validator/validator.module'))
                .ExampleTuiValidatorModule,
        data: {
            title: 'Validator',
        },
    },
    {
        path: 'directives/value-changes',
        loadChildren: async () =>
            (await import('../directives/value-changes/value-changes.module'))
                .ExampleTuiValueChangesModule,
        data: {
            title: 'ValueChanges',
        },
    },
    {
        path: 'directives/media',
        loadChildren: async () =>
            (await import('../directives/media/media.module')).ExampleTuiMediaModule,
        data: {
            title: 'Media',
        },
    },
    {
        path: 'directives/mode',
        loadChildren: async () =>
            (await import('../directives/mode/mode.module')).ExampleTuiModeModule,
        data: {
            title: 'Mode',
        },
    },
    {
        path: 'directives/auto-focus',
        loadChildren: async () =>
            (await import('../directives/auto-focus/auto-focus.module'))
                .ExampleTuiAutoFocusModule,
        data: {
            title: 'AutoFocus',
        },
    },
    // PIPES
    {
        path: 'pipes/currency',
        loadChildren: async () =>
            (await import('../pipes/currency/currency.module')).ExampleTuiCurrencyModule,
        data: {
            title: 'Currency',
        },
    },
    {
        path: 'pipes/filter',
        loadChildren: async () =>
            (await import('../pipes/filter/filter.module')).ExampleTuiFilterModule,
        data: {
            title: 'Filter',
        },
    },
    {
        path: 'pipes/filter-by-input',
        loadChildren: async () =>
            (await import('../pipes/filter-by-input/filter-by-input.module'))
                .ExampleTuiFilterByInputModule,
        data: {
            title: 'FilterByInput',
        },
    },
    {
        path: 'pipes/flag',
        loadChildren: async () =>
            (await import('../pipes/flag/flag.module')).ExampleTuiFlagModule,
        data: {
            title: 'Flag',
        },
    },
    {
        path: 'pipes/format-date',
        loadChildren: async () =>
            (await import('../pipes/format-date/format-date.module'))
                .ExampleTuiFormatDateModule,
        data: {
            title: 'FormatDate',
        },
    },
    {
        path: 'pipes/format-number',
        loadChildren: async () =>
            (await import('../pipes/format-number/format-number.module'))
                .ExampleTuiFormatNumberModule,
        data: {
            title: 'FormatNumber',
        },
    },
    {
        path: 'pipes/format-phone',
        loadChildren: async () =>
            (await import('../pipes/format-phone/format-phone.module'))
                .ExampleTuiFormatPhoneModule,
        data: {
            title: 'FormatPhone',
        },
    },
    {
        path: 'pipes/is-present',
        loadChildren: async () =>
            (await import('../pipes/is-present/is-present.module'))
                .ExampleTuiIsPresentModule,
        data: {
            title: 'IsPresent',
        },
    },
    {
        path: 'pipes/mapper',
        loadChildren: async () =>
            (await import('../pipes/mapper/mapper.module')).ExampleTuiMapperModule,
        data: {
            title: 'Mapper',
        },
    },
    {
        path: 'pipes/stringify',
        loadChildren: async () =>
            (await import('../pipes/stringify/stringify.module'))
                .ExampleTuiStringifyModule,
        data: {
            title: 'Stringify',
        },
    },
    {
        path: 'pipes/stringify-content',
        loadChildren: async () =>
            (await import('../pipes/stringify-content/stringify-content.module'))
                .ExampleTuiStringifyContentModule,
        data: {
            title: 'StringifyContent',
        },
    },
    // SERVICES
    route({
        path: 'components/alert',
        title: 'Alert',
        loadComponent: async () => import('../components/alert/alert.component'),
    }),
    {
        path: 'services/breakpoint-service',
        loadChildren: async () =>
            (await import('../services/breakpoint/breakpoint.module'))
                .ExampleTuiBreakpointModule,
        data: {
            title: 'BreakpointService',
        },
    },
    {
        path: 'services/scroll-service',
        loadChildren: async () =>
            (await import('../services/scroll/scroll.module')).ExampleTuiScrollModule,
        data: {
            title: 'ScrollService',
        },
    },
    {
        path: 'services/table-bars-service',
        loadChildren: async () =>
            (await import('../services/table-bar/table-bar.module'))
                .ExampleTuiTableBarModule,
        data: {
            title: 'TableBarService',
        },
    },
    {
        path: 'directives/textfield-controller',
        loadChildren: async () =>
            (
                await import(
                    '../directives/textfield-controller/textfield-controller.module'
                )
            ).ExampleTuiTextfieldControllerModule,
        data: {
            title: 'TextfieldController',
        },
    },
    route({
        path: 'directives/number-format',
        title: 'NumberFormat',
        loadComponent: async () => import('../directives/number-format'),
    }),
    route({
        path: 'directives/date-format',
        title: 'NumberFormat',
        loadComponent: async () => import('../directives/date-format'),
    }),

    // UTILS
    {
        path: 'utils/math',
        loadChildren: async () =>
            (await import('../utils/math/math.module')).ExampleMathModule,
        data: {
            title: 'Math',
        },
    },
    {
        path: 'utils/format',
        loadChildren: async () =>
            (await import('../utils/format/format.module')).ExampleFormatModule,
        data: {
            title: 'Format',
        },
    },
    {
        path: 'utils/dom',
        loadChildren: async () =>
            (await import('../utils/dom/dom.module')).ExampleDomModule,
        data: {
            title: 'DOM',
        },
    },
    {
        path: 'utils/browser',
        loadChildren: async () =>
            (await import('../utils/browser/browser.module')).ExampleBrowserModule,
        data: {
            title: 'Browser',
        },
    },
    {
        path: 'utils/miscellaneous',
        loadChildren: async () =>
            (await import('../utils/miscellaneous/miscellaneous.module'))
                .ExampleMiscellaneousModule,
        data: {
            title: 'Miscellaneous',
        },
    },
    {
        path: 'utils/tokens',
        loadChildren: async () =>
            (await import('../utils/tokens/tokens.module')).ExampleTokensModule,
        data: {
            title: 'Tokens',
        },
    },
    {
        path: 'utils/pure',
        loadChildren: async () =>
            (await import('../utils/pure/pure.module')).ExampleTuiPureModule,
        data: {
            title: 'Pure',
        },
    },

    // ANIMATIONS
    {
        path: 'animations',
        loadChildren: async () =>
            (await import('../animations/animations.module')).ExampleAnimationsModule,
        data: {
            title: 'Animations',
        },
    },

    {
        path: 'stackblitz',
        loadChildren: async () =>
            (await import('./stackblitz/starter/stackblitz-starter.module'))
                .StackblitzStarterModule,
        data: {
            title: 'Stackblitz Starter',
        },
    },
    {
        path: 'cypress',
        loadChildren: async () =>
            (await import('../cypress/cypress.module')).CypressDocPageModule,
        data: {
            title: 'Cypress tests 🤫',
        },
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 64],
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
