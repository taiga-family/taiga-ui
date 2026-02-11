import {type TuiDocRoutePage, type TuiDocRoutePageBase} from '@taiga-ui/addon-doc';

import {DemoRoute} from './demo-routes';

export type DocRoutePages = ReadonlyArray<DocRoutePage | DocRoutePageGroup>;

export interface DocMeta {
    readonly name?: string; // name in figma, ex. tui-tooltip-button
    readonly scheme?: 'beaver' | 'taiga'; // scheme name in db
    readonly status?: 'alpha' | 'beta' | 'stable';
    readonly version?: string;
    readonly qualifiedName?: string; // name in Taiga UI, ex. Hint
    readonly documentationLink?: string;
    readonly figmaLink?: string;
    readonly figmaVersion?: string; // default 1.0.0
    readonly anchor?: string; // anchor link, ex. 'full', 'card-heading'
}

export type DocRoutePage = TuiDocRoutePage & {
    readonly meta?: DocMeta | readonly DocMeta[];
};

export type DocRoutePageGroup = TuiDocRoutePageBase & {
    readonly subPages: readonly DocRoutePage[];
};

export const pages: DocRoutePages = [
    {
        title: 'Getting Started',
        keywords: 'intro, how to, guide, main, главная, начало, инструкция',
        route: DemoRoute.GettingStarted,
    },
    // Documentation
    {
        section: 'Documentation',
        title: 'Information',
        subPages: [
            {
                section: 'Documentation',
                title: 'About',
                keywords: 'related, libraries, other, friendly, npm, packages',
                route: DemoRoute.About,
            },
            {
                section: 'Documentation',
                title: 'Browser support',
                keywords: 'chrome, safari, ie, edge, firefox',
                route: DemoRoute.BrowserSupport,
            },
            {
                section: 'Documentation',
                title: 'Changelog',
                keywords: 'release, change, changelog, archive, history',
                route: 'https://github.com/taiga-family/taiga-ui/blob/main/CHANGELOG.md',
                target: '_blank',
            },
            {
                section: 'Documentation',
                title: 'Migration Guide',
                keywords: 'update, migrate, обновление, миграция',
                route: DemoRoute.MigrationGuide,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Styles',
        subPages: [
            {
                section: 'Documentation',
                title: 'Typography',
                keywords:
                    'layout, text, верстка, markup, font, текст, шрифты, гельветика, sans, typography',
                route: DemoRoute.Typography,
            },
            {
                section: 'Documentation',
                title: 'Breakpoints',
                keywords:
                    'css, breakpoint, breakpoints, media, query, брейкпоинты, responsive, adaptive, адаптив',
                route: DemoRoute.Breakpoints,
            },
            {
                section: 'Documentation',
                title: 'Colors',
                keywords: 'layout, верстка, palette, markup, цвет, палитра',
                route: DemoRoute.Colors,
            },
            {
                section: 'Documentation',
                title: 'Shadows',
                keywords: 'layout, markup, тень, shadows',
                route: DemoRoute.Shadows,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Customization',
        subPages: [
            {
                section: 'Documentation',
                title: 'i18n',
                keywords: 'i18n, internationalization, local, translate, language',
                route: DemoRoute.I18N,
            },
            {
                section: 'Documentation',
                title: 'Variables',
                keywords: 'colors, css, vars, custom, properties, style',
                route: DemoRoute.Variables,
            },
            {
                section: 'Documentation',
                title: 'Appearances',
                keywords: 'colors, css, theme, custom, style',
                route: DemoRoute.Appearances,
            },
            {
                section: 'Documentation',
                title: 'Portals',
                keywords: 'portal, custom, theme, style',
                route: DemoRoute.Portals,
            },
            {
                section: 'Documentation',
                title: 'Viewport',
                keywords:
                    'viewport, вьюпорт, портал, контекст, выпадашка, дропдаун, portal, dropdown',
                route: DemoRoute.Viewport,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'Testing',
        subPages: [
            {
                section: 'Documentation',
                title: 'Jest',
                keywords:
                    'test, tests, testing, jest, ReferenceError, IntersectionObserver',
                route: DemoRoute.Jest,
            },
            {
                section: 'Documentation',
                title: 'Disable animations',
                keywords:
                    'test, tests, testing, cypress, тестирование, тесты, тест, tips, советы',
                route: DemoRoute.DisableAnimation,
            },
            {
                section: 'Documentation',
                title: 'Our screenshot bot',
                keywords:
                    'test, tests, testing, cypress, тестирование, тесты, тест, tips, советы, github, github-app, bot, screenshot',
                route: DemoRoute.ScreenshotBot,
            },
        ],
    },
    {
        section: 'Documentation',
        title: 'More',
        subPages: [
            {
                section: 'Documentation',
                title: 'Server Side Rendering',
                keywords: 'ssr, server, prerender, back, node, universal',
                route: DemoRoute.SSR,
            },
            {
                section: 'Documentation',
                title: 'AI support',
                keywords: 'ai, llm, llms, models, искусственный интеллект, модели',
                route: DemoRoute.AISupport,
            },
            {
                section: 'Documentation',
                title: 'Direction: RTL',
                keywords:
                    'rtl, direction, right, left, arabic, hebrew, арабский, иврит, справа, налево',
                route: DemoRoute.RTL,
            },
            {
                section: 'Documentation',
                title: 'Documentation engine',
                keywords:
                    'doc, book, samples, demo, документация, демо, портал, story, боковая, панель, навигация, примеры',
                route: 'https://github.com/taiga-family/taiga-ui/blob/main/projects/addon-doc/README.md',
                target: '_blank',
            },
            {
                section: 'Documentation',
                title: 'StackBlitz',
                keywords: 'reproduce, issue, bug, sandbox, playground, test',
                route: DemoRoute.StackblitzStarter,
                target: '_blank',
            },
        ],
    },
    // Components
    {
        section: 'Components',
        title: 'Accordion',
        keywords: 'open, аккордеон, expand, раскрывашка, spoiler, cut',
        route: DemoRoute.Accordion,
    },
    {
        section: 'Components',
        title: 'Avatar',
        keywords: 'аватар, image, pic, icon, картинка, изображение, avatar, stack',
        route: DemoRoute.Avatar,
        meta: [
            {
                name: 'tui-avatar',
                figmaVersion: '1.3.0',
            },
            {
                name: 'tui-avatar-labelled',
                figmaVersion: '1.3.0',
            },
            {
                name: 'tui-avatar-stack',
                figmaVersion: '1.3.0',
            },
            {
                name: 'tui-avatar-subscription',
                figmaVersion: '1.0.0',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Badges',
        subPages: [
            {
                section: 'Components',
                title: 'Badge',
                keywords: 'бэдж, овал, badge',
                route: DemoRoute.Badge,
                meta: {figmaVersion: '1.4.1'},
            },
            {
                section: 'Components',
                title: 'BadgedContent',
                keywords: 'бэдж, бейдж, circle, овал, круг, badge, нотификация',
                route: DemoRoute.BadgedContent,
                meta: {figmaVersion: '1.4.1'},
            },
            {
                section: 'Components',
                title: 'BadgeNotification',
                keywords: 'бэдж, бейдж, circle, круг, badge, alert, нотификация',
                route: DemoRoute.BadgeNotification,
                meta: {},
            },
        ],
    },
    {
        section: 'Components',
        title: 'Calendars',
        subPages: [
            {
                section: 'Components',
                title: 'Calendar',
                keywords:
                    'календарь, форма, день, неделя, месяц, год, дата, calendar, датапикер, datepicker' +
                    'date, day, week, month, year',
                route: DemoRoute.Calendar,
            },
            {
                section: 'Components',
                title: 'CalendarRange',
                keywords: 'календарь, calendar, даты, период, day, week, month, year',
                route: DemoRoute.CalendarRange,
            },
            {
                section: 'Components',
                title: 'CalendarMonth',
                keywords:
                    'поле, инпут, форма, ввод, input, month, месяц, год, дата, day, week, month, year',
                route: DemoRoute.CalendarMonth,
            },
        ],
    },
    {
        section: 'Components',
        title: 'ThumbnailCard',
        keywords:
            'карта, карточка, card, visa, mastercard, credit, icon, logo, дебетовая, кредитная, иконка, логотип',
        route: DemoRoute.ThumbnailCard,
        meta: {figmaVersion: '1.8.0'},
    },
    {
        section: 'Components',
        title: 'Carousel',
        keywords: 'карусель, слайдер, slider, carousel',
        route: DemoRoute.Carousel,
    },
    {
        section: 'Components',
        title: 'Modals',
        subPages: [
            {
                section: 'Components',
                title: 'Confirm',
                keywords:
                    'попап, модал, popup, dialog, диалог, modal, окно, confirm, approve, prompt, подтверждение',
                route: DemoRoute.Confirm,
            },
            {
                section: 'Components',
                title: 'Dialog',
                keywords: 'попап, модал, popup, dialog, диалог, modal, окно',
                route: DemoRoute.Dialog,
                meta: {},
            },
            {
                section: 'Documentation',
                title: 'Dialog routable',
                keywords: 'dialog, modal, navigation, route, eager, lazy, routable',
                route: DemoRoute.DialogRoutable,
            },
            {
                section: 'Components',
                title: 'SheetDialog',
                keywords: 'mobile, dialog, popup, map, details, шторка',
                route: DemoRoute.SheetDialog,
                meta: {name: 'tui-bottomsheet'},
            },
            {
                section: 'Components',
                title: 'NotificationMiddle',
                keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
                route: DemoRoute.NotificationMiddle,
                meta: {figmaVersion: '1.1.0'},
            },
            {
                section: 'Components',
                title: 'PdfViewer',
                keywords:
                    'попап, модал, popup, pdf, preview, dialog, диалог, modal, окно',
                route: DemoRoute.PdfViewer,
            },
            {
                section: 'Components',
                title: 'Preview',
                keywords:
                    'popup, dialog, диалог, попап, модалка, modal, просмотр, превью, предпросмотр, ' +
                    'предпоказ, показ, pdf, jpg, png, viewer, файл',
                route: DemoRoute.Preview,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Dropdown',
        subPages: [
            {
                section: 'Components',
                title: 'DataList',
                keywords:
                    'контекст, выпадашка, дропдаун, меню, Context, ContextMenu, option,' +
                    'optGroup, опции, tuiOption, варианты, dropdown, menu',
                route: DemoRoute.DataList,
            },
            {
                section: 'Components',
                title: 'DataListWrapper',
                keywords:
                    'контекст, выпадашка, дропдаун, меню, Context, ContextMenu, option,' +
                    'optGroup, опции, tuiOption, варианты, dropdown, menu',
                route: DemoRoute.DataListWrapper,
            },
            {
                section: 'Tools',
                title: 'Dropdown',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, Context',
                route: DemoRoute.Dropdown,
                meta: {},
            },
            {
                section: 'Tools',
                title: 'DropdownOpen',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, меню, menu',
                route: DemoRoute.DropdownOpen,
            },
            {
                section: 'Tools',
                title: 'DropdownContext',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, Context, right-click',
                route: DemoRoute.DropdownContext,
            },
            {
                section: 'Tools',
                title: 'DropdownHover',
                keywords: 'dropdown, hover, выпадашка, дропдаун',
                route: DemoRoute.DropdownHover,
            },
            {
                section: 'Tools',
                title: 'DropdownSelection',
                keywords:
                    'dropdown, контекст, selection, выделение, выпадашка, дропдаун, Context',
                route: DemoRoute.DropdownSelection,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Expand',
        keywords: 'аккордеон, expand, раскрывашка, spoiler, cut',
        route: DemoRoute.Expand,
    },
    {
        section: 'Components',
        title: 'Filter',
        keywords: 'фильтр, filters',
        route: DemoRoute.Filter,
    },
    {
        section: 'Components',
        title: 'Copy',
        keywords: 'копировать, copy, clipboard, буфер обмена, share',
        route: DemoRoute.Copy,
        meta: {},
    },
    {
        section: 'Components',
        title: 'Hint',
        subPages: [
            {
                section: 'Components',
                title: 'Tooltip',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help',
                route: DemoRoute.Tooltip,
                meta: {name: 'tui-button-tooltip'},
            },
            {
                section: 'Tools',
                title: 'Hint',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help, хинт',
                route: DemoRoute.Hint,
                meta: {name: 'tui-tooltip'},
            },
            {
                section: 'Tools',
                title: 'HintDescribe',
                keywords:
                    'tooltip, тултип, hint, подсказка, помощь, help, хинт, accessibility, a11y, доступность',
                route: DemoRoute.HintDescribe,
            },
            {
                section: 'Tools',
                title: 'HintManual',
                keywords:
                    'tooltip, тултип, hint, подсказка, помощь, help, manual, программный, хинт',
                route: DemoRoute.HintManual,
            },
            {
                section: 'Tools',
                title: 'HintPointer',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help, хинт, курсор',
                route: DemoRoute.HintPointer,
            },
        ],
    },
    {
        section: 'Components',
        title: 'ItemsWithMore',
        keywords: 'список, list, items, элементы, more, больше, overflow',
        route: DemoRoute.ItemsWithMore,
    },
    {
        section: 'Components',
        title: 'Like',
        keywords: 'like, лайк, эмодзи, смайлик, стикер',
        route: DemoRoute.Like,
        meta: {name: 'tui-button-like'},
    },
    {
        section: 'Components',
        title: 'LineClamp',
        keywords: 'обрезание, текст, ticker, тикер, overflow',
        route: DemoRoute.LineClamp,
    },
    {
        section: 'Components',
        title: 'Link',
        keywords: 'href, anchor, ссылка, псевдо, pseudo, link',
        route: DemoRoute.Link,
        meta: [{name: 'tui-button-link'}, {name: 'tui-link', figmaVersion: '1.0.1'}],
    },
    {
        section: 'Components',
        title: 'Loader',
        keywords:
            'загрузка, крутилка, лоадер, спиннер, спинер, крутится, мутится, spinner, loader',
        route: DemoRoute.Loader,
        meta: {figmaVersion: '1.0.0'},
    },
    {
        section: 'Components',
        title: 'Notification',
        keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
        route: DemoRoute.Notification,
        meta: {
            name: 'tui-notification-banner',
            figmaVersion: '1.1.1',
        },
    },
    {
        section: 'Components',
        title: 'Push',
        keywords: 'push, пуш, нотификация, notification, alert',
        route: DemoRoute.Push,
    },
    {
        section: 'Components',
        title: 'Mobile',
        subPages: [
            {
                section: 'Components',
                title: 'MobileCalendar',
                keywords:
                    'календарь, день, неделя, месяц, год, дата, calendar, datapicker, data, picker',
                route: DemoRoute.MobileCalendar,
            },
            {
                section: 'Components',
                title: 'PullToRefresh',
                keywords:
                    'mobile, потянуть, обновление, лоадер, loader, крутилка, загрузка',
                route: DemoRoute.PullToRefresh,
            },
            {
                section: 'Components',
                title: 'SwipeActions',
                keywords: 'swipe, action, свайп, card, действие',
                route: DemoRoute.SwipeActions,
                meta: {version: '1.1.0'},
            },
        ],
    },
    {
        section: 'Components',
        title: 'Compass',
        keywords: 'compass, user, point, dot, карта, точка',
        route: DemoRoute.Compass,
    },
    {
        section: 'Components',
        title: 'Pin',
        keywords: 'пин, pin, map, карта, точка, dot, point',
        route: DemoRoute.Pin,
        meta: {},
    },
    {
        section: 'Components',
        title: 'Pager',
        keywords: 'pager, точка, dot',
        route: DemoRoute.Pager,
        meta: {figmaVersion: '1.1.0'},
    },
    {
        section: 'Components',
        title: 'Popout',
        keywords: 'portal, window, pip, picture-in-picture, popup, новая вкладка',
        route: DemoRoute.Popout,
    },
    {
        section: 'Components',
        title: 'Progress',
        subPages: [
            {
                section: 'Components',
                title: 'ProgressBar',
                keywords:
                    'progress, bar, progress-bar, индикатор, загрузка, прогресс, бар',
                route: DemoRoute.ProgressBar,
                meta: {},
            },
            {
                section: 'Components',
                title: 'ProgressCircle',
                keywords:
                    'progress, circle, ring, progress-circle, progress-ring, индикатор, загрузка, прогресс',
                route: DemoRoute.ProgressCircle,
                meta: {},
            },
            {
                section: 'Components',
                title: 'ProgressSegmented',
                keywords:
                    'progress, progress-segmented, индикатор, загрузка, прогресс, segment, segments, segmented',
                route: DemoRoute.ProgressSegmented,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Pulse',
        keywords: 'сигнал, пульс, pulse, signal',
        route: DemoRoute.Pulse,
        meta: {name: 'tui-badge-t-client'},
    },
    {
        section: 'Components',
        title: 'Scrollbar',
        keywords: 'scroll, scrollbar, скролл, скроллбар',
        route: DemoRoute.Scrollbar,
    },
    {
        section: 'Components',
        title: 'BottomSheet',
        keywords: 'mobile, dialog, popup, map, details, шторка, sheet',
        route: DemoRoute.BottomSheet,
    },
    {
        section: 'Components',
        title: 'Status',
        keywords: 'dot, точка, бейдж, badge, success, failure, error',
        route: DemoRoute.Status,
    },
    {
        section: 'Components',
        title: 'Table',
        subPages: [
            {
                section: 'Components',
                title: 'Reorder',
                keywords: 'таблица, столбцы, порядок, order, выбор',
                route: DemoRoute.ReorderColumns,
            },
            {
                section: 'Components',
                title: 'TablePagination',
                keywords: 'таблица, страницы, pagination, page',
                route: DemoRoute.TablePagination,
            },
            {
                section: 'Components',
                title: 'TableFilters',
                keywords: 'таблица, filter, фильтр',
                route: DemoRoute.TableFilters,
            },
            {
                section: 'Components',
                title: 'Table',
                keywords: 'таблица, data, cell, tr, th, td, row, col, grid, beaver',
                route: DemoRoute.Table,
                meta: [
                    {scheme: 'beaver', anchor: 'custom', name: 'table'},
                    {
                        scheme: 'beaver',
                        anchor: 'footer',
                        name: 'pagination',
                        qualifiedName: 'pagination',
                    },
                ],
            },
        ],
    },
    {
        section: 'Components',
        title: 'ActionBar',
        keywords:
            'молекула, уведомление, нотификация, бабл, облачко, actions, beaver, alert, table, bar',
        route: DemoRoute.ActionBar,
    },
    {
        section: 'Components',
        title: 'Toast',
        keywords: 'toast, тост, нотификация',
        route: DemoRoute.Toast,
        meta: {
            name: 'tui-notification-toast',
            figmaVersion: '1.2.1',
        },
    },
    {
        section: 'Components',
        title: 'Tiles',
        keywords: 'tile, grid, грид, widgets, drag, drop',
        route: DemoRoute.Tiles,
    },
    {
        section: 'Components',
        title: 'Tree',
        keywords: 'tree, view, multi, recursive, folders, рекурсия, дерево, папки',
        route: DemoRoute.Tree,
    },
    {
        section: 'Form',
        title: 'Form',
        keywords: 'форма, поле, кнопка, группировка, группа',
        route: DemoRoute.Form,
        meta: {scheme: 'beaver', name: 'form'},
    },
    {
        section: 'Form',
        title: 'Buttons',
        subPages: [
            {
                section: 'Form',
                title: 'Button',
                keywords: 'кнопка, button, icon-button, иконка',
                route: DemoRoute.Button,
                meta: [
                    {name: 'tui-button', figmaVersion: '1.9.1'},
                    {name: 'tui-button-vertical', figmaVersion: '1.0.1'},
                ],
            },
            {
                section: 'Form',
                title: 'ButtonX',
                keywords: 'кнопка, button, close, закрыть',
                route: DemoRoute.ButtonX,
                meta: {name: 'tui-button-close'},
            },
            {
                section: 'Form',
                title: 'ButtonGroup',
                keywords: 'кнопка, button, group, группа',
                route: DemoRoute.ButtonGroup,
                meta: {name: 'tui-button-group-card'},
            },
            {
                section: 'Form',
                title: 'ButtonSelect',
                keywords: 'кнопка, button, select, multiselect',
                route: DemoRoute.ButtonSelect,
            },
        ],
    },
    {
        section: 'Form',
        title: 'Label',
        keywords: 'лэйбл, метка, форма, label',
        route: DemoRoute.Label,
    },
    {
        section: 'Form',
        title: 'Error',
        keywords: 'error, ошибка, форма, validation, валидация, проверка',
        route: DemoRoute.Error,
    },
    {
        section: 'Form',
        title: 'Inputs',
        subPages: [
            {
                section: 'Form',
                title: 'InputCard',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: DemoRoute.InputCard,
            },
            {
                section: 'Form',
                title: 'InputCardGroup',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: DemoRoute.InputCardGroup,
            },
            {
                section: 'Form',
                title: 'InputChip',
                keywords:
                    'поле, инпут, форма, ввод, input, виртуальный скролл, chip, virtual scroll, tag, тэг',
                route: DemoRoute.InputChip,
                meta: [
                    {name: 'tui-input-chip'},
                    {name: 'tui-multi-select', anchor: 'multi-select'},
                ],
            },
            {
                section: 'Form',
                title: 'InputColor',
                keywords: 'input-color, picker, color, цвет, выбор, палитра',
                route: DemoRoute.InputColor,
            },
            {
                section: 'Form',
                title: 'InputDate',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar',
                route: DemoRoute.InputDate,
            },
            {
                section: 'Form',
                title: 'InputDateMulti',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, multiple',
                route: DemoRoute.InputDateMulti,
            },
            {
                section: 'Form',
                title: 'InputDateRange',
                keywords: 'calendar, календарь, даты, период',
                route: DemoRoute.InputDateRange,
            },
            {
                section: 'Form',
                title: 'InputDateTime',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, время, часы, минуты, секунды, мс',
                route: DemoRoute.InputDateTime,
            },
            {
                section: 'Form',
                title: 'InputInline',
                keywords: 'input',
                route: DemoRoute.InputInline,
            },
            {
                section: 'Form',
                title: 'InputMonth',
                keywords: 'поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: DemoRoute.InputMonth,
            },
            {
                section: 'Form',
                title: 'InputNumber',
                keywords: 'textfield, input, number, count, digit, money, число',
                route: DemoRoute.InputNumber,
            },
            {
                section: 'Form',
                title: 'InputPhone',
                keywords: 'поле, инпут, форма, ввод, input, phone, телефон, номера',
                route: DemoRoute.InputPhone,
            },
            {
                section: 'Form',
                title: 'InputPhoneInternational',
                keywords:
                    'поле, инпут, форма, ввод, input, phone, телефон, страны, номера,',
                route: DemoRoute.InputPhoneInternational,
            },
            {
                section: 'Form',
                title: 'InputPin',
                keywords: 'поле, инпут, форма, ввод, input, pin, пин, код',
                route: DemoRoute.InputPin,
            },
            {
                section: 'Form',
                title: 'InputTime',
                keywords:
                    'поле, инпут, форма, ввод, input, time, hour, minute, время, час, минута',
                route: DemoRoute.InputTime,
            },
            {
                section: 'Form',
                title: 'InputYear',
                keywords: 'поле, инпут, форма, ввод, input, год, дата',
                route: DemoRoute.InputYear,
            },
            {
                section: 'Form',
                title: 'InputFiles',
                keywords: 'input-files, files, file, файлы',
                route: DemoRoute.InputFiles,
            },
            {
                section: 'Form',
                title: 'Input',
                keywords:
                    'form, textfield, select, textarea, combobox, ввод, форма, поле, password, inputpassword, пароль, код, шифр, copy, inputcopy',
                route: DemoRoute.Input,
                meta: {name: 'tui-textfield'},
            },
        ],
    },
    {
        section: 'Form',
        title: 'ComboBox',
        keywords: 'инпут, форма, ввод, select, селект, выбор, комбобокс, combobox',
        route: DemoRoute.ComboBox,
        meta: {},
    },
    {
        section: 'Form',
        title: 'Select',
        keywords: 'инпут, форма, ввод, select, селект, выбор',
        route: DemoRoute.Select,
        meta: {},
    },
    {
        section: 'Form',
        title: 'Textarea',
        keywords: 'поле, инпут, форма, ввод, textarea, area',
        route: DemoRoute.Textarea,
        meta: {},
    },
    {
        section: 'Form',
        title: 'Rating',
        keywords: 'рейтинг, оценка, звезда, rating, star, rate',
        route: DemoRoute.Rating,
        meta: {figmaVersion: '1.1.1'},
    },
    {
        section: 'Form',
        title: 'Toggles',
        subPages: [
            {
                section: 'Form',
                title: 'Block',
                keywords: 'кнопка, чек, форма, form, ввод, checkbox, radio, радио, label',
                route: DemoRoute.Block,
                meta: [{name: 'tui-toggle-block', figmaVersion: '1.2.0'}],
            },
            {
                section: 'Form',
                title: 'Checkbox',
                keywords: 'чек, ввод, форма, form, checkbox',
                route: DemoRoute.Checkbox,
                meta: {},
            },
            {
                section: 'Form',
                title: 'Radio',
                keywords: 'инпут, форма, ввод, radio, радио',
                route: DemoRoute.Radio,
                meta: {},
            },
            {
                section: 'Form',
                title: 'Switch',
                keywords: 'инпут, форма, ввод, toggle, переключение',
                route: DemoRoute.Switch,
                meta: {},
            },
        ],
    },
    {
        section: 'Form',
        title: 'Sliders',
        subPages: [
            {
                section: 'Form',
                title: 'InputRange',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputRange,
            },
            {
                section: 'Form',
                title: 'InputSlider',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputSlider,
            },
            {
                section: 'Form',
                title: 'Slider',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: DemoRoute.Slider,
                meta: {},
            },
            {
                section: 'Form',
                title: 'Range',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: DemoRoute.Range,
            },
        ],
    },
    {
        section: 'Layout',
        title: 'BlockDetails',
        keywords: 'details, block, детали, блок',
        route: DemoRoute.BlockDetails,
        meta: {},
    },
    {
        section: 'Layout',
        title: 'List',
        keywords:
            'layout, markup, списки, стили, список, точки, list, ol, ul, li, немаркированный, маркированный',
        route: DemoRoute.List,
    },
    {
        section: 'Layout',
        title: 'BlockStatus',
        keywords: 'блок, статус, block, status, block-status, blockstatus, layout',
        route: DemoRoute.BlockStatus,
        meta: {},
    },
    {
        section: 'Layout',
        title: 'ElasticContainer',
        keywords: 'container, height, transition, expand, контейнер, высота, анимация',
        route: DemoRoute.ElasticContainer,
    },
    {
        section: 'Layout',
        title: 'FloatingContainer',
        keywords: 'floating-container, sticky, плавающий, липкий, footer, футер',
        route: DemoRoute.FloatingContainer,
        meta: {},
    },
    {
        section: 'Layout',
        title: 'Cell',
        keywords: 'cell, feed, item, tuiAccessories, accessories',
        route: DemoRoute.Cell,
        meta: [
            {name: 'tui-cell', figmaVersion: '1.3.1'},
            {name: 'tui-cell-connected', figmaVersion: '1.3.1'},
            {name: 'tui-button-cell', figmaVersion: '1.0.1'},
            {name: 'list-item', scheme: 'beaver'},
        ],
    },
    {
        section: 'Layout',
        title: 'Drawer',
        keywords:
            'попап, модал, popup, dialog, диалог, modal, окно, шторка, overlay, sidebar, сайдбар',
        route: DemoRoute.Drawer,
        meta: {scheme: 'beaver', name: 'drawer'},
    },
    {
        section: 'Layout',
        title: 'Group',
        keywords: 'buttongroup, форма, поле, кнопка, группировка, группа, Group',
        route: DemoRoute.Group,
    },
    {
        section: 'Layout',
        title: 'ItemGroup',
        keywords: 'item, chip, group, list, tag, тэг, badge',
        route: DemoRoute.ItemGroup,
        meta: {name: 'tui-chip-group'},
    },
    {
        section: 'Layout',
        title: 'Slides',
        keywords: 'слайды, слайдер, slider, carousel, карусель, слайд, slide, swiper',
        route: DemoRoute.Slides,
    },
    {
        section: 'Components',
        title: 'Chip',
        keywords: 'chip, tag, тэг, badge',
        route: DemoRoute.Chip,
        meta: {figmaVersion: '1.3.3'},
    },
    {
        section: 'Components',
        title: 'Message',
        keywords: 'message, sms, сообщение, смс',
        route: DemoRoute.Message,
        meta: {name: 'tui-message-bubble'},
    },
    {
        section: 'Components',
        title: 'Comment',
        keywords: 'comment, tip, коммент',
        route: DemoRoute.Comment,
    },
    {
        section: 'Layout',
        title: 'Header',
        keywords: 'header, заголовок, item, tuiAccessories, accessories',
        route: DemoRoute.Header,
        meta: {},
    },
    {
        section: 'Components',
        title: 'Icon',
        keywords: 'icons, image, картинка, свг, svg, графика, иконка',
        route: DemoRoute.Icon,
    },
    {
        section: 'Navigation',
        title: 'Segmented',
        keywords: 'tabs, control, radio, navigation, навигация, вкладки, таб',
        route: DemoRoute.Segmented,
        meta: {},
    },
    {
        section: 'Components',
        title: 'Surface',
        keywords: 'card, container, wrapper, image, blur, overlay',
        route: DemoRoute.Surface,
        meta: {},
    },
    {
        section: 'Components',
        title: 'Title',
        keywords:
            'subtitle, заголовок, caption, description, подзаголовок, tuiSubtitle, title',
        route: DemoRoute.Title,
    },
    {
        section: 'Layout',
        title: 'Cards',
        subPages: [
            {
                section: 'Layout',
                title: 'Medium',
                keywords: 'card, card-medium, medium, block, карточка, блок',
                route: DemoRoute.CardMedium,
                meta: {name: 'tui-card-medium'},
            },
            {
                section: 'Layout',
                title: 'Large',
                keywords: 'card, card-large, large, block, карточка, блок',
                route: DemoRoute.CardLarge,
                meta: {name: 'tui-card-large'},
            },
            {
                section: 'Layout',
                title: 'Collapsed',
                keywords: 'collapsed, large, expand, карточка, beaver',
                route: DemoRoute.CardCollapsed,
            },
        ],
    },
    {
        section: 'Layout',
        title: 'AppBar',
        keywords: 'mobile, ios, android, header, bar, navigation',
        route: DemoRoute.AppBar,
        meta: {
            name: 'tui-appbar',
            figmaVersion: '1.1.1',
        },
    },
    {
        section: 'Layout',
        title: 'Search',
        keywords: 'шапка, header, filter, table, beaver, поиск, фильтр, таблица',
        route: DemoRoute.Search,
        meta: {scheme: 'beaver', name: 'filters'},
    },
    // Charts
    {
        section: 'Charts',
        title: 'ArcChart',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма, дуга, кольцо',
        route: DemoRoute.ArcChart,
    },
    {
        section: 'Charts',
        title: 'Axes',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма, оси, координаты',
        route: DemoRoute.Axes,
    },
    {
        section: 'Charts',
        title: 'Bar',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: DemoRoute.Bar,
    },
    {
        section: 'Charts',
        title: 'BarChart',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: DemoRoute.BarChart,
    },
    {
        section: 'Charts',
        title: 'BarSet',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: DemoRoute.BarSet,
    },
    {
        section: 'Charts',
        title: 'LegendItem',
        keywords: 'график, chart, легенда, подпись, диаграмма',
        route: DemoRoute.LegendItem,
    },
    {
        section: 'Charts',
        title: 'LineChart',
        keywords: 'график, chart, линия, кривая, диаграмма',
        route: DemoRoute.LineChart,
    },
    {
        section: 'Charts',
        title: 'LineDaysChart',
        keywords: 'график, chart, линия, кривая, диаграмма, год, месяц',
        route: DemoRoute.LineDaysChart,
    },
    {
        section: 'Charts',
        title: 'PieChart',
        keywords: 'график, чарт, chart, graph, пирог, круг, диаграмма',
        route: DemoRoute.PieChart,
    },
    {
        section: 'Charts',
        title: 'RingChart',
        keywords: 'график, чарт, chart, graph, кольцо, круг, диаграмма',
        route: DemoRoute.RingChart,
    },
    // Navigation
    {
        section: 'Navigation',
        title: 'Navigation',
        keywords: 'шапка, header, sidebar, aside, сайдбар, навигация, beaver',
        route: DemoRoute.Navigation,
        meta: [
            {scheme: 'beaver', anchor: 'full', name: 'navigation'},
            {
                scheme: 'beaver',
                anchor: 'subheader-compact',
                name: 'subheaders',
                qualifiedName: 'subheader-compact',
            },
            {
                scheme: 'beaver',
                anchor: 'subheader-object',
                name: 'subheaders',
                qualifiedName: 'subheader-object',
            },
        ],
    },
    {
        section: 'Navigation',
        title: 'Breadcrumbs',
        keywords: 'шаги, навигация, nav, хлебные, крошки, breadcrumbs',
        route: DemoRoute.Breadcrumbs,
        meta: {scheme: 'beaver', name: 'breadcrumbs'},
    },
    {
        section: 'Navigation',
        title: 'Pagination',
        keywords:
            'пагинатор, страницы, пэйджы, навигация, navigation, paginator, pagination',
        route: DemoRoute.Pagination,
    },
    {
        section: 'Navigation',
        title: 'Stepper',
        keywords: 'stepper, step, группа, group, шаг, check',
        route: DemoRoute.Stepper,
    },
    {
        section: 'Navigation',
        title: 'TabBar',
        keywords: 'mobile, ios, android, шаги, таб, tab, tabs, bar, navigation',
        route: DemoRoute.TabBar,
        meta: {},
    },
    {
        section: 'Navigation',
        title: 'Tabs',
        keywords: 'mobile, ios, android, шаги, таб, tab, tabs, vertical, navigation',
        route: DemoRoute.Tabs,
        meta: {},
    },
    // Tools
    {
        section: 'Tools',
        title: 'Directives',
        subPages: [
            {
                section: 'Tools',
                title: 'ActiveZone',
                keywords: 'focus, blur, фокус, activeElement',
                route: DemoRoute.ActiveZone,
            },
            {
                section: 'Tools',
                title: 'Appearance',
                keywords: 'colors, css, theme, custom, style',
                route: DemoRoute.Appearance,
            },
            {
                section: 'Tools',
                title: 'Animated',
                keywords: 'animation, transition, css, fade, slide',
                route: DemoRoute.Animated,
            },
            {
                section: 'Tools',
                title: 'AutoFocus',
                keywords: 'focus, blur, фокус, авто',
                route: DemoRoute.AutoFocus,
            },
            {
                section: 'Tools',
                title: 'Shimmer',
                keywords: 'shimmer, шиммер, fade, фейд, cache, кеш, кеширование',
                route: DemoRoute.Shimmer,
            },
            {
                section: 'Tools',
                title: 'FluidTypography',
                keywords: 'font, scale, textfield, input, size, text',
                route: DemoRoute.FluidTypography,
            },
            {
                section: 'Tools',
                title: 'CopyProcessor',
                keywords: 'copy, clipboard, копия, буфер',
                route: DemoRoute.CopyProcessor,
            },
            {
                section: 'Tools',
                title: 'ElasticSticky',
                keywords:
                    'масштаб, sticky, заголовок, шапка, mobile, смартфон, pwa, native, hybrid',
                route: DemoRoute.ElasticSticky,
            },
            {
                section: 'Tools',
                title: 'Element',
                keywords: 'element, elementref, nativeelement, tag',
                route: DemoRoute.Element,
            },
            {
                section: 'Tools',
                title: 'Highlight',
                keywords: 'поиск, подсветка, search, find, найти',
                route: DemoRoute.Highlight,
            },
            {
                section: 'Tools',
                title: 'Media',
                keywords: 'player, video, audio, mp3, wav, html5, mp4, hd, 4k, dpi',
                route: DemoRoute.Media,
            },
            {
                section: 'Tools',
                title: 'Theme',
                keywords: 'color, mode, dark, night, тема, фон, вид, цвет',
                route: DemoRoute.Theme,
            },
            {
                section: 'Tools',
                title: 'Pan',
                keywords: 'pan, panning, панарамирование, пан',
                route: DemoRoute.Pan,
            },
            {
                section: 'Tools',
                title: 'Present',
                keywords: 'DOM, директива, появление, наличие, присутствие',
                route: DemoRoute.Present,
            },
            {
                section: 'Tools',
                title: 'HoveredChange',
                keywords: 'DOM, директива, наведение, курсор, pointer, mouse',
                route: DemoRoute.HoveredChange,
            },
            {
                section: 'Tools',
                title: 'Resizer',
                keywords: 'scale, drag, размер, ресайз',
                route: DemoRoute.Resizer,
            },
            {
                section: 'Tools',
                title: 'Ripple',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, android',
                route: DemoRoute.Ripple,
            },
            {
                section: 'Tools',
                title: 'Swipe',
                keywords: 'swipe, свайп',
                route: DemoRoute.Swipe,
            },
            {
                section: 'Tools',
                title: 'TextfieldController',
                keywords:
                    'контроллер, ввод, параметры, настройка, cleaner, autocomplete, exampleText, inputMode, ' +
                    'inputMode, labelOutside, size, type, нативные, инпут',
                route: DemoRoute.TextfieldController,
            },
            {
                section: 'Tools',
                title: 'NumberFormat',
                keywords: 'number, format, число, separator, precision, rounding, формат',
                route: DemoRoute.NumberFormat,
            },
            {
                section: 'Tools',
                title: 'DateFormat',
                keywords:
                    'date, format, дата, separator, год, year, month, месяц, день, day, формат',
                route: DemoRoute.DateFormat,
            },
            {
                section: 'Tools',
                title: 'Touchable',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, ios',
                route: DemoRoute.Touchable,
            },
            {
                section: 'Tools',
                title: 'Validator',
                keywords: 'form, форма, валидация',
                route: DemoRoute.Validator,
            },
            {
                section: 'Tools',
                title: 'ValueChanges',
                keywords: 'control, form, output, emit, value, changes',
                route: DemoRoute.ValueChanges,
            },
            {
                section: 'Tools',
                title: 'Zoom',
                keywords: 'zoom, scale, pinch, зум, масштаб',
                route: DemoRoute.Zoom,
            },
            {
                section: 'Tools',
                title: 'Fade',
                keywords: 'overflow, ellipsis, gradient, clamp, line',
                route: DemoRoute.Fade,
            },
            {
                section: 'Tools',
                title: 'Sensitive',
                keywords: 'sensitive, pixel, mask, пиксель, маска',
                route: DemoRoute.Sensitive,
                meta: {figmaVersion: '1.1.0'},
            },
            {
                section: 'Tools',
                title: 'Skeleton',
                keywords:
                    'верстка, markup, скелетон, loader, загрузка, skeleton, shimmer',
                route: DemoRoute.Skeleton,
                meta: {figmaVersion: '1.2.0'},
            },
        ],
    },
    {
        section: 'Tools',
        title: 'Pipes',
        subPages: [
            {
                section: 'Tools',
                title: 'Currency',
                keywords: 'currency, валюты, деньги, пайп, pipe',
                route: DemoRoute.Currency,
            },
            {
                section: 'Tools',
                title: 'Filters an array',
                keywords: 'filter, совпадения, ngfor, for, match, пайп, pipe',
                route: DemoRoute.FilterPipe,
            },
            {
                section: 'Tools',
                title: 'FilterByInput',
                keywords:
                    'filter, совпадения, ngfor, for, match, пайп, pipe, input, combobox',
                route: DemoRoute.FilterByInput,
            },
            {
                section: 'Tools',
                title: 'Flag',
                keywords: 'flag, country, state',
                route: DemoRoute.Flag,
            },
            {
                section: 'Tools',
                title: 'FormatNumber',
                keywords:
                    'format, форматирование, преобразование, пробелы, тысячи, пайп, pipe',
                route: DemoRoute.FormatNumber,
            },
            {
                section: 'Tools',
                title: 'Mapper',
                keywords: 'mapper, мап, преобразование, пайп, pipe',
                route: DemoRoute.Mapper,
            },
            {
                section: 'Tools',
                title: 'Stringify',
                keywords: 'string, tostring, мап, преобразование, пайп, pipe',
                route: DemoRoute.Stringify,
            },
            {
                section: 'Tools',
                title: 'StringifyContent',
                keywords:
                    'string, tostring, content, polymorpheus, мап, преобразование, пайп, pipe',
                route: DemoRoute.StringifyContent,
            },
            {
                section: 'Tools',
                title: 'Amount',
                keywords:
                    'amount, money, деньги, сумма, количество, cash, копейки, рубли, доллары, евро',
                route: DemoRoute.Amount,
                meta: {scheme: 'taiga', version: '1.1.1'},
            },
            {
                section: 'Tools',
                title: 'Emails',
                keywords: 'dadata, ввод, email, подсказка',
                route: DemoRoute.Emails,
            },
            {
                section: 'Tools',
                title: 'Obfuscate',
                keywords:
                    'obfuscate, mask, sensitive, pipe, обфускация, преобразование, пайп, маска, чувствительные, критичные',
                route: DemoRoute.Obfuscate,
            },
        ],
    },
    {
        section: 'Tools',
        title: 'Services',
        subPages: [
            {
                section: 'Tools',
                title: 'KeyboardService',
                keywords: 'сервис, service, keyboard, virtual, screen, ios, android',
                route: '/services/keyboard-service',
            },
        ],
    },
    {
        section: 'Tools',
        title: 'Utils',
        subPages: [
            {
                section: 'Tools',
                title: 'Math',
                keywords: `Инструменты, утилиты, математические, utils, utility, math,
                           round, clamp, inRange, normalizeToIntNumber, quantize`,
                route: DemoRoute.Math,
            },
            {
                section: 'Tools',
                title: 'Format',
                keywords: `Инструменты, утилиты, форматирующие, format, px, getCurrencySymbol, capitalize,
                           formatPhone`,
                route: DemoRoute.Format,
            },
            {
                section: 'Tools',
                title: 'DOM',
                keywords: `Инструменты, утилиты, DOM, checkFixedPosition, customEvent, getActualTarget,
                           getDocumentOrShadowRoot, getScrollParent, isElementAtPoint, isElementObscured, ДОМ,
                           getClipboardDataText`,
                route: DemoRoute.DOM,
            },
            {
                section: 'Tools',
                title: 'Miscellaneous',
                keywords: `Инструменты, утилиты, miscellaneous, прочие, assert, isNil, isPresent, flatLength,
                           getPaymentSystem, syncObject`,
                route: DemoRoute.Miscellaneous,
            },
            {
                section: 'Tools',
                title: 'Tokens',
                keywords: 'токены tokens',
                route: DemoRoute.Tokens,
            },
        ],
    },
] as const;
