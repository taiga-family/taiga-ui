import type {Routes} from '@angular/router';
import {tuiProvideRoutePageTab as route} from '@taiga-ui/addon-doc';

import {DemoRoute} from './demo-routes';

export const ROUTES: Routes = [
    route({
        path: '',
        title: 'A powerful set of open source components for Angular',
        loadComponent: async () => import('./landing'),
    }),
    // Documentation
    route({
        path: DemoRoute.GettingStarted,
        title: 'Getting started',
        loadComponent: async () => import('./getting-started'),
    }),
    route({
        path: DemoRoute.BrowserSupport,
        title: 'Browser support',
        loadComponent: async () => import('../info/browsers'),
    }),
    route({
        path: DemoRoute.Changelog,
        title: 'Changelog',
        loadComponent: async () => import('../info/changelog'),
    }),
    route({
        path: DemoRoute.SSR,
        title: 'Server Side Rendering (SSR)',
        loadComponent: async () => import('../info/ssr'),
    }),
    route({
        path: DemoRoute.AddonDoc,
        title: 'Documentation engine',
        loadComponent: async () => import('../info/doc'),
    }),
    route({
        path: DemoRoute.Related,
        title: 'Taiga UI family',
        loadComponent: async () => import('../info/related'),
    }),
    route({
        path: DemoRoute.Jest,
        title: 'Jest',
        loadComponent: async () => import('../info/testing/jest'),
    }),
    route({
        path: DemoRoute.DisableAnimation,
        title: 'Disable animation',
        loadComponent: async () => import('../info/testing/disable-animation'),
    }),
    route({
        path: DemoRoute.ScreenshotBot,
        title: 'Our screenshot bot',
        loadComponent: async () => import('../info/testing/screenshot-github-bot'),
    }),
    // Customization
    route({
        path: DemoRoute.I18N,
        title: 'I18n',
        loadComponent: async () => import('../customization/i18n'),
    }),
    route({
        path: DemoRoute.Variables,
        title: 'Variables',
        loadComponent: async () => import('../customization/variables'),
    }),
    route({
        path: DemoRoute.Wrapper,
        title: 'Wrapper',
        loadComponent: async () => import('../customization/wrapper'),
    }),
    route({
        path: DemoRoute.DialogCustom,
        title: 'Custom',
        loadComponent: async () => import('../customization/dialogs'),
    }),
    route({
        path: DemoRoute.DialogRoutable,
        title: 'Routable',
        loadComponent: async () => import('../customization/routable/eager'),
        loadChildren: async () => import('../customization/routable/eager/routes'),
    }),
    route({
        path: DemoRoute.DialogLazyRoutable,
        title: 'LazyRoutable',
        loadComponent: async () => import('../customization/routable/lazy'),
        loadChildren: async () => import('../customization/routable/lazy/routes'),
    }),
    route({
        path: DemoRoute.Portals,
        title: 'Portals',
        loadComponent: async () => import('../customization/portals'),
    }),
    route({
        path: DemoRoute.Viewport,
        title: 'Viewport',
        loadComponent: async () => import('../customization/viewport'),
    }),
    // COMPONENTS
    route({
        path: DemoRoute.Accordion,
        title: 'Accordion',
        loadComponent: async () => import('../components/accordion'),
    }),
    route({
        path: DemoRoute.Avatar,
        title: 'Avatar',
        loadComponent: async () => import('../components/avatar'),
    }),
    route({
        path: DemoRoute.Badge,
        loadComponent: async () => import('../components/badge'),
        title: 'Badge',
    }),
    route({
        path: DemoRoute.BadgedContent,
        title: 'BadgedContent',
        loadComponent: async () => import('../components/badged-content'),
    }),
    route({
        path: DemoRoute.Block,
        title: 'Block',
        loadComponent: async () => import('../components/block'),
    }),
    route({
        path: DemoRoute.BlockStatus,
        title: 'BlockStatus',
        loadComponent: async () => import('../components/block-status'),
    }),
    {
        path: DemoRoute.Amount,
        loadChildren: async () =>
            (await import('../pipes/amount/amount.module')).ExampleTuiAmountModule,
        data: {
            title: 'Amount',
        },
    },
    {
        path: DemoRoute.Appearance,
        loadChildren: async () =>
            (await import('../directives/appearance/appearance.module'))
                .ExampleTuiAppearanceModule,
        data: {
            title: 'Appearance',
        },
    },
    {
        path: DemoRoute.Chip,
        loadChildren: async () =>
            (await import('../experimental/chip/chip.module')).ExampleTuiChipModule,
        data: {
            title: 'Chip',
        },
    },
    route({
        path: DemoRoute.Title,
        title: 'Title',
        loadComponent: async () => import('../directives/title'),
    }),
    {
        path: DemoRoute.TooltipExp,
        loadChildren: async () =>
            (await import('../experimental/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        data: {
            title: 'Tooltip ',
        },
    },
    {
        path: DemoRoute.CardMedium,
        loadChildren: async () =>
            (await import('../experimental/card-medium/card-medium.module'))
                .ExampleTuiCardMediumModule,
        data: {
            title: 'CardMedium',
        },
    },
    {
        path: DemoRoute.CardLarge,
        loadChildren: async () =>
            (await import('../experimental/card-large/card-large.module'))
                .ExampleTuiCardLargeModule,
        data: {
            title: 'CardLarge',
        },
    },
    route({
        path: DemoRoute.BadgeNotification,
        loadComponent: async () =>
            import('../components/badge-notification/badge-notification.component'),
        title: 'BadgeNotification',
    }),
    route({
        path: DemoRoute.BlockDetails,
        loadComponent: async () =>
            import('../components/block-details/block-details.component'),
        title: 'BlockDetails',
    }),
    {
        path: DemoRoute.Cell,
        loadChildren: async () =>
            (await import('../experimental/cell/cell.module')).ExampleTuiCellModule,
        data: {
            title: 'Cell',
        },
    },
    route({
        path: DemoRoute.Comment,
        loadComponent: async () => import('../directives/comment/comment.component'),
        title: 'Comment',
    }),
    route({
        path: DemoRoute.Header,
        title: 'Header',
        loadComponent: async () => import('../directives/header'),
    }),
    {
        path: DemoRoute.Icon,
        loadChildren: async () =>
            (await import('../components/icon/icon.module')).ExampleTuiIconModule,
        data: {
            title: 'Icon',
        },
    },
    route({
        path: DemoRoute.LabelExp,
        title: 'Label ',
        loadComponent: async () => import('../experimental/label'),
    }),
    route({
        path: DemoRoute.Segmented,
        title: 'Segmented',
        loadComponent: async () => import('../components/segmented'),
    }),
    {
        path: DemoRoute.Surface,
        loadChildren: async () =>
            (await import('../experimental/surface/surface.module'))
                .ExampleTuiSurfaceModule,
        data: {
            title: 'Surface',
        },
    },
    {
        path: DemoRoute.SwipeActions,
        loadChildren: async () =>
            (await import('../components/swipe-action/swipe-actions.module'))
                .ExampleTuiSwipeActionsModule,
        data: {
            title: 'SwipeActions',
        },
    },
    {
        path: DemoRoute.Textfield,
        loadChildren: async () =>
            (await import('../experimental/textfield/textfield.module'))
                .ExampleTuiTextfieldModule,
        data: {
            title: 'Textfield',
        },
    },
    {
        path: DemoRoute.Navigation,
        loadChildren: async () =>
            (await import('../experimental/navigation/navigation.module'))
                .ExampleTuiNavigationModule,
        data: {
            title: 'Navigation',
        },
    },
    route({
        path: DemoRoute.Breadcrumbs,
        title: 'Breadcrumbs',
        loadComponent: async () => import('../components/breadcrumbs'),
    }),
    route({
        path: DemoRoute.Button,
        title: 'Button',
        loadComponent: async () => import('../components/button'),
    }),
    route({
        path: DemoRoute.ButtonVertical,
        title: 'ButtonVertical',
        loadComponent: async () => import('../components/button-vertical'),
    }),
    route({
        path: DemoRoute.ButtonClose,
        title: 'ButtonClose',
        loadComponent: async () => import('../components/button-close'),
    }),
    route({
        path: DemoRoute.ButtonGroup,
        title: 'ButtonGroup',
        loadComponent: async () => import('../components/button-group'),
    }),
    {
        path: DemoRoute.Calendar,
        loadChildren: async () =>
            (await import('../components/calendar/calendar.module'))
                .ExampleTuiCalendarModule,
        data: {
            title: 'Calendar',
        },
    },
    {
        path: DemoRoute.Carousel,
        loadChildren: async () =>
            (await import('../components/carousel/carousel.module'))
                .ExampleTuiCarouselModule,
        data: {
            title: 'Carousel',
        },
    },
    route({
        path: DemoRoute.ThumbnailCard,
        title: 'ThumbnailCard',
        loadComponent: async () => import('../components/thumbnail-card'),
    }),
    route({
        path: DemoRoute.Checkbox,
        title: 'Checkbox',
        loadComponent: async () => import('../components/checkbox'),
    }),
    {
        path: DemoRoute.ComboBox,
        loadChildren: async () =>
            (await import('../components/combo-box/combo-box.module'))
                .ExampleTuiComboBoxModule,
        data: {
            title: 'ComboBox',
        },
    },
    {
        path: DemoRoute.DataList,
        loadChildren: async () =>
            (await import('../components/data-list/data-list.module'))
                .ExampleTuiDataListModule,
        data: {
            title: 'DataList',
        },
    },
    {
        path: DemoRoute.DataListWrapper,
        loadChildren: async () =>
            (await import('../components/data-list-wrapper/data-list-wrapper.module'))
                .ExampleTuiDataListWrapperModule,
        data: {
            title: 'DataListWrapper',
        },
    },
    {
        path: DemoRoute.Dialog,
        loadChildren: async () =>
            (await import('../components/dialog/dialog.module')).ExampleTuiDialogModule,
        data: {
            title: 'Dialog',
        },
    },
    {
        path: DemoRoute.Error,
        loadChildren: async () =>
            (await import('../components/error/error.module')).ExampleTuiErrorModule,
        data: {
            title: 'Error',
        },
    },
    {
        path: DemoRoute.Expand,
        loadChildren: async () =>
            (await import('../components/expand/expand.module')).ExampleTuiExpandModule,
        data: {
            title: 'Expand',
        },
    },
    {
        path: DemoRoute.ElasticContainer,
        loadChildren: async () =>
            (await import('../components/elastic-container/elastic-container.module'))
                .ExampleTuiElasticContainerModule,
        data: {
            title: 'ElasticContainer',
        },
    },
    {
        path: DemoRoute.FieldError,
        loadChildren: async () =>
            (await import('../pipes/field-error/field-error.module'))
                .ExampleTuiFieldErrorModule,
        data: {
            title: 'FieldError',
        },
    },
    {
        path: DemoRoute.InputFiles,
        loadChildren: async () =>
            (await import('../components/input-files/input-files.module'))
                .ExampleTuiFilesModule,
        data: {
            title: 'InputFiles',
        },
    },
    {
        path: DemoRoute.Group,
        loadChildren: async () =>
            (await import('../components/group/group.module')).ExampleTuiGroupModule,
        data: {
            title: 'Group',
        },
    },
    {
        path: DemoRoute.HostedDropdown,
        loadChildren: async () =>
            (await import('../components/hosted-dropdown/hosted-dropdown.module'))
                .ExampleTuiHostedDropdownModule,
        data: {
            title: 'HostedDropdown',
        },
    },
    {
        path: DemoRoute.Dropdown,
        loadChildren: async () =>
            (await import('../directives/dropdown/dropdown.module'))
                .ExampleTuiDropdownModule,
        data: {
            title: 'Dropdown',
        },
    },
    {
        path: DemoRoute.DropdownOpen,
        loadChildren: async () =>
            (await import('../directives/dropdown-open/dropdown-open.module'))
                .ExampleTuiDropdownOpenModule,
        data: {
            title: 'DropdownOpen',
        },
    },
    {
        path: DemoRoute.DropdownContext,
        loadChildren: async () =>
            (await import('../directives/dropdown-context/dropdown-context.module'))
                .ExampleTuiDropdownContextModule,
        data: {
            title: 'DropdownContext',
        },
    },
    {
        path: DemoRoute.DropdownHover,
        loadChildren: async () =>
            (await import('../directives/dropdown-hover/dropdown-hover.module'))
                .ExampleTuiDropdownHoverModule,
        data: {
            title: 'DropdownHover',
        },
    },
    {
        path: DemoRoute.DropdownSelection,
        loadChildren: async () =>
            (await import('../directives/dropdown-selection/dropdown-selection.module'))
                .ExampleTuiDropdownSelectionModule,
        data: {
            title: 'DropdownSelection',
        },
    },
    {
        path: DemoRoute.Fade,
        loadChildren: async () =>
            (await import('../directives/fade/fade.module')).ExampleTuiFadeDirective,
        data: {
            title: 'Fade',
        },
    },
    {
        path: DemoRoute.Sensitive,
        loadChildren: async () =>
            (await import('../directives/sensitive/sensitive.module'))
                .ExampleTuiSensitiveModule,
        data: {
            title: 'Sensitive',
        },
    },
    {
        path: DemoRoute.Skeleton,
        loadChildren: async () =>
            (await import('../directives/skeleton/skeleton.module'))
                .ExampleTuiSkeletonModule,
        data: {
            title: 'Skeleton',
        },
    },
    {
        path: DemoRoute.InputInline,
        loadChildren: async () =>
            (await import('../components/input-inline/input-inline.module'))
                .ExampleTuiInputInlineModule,
        data: {
            title: 'InputInline',
        },
    },
    {
        path: DemoRoute.Input,
        loadChildren: async () =>
            (await import('../components/input/input.module')).ExampleTuiInputModule,
        data: {
            title: 'Input',
        },
    },
    route({
        path: DemoRoute.InputDate,
        title: 'InputDate',
        loadComponent: async () => import('../components/input-date'),
    }),
    {
        path: DemoRoute.InputDateMulti,
        loadChildren: async () =>
            (await import('../components/input-date-multi/input-date-multi.module'))
                .ExampleTuiInputDateMultiModule,
        data: {
            title: 'InputDateMulti',
        },
    },
    {
        path: DemoRoute.InputCard,
        loadChildren: async () =>
            (await import('../components/input-card/input-card.module'))
                .ExampleTuiInputCardModule,
        data: {
            title: 'InputCard',
        },
    },
    {
        path: DemoRoute.InputCardGrouped,
        loadChildren: async () =>
            (await import('../components/input-card-grouped/input-card-grouped.module'))
                .ExampleTuiInputCardGroupedModule,
        data: {
            title: 'InputCardGrouped',
        },
    },
    {
        path: DemoRoute.InputCopy,
        loadChildren: async () =>
            (await import('../components/input-copy/input-copy.module'))
                .ExampleTuiInputCopyModule,
        data: {
            title: 'InputCopy',
        },
    },
    {
        path: DemoRoute.InputDateTime,
        loadChildren: async () =>
            (await import('../components/input-date-time/input-date-time.module'))
                .ExampleTuiInputDateTimeModule,
        data: {
            title: 'InputDateTime',
        },
    },
    {
        path: DemoRoute.InputMonth,
        loadChildren: async () =>
            (await import('../components/input-month/input-month.module'))
                .ExampleInputMonthModule,
        data: {
            title: 'InputMonth',
        },
    },
    {
        path: DemoRoute.InputMonthRange,
        loadChildren: async () =>
            (await import('../components/input-month-range/input-month-range.module'))
                .ExampleTuiInputMonthRangeModule,
        data: {
            title: 'InputMonthRange',
        },
    },
    {
        path: DemoRoute.InputNumber,
        loadChildren: async () =>
            (await import('../components/input-number/input-number.module'))
                .ExampleTuiInputNumberModule,
        data: {
            title: 'InputNumber',
        },
    },
    {
        path: DemoRoute.InputPassword,
        loadChildren: async () =>
            (await import('../components/input-password/input-password.module'))
                .ExampleTuiInputPasswordModule,
        data: {
            title: 'InputPassword',
        },
    },
    {
        path: DemoRoute.InputPhone,
        loadChildren: async () =>
            (await import('../components/input-phone/input-phone.module'))
                .ExampleTuiInputPhoneModule,
        data: {
            title: 'InputPhone',
        },
    },
    {
        path: DemoRoute.InputRange,
        loadChildren: async () =>
            (await import('../components/input-range/input-range.module'))
                .ExampleTuiInputRangeModule,
        data: {
            title: 'InputRange',
        },
    },
    {
        path: DemoRoute.InputDateRange,
        loadChildren: async () =>
            (await import('../components/input-date-range/input-date-range.module'))
                .ExampleTuiInputDateRangeModule,
        data: {
            title: 'InputDateRange',
        },
    },
    {
        path: DemoRoute.InputSlider,
        loadChildren: async () =>
            (await import('../components/input-slider/input-slider.module'))
                .ExampleTuiInputSliderModule,
        data: {
            title: 'InputSlider',
        },
    },
    {
        path: DemoRoute.InputTag,
        loadChildren: async () =>
            (await import('../components/input-tag/input-tag.module'))
                .ExampleTuiInputTagModule,
        data: {
            title: 'InputTag',
        },
    },
    {
        path: DemoRoute.InputTime,
        loadChildren: async () =>
            (await import('../components/input-time/input-time.module'))
                .ExampleTuiInputTimeModule,
        data: {
            title: 'InputTime',
        },
    },
    {
        path: DemoRoute.InputPhoneInternational,
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
        path: DemoRoute.InputYear,
        loadChildren: async () =>
            (await import('../components/input-year/input-year.module'))
                .ExampleInputYearModule,
        data: {
            title: 'InputYear',
        },
    },
    {
        path: DemoRoute.Island,
        loadChildren: async () =>
            (await import('../components/island/island.module')).ExampleTuiIslandModule,
        data: {
            title: 'Island',
        },
    },
    {
        path: DemoRoute.ItemsWithMore,
        loadChildren: async () =>
            (await import('../components/items-with-more/items-with-more.module'))
                .ExampleTuiItemsWithMoreModule,
        data: {
            title: 'ItemsWithMore',
        },
    },
    {
        path: DemoRoute.Label,
        loadChildren: async () =>
            (await import('../components/label/label.module')).ExampleTuiLabelModule,
        data: {
            title: 'Label',
        },
    },
    {
        path: DemoRoute.LineClamp,
        loadChildren: async () =>
            (await import('../components/line-clamp/line-clamp.module'))
                .ExampleTuiLineClampModule,
        data: {
            title: 'LineClamp',
        },
    },
    route({
        path: DemoRoute.Link,
        loadComponent: async () => import('../components/link'),
        title: 'Link',
    }),
    {
        path: DemoRoute.Loader,
        loadChildren: async () =>
            (await import('../components/loader/loader.module')).ExampleTuiLoaderModule,
        data: {
            title: 'Loader',
        },
    },
    {
        path: DemoRoute.Mobile,
        loadChildren: async () =>
            (await import('../components/mobile-themes/mobile-themes.module'))
                .ExampleTuiMobileThemesModule,
        data: {
            title: 'Mobile',
        },
    },
    {
        path: DemoRoute.Notification,
        loadChildren: async () =>
            (await import('../components/notification/notification.module'))
                .ExampleTuiNotificationModule,
        data: {
            title: 'Notification',
        },
    },
    {
        path: DemoRoute.Push,
        loadChildren: async () =>
            (await import('../components/push/push.module')).ExampleTuiPushModule,
        data: {
            title: 'Push',
        },
    },
    {
        path: DemoRoute.MobileDialog,
        loadChildren: async () =>
            (await import('../components/mobile-dialog/mobile-dialog.module'))
                .ExampleTuiMobileDialogModule,
        data: {
            title: 'MobileDialog',
        },
    },
    {
        path: DemoRoute.MobileCalendar,
        loadChildren: async () =>
            (await import('../components/mobile-calendar/mobile-calendar.module'))
                .ExampleTuiMobileCalendarModule,
        data: {
            title: 'MobileCalendar',
        },
    },
    {
        path: DemoRoute.PullToRefresh,
        loadChildren: async () =>
            (await import('../components/pull-to-refresh/pull-to-refresh.module'))
                .ExampleTuiPullToRefreshModule,
        data: {
            title: 'PullToRefresh',
        },
    },
    {
        path: DemoRoute.CalendarMonth,
        loadChildren: async () =>
            (await import('../components/calendar-month/calendar-month.module'))
                .ExampleTuiCalendarMonthModule,
        data: {
            title: 'CalendarMonth',
        },
    },
    {
        path: DemoRoute.MultiSelect,
        loadChildren: async () =>
            (await import('../components/multi-select/multi-select.module'))
                .ExampleTuiMultiSelectModule,
        data: {
            title: 'MultiSelect',
        },
    },
    {
        path: DemoRoute.Pagination,
        loadChildren: async () =>
            (await import('../components/pagination/pagination.module'))
                .ExampleTuiPaginationModule,
        data: {
            title: 'Pagination',
        },
    },
    route({
        path: DemoRoute.Radio,
        title: 'Radio',
        loadComponent: async () => import('../components/radio'),
    }),
    route({
        path: DemoRoute.Rating,
        title: 'Rating',
        loadComponent: async () => import('../components/rating'),
    }),
    {
        path: DemoRoute.Range,
        loadChildren: async () =>
            (await import('../components/range/range.module')).ExampleTuiRangeModule,
        data: {
            title: 'Range',
        },
    },
    {
        path: DemoRoute.CalendarRange,
        loadChildren: async () =>
            (await import('../components/calendar-range/calendar-range.module'))
                .ExampleTuiCalendarRangeModule,
        data: {
            title: 'CalendarRange',
        },
    },
    {
        path: DemoRoute.Select,
        loadChildren: async () =>
            (await import('../components/select/select.module')).ExampleTuiSelectModule,
        data: {
            title: 'Select',
        },
    },
    {
        path: DemoRoute.Scrollbar,
        loadChildren: async () =>
            (await import('../components/scrollbar/scrollbar.module'))
                .ExampleTuiScrollbarModule,
        data: {
            title: 'Scrollbar',
        },
    },
    {
        path: DemoRoute.Sheet,
        loadChildren: async () =>
            (await import('../components/sheet/sheet.module')).ExampleTuiSheetModule,
        data: {
            title: 'Sheet',
        },
    },
    {
        path: DemoRoute.SheetDialog,
        loadChildren: async () =>
            (await import('../components/sheet-dialog/sheet-dialog.module'))
                .ExampleTuiSheetDialogModule,
        data: {
            title: 'SheetDialog',
        },
    },
    {
        path: DemoRoute.Slider,
        loadChildren: async () =>
            (await import('../components/slider/slider.module')).ExampleTuiSliderModule,
        data: {
            title: 'Slider',
        },
    },
    route({
        path: DemoRoute.Stepper,
        loadComponent: async () => import('../components/stepper/stepper.component'),
        title: 'Stepper',
    }),
    {
        path: DemoRoute.Preview,
        loadChildren: async () =>
            (await import('../components/preview/preview.module'))
                .ExampleTuiPreviewModule,
        data: {
            title: 'Preview',
        },
    },
    route({
        path: DemoRoute.AppBar,
        loadComponent: async () => import('../experimental/app-bar'),
        title: 'AppBar',
    }),
    {
        path: DemoRoute.TabBar,
        loadChildren: async () =>
            (await import('../components/tab-bar/tab-bar.module')).ExampleTuiTabBarModule,
        data: {
            title: 'TabBar',
        },
    },
    {
        path: DemoRoute.Tabs,
        loadChildren: async () =>
            (await import('../components/tabs/tabs.module')).ExampleTuiTabsModule,
        data: {
            title: 'Tabs',
        },
    },
    {
        path: DemoRoute.Tag,
        loadChildren: async () =>
            (await import('../components/tag/tag.module')).ExampleTuiTagModule,
        data: {
            title: 'Tag',
        },
    },
    {
        path: DemoRoute.Textarea,
        loadChildren: async () =>
            (await import('../components/textarea/textarea.module'))
                .ExampleTuiTextareaModule,
        data: {
            title: 'Textarea',
        },
    },
    {
        path: DemoRoute.PrimitiveTextfield,
        loadChildren: async () =>
            (await import('../components/primitive-textfield/primitive-textfield.module'))
                .ExampleTuiPrimitiveTextfieldModule,
        data: {
            title: 'PrimitiveTextfield',
        },
    },
    {
        path: DemoRoute.PdfViewer,
        loadChildren: async () =>
            (await import('../components/pdf-viewer/pdf-viewer.module'))
                .ExampleTuiPdfViewerModule,
        data: {
            title: 'PdfViewer',
        },
    },
    route({
        path: DemoRoute.Pin,
        title: 'Pin',
        loadComponent: async () => import('../components/pin'),
    }),
    route({
        path: DemoRoute.Compass,
        title: 'Compass',
        loadComponent: async () => import('../components/compass'),
    }),
    {
        path: DemoRoute.ProgressBar,
        loadChildren: async () =>
            (await import('../components/progress-bar/progress-bar.module'))
                .ExampleTuiProgressBarModule,
        data: {
            title: 'ProgressBar',
        },
    },
    {
        path: DemoRoute.ProgressCircle,
        loadChildren: async () =>
            (await import('../components/progress-circle/progress-circle.module'))
                .ExampleTuiProgressCircleModule,
        data: {
            title: 'ProgressCircle',
        },
    },
    route({
        path: DemoRoute.ProgressSegmented,
        title: 'ProgressSegmented',
        loadComponent: async () => import('../directives/progress-segmented'),
    }),
    {
        path: DemoRoute.Confirm,
        loadChildren: async () =>
            (await import('../components/confirm/confirm.module'))
                .ExampleTuiConfirmModule,
        data: {
            title: 'Confirm',
        },
    },
    {
        path: DemoRoute.Tiles,
        loadChildren: async () =>
            (await import('../components/tiles/tiles.module')).ExampleTuiTilesModule,
        data: {
            title: 'Tiles',
        },
    },
    route({
        path: DemoRoute.Switch,
        title: 'Switch',
        loadComponent: async () => import('../components/switch'),
    }),
    {
        path: DemoRoute.Tooltip,
        loadChildren: async () =>
            (await import('../components/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        data: {
            title: 'Tooltip',
        },
    },
    {
        path: DemoRoute.Tree,
        loadChildren: async () =>
            (await import('../components/tree/tree.module')).ExampleTuiTreeModule,
        data: {
            title: 'Tree',
        },
    },
    // ICONS
    {
        path: DemoRoute.IconsOverview,
        loadChildren: async () => (await import('../icons/icons.module')).IconsModule,
        data: {
            title: 'Overview',
        },
    },
    {
        path: DemoRoute.IconsMapping,
        loadChildren: async () =>
            (await import('../icons/icons-mapping/icons-mapping.module'))
                .IconsMappingModule,
        data: {
            title: 'Icons mapping',
        },
    },
    {
        path: DemoRoute.IconsBundled,
        loadChildren: async () =>
            (await import('../icons/icons-bundled/icons-bundled.module'))
                .IconsBundledModule,
        data: {
            title: 'Icons bundled',
        },
    },
    {
        path: DemoRoute.IconsCustomization,
        loadChildren: async () =>
            (await import('../icons/customization/icons-customization.module'))
                .IconsCustomizationModule,
        data: {
            title: 'Icons customization',
        },
    },
    // FILTER
    {
        path: DemoRoute.Filter,
        loadChildren: async () =>
            (await import('../components/filter/filter.module')).ExampleTuiFilterModule,
        data: {
            title: 'Filter',
        },
    },
    // CHARTS
    {
        path: DemoRoute.ArcChart,
        loadChildren: async () =>
            (await import('../charts/arc-chart/arc-chart.module'))
                .ExampleTuiArcChartModule,
        data: {
            title: 'ArcChart',
        },
    },
    {
        path: DemoRoute.Axes,
        loadChildren: async () =>
            (await import('../charts/axes/axes.module')).ExampleTuiAxesModule,
        data: {
            title: 'Axes',
        },
    },
    {
        path: DemoRoute.Bar,
        loadChildren: async () =>
            (await import('../charts/bar/bar.module')).ExampleTuiBarModule,
        data: {
            title: 'Bar',
        },
    },
    {
        path: DemoRoute.BarChart,
        loadChildren: async () =>
            (await import('../charts/bar-chart/bar-chart.module'))
                .ExampleTuiBarChartModule,
        data: {
            title: 'BarChart',
        },
    },
    {
        path: DemoRoute.BarSet,
        loadChildren: async () =>
            (await import('../charts/bar-set/bar-set.module')).ExampleTuiBarSetModule,
        data: {
            title: 'BarSet',
        },
    },
    {
        path: DemoRoute.LegendItem,
        loadChildren: async () =>
            (await import('../charts/legend-item/legend-item.module'))
                .ExampleTuiLegendItemModule,
        data: {
            title: 'LegendItem',
        },
    },
    {
        path: DemoRoute.LineChart,
        loadChildren: async () =>
            (await import('../charts/line-chart/line-chart.module'))
                .ExampleTuiLineChartModule,
        data: {
            title: 'LineChart',
        },
    },
    {
        path: DemoRoute.LineDaysChart,
        loadChildren: async () =>
            (await import('../charts/line-days-chart/line-days-chart.module'))
                .ExampleTuiLineDaysChartModule,
        data: {
            title: 'LineDaysChart',
        },
    },
    {
        path: DemoRoute.PieChart,
        loadChildren: async () =>
            (await import('../charts/pie-chart/pie-chart.module'))
                .ExampleTuiPieChartModule,
        data: {
            title: 'PieChart',
        },
    },
    {
        path: DemoRoute.RingChart,
        loadChildren: async () =>
            (await import('../charts/ring-chart/ring-chart.module'))
                .ExampleTuiRingChartModule,
        data: {
            title: 'RingChart',
        },
    },
    // STYLES
    {
        path: DemoRoute.Colors,
        loadChildren: async () =>
            (await import('../markup/colors/colors.module')).ColorsModule,
        data: {
            title: 'Colors',
        },
    },
    {
        path: DemoRoute.Form,
        loadChildren: async () => (await import('../markup/form/form.module')).FormModule,
        data: {
            title: 'Form',
        },
    },
    {
        path: DemoRoute.Lists,
        loadChildren: async () =>
            (await import('../markup/lists/lists.module')).ListsModule,
        data: {
            title: 'Lists',
        },
    },
    {
        path: DemoRoute.Shadows,
        loadChildren: async () =>
            (await import('../markup/shadows/shadows.module')).ShadowsModule,
        data: {
            title: 'Shadows',
        },
    },
    {
        path: DemoRoute.Spaces,
        loadChildren: async () =>
            (await import('../markup/spaces/spaces.module')).SpacesModule,
        data: {
            title: 'Spaces',
        },
    },
    {
        path: DemoRoute.Tables,
        loadChildren: async () =>
            (await import('../markup/tables/tables.module')).TablesModule,
        data: {
            title: 'Tables',
        },
    },
    {
        path: DemoRoute.Typography,
        loadChildren: async () =>
            (await import('../markup/typography/typography.module')).TypographyModule,
        data: {
            title: 'Typography',
        },
    },
    {
        path: DemoRoute.Breakpoints,
        loadChildren: async () =>
            (await import('../markup/breakpoints/breakpoints.module')).BreakpointsModule,
        data: {
            title: 'Breakpoints',
        },
    },
    // DIRECTIVES
    {
        path: DemoRoute.ActiveZone,
        loadChildren: async () =>
            (await import('../directives/active-zone/active-zone.module'))
                .ExampleTuiActiveZoneModule,
        data: {
            title: 'ActiveZone',
        },
    },
    {
        path: DemoRoute.CopyProcessor,
        loadChildren: async () =>
            (await import('../directives/copy-processor/copy-processor.module'))
                .ExampleTuiCopyProcessorModule,
        data: {
            title: 'CopyProcessor',
        },
    },
    {
        path: DemoRoute.ElasticSticky,
        loadChildren: async () =>
            (await import('../directives/elastic-sticky/elastic-sticky.module'))
                .ExampleTuiElasticStickyModule,
        data: {
            title: 'ElasticSticky',
        },
    },
    {
        path: DemoRoute.Element,
        loadChildren: async () =>
            (await import('../directives/element/element.module'))
                .ExampleTuiElementModule,
        data: {
            title: 'Element',
        },
    },
    {
        path: DemoRoute.For,
        loadChildren: async () =>
            (await import('../directives/for/for.module')).ExampleTuiForModule,
        data: {
            title: 'For',
        },
    },
    {
        path: DemoRoute.Highlight,
        loadChildren: async () =>
            (await import('../directives/highlight/highlight.module'))
                .ExampleTuiHighlightModule,
        data: {
            title: 'Highlight',
        },
    },
    {
        path: DemoRoute.Hint,
        loadChildren: async () =>
            (await import('../directives/hint/hint.module')).ExampleTuiHintModule,
        data: {
            title: 'Hint',
        },
    },
    {
        path: DemoRoute.HintDescribe,
        loadChildren: async () =>
            (await import('../directives/hint-describe/hint-describe.module'))
                .ExampleTuiHintDescribeModule,
        data: {
            title: 'HintDescribe',
        },
    },
    {
        path: DemoRoute.HintManual,
        loadChildren: async () =>
            (await import('../directives/hint-manual/hint-manual.module'))
                .ExampleTuiHintManualModule,
        data: {
            title: 'HintManual',
        },
    },
    {
        path: DemoRoute.HintPointer,
        loadChildren: async () =>
            (await import('../directives/hint-pointer/hint-pointer.module'))
                .ExampleTuiHintPointerModule,
        data: {
            title: 'HintPointer',
        },
    },
    {
        path: DemoRoute.LazyLoading,
        loadChildren: async () =>
            (await import('../directives/lazy-loading/lazy-loading.module'))
                .ExampleTuiLazyLoadingModule,
        data: {
            title: 'LazyLoading',
        },
    },
    {
        path: DemoRoute.Pan,
        loadChildren: async () =>
            (await import('../directives/pan/pan.module')).ExampleTuiPanModule,
        data: {
            title: 'Pan',
        },
    },
    {
        path: DemoRoute.Resizer,
        loadChildren: async () =>
            (await import('../directives/resizer/resizer.module'))
                .ExampleTuiResizerModule,
        data: {
            title: 'Resizer',
        },
    },
    {
        path: DemoRoute.Swipe,
        loadChildren: async () =>
            (await import('../directives/swipe/swipe.module')).ExampleTuiSwipeModule,
        data: {
            title: 'Swipe',
        },
    },
    {
        path: DemoRoute.Let,
        loadChildren: async () =>
            (await import('../directives/let/let.module')).ExampleTuiLetModule,
        data: {
            title: 'Let',
        },
    },
    {
        path: DemoRoute.Zoom,
        loadChildren: async () =>
            (await import('../directives/zoom/zoom.module')).ExampleTuiZoomModule,
        data: {
            title: 'Zoom',
        },
    },
    {
        path: DemoRoute.Overscroll,
        loadChildren: async () =>
            (await import('../directives/overscroll/overscroll.module'))
                .ExampleTuiOverscrollModule,
        data: {
            title: 'Overscroll',
        },
    },
    {
        path: DemoRoute.Present,
        loadChildren: async () =>
            (await import('../directives/present/present.module'))
                .ExampleTuiPresentDirective,
        data: {
            title: 'Present',
        },
    },
    {
        path: DemoRoute.HoveredChange,
        loadChildren: async () =>
            (await import('../directives/hovered-change/hovered-change.module'))
                .ExampleTuiHoveredChangeModule,
        data: {
            title: 'HoveredChange',
        },
    },
    {
        path: DemoRoute.ReorderColumns,
        loadChildren: async () =>
            (await import('../tables/reorder/reorder.module')).ExampleTuiReorderModule,
        data: {
            title: 'ReorderColumns',
        },
    },
    {
        path: DemoRoute.Table,
        loadChildren: async () =>
            (await import('../tables/table/table.module')).ExampleTuiTableModule,
        data: {
            title: 'Table',
        },
    },
    {
        path: DemoRoute.TableFilters,
        loadChildren: async () =>
            (await import('../tables/table-filters/table-filters.module'))
                .ExampleTuiTableFiltersModule,
        data: {
            title: 'TableFilters',
        },
    },
    {
        path: DemoRoute.TablePagination,
        loadChildren: async () =>
            (await import('../tables/table-pagination/table-pagination.module'))
                .ExampleTuiTablePaginationModule,
        data: {
            title: 'TablePagination',
        },
    },
    {
        path: DemoRoute.Ripple,
        loadChildren: async () =>
            (await import('../directives/ripple/ripple.module')).ExampleTuiRippleModule,
        data: {
            title: 'Ripple',
        },
    },
    {
        path: DemoRoute.Sidebar,
        loadChildren: async () =>
            (await import('../directives/sidebar/sidebar.module'))
                .ExampleTuiSidebarModule,
        data: {
            title: 'Sidebar',
        },
    },
    {
        path: DemoRoute.Touchable,
        loadChildren: async () =>
            (await import('../directives/touchable/touchable.module'))
                .ExampleTuiTouchableModule,
        data: {
            title: 'Touchable',
        },
    },
    {
        path: DemoRoute.Validator,
        loadChildren: async () =>
            (await import('../directives/validator/validator.module'))
                .ExampleTuiValidatorModule,
        data: {
            title: 'Validator',
        },
    },
    {
        path: DemoRoute.ValueChanges,
        loadChildren: async () =>
            (await import('../directives/value-changes/value-changes.module'))
                .ExampleTuiValueChangesModule,
        data: {
            title: 'ValueChanges',
        },
    },
    {
        path: DemoRoute.Media,
        loadChildren: async () =>
            (await import('../directives/media/media.module')).ExampleTuiMediaModule,
        data: {
            title: 'Media',
        },
    },
    route({
        path: DemoRoute.Theme,
        loadComponent: async () => import('../directives/theme'),
        title: 'Theme',
    }),
    {
        path: DemoRoute.AutoFocus,
        loadChildren: async () =>
            (await import('../directives/auto-focus/auto-focus.module'))
                .ExampleTuiAutoFocusModule,
        data: {
            title: 'AutoFocus',
        },
    },
    // PIPES
    {
        path: DemoRoute.Currency,
        loadChildren: async () =>
            (await import('../pipes/currency/currency.module')).ExampleTuiCurrencyModule,
        data: {
            title: 'Currency',
        },
    },
    {
        path: DemoRoute.FilterPipe,
        loadChildren: async () =>
            (await import('../pipes/filter/filter.module')).ExampleTuiFilterModule,
        data: {
            title: 'Filter',
        },
    },
    {
        path: DemoRoute.FilterByInput,
        loadChildren: async () =>
            (await import('../pipes/filter-by-input/filter-by-input.module'))
                .ExampleTuiFilterByInputModule,
        data: {
            title: 'FilterByInput',
        },
    },
    {
        path: DemoRoute.Flag,
        loadChildren: async () =>
            (await import('../pipes/flag/flag.module')).ExampleTuiFlagModule,
        data: {
            title: 'Flag',
        },
    },
    {
        path: DemoRoute.FormatDate,
        loadChildren: async () =>
            (await import('../pipes/format-date/format-date.module'))
                .ExampleTuiFormatDateModule,
        data: {
            title: 'FormatDate',
        },
    },
    {
        path: DemoRoute.FormatNumber,
        loadChildren: async () =>
            (await import('../pipes/format-number/format-number.module'))
                .ExampleTuiFormatNumberModule,
        data: {
            title: 'FormatNumber',
        },
    },
    {
        path: DemoRoute.FormatPhone,
        loadChildren: async () =>
            (await import('../pipes/format-phone/format-phone.module'))
                .ExampleTuiFormatPhoneModule,
        data: {
            title: 'FormatPhone',
        },
    },
    {
        path: DemoRoute.Present,
        loadChildren: async () =>
            (await import('../pipes/is-present/is-present.module'))
                .ExampleTuiIsPresentModule,
        data: {
            title: 'IsPresent',
        },
    },
    {
        path: DemoRoute.Mapper,
        loadChildren: async () =>
            (await import('../pipes/mapper/mapper.module')).ExampleTuiMapperModule,
        data: {
            title: 'Mapper',
        },
    },
    {
        path: DemoRoute.Stringify,
        loadChildren: async () =>
            (await import('../pipes/stringify/stringify.module'))
                .ExampleTuiStringifyModule,
        data: {
            title: 'Stringify',
        },
    },
    {
        path: DemoRoute.StringifyContent,
        loadChildren: async () =>
            (await import('../pipes/stringify-content/stringify-content.module'))
                .ExampleTuiStringifyContentModule,
        data: {
            title: 'StringifyContent',
        },
    },
    // SERVICES
    route({
        path: DemoRoute.Alert,
        title: 'Alert',
        loadComponent: async () => import('../components/alert/alert.component'),
    }),
    {
        path: DemoRoute.BreakpointService,
        loadChildren: async () =>
            (await import('../services/breakpoint/breakpoint.module'))
                .ExampleTuiBreakpointModule,
        data: {
            title: 'BreakpointService',
        },
    },
    {
        path: DemoRoute.ScrollService,
        loadChildren: async () =>
            (await import('../services/scroll/scroll.module')).ExampleTuiScrollModule,
        data: {
            title: 'ScrollService',
        },
    },
    {
        path: DemoRoute.TableBarService,
        loadChildren: async () =>
            (await import('../services/table-bar/table-bar.module'))
                .ExampleTuiTableBarModule,
        data: {
            title: 'TableBarService',
        },
    },
    {
        path: DemoRoute.TextfieldController,
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
        path: DemoRoute.NumberFormat,
        title: 'NumberFormat',
        loadComponent: async () => import('../directives/number-format'),
    }),
    route({
        path: DemoRoute.DateFormat,
        title: 'DateFormat',
        loadComponent: async () => import('../directives/date-format'),
    }),

    // UTILS
    {
        path: DemoRoute.Math,
        loadChildren: async () =>
            (await import('../utils/math/math.module')).ExampleMathModule,
        data: {
            title: 'Math',
        },
    },
    {
        path: DemoRoute.Format,
        loadChildren: async () =>
            (await import('../utils/format/format.module')).ExampleFormatModule,
        data: {
            title: 'Format',
        },
    },
    {
        path: DemoRoute.DOM,
        loadChildren: async () =>
            (await import('../utils/dom/dom.module')).ExampleDomModule,
        data: {
            title: 'DOM',
        },
    },
    {
        path: DemoRoute.Browser,
        loadChildren: async () =>
            (await import('../utils/browser/browser.module')).ExampleBrowserModule,
        data: {
            title: 'Browser',
        },
    },
    {
        path: DemoRoute.Miscellaneous,
        loadChildren: async () =>
            (await import('../utils/miscellaneous/miscellaneous.module'))
                .ExampleMiscellaneousModule,
        data: {
            title: 'Miscellaneous',
        },
    },
    {
        path: DemoRoute.Tokens,
        loadChildren: async () =>
            (await import('../utils/tokens/tokens.module')).ExampleTokensModule,
        data: {
            title: 'Tokens',
        },
    },
    {
        path: DemoRoute.Pure,
        loadChildren: async () =>
            (await import('../utils/pure/pure.module')).ExampleTuiPureModule,
        data: {
            title: 'Pure',
        },
    },

    // ANIMATIONS
    {
        path: DemoRoute.Animations,
        loadChildren: async () =>
            (await import('../animations/animations.module')).ExampleAnimationsModule,
        data: {
            title: 'Animations',
        },
    },

    {
        path: DemoRoute.StackblitzStarter,
        loadChildren: async () =>
            (await import('./stackblitz/starter/stackblitz-starter.module'))
                .StackblitzStarterModule,
        data: {
            title: 'Stackblitz Starter',
        },
    },
    {
        path: DemoRoute.Cypress,
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
