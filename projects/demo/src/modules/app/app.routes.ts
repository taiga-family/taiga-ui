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
        path: DemoRoute.SSR,
        title: 'Server Side Rendering (SSR)',
        loadComponent: async () => import('../info/ssr'),
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
        path: DemoRoute.Appearances,
        title: 'Appearances',
        loadComponent: async () => import('../customization/appearances'),
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
        loadComponent: async () => import('../pipes/amount'),
        title: 'Amount',
    }),
    route({
        path: DemoRoute.Emails,
        loadComponent: async () => import('../pipes/emails'),
        title: 'Emails',
    }),
    route({
        path: DemoRoute.Appearance,
        loadComponent: async () => import('../directives/appearance'),
        title: 'Appearance',
    }),
    route({
        path: DemoRoute.FluidTypography,
        loadComponent: async () => import('../directives/fluid-typography'),
        title: 'FluidTypography',
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
        loadComponent: async () => import('../components/badge-notification'),
        title: 'BadgeNotification',
    }),
    route({
        path: DemoRoute.BlockDetails,
        loadComponent: async () => import('../components/block-details'),
        title: 'BlockDetails',
    }),
    route({
        path: DemoRoute.Cell,
        loadComponent: async () => import('../components/cell'),
        title: 'Cell',
    }),
    route({
        path: DemoRoute.Comment,
        loadComponent: async () => import('../directives/comment'),
        title: 'Comment',
    }),
    route({
        path: DemoRoute.Header,
        title: 'Header',
        loadComponent: async () => import('../components/header'),
    }),
    route({
        path: DemoRoute.Icon,
        loadComponent: async () => import('../components/icon'),
        title: 'Icon',
    }),
    route({
        path: DemoRoute.IconsLucide,
        loadComponent: async () => import('../icons/icons'),
        title: 'Icons',
    }),
    route({
        path: DemoRoute.IconsMaterial,
        loadComponent: async () => import('../icons/material'),
        title: 'Icons — Material',
    }),
    route({
        path: DemoRoute.IconsFontawesome,
        loadComponent: async () => import('../icons/font-awesome'),
        title: 'Icons — FontAwesome',
    }),
    route({
        path: DemoRoute.Label,
        title: 'Label',
        loadComponent: async () => import('../components/label'),
    }),
    route({
        path: DemoRoute.Surface,
        title: 'Surface',
        loadComponent: async () => import('../components/surface'),
    }),
    route({
        path: DemoRoute.Segmented,
        title: 'Segmented',
        loadComponent: async () => import('../components/segmented'),
    }),
    route({
        path: DemoRoute.SwipeActions,
        loadComponent: async () => import('../components/swipe-action'),
        title: 'SwipeActions',
    }),
    route({
        path: DemoRoute.Textfield,
        loadComponent: async () => import('../components/textfield'),
        title: 'Textfield',
    }),
    route({
        path: DemoRoute.Navigation,
        loadComponent: async () => import('../components/navigation'),
        title: 'Navigation',
    }),
    route({
        path: DemoRoute.Search,
        loadComponent: async () => import('../components/search'),
        title: 'Search',
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
        loadComponent: async () => import('../components/data-list'),
        title: 'DataList',
    }),
    route({
        path: DemoRoute.DataListWrapper,
        loadComponent: async () => import('../components/data-list-wrapper'),
        title: 'DataListWrapper',
    }),
    route({
        path: DemoRoute.Dialog,
        loadComponent: async () => import('../components/dialog'),
        title: 'Dialog',
    }),
    route({
        path: DemoRoute.Error,
        loadComponent: async () => import('../components/error'),
        title: 'Error',
    }),
    route({
        path: DemoRoute.Expand,
        loadComponent: async () => import('../components/expand'),
        title: 'Expand',
    }),
    route({
        path: DemoRoute.ElasticContainer,
        loadComponent: async () => import('../components/elastic-container'),
        title: 'ElasticContainer',
    }),
    route({
        path: DemoRoute.FieldError,
        loadComponent: async () => import('../pipes/field-error'),
        title: 'FieldError',
    }),
    route({
        path: DemoRoute.InputFiles,
        loadComponent: async () => import('../components/input-files'),
        title: 'InputFiles',
    }),
    route({
        path: DemoRoute.InputColor,
        loadComponent: async () => import('../components/input-color'),
        title: 'InputColor',
    }),
    route({
        path: DemoRoute.Group,
        loadComponent: async () => import('../components/group'),
        title: 'Group',
    }),
    route({
        path: DemoRoute.Dropdown,
        loadComponent: async () => import('../directives/dropdown'),
        title: 'Dropdown',
    }),
    route({
        path: DemoRoute.DropdownOpen,
        loadComponent: async () => import('../directives/dropdown-open'),
        title: 'DropdownOpen',
    }),
    route({
        path: DemoRoute.DropdownContext,
        loadComponent: async () => import('../directives/dropdown-context'),
        title: 'DropdownContext',
    }),
    route({
        path: DemoRoute.DropdownHover,
        loadComponent: async () => import('../directives/dropdown-hover'),
        title: 'DropdownHover',
    }),
    route({
        path: DemoRoute.DropdownSelection,
        loadComponent: async () => import('../directives/dropdown-selection'),
        title: 'DropdownSelection',
    }),
    route({
        path: DemoRoute.Fade,
        loadComponent: async () => import('../directives/fade'),
        title: 'Fade',
    }),
    route({
        path: DemoRoute.Sensitive,
        loadComponent: async () => import('../directives/sensitive'),
        title: 'Sensitive',
    }),
    route({
        path: DemoRoute.Skeleton,
        loadComponent: async () => import('../directives/skeleton'),
        title: 'Skeleton',
    }),
    route({
        path: DemoRoute.InputInline,
        loadComponent: async () => import('../components/input-inline'),
        title: 'InputInline',
    }),
    route({
        path: DemoRoute.Input,
        loadComponent: async () => import('../components/input'),
        title: 'Input',
    }),
    route({
        path: DemoRoute.InputDate,
        title: 'InputDate',
        loadComponent: async () => import('../components/input-date'),
    }),
    route({
        path: DemoRoute.InputDateMulti,
        loadComponent: async () => import('../components/input-date-multi'),
        title: 'InputDateMulti',
    }),
    route({
        path: DemoRoute.InputCard,
        loadComponent: async () => import('../components/input-card'),
        title: 'InputCard',
    }),
    route({
        path: DemoRoute.InputCardGroup,
        loadComponent: async () => import('../components/input-card-group'),
        title: 'InputCardGroup',
    }),
    route({
        path: DemoRoute.InputDateTime,
        loadComponent: async () => import('../components/input-date-time'),
        title: 'InputDateTime',
    }),
    route({
        path: DemoRoute.InputMonth,
        loadComponent: async () => import('../components/input-month'),
        title: 'InputMonth',
    }),
    route({
        path: DemoRoute.InputMonthRange,
        loadComponent: async () => import('../components/input-month-range'),
        title: 'InputMonthRange',
    }),
    route({
        path: DemoRoute.InputNumber,
        loadComponent: async () => import('../components/input-number'),
        title: 'InputNumber',
    }),
    route({
        path: DemoRoute.InputPhone,
        loadComponent: async () => import('../components/input-phone'),
        title: 'InputPhone',
    }),
    route({
        path: DemoRoute.InputRange,
        loadComponent: async () => import('../components/input-range'),
        title: 'InputRange',
    }),
    route({
        path: DemoRoute.InputDateRange,
        loadComponent: async () => import('../components/input-date-range'),
        title: 'InputDateRange',
    }),
    route({
        path: DemoRoute.InputSlider,
        loadComponent: async () => import('../components/input-slider'),
        title: 'InputSlider',
    }),
    route({
        path: DemoRoute.InputTag,
        loadComponent: async () => import('../components/input-tag'),
        title: 'InputTag',
    }),
    route({
        path: DemoRoute.InputTime,
        loadComponent: async () => import('../components/input-time'),
        title: 'InputTime',
    }),
    route({
        path: DemoRoute.InputPhoneInternational,
        loadComponent: async () => import('../components/input-phone-international'),
        title: 'InputPhoneInternational',
    }),
    route({
        path: DemoRoute.InputYear,
        loadComponent: async () => import('../components/input-year'),
        title: 'InputYear',
    }),
    route({
        path: DemoRoute.Island,
        loadComponent: async () => import('../components/island'),
        title: 'Island',
    }),
    route({
        path: DemoRoute.ItemsWithMore,
        loadComponent: async () => import('../components/items-with-more'),
        title: 'ItemsWithMore',
    }),
    route({
        path: DemoRoute.LineClamp,
        loadComponent: async () => import('../components/line-clamp'),
        title: 'LineClamp',
    }),
    route({
        path: DemoRoute.Link,
        loadComponent: async () => import('../components/link'),
        title: 'Link',
    }),
    route({
        path: DemoRoute.Loader,
        loadComponent: async () => import('../components/loader'),
        title: 'Loader',
    }),
    route({
        path: DemoRoute.Notification,
        loadComponent: async () => import('../components/notification'),
        title: 'Notification',
    }),
    route({
        path: DemoRoute.Push,
        loadComponent: async () => import('../components/push'),
        title: 'Push',
    }),
    route({
        path: DemoRoute.MobileDialog,
        loadComponent: async () => import('../components/mobile-dialog'),
        title: 'MobileDialog',
    }),
    route({
        path: DemoRoute.MobileCalendar,
        title: 'MobileCalendar',
        loadComponent: async () => import('../components/mobile-calendar'),
    }),
    route({
        path: DemoRoute.PullToRefresh,
        loadComponent: async () => import('../components/pull-to-refresh'),
        title: 'PullToRefresh',
    }),
    route({
        path: DemoRoute.CalendarMonth,
        title: 'CalendarMonth',
        loadComponent: async () => import('../components/calendar-month'),
    }),
    route({
        path: DemoRoute.MultiSelect,
        loadComponent: async () => import('../components/multi-select'),
        title: 'MultiSelect',
    }),
    route({
        path: DemoRoute.Pagination,
        loadComponent: async () => import('../components/pagination'),
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
        path: DemoRoute.Pulse,
        title: 'Pulse',
        loadComponent: async () => import('../components/pulse'),
    }),
    route({
        path: DemoRoute.Range,
        loadComponent: async () => import('../components/range'),
        title: 'Range',
    }),
    route({
        path: DemoRoute.CalendarRange,
        title: 'CalendarRange',
        loadComponent: async () => import('../components/calendar-range'),
    }),
    route({
        path: DemoRoute.Select,
        loadComponent: async () => import('../components/select'),
        title: 'Select',
    }),
    route({
        path: DemoRoute.Scrollbar,
        loadComponent: async () => import('../components/scrollbar'),
        title: 'Scrollbar',
    }),
    route({
        path: DemoRoute.Sheet,
        loadComponent: async () => import('../components/sheet'),
        title: 'Sheet',
    }),
    route({
        path: DemoRoute.SheetDialog,
        loadComponent: async () => import('../components/sheet-dialog'),
        title: 'SheetDialog',
    }),
    route({
        path: DemoRoute.Slider,
        loadComponent: async () => import('../components/slider'),
        title: 'Slider',
    }),
    route({
        path: DemoRoute.Status,
        loadComponent: async () => import('../components/status'),
        title: 'Status',
    }),
    route({
        path: DemoRoute.Stepper,
        loadComponent: async () => import('../components/stepper'),
        title: 'Stepper',
    }),
    route({
        path: DemoRoute.Preview,
        loadComponent: async () => import('../components/preview'),
        title: 'Preview',
    }),
    route({
        path: DemoRoute.AppBar,
        loadComponent: async () => import('../components/app-bar'),
        title: 'AppBar',
    }),
    route({
        path: DemoRoute.TabBar,
        loadComponent: async () => import('../components/tab-bar'),
        title: 'TabBar',
    }),
    route({
        path: DemoRoute.Tabs,
        loadComponent: async () => import('../components/tabs'),
        title: 'Tabs',
    }),
    route({
        path: DemoRoute.Tag,
        loadComponent: async () => import('../components/tag'),
        title: 'Tag',
    }),
    route({
        path: DemoRoute.Textarea,
        loadComponent: async () => import('../components/textarea'),
        title: 'Textarea',
    }),
    route({
        path: DemoRoute.PrimitiveTextfield,
        loadComponent: async () => import('../components/primitive-textfield'),
        title: 'PrimitiveTextfield',
    }),
    route({
        path: DemoRoute.PdfViewer,
        loadComponent: async () => import('../components/pdf-viewer'),
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
        loadComponent: async () => import('../components/progress-bar'),
        title: 'ProgressBar',
    }),
    route({
        path: DemoRoute.ProgressCircle,
        loadComponent: async () => import('../components/progress-circle'),
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
        loadComponent: async () => import('../components/tiles'),
        title: 'Tiles',
    }),
    route({
        path: DemoRoute.Switch,
        title: 'Switch',
        loadComponent: async () => import('../components/switch'),
    }),
    route({
        path: DemoRoute.Tooltip,
        loadComponent: async () => import('../components/tooltip'),
        title: 'Tooltip',
    }),
    route({
        path: DemoRoute.Tree,
        loadComponent: async () => import('../components/tree'),
        title: 'Tree',
    }),
    // FILTER
    route({
        path: DemoRoute.Filter,
        loadComponent: async () => import('../components/filter'),
        title: 'Filter',
    }),
    // CHARTS
    route({
        path: DemoRoute.ArcChart,
        loadComponent: async () => import('../components/arc-chart'),
        title: 'ArcChart',
    }),
    route({
        path: DemoRoute.Axes,
        loadComponent: async () => import('../components/axes'),
        title: 'Axes',
    }),
    route({
        path: DemoRoute.Bar,
        loadComponent: async () => import('../components/bar'),
        title: 'Bar',
    }),
    route({
        path: DemoRoute.BarChart,
        loadComponent: async () => import('../components/bar-chart'),
        title: 'BarChart',
    }),
    route({
        path: DemoRoute.BarSet,
        loadComponent: async () => import('../components/bar-set'),
        title: 'BarSet',
    }),
    route({
        path: DemoRoute.LegendItem,
        loadComponent: async () => import('../components/legend-item'),
        title: 'LegendItem',
    }),
    route({
        path: DemoRoute.LineChart,
        loadComponent: async () => import('../components/line-chart'),
        title: 'LineChart',
    }),
    route({
        path: DemoRoute.LineDaysChart,
        loadComponent: async () => import('../components/line-days-chart'),
        title: 'LineDaysChart',
    }),
    route({
        path: DemoRoute.PieChart,
        loadComponent: async () => import('../components/pie-chart'),
        title: 'PieChart',
    }),
    route({
        path: DemoRoute.RingChart,
        loadComponent: async () => import('../components/ring-chart'),
        title: 'RingChart',
    }),
    // STYLES
    route({
        path: DemoRoute.Colors,
        loadComponent: async () => import('../markup/colors'),
        title: 'Colors',
    }),
    route({
        path: DemoRoute.Form,
        loadComponent: async () => import('../markup/form'),
        title: 'Form',
    }),
    route({
        path: DemoRoute.Lists,
        loadComponent: async () => import('../markup/lists'),
        title: 'Lists',
    }),
    route({
        path: DemoRoute.Shadows,
        loadComponent: async () => import('../markup/shadows'),
        title: 'Shadows',
    }),
    route({
        path: DemoRoute.Spaces,
        loadComponent: async () => import('../markup/spaces'),
        title: 'Spaces',
    }),
    route({
        path: DemoRoute.Tables,
        loadComponent: async () => import('../markup/tables'),
        title: 'Tables',
    }),
    route({
        path: DemoRoute.Typography,
        loadComponent: async () => import('../markup/typography'),
        title: 'Typography',
    }),
    route({
        path: DemoRoute.Breakpoints,
        loadComponent: async () => import('../markup/breakpoints'),
        title: 'Breakpoints',
    }),
    // DIRECTIVES
    route({
        path: DemoRoute.ActiveZone,
        loadComponent: async () => import('../directives/active-zone'),
        title: 'ActiveZone',
    }),
    route({
        path: DemoRoute.CopyProcessor,
        title: 'CopyProcessor',
        loadComponent: async () => import('../directives/copy-processor'),
    }),
    route({
        path: DemoRoute.ElasticSticky,
        loadComponent: async () => import('../directives/elastic-sticky'),
        title: 'ElasticSticky',
    }),
    route({
        path: DemoRoute.Element,
        title: 'Element',
        loadComponent: async () => import('../directives/element'),
    }),
    route({
        path: DemoRoute.Highlight,
        loadComponent: async () => import('../directives/highlight'),
        title: 'Highlight',
    }),
    route({
        path: DemoRoute.Hint,
        loadComponent: async () => import('../directives/hint'),
        title: 'Hint',
    }),
    route({
        path: DemoRoute.HintDescribe,
        loadComponent: async () => import('../directives/hint-describe'),
        title: 'HintDescribe',
    }),
    route({
        path: DemoRoute.HintManual,
        loadComponent: async () => import('../directives/hint-manual'),
        title: 'HintManual',
    }),
    route({
        path: DemoRoute.HintPointer,
        loadComponent: async () => import('../directives/hint-pointer'),
        title: 'HintPointer',
    }),
    route({
        path: DemoRoute.LazyLoading,
        loadComponent: async () => import('../directives/lazy-loading'),
        title: 'LazyLoading',
    }),
    route({
        path: DemoRoute.Pan,
        title: 'Pan',
        loadComponent: async () => import('../directives/pan'),
    }),
    route({
        path: DemoRoute.Resizer,
        title: 'Resizer',
        loadComponent: async () => import('../directives/resizer'),
    }),
    route({
        path: DemoRoute.Swipe,
        title: 'Swipe',
        loadComponent: async () => import('../directives/swipe'),
    }),
    route({
        path: DemoRoute.Let,
        loadComponent: async () => import('../directives/let'),
        title: 'Let',
    }),
    route({
        path: DemoRoute.Zoom,
        title: 'Zoom',
        loadComponent: async () => import('../directives/zoom'),
    }),
    route({
        path: DemoRoute.Present,
        loadComponent: async () => import('../directives/present'),
        title: 'Present',
    }),
    route({
        path: DemoRoute.HoveredChange,
        title: 'HoveredChange',
        loadComponent: async () => import('../directives/hovered-change'),
    }),
    route({
        path: DemoRoute.ReorderColumns,
        loadComponent: async () => import('../components/reorder'),
        title: 'ReorderColumns',
    }),
    route({
        path: DemoRoute.Table,
        loadComponent: async () => import('../components/table'),
        title: 'Table',
    }),
    route({
        path: DemoRoute.TableFilters,
        loadComponent: async () => import('../components/table-filters'),
        title: 'TableFilters',
    }),
    route({
        path: DemoRoute.TablePagination,
        loadComponent: async () => import('../components/table-pagination'),
        title: 'TablePagination',
    }),
    route({
        path: DemoRoute.Ripple,
        loadComponent: async () => import('../directives/ripple'),
        title: 'Ripple',
    }),
    route({
        path: DemoRoute.Sidebar,
        loadComponent: async () => import('../directives/sidebar'),
        title: 'Sidebar',
    }),
    route({
        path: DemoRoute.Touchable,
        loadComponent: async () => import('../directives/touchable'),
        title: 'Touchable',
    }),
    route({
        path: DemoRoute.Validator,
        loadComponent: async () => import('../directives/validator'),
        title: 'Validator',
    }),
    route({
        path: DemoRoute.ValueChanges,
        title: 'ValueChanges',
        loadComponent: async () => import('../directives/value-changes'),
    }),
    route({
        path: DemoRoute.Media,
        loadComponent: async () => import('../directives/media'),
        title: 'Media',
    }),
    route({
        path: DemoRoute.Theme,
        loadComponent: async () => import('../directives/theme'),
        title: 'Theme',
    }),
    route({
        path: DemoRoute.AutoFocus,
        loadComponent: async () => import('../directives/auto-focus'),
        title: 'AutoFocus',
    }),
    // PIPES
    route({
        path: DemoRoute.Currency,
        loadComponent: async () => import('../pipes/currency'),
        title: 'Currency',
    }),
    route({
        path: DemoRoute.FilterPipe,
        loadComponent: async () => import('../pipes/filter'),
        title: 'Filter',
    }),
    route({
        path: DemoRoute.FilterByInput,
        loadComponent: async () => import('../pipes/filter-by-input'),
        title: 'FilterByInput',
    }),
    route({
        path: DemoRoute.Flag,
        title: 'Flag',
        loadComponent: async () => import('../pipes/flag'),
    }),
    route({
        path: DemoRoute.FormatDate,
        loadComponent: async () => import('../pipes/format-date'),
        title: 'FormatDate',
    }),
    route({
        path: DemoRoute.FormatNumber,
        loadComponent: async () => import('../pipes/format-number'),
        title: 'FormatNumber',
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
        loadComponent: async () => import('../pipes/stringify'),
        title: 'Stringify',
    }),
    route({
        path: DemoRoute.StringifyContent,
        loadComponent: async () => import('../pipes/stringify-content'),
        title: 'StringifyContent',
    }),
    // SERVICES
    route({
        path: DemoRoute.Alert,
        title: 'Alert',
        loadComponent: async () => import('../components/alert'),
    }),
    route({
        path: DemoRoute.BreakpointService,
        loadComponent: async () => import('../components/services/breakpoint-service'),
        title: 'BreakpointService',
    }),
    route({
        path: DemoRoute.KeyboardService,
        loadComponent: async () => import('../components/services/keyboard-service'),
        title: 'Keyboard',
    }),
    route({
        path: DemoRoute.ScrollService,
        loadComponent: async () => import('../components/services/scroll-service'),
        title: 'ScrollService',
    }),
    route({
        path: DemoRoute.ActionBar,
        loadComponent: async () => import('../components/action-bar'),
        title: 'ActionBar',
    }),
    route({
        path: DemoRoute.TextfieldController,
        loadComponent: async () => import('../directives/textfield-controller'),
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
        loadComponent: async () => import('../components/utils/math'),
        title: 'Math',
    }),
    route({
        path: DemoRoute.Format,
        loadComponent: async () => import('../components/utils/format'),
        title: 'Format',
    }),
    route({
        path: DemoRoute.DOM,
        loadComponent: async () => import('../components/utils/dom'),
        title: 'DOM',
    }),
    route({
        path: DemoRoute.Browser,
        loadComponent: async () => import('../components/utils/browser'),
        title: 'Browser',
    }),
    route({
        path: DemoRoute.Miscellaneous,
        loadComponent: async () => import('../components/utils/miscellaneous'),
        title: 'Miscellaneous',
    }),
    route({
        path: DemoRoute.Tokens,
        loadComponent: async () => import('../components/utils/tokens'),
        title: 'Tokens',
    }),
    route({
        path: DemoRoute.Pure,
        loadComponent: async () => import('../components/utils/pure'),
        title: 'Pure',
    }),
    // ANIMATIONS
    route({
        path: DemoRoute.Animations,
        loadComponent: async () => import('../components/animations'),
        title: 'Animations',
    }),
    route({
        path: DemoRoute.StackblitzStarter,
        loadComponent: async () => import('./stackblitz/starter'),
        title: 'Stackblitz Starter',
    }),
    route({
        path: DemoRoute.MigrationGuide,
        loadComponent: async () => import('../info/migration-guide'),
        title: 'Migration Guide',
    }),
    {
        path: '**',
        redirectTo: '',
    },
];
