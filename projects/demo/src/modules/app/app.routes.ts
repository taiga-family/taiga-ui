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
    route({
        path: DemoRoute.Amount,
        loadChildren: async () =>
            (await import('../pipes/amount/amount.module')).ExampleTuiAmountModule,
        title: 'Amount',
    }),
    route({
        path: DemoRoute.Appearance,
        loadChildren: async () =>
            (await import('../directives/appearance/appearance.module'))
                .ExampleTuiAppearanceModule,
        title: 'Appearance',
    }),
    route({
        path: DemoRoute.Chip,
        loadComponent: async () => import('../components/chip'),
        title: 'Chip',
    }),
    route({
        path: DemoRoute.Title,
        title: 'Title',
        loadComponent: async () => import('../directives/title'),
    }),
    route({
        path: DemoRoute.TooltipExp,
        loadChildren: async () =>
            (await import('../experimental/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        title: 'Tooltip ',
    }),
    route({
        path: DemoRoute.CardMedium,
        loadComponent: async () => import('../components/card-medium'),
        title: 'CardMedium',
    }),
    route({
        path: DemoRoute.CardLarge,
        loadComponent: async () => import('../components/card-large'),
        title: 'CardLarge',
    }),
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
    route({
        path: DemoRoute.Cell,
        loadComponent: async () => import('../components/cell'),
        title: 'Cell',
    }),
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
    route({
        path: DemoRoute.Icon,
        loadChildren: async () =>
            (await import('../components/icon/icon.module')).ExampleTuiIconModule,
        title: 'Icon',
    }),
    route({
        path: DemoRoute.LabelExp,
        title: 'Label ',
        loadComponent: async () => import('../experimental/label'),
    }),
    route({
        path: DemoRoute.Surface,
        title: 'Surface ',
        loadComponent: async () => import('../components/surface'),
    }),
    route({
        path: DemoRoute.Segmented,
        title: 'Segmented',
        loadComponent: async () => import('../components/segmented'),
    }),
    route({
        path: DemoRoute.SwipeActions,
        loadChildren: async () =>
            (await import('../components/swipe-action/swipe-actions.module'))
                .ExampleTuiSwipeActionsModule,
        title: 'SwipeActions',
    }),
    route({
        path: DemoRoute.Textfield,
        loadChildren: async () =>
            (await import('../experimental/textfield/textfield.module'))
                .ExampleTuiTextfieldModule,
        title: 'Textfield',
    }),
    route({
        path: DemoRoute.Navigation,
        loadChildren: async () =>
            (await import('../experimental/navigation/navigation.module'))
                .ExampleTuiNavigationModule,
        title: 'Navigation',
    }),
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
    route({
        path: DemoRoute.Calendar,
        title: 'Calendar',
        loadComponent: async () => import('../components/calendar'),
    }),
    route({
        path: DemoRoute.Carousel,
        title: 'Carousel',
        loadComponent: async () => import('../components/carousel'),
    }),
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
    route({
        path: DemoRoute.ComboBox,
        title: 'ComboBox',
        loadComponent: async () => import('../components/combo-box'),
    }),
    route({
        path: DemoRoute.DataList,
        loadChildren: async () =>
            (await import('../components/data-list/data-list.module'))
                .ExampleTuiDataListModule,
        title: 'DataList',
    }),
    route({
        path: DemoRoute.DataListWrapper,
        loadChildren: async () =>
            (await import('../components/data-list-wrapper/data-list-wrapper.module'))
                .ExampleTuiDataListWrapperModule,
        title: 'DataListWrapper',
    }),
    route({
        path: DemoRoute.Dialog,
        loadChildren: async () =>
            (await import('../components/dialog/dialog.module')).ExampleTuiDialogModule,
        title: 'Dialog',
    }),
    route({
        path: DemoRoute.Error,
        loadChildren: async () =>
            (await import('../components/error/error.module')).ExampleTuiErrorModule,
        title: 'Error',
    }),
    route({
        path: DemoRoute.Expand,
        loadChildren: async () =>
            (await import('../components/expand/expand.module')).ExampleTuiExpandModule,
        title: 'Expand',
    }),
    route({
        path: DemoRoute.ElasticContainer,
        loadChildren: async () =>
            (await import('../components/elastic-container/elastic-container.module'))
                .ExampleTuiElasticContainerModule,
        title: 'ElasticContainer',
    }),
    route({
        path: DemoRoute.FieldError,
        loadChildren: async () =>
            (await import('../pipes/field-error/field-error.module'))
                .ExampleTuiFieldErrorModule,
        title: 'FieldError',
    }),
    route({
        path: DemoRoute.InputFiles,
        loadChildren: async () =>
            (await import('../components/input-files/input-files.module'))
                .ExampleTuiFilesModule,
        title: 'InputFiles',
    }),
    route({
        path: DemoRoute.Group,
        loadChildren: async () =>
            (await import('../components/group/group.module')).ExampleTuiGroupModule,
        title: 'Group',
    }),
    route({
        path: DemoRoute.HostedDropdown,
        loadChildren: async () =>
            (await import('../components/hosted-dropdown/hosted-dropdown.module'))
                .ExampleTuiHostedDropdownModule,
        title: 'HostedDropdown',
    }),
    route({
        path: DemoRoute.Dropdown,
        loadChildren: async () =>
            (await import('../directives/dropdown/dropdown.module'))
                .ExampleTuiDropdownModule,
        title: 'Dropdown',
    }),
    route({
        path: DemoRoute.DropdownOpen,
        loadChildren: async () =>
            (await import('../directives/dropdown-open/dropdown-open.module'))
                .ExampleTuiDropdownOpenModule,
        title: 'DropdownOpen',
    }),
    route({
        path: DemoRoute.DropdownContext,
        loadChildren: async () =>
            (await import('../directives/dropdown-context/dropdown-context.module'))
                .ExampleTuiDropdownContextModule,
        title: 'DropdownContext',
    }),
    route({
        path: DemoRoute.DropdownHover,
        loadChildren: async () =>
            (await import('../directives/dropdown-hover/dropdown-hover.module'))
                .ExampleTuiDropdownHoverModule,
        title: 'DropdownHover',
    }),
    route({
        path: DemoRoute.DropdownSelection,
        loadChildren: async () =>
            (await import('../directives/dropdown-selection/dropdown-selection.module'))
                .ExampleTuiDropdownSelectionModule,
        title: 'DropdownSelection',
    }),
    route({
        path: DemoRoute.Fade,
        loadChildren: async () =>
            (await import('../directives/fade/fade.module')).ExampleTuiFadeDirective,
        title: 'Fade',
    }),
    route({
        path: DemoRoute.Sensitive,
        loadChildren: async () =>
            (await import('../directives/sensitive/sensitive.module'))
                .ExampleTuiSensitiveModule,
        title: 'Sensitive',
    }),
    route({
        path: DemoRoute.Skeleton,
        loadChildren: async () =>
            (await import('../directives/skeleton/skeleton.module'))
                .ExampleTuiSkeletonModule,
        title: 'Skeleton',
    }),
    route({
        path: DemoRoute.InputInline,
        loadChildren: async () =>
            (await import('../components/input-inline/input-inline.module'))
                .ExampleTuiInputInlineModule,
        title: 'InputInline',
    }),
    route({
        path: DemoRoute.Input,
        loadChildren: async () =>
            (await import('../components/input/input.module')).ExampleTuiInputModule,
        title: 'Input',
    }),
    route({
        path: DemoRoute.InputDate,
        title: 'InputDate',
        loadComponent: async () => import('../components/input-date'),
    }),
    route({
        path: DemoRoute.InputDateMulti,
        loadChildren: async () =>
            (await import('../components/input-date-multi/input-date-multi.module'))
                .ExampleTuiInputDateMultiModule,
        title: 'InputDateMulti',
    }),
    route({
        path: DemoRoute.InputCard,
        loadChildren: async () =>
            (await import('../components/input-card/input-card.module'))
                .ExampleTuiInputCardModule,
        title: 'InputCard',
    }),
    route({
        path: DemoRoute.InputCardGrouped,
        loadChildren: async () =>
            (await import('../components/input-card-grouped/input-card-grouped.module'))
                .ExampleTuiInputCardGroupedModule,
        title: 'InputCardGrouped',
    }),
    route({
        path: DemoRoute.InputCopy,
        loadChildren: async () =>
            (await import('../components/input-copy/input-copy.module'))
                .ExampleTuiInputCopyModule,
        title: 'InputCopy',
    }),
    route({
        path: DemoRoute.InputDateTime,
        loadChildren: async () =>
            (await import('../components/input-date-time/input-date-time.module'))
                .ExampleTuiInputDateTimeModule,
        title: 'InputDateTime',
    }),
    route({
        path: DemoRoute.InputMonth,
        loadChildren: async () =>
            (await import('../components/input-month/input-month.module'))
                .ExampleInputMonthModule,
        title: 'InputMonth',
    }),
    route({
        path: DemoRoute.InputMonthRange,
        loadChildren: async () =>
            (await import('../components/input-month-range/input-month-range.module'))
                .ExampleTuiInputMonthRangeModule,
        title: 'InputMonthRange',
    }),
    route({
        path: DemoRoute.InputNumber,
        loadChildren: async () =>
            (await import('../components/input-number/input-number.module'))
                .ExampleTuiInputNumberModule,
        title: 'InputNumber',
    }),
    route({
        path: DemoRoute.InputPassword,
        loadChildren: async () =>
            (await import('../components/input-password/input-password.module'))
                .ExampleTuiInputPasswordModule,
        title: 'InputPassword',
    }),
    route({
        path: DemoRoute.InputPhone,
        loadChildren: async () =>
            (await import('../components/input-phone/input-phone.module'))
                .ExampleTuiInputPhoneModule,
        title: 'InputPhone',
    }),
    route({
        path: DemoRoute.InputRange,
        loadChildren: async () =>
            (await import('../components/input-range/input-range.module'))
                .ExampleTuiInputRangeModule,
        title: 'InputRange',
    }),
    route({
        path: DemoRoute.InputDateRange,
        loadChildren: async () =>
            (await import('../components/input-date-range/input-date-range.module'))
                .ExampleTuiInputDateRangeModule,
        title: 'InputDateRange',
    }),
    route({
        path: DemoRoute.InputSlider,
        loadChildren: async () =>
            (await import('../components/input-slider/input-slider.module'))
                .ExampleTuiInputSliderModule,
        title: 'InputSlider',
    }),
    route({
        path: DemoRoute.InputTag,
        loadChildren: async () =>
            (await import('../components/input-tag/input-tag.module'))
                .ExampleTuiInputTagModule,
        title: 'InputTag',
    }),
    route({
        path: DemoRoute.InputTime,
        loadChildren: async () =>
            (await import('../components/input-time/input-time.module'))
                .ExampleTuiInputTimeModule,
        title: 'InputTime',
    }),
    route({
        path: DemoRoute.InputPhoneInternational,
        loadChildren: async () =>
            (
                await import(
                    '../components/input-phone-international/input-phone-international.module'
                )
            ).ExampleTuiInputPhoneInternationalModule,
        title: 'InputPhoneInternational',
    }),
    route({
        path: DemoRoute.InputYear,
        loadChildren: async () =>
            (await import('../components/input-year/input-year.module'))
                .ExampleInputYearModule,
        title: 'InputYear',
    }),
    route({
        path: DemoRoute.Island,
        loadChildren: async () =>
            (await import('../components/island/island.module')).ExampleTuiIslandModule,
        title: 'Island',
    }),
    route({
        path: DemoRoute.ItemsWithMore,
        loadChildren: async () =>
            (await import('../components/items-with-more/items-with-more.module'))
                .ExampleTuiItemsWithMoreModule,
        title: 'ItemsWithMore',
    }),
    route({
        path: DemoRoute.Label,
        loadChildren: async () =>
            (await import('../components/label/label.module')).ExampleTuiLabelModule,
        title: 'Label',
    }),
    route({
        path: DemoRoute.LineClamp,
        loadChildren: async () =>
            (await import('../components/line-clamp/line-clamp.module'))
                .ExampleTuiLineClampModule,
        title: 'LineClamp',
    }),
    route({
        path: DemoRoute.Link,
        loadComponent: async () => import('../components/link'),
        title: 'Link',
    }),
    route({
        path: DemoRoute.Loader,
        loadChildren: async () =>
            (await import('../components/loader/loader.module')).ExampleTuiLoaderModule,
        title: 'Loader',
    }),
    route({
        path: DemoRoute.Notification,
        loadChildren: async () =>
            (await import('../components/notification/notification.module'))
                .ExampleTuiNotificationModule,
        title: 'Notification',
    }),
    route({
        path: DemoRoute.Push,
        loadChildren: async () =>
            (await import('../components/push/push.module')).ExampleTuiPushModule,
        title: 'Push',
    }),
    route({
        path: DemoRoute.MobileDialog,
        loadChildren: async () =>
            (await import('../components/mobile-dialog/mobile-dialog.module'))
                .ExampleTuiMobileDialogModule,
        title: 'MobileDialog',
    }),
    route({
        path: DemoRoute.MobileCalendar,
        loadChildren: async () =>
            (await import('../components/mobile-calendar/mobile-calendar.module'))
                .ExampleTuiMobileCalendarModule,
        title: 'MobileCalendar',
    }),
    route({
        path: DemoRoute.PullToRefresh,
        loadChildren: async () =>
            (await import('../components/pull-to-refresh/pull-to-refresh.module'))
                .ExampleTuiPullToRefreshModule,
        title: 'PullToRefresh',
    }),
    route({
        path: DemoRoute.CalendarMonth,
        title: 'CalendarMonth',
        loadComponent: async () => import('../components/calendar-month'),
    }),
    route({
        path: DemoRoute.MultiSelect,
        loadChildren: async () =>
            (await import('../components/multi-select/multi-select.module'))
                .ExampleTuiMultiSelectModule,
        title: 'MultiSelect',
    }),
    route({
        path: DemoRoute.Pagination,
        loadChildren: async () =>
            (await import('../components/pagination/pagination.module'))
                .ExampleTuiPaginationModule,
        title: 'Pagination',
    }),
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
    route({
        path: DemoRoute.Range,
        loadChildren: async () =>
            (await import('../components/range/range.module')).ExampleTuiRangeModule,
        title: 'Range',
    }),
    route({
        path: DemoRoute.CalendarRange,
        loadChildren: async () =>
            (await import('../components/calendar-range/calendar-range.module'))
                .ExampleTuiCalendarRangeModule,
        title: 'CalendarRange',
    }),
    route({
        path: DemoRoute.Select,
        loadChildren: async () =>
            (await import('../components/select/select.module')).ExampleTuiSelectModule,
        title: 'Select',
    }),
    route({
        path: DemoRoute.Scrollbar,
        loadChildren: async () =>
            (await import('../components/scrollbar/scrollbar.module'))
                .ExampleTuiScrollbarModule,
        title: 'Scrollbar',
    }),
    route({
        path: DemoRoute.Sheet,
        loadChildren: async () =>
            (await import('../components/sheet/sheet.module')).ExampleTuiSheetModule,
        title: 'Sheet',
    }),
    route({
        path: DemoRoute.SheetDialog,
        loadChildren: async () =>
            (await import('../components/sheet-dialog/sheet-dialog.module'))
                .ExampleTuiSheetDialogModule,
        title: 'SheetDialog',
    }),
    route({
        path: DemoRoute.Slider,
        loadChildren: async () =>
            (await import('../components/slider/slider.module')).ExampleTuiSliderModule,
        title: 'Slider',
    }),
    route({
        path: DemoRoute.Stepper,
        loadComponent: async () => import('../components/stepper/stepper.component'),
        title: 'Stepper',
    }),
    route({
        path: DemoRoute.Preview,
        loadChildren: async () =>
            (await import('../components/preview/preview.module'))
                .ExampleTuiPreviewModule,
        title: 'Preview',
    }),
    route({
        path: DemoRoute.AppBar,
        loadComponent: async () => import('../experimental/app-bar'),
        title: 'AppBar',
    }),
    route({
        path: DemoRoute.TabBar,
        loadChildren: async () =>
            (await import('../components/tab-bar/tab-bar.module')).ExampleTuiTabBarModule,
        title: 'TabBar',
    }),
    route({
        path: DemoRoute.Tabs,
        loadChildren: async () =>
            (await import('../components/tabs/tabs.module')).ExampleTuiTabsModule,
        title: 'Tabs',
    }),
    route({
        path: DemoRoute.Tag,
        loadChildren: async () =>
            (await import('../components/tag/tag.module')).ExampleTuiTagModule,
        title: 'Tag',
    }),
    route({
        path: DemoRoute.Textarea,
        loadChildren: async () =>
            (await import('../components/textarea/textarea.module'))
                .ExampleTuiTextareaModule,
        title: 'Textarea',
    }),
    route({
        path: DemoRoute.PrimitiveTextfield,
        loadChildren: async () =>
            (await import('../components/primitive-textfield/primitive-textfield.module'))
                .ExampleTuiPrimitiveTextfieldModule,
        title: 'PrimitiveTextfield',
    }),
    route({
        path: DemoRoute.PdfViewer,
        loadChildren: async () =>
            (await import('../components/pdf-viewer/pdf-viewer.module'))
                .ExampleTuiPdfViewerModule,
        title: 'PdfViewer',
    }),
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
    route({
        path: DemoRoute.ProgressBar,
        loadChildren: async () =>
            (await import('../components/progress-bar/progress-bar.module'))
                .ExampleTuiProgressBarModule,
        title: 'ProgressBar',
    }),
    route({
        path: DemoRoute.ProgressCircle,
        loadChildren: async () =>
            (await import('../components/progress-circle/progress-circle.module'))
                .ExampleTuiProgressCircleModule,
        title: 'ProgressCircle',
    }),
    route({
        path: DemoRoute.ProgressSegmented,
        title: 'ProgressSegmented',
        loadComponent: async () => import('../directives/progress-segmented'),
    }),
    route({
        path: DemoRoute.Confirm,
        loadComponent: async () => import('../components/confirm'),
        title: 'Confirm',
    }),
    route({
        path: DemoRoute.Tiles,
        loadChildren: async () =>
            (await import('../components/tiles/tiles.module')).ExampleTuiTilesModule,
        title: 'Tiles',
    }),
    route({
        path: DemoRoute.Switch,
        title: 'Switch',
        loadComponent: async () => import('../components/switch'),
    }),
    route({
        path: DemoRoute.Tooltip,
        loadChildren: async () =>
            (await import('../components/tooltip/tooltip.module'))
                .ExampleTuiTooltipModule,
        title: 'Tooltip',
    }),
    route({
        path: DemoRoute.Tree,
        loadChildren: async () =>
            (await import('../components/tree/tree.module')).ExampleTuiTreeModule,
        title: 'Tree',
    }),
    // ICONS
    route({
        path: DemoRoute.IconsOverview,
        loadChildren: async () => (await import('../icons/icons.module')).IconsModule,
        title: 'Overview',
    }),
    route({
        path: DemoRoute.IconsMapping,
        loadChildren: async () =>
            (await import('../icons/icons-mapping/icons-mapping.module'))
                .IconsMappingModule,
        title: 'Icons mapping',
    }),
    route({
        path: DemoRoute.IconsBundled,
        loadChildren: async () =>
            (await import('../icons/icons-bundled/icons-bundled.module'))
                .IconsBundledModule,
        title: 'Icons bundled',
    }),
    route({
        path: DemoRoute.IconsCustomization,
        loadChildren: async () =>
            (await import('../icons/customization/icons-customization.module'))
                .IconsCustomizationModule,
        title: 'Icons customization',
    }),
    // FILTER
    route({
        path: DemoRoute.Filter,
        loadChildren: async () =>
            (await import('../components/filter/filter.module')).ExampleTuiFilterModule,
        title: 'Filter',
    }),
    // CHARTS
    route({
        path: DemoRoute.ArcChart,
        loadChildren: async () =>
            (await import('../charts/arc-chart/arc-chart.module'))
                .ExampleTuiArcChartModule,
        title: 'ArcChart',
    }),
    route({
        path: DemoRoute.Axes,
        loadChildren: async () =>
            (await import('../charts/axes/axes.module')).ExampleTuiAxesModule,
        title: 'Axes',
    }),
    route({
        path: DemoRoute.Bar,
        loadChildren: async () =>
            (await import('../charts/bar/bar.module')).ExampleTuiBarModule,
        title: 'Bar',
    }),
    route({
        path: DemoRoute.BarChart,
        loadChildren: async () =>
            (await import('../charts/bar-chart/bar-chart.module'))
                .ExampleTuiBarChartModule,
        title: 'BarChart',
    }),
    route({
        path: DemoRoute.BarSet,
        loadChildren: async () =>
            (await import('../charts/bar-set/bar-set.module')).ExampleTuiBarSetModule,
        title: 'BarSet',
    }),
    route({
        path: DemoRoute.LegendItem,
        loadChildren: async () =>
            (await import('../charts/legend-item/legend-item.module'))
                .ExampleTuiLegendItemModule,
        title: 'LegendItem',
    }),
    route({
        path: DemoRoute.LineChart,
        loadChildren: async () =>
            (await import('../charts/line-chart/line-chart.module'))
                .ExampleTuiLineChartModule,
        title: 'LineChart',
    }),
    route({
        path: DemoRoute.LineDaysChart,
        loadChildren: async () =>
            (await import('../charts/line-days-chart/line-days-chart.module'))
                .ExampleTuiLineDaysChartModule,
        title: 'LineDaysChart',
    }),
    route({
        path: DemoRoute.PieChart,
        loadChildren: async () =>
            (await import('../charts/pie-chart/pie-chart.module'))
                .ExampleTuiPieChartModule,
        title: 'PieChart',
    }),
    route({
        path: DemoRoute.RingChart,
        loadChildren: async () =>
            (await import('../charts/ring-chart/ring-chart.module'))
                .ExampleTuiRingChartModule,
        title: 'RingChart',
    }),
    // STYLES
    route({
        path: DemoRoute.Colors,
        loadChildren: async () =>
            (await import('../markup/colors/colors.module')).ColorsModule,
        title: 'Colors',
    }),
    route({
        path: DemoRoute.Form,
        loadChildren: async () => (await import('../markup/form/form.module')).FormModule,
        title: 'Form',
    }),
    route({
        path: DemoRoute.Lists,
        loadChildren: async () =>
            (await import('../markup/lists/lists.module')).ListsModule,
        title: 'Lists',
    }),
    route({
        path: DemoRoute.Shadows,
        loadChildren: async () =>
            (await import('../markup/shadows/shadows.module')).ShadowsModule,
        title: 'Shadows',
    }),
    route({
        path: DemoRoute.Spaces,
        loadChildren: async () =>
            (await import('../markup/spaces/spaces.module')).SpacesModule,
        title: 'Spaces',
    }),
    route({
        path: DemoRoute.Tables,
        loadChildren: async () =>
            (await import('../markup/tables/tables.module')).TablesModule,
        title: 'Tables',
    }),
    route({
        path: DemoRoute.Typography,
        loadChildren: async () =>
            (await import('../markup/typography/typography.module')).TypographyModule,
        title: 'Typography',
    }),
    route({
        path: DemoRoute.Breakpoints,
        loadChildren: async () =>
            (await import('../markup/breakpoints/breakpoints.module')).BreakpointsModule,
        title: 'Breakpoints',
    }),
    // DIRECTIVES
    route({
        path: DemoRoute.ActiveZone,
        loadChildren: async () =>
            (await import('../directives/active-zone/active-zone.module'))
                .ExampleTuiActiveZoneModule,
        title: 'ActiveZone',
    }),
    route({
        path: DemoRoute.CopyProcessor,
        title: 'CopyProcessor',
        loadComponent: async () => import('../directives/copy-processor'),
    }),
    route({
        path: DemoRoute.ElasticSticky,
        loadChildren: async () =>
            (await import('../directives/elastic-sticky/elastic-sticky.module'))
                .ExampleTuiElasticStickyModule,
        title: 'ElasticSticky',
    }),
    route({
        path: DemoRoute.Element,
        loadChildren: async () =>
            (await import('../directives/element/element.module'))
                .ExampleTuiElementModule,
        title: 'Element',
    }),
    route({
        path: DemoRoute.For,
        loadChildren: async () =>
            (await import('../directives/for/for.module')).ExampleTuiForModule,
        title: 'For',
    }),
    route({
        path: DemoRoute.Highlight,
        loadChildren: async () =>
            (await import('../directives/highlight/highlight.module'))
                .ExampleTuiHighlightModule,
        title: 'Highlight',
    }),
    route({
        path: DemoRoute.Hint,
        loadChildren: async () =>
            (await import('../directives/hint/hint.module')).ExampleTuiHintModule,
        title: 'Hint',
    }),
    route({
        path: DemoRoute.HintDescribe,
        loadChildren: async () =>
            (await import('../directives/hint-describe/hint-describe.module'))
                .ExampleTuiHintDescribeModule,
        title: 'HintDescribe',
    }),
    route({
        path: DemoRoute.HintManual,
        loadChildren: async () =>
            (await import('../directives/hint-manual/hint-manual.module'))
                .ExampleTuiHintManualModule,
        title: 'HintManual',
    }),
    route({
        path: DemoRoute.HintPointer,
        loadChildren: async () =>
            (await import('../directives/hint-pointer/hint-pointer.module'))
                .ExampleTuiHintPointerModule,
        title: 'HintPointer',
    }),
    route({
        path: DemoRoute.LazyLoading,
        loadChildren: async () =>
            (await import('../directives/lazy-loading/lazy-loading.module'))
                .ExampleTuiLazyLoadingModule,
        title: 'LazyLoading',
    }),
    route({
        path: DemoRoute.Pan,
        loadChildren: async () =>
            (await import('../directives/pan/pan.module')).ExampleTuiPanModule,
        title: 'Pan',
    }),
    route({
        path: DemoRoute.Resizer,
        loadChildren: async () =>
            (await import('../directives/resizer/resizer.module'))
                .ExampleTuiResizerModule,
        title: 'Resizer',
    }),
    route({
        path: DemoRoute.Swipe,
        loadChildren: async () =>
            (await import('../directives/swipe/swipe.module')).ExampleTuiSwipeModule,
        title: 'Swipe',
    }),
    route({
        path: DemoRoute.Let,
        loadChildren: async () =>
            (await import('../directives/let/let.module')).ExampleTuiLetModule,
        title: 'Let',
    }),
    route({
        path: DemoRoute.Zoom,
        loadChildren: async () =>
            (await import('../directives/zoom/zoom.module')).ExampleTuiZoomModule,
        title: 'Zoom',
    }),
    route({
        path: DemoRoute.Overscroll,
        loadChildren: async () =>
            (await import('../directives/overscroll/overscroll.module'))
                .ExampleTuiOverscrollModule,
        title: 'Overscroll',
    }),
    route({
        path: DemoRoute.Present,
        loadChildren: async () =>
            (await import('../directives/present/present.module'))
                .ExampleTuiPresentDirective,
        title: 'Present',
    }),
    route({
        path: DemoRoute.HoveredChange,
        loadChildren: async () =>
            (await import('../directives/hovered-change/hovered-change.module'))
                .ExampleTuiHoveredChangeModule,
        title: 'HoveredChange',
    }),
    route({
        path: DemoRoute.ReorderColumns,
        loadChildren: async () =>
            (await import('../tables/reorder/reorder.module')).ExampleTuiReorderModule,
        title: 'ReorderColumns',
    }),
    route({
        path: DemoRoute.Table,
        loadChildren: async () =>
            (await import('../tables/table/table.module')).ExampleTuiTableModule,
        title: 'Table',
    }),
    route({
        path: DemoRoute.TableFilters,
        loadChildren: async () =>
            (await import('../tables/table-filters/table-filters.module'))
                .ExampleTuiTableFiltersModule,
        title: 'TableFilters',
    }),
    route({
        path: DemoRoute.TablePagination,
        loadComponent: async () => import('../components/table-pagination'),
        title: 'TablePagination',
    }),
    route({
        path: DemoRoute.Ripple,
        loadChildren: async () =>
            (await import('../directives/ripple/ripple.module')).ExampleTuiRippleModule,
        title: 'Ripple',
    }),
    route({
        path: DemoRoute.Sidebar,
        loadChildren: async () =>
            (await import('../directives/sidebar/sidebar.module'))
                .ExampleTuiSidebarModule,
        title: 'Sidebar',
    }),
    route({
        path: DemoRoute.Touchable,
        loadChildren: async () =>
            (await import('../directives/touchable/touchable.module'))
                .ExampleTuiTouchableModule,
        title: 'Touchable',
    }),
    route({
        path: DemoRoute.Validator,
        loadChildren: async () =>
            (await import('../directives/validator/validator.module'))
                .ExampleTuiValidatorModule,
        title: 'Validator',
    }),
    route({
        path: DemoRoute.ValueChanges,
        loadChildren: async () =>
            (await import('../directives/value-changes/value-changes.module'))
                .ExampleTuiValueChangesModule,
        title: 'ValueChanges',
    }),
    route({
        path: DemoRoute.Media,
        loadChildren: async () =>
            (await import('../directives/media/media.module')).ExampleTuiMediaModule,
        title: 'Media',
    }),
    route({
        path: DemoRoute.Theme,
        loadComponent: async () => import('../directives/theme'),
        title: 'Theme',
    }),
    route({
        path: DemoRoute.AutoFocus,
        loadChildren: async () =>
            (await import('../directives/auto-focus/auto-focus.module'))
                .ExampleTuiAutoFocusModule,
        title: 'AutoFocus',
    }),
    // PIPES
    route({
        path: DemoRoute.Currency,
        loadChildren: async () =>
            (await import('../pipes/currency/currency.module')).ExampleTuiCurrencyModule,
        title: 'Currency',
    }),
    route({
        path: DemoRoute.FilterPipe,
        loadComponent: async () => import('../pipes/filter'),
        title: 'Filter',
    }),
    route({
        path: DemoRoute.FilterByInput,
        loadChildren: async () =>
            (await import('../pipes/filter-by-input/filter-by-input.module'))
                .ExampleTuiFilterByInputModule,
        title: 'FilterByInput',
    }),
    route({
        path: DemoRoute.Flag,
        title: 'Flag',
        loadComponent: async () => import('../pipes/flag'),
    }),
    route({
        path: DemoRoute.FormatDate,
        loadChildren: async () =>
            (await import('../pipes/format-date/format-date.module'))
                .ExampleTuiFormatDateModule,
        title: 'FormatDate',
    }),
    route({
        path: DemoRoute.FormatNumber,
        loadChildren: async () =>
            (await import('../pipes/format-number/format-number.module'))
                .ExampleTuiFormatNumberModule,
        title: 'FormatNumber',
    }),
    route({
        path: DemoRoute.FormatPhone,
        loadChildren: async () =>
            (await import('../pipes/format-phone/format-phone.module'))
                .ExampleTuiFormatPhoneModule,
        title: 'FormatPhone',
    }),
    route({
        path: DemoRoute.IsPresent,
        loadComponent: async () => import('../pipes/is-present'),
        title: 'IsPresent',
    }),
    route({
        path: DemoRoute.Mapper,
        loadComponent: async () => import('../pipes/mapper'),
        title: 'Mapper',
    }),
    route({
        path: DemoRoute.Stringify,
        loadChildren: async () =>
            (await import('../pipes/stringify/stringify.module'))
                .ExampleTuiStringifyModule,
        title: 'Stringify',
    }),
    route({
        path: DemoRoute.StringifyContent,
        loadChildren: async () =>
            (await import('../pipes/stringify-content/stringify-content.module'))
                .ExampleTuiStringifyContentModule,
        title: 'StringifyContent',
    }),
    // SERVICES
    route({
        path: DemoRoute.Alert,
        title: 'Alert',
        loadComponent: async () => import('../components/alert/alert.component'),
    }),
    route({
        path: DemoRoute.BreakpointService,
        loadChildren: async () =>
            (await import('../services/breakpoint/breakpoint.module'))
                .ExampleTuiBreakpointModule,
        title: 'BreakpointService',
    }),
    route({
        path: DemoRoute.KeyboardService,
        loadComponent: async () => import('../services/keyboard'),
        title: 'Keyboard',
    }),
    route({
        path: DemoRoute.ScrollService,
        loadChildren: async () =>
            (await import('../services/scroll/scroll.module')).ExampleTuiScrollModule,
        title: 'ScrollService',
    }),
    route({
        path: DemoRoute.TableBarService,
        loadChildren: async () =>
            (await import('../services/table-bar/table-bar.module'))
                .ExampleTuiTableBarModule,
        title: 'TableBarService',
    }),
    route({
        path: DemoRoute.TextfieldController,
        loadChildren: async () =>
            (
                await import(
                    '../directives/textfield-controller/textfield-controller.module'
                )
            ).ExampleTuiTextfieldControllerModule,
        title: 'TextfieldController',
    }),
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
    route({
        path: DemoRoute.Math,
        loadChildren: async () =>
            (await import('../utils/math/math.module')).ExampleMathModule,
        title: 'Math',
    }),
    route({
        path: DemoRoute.Format,
        loadComponent: async () => import('../utils/format'),
        title: 'Format',
    }),
    route({
        path: DemoRoute.DOM,
        loadChildren: async () =>
            (await import('../utils/dom/dom.module')).ExampleDomModule,
        title: 'DOM',
    }),
    route({
        path: DemoRoute.Browser,
        loadChildren: async () =>
            (await import('../utils/browser/browser.module')).ExampleBrowserModule,
        title: 'Browser',
    }),
    route({
        path: DemoRoute.Miscellaneous,
        loadChildren: async () =>
            (await import('../utils/miscellaneous/miscellaneous.module'))
                .ExampleMiscellaneousModule,
        title: 'Miscellaneous',
    }),
    route({
        path: DemoRoute.Tokens,
        loadChildren: async () =>
            (await import('../utils/tokens/tokens.module')).ExampleTokensModule,
        title: 'Tokens',
    }),
    route({
        path: DemoRoute.Pure,
        loadChildren: async () =>
            (await import('../utils/pure/pure.module')).ExampleTuiPureModule,
        title: 'Pure',
    }),
    // ANIMATIONS
    route({
        path: DemoRoute.Animations,
        loadChildren: async () =>
            (await import('../animations/animations.module')).ExampleAnimationsModule,
        title: 'Animations',
    }),
    route({
        path: DemoRoute.StackblitzStarter,
        loadChildren: async () =>
            (await import('./stackblitz/starter/stackblitz-starter.module'))
                .StackblitzStarterModule,
        title: 'Stackblitz Starter',
    }),
    {
        path: '**',
        redirectTo: '',
    },
];
