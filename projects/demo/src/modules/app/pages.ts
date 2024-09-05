import type {TuiDocRoutePages} from '@taiga-ui/addon-doc';

import {DemoRoute} from './demo-routes';

export const pages: TuiDocRoutePages = [
    // Documentation
    {
        section: 'Documentation',
        title: 'Getting started',
        keywords: 'intro, how to, guide, main, главная, начало, инструкция',
        route: DemoRoute.GettingStarted,
    },
    {
        section: 'Documentation',
        title: 'Migration Guide',
        keywords: 'update, migrate, обновление, миграция',
        route: DemoRoute.MigrationGuide,
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
        title: 'Server Side Rendering',
        keywords: 'ssr, server, prerender, back, node, universal',
        route: DemoRoute.SSR,
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
        title: 'Taiga UI family',
        keywords: 'related, libraries, other, friendly, npm, packages',
        route: DemoRoute.Related,
    },
    {
        section: 'Documentation',
        title: 'StackBlitz',
        keywords: 'reproduce, issue, bug, sandbox, playground, test',
        route: DemoRoute.StackblitzStarter,
        target: '_blank',
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
                title: 'Disable animation',
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
    // Foundations
    {
        section: 'Foundations',
        title: 'Typography',
        keywords:
            'layout, text, верстка, markup, font, текст, шрифты, гельветика, sans, typography',
        route: DemoRoute.Typography,
    },
    {
        section: 'Foundations',
        title: 'Breakpoints',
        keywords:
            'css, breakpoint, breakpoints, media, query, брейкпоинты, responsive, adaptive, адаптив',
        route: DemoRoute.Breakpoints,
    },
    {
        section: 'Foundations',
        title: 'Colors',
        keywords: 'layout, верстка, palette, markup, цвет, палитра',
        route: DemoRoute.Colors,
    },
    {
        section: 'Icons',
        title: 'Lucide',
        keywords:
            'icons, icon, free, pack, lucide, markup, icons, image, картинка, свг, svg, графика',
        route: DemoRoute.IconsLucide,
    },
    {
        section: 'Icons',
        title: 'Material',
        keywords: 'icons, material, design, картинка, свг, svg, графика',
        route: DemoRoute.IconsMaterial,
    },
    {
        section: 'Icons',
        title: 'FontAwesome',
        keywords:
            'icons, fontawesome, awesome, font, design, картинка, свг, svg, графика',
        route: DemoRoute.IconsFontawesome,
    },
    {
        section: 'Foundations',
        title: 'Styles',
        subPages: [
            {
                section: 'Foundations',
                title: 'Shadows',
                keywords: 'layout, markup, тень, shadows',
                route: DemoRoute.Shadows,
            },
            {
                section: 'Foundations',
                title: 'Lists',
                keywords:
                    'layout, markup, списки, стили, список, точки, list, ol, ul, li, немаркированный, маркированный',
                route: DemoRoute.Lists,
            },
            {
                section: 'Foundations',
                title: 'Spaces',
                keywords:
                    'layout, markup, отступы, margin, padding, маржин, падинг, spaces',
                route: DemoRoute.Spaces,
            },
            {
                section: 'Foundations',
                title: 'Tables',
                keywords: 'верстка, markup, таблицы, tables',
                route: DemoRoute.Tables,
            },
            {
                section: 'Foundations',
                title: 'Form',
                keywords: 'верстка, markup, форма, ввод, пример, input, form',
                route: DemoRoute.Form,
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
        title: 'Alert',
        keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
        route: DemoRoute.Alert,
    },
    {
        section: 'Components',
        title: 'Avatar',
        keywords: 'аватар, image, pic, icon, картинка, изображение, avatar, stack',
        route: DemoRoute.Avatar,
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
            },
            {
                section: 'Components',
                title: 'BadgedContent',
                keywords: 'бэдж, бейдж, circle, овал, круг, badge, нотификация',
                route: DemoRoute.BadgedContent,
            },
            {
                section: 'Components',
                title: 'BadgeNotification',
                keywords: 'бэдж, бейдж, circle, круг, badge, alert, нотификация',
                route: DemoRoute.BadgeNotification,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Block',
        keywords: 'кнопка, чек, форма, form, ввод, checkbox, radio, радио, label',
        route: DemoRoute.Block,
    },
    {
        section: 'Layout',
        title: 'BlockStatus',
        keywords: 'блок, статус, block, status, block-status, blockstatus, layout',
        route: DemoRoute.BlockStatus,
    },
    {
        section: 'Components',
        title: 'Buttons',
        subPages: [
            {
                section: 'Components',
                title: 'Button',
                keywords: 'кнопка, button, icon-button, иконка',
                route: DemoRoute.Button,
            },
            {
                section: 'Components',
                title: 'ButtonClose',
                keywords: 'кнопка, button, close, закрыть',
                route: DemoRoute.ButtonClose,
            },
            {
                section: 'Components',
                title: 'ButtonGroup',
                keywords: 'кнопка, button, group, группа',
                route: DemoRoute.ButtonGroup,
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
    },
    {
        section: 'Components',
        title: 'Carousel',
        keywords: 'карусель, слайдер, slider, carousel',
        route: DemoRoute.Carousel,
    },
    {
        section: 'Components',
        title: 'Toggles',
        subPages: [
            {
                section: 'Components',
                title: 'Checkbox',
                keywords: 'чек, ввод, форма, form, checkbox',
                route: DemoRoute.Checkbox,
            },
            {
                section: 'Components',
                title: 'Radio',
                keywords: 'инпут, форма, ввод, radio, радио',
                route: DemoRoute.Radio,
            },
            {
                section: 'Components',
                title: 'Switch',
                keywords: 'инпут, форма, ввод, toggle, переключение',
                route: DemoRoute.Switch,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Dialog',
        keywords: 'попап, модал, popup, dialog, диалог, modal, окно',
        route: DemoRoute.Dialog,
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
        title: 'Error',
        keywords: 'error, ошибка',
        route: DemoRoute.Error,
    },
    {
        section: 'Components',
        title: 'Expand',
        keywords: 'аккордеон, expand, раскрывашка, spoiler, cut',
        route: DemoRoute.Expand,
    },
    {
        section: 'Components',
        title: 'ElasticContainer',
        keywords: 'container, height, transition, expand, контейнер, высота, анимация',
        route: DemoRoute.ElasticContainer,
    },
    {
        section: 'Components',
        title: 'Filter',
        keywords: 'фильтр, filters',
        route: DemoRoute.Filter,
    },
    {
        section: 'Components',
        title: 'Group',
        keywords: 'buttongroup, форма, поле, кнопка, группировка, группа, Group',
        route: DemoRoute.Group,
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
            },
            {
                section: 'Tools',
                title: 'Hint',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help, хинт',
                route: DemoRoute.Hint,
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
        title: 'Inputs',
        subPages: [
            {
                section: 'Components',
                title: 'Input',
                keywords: 'поле, инпут, форма, ввод, input, table, таблица',
                route: DemoRoute.Input,
            },
            {
                section: 'Components',
                title: 'InputCard',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: DemoRoute.InputCard,
            },
            {
                section: 'Components',
                title: 'InputCardGroup',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: DemoRoute.InputCardGroup,
            },
            {
                section: 'Components',
                title: 'InputDate',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar',
                route: DemoRoute.InputDate,
            },
            {
                section: 'Components',
                title: 'InputDateMulti',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, multiple',
                route: DemoRoute.InputDateMulti,
            },
            {
                section: 'Components',
                title: 'InputDateRange',
                keywords: 'calendar, календарь, даты, период',
                route: DemoRoute.InputDateRange,
            },
            {
                section: 'Components',
                title: 'InputDateTime',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, время, часы, минуты, секунды, мс',
                route: DemoRoute.InputDateTime,
            },
            {
                section: 'Components',
                title: 'InputInline',
                keywords: 'input',
                route: DemoRoute.InputInline,
            },
            {
                section: 'Components',
                title: 'InputMonth',
                keywords: 'поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: DemoRoute.InputMonth,
            },
            {
                section: 'Components',
                title: 'InputMonthRange',
                keywords: 'поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: DemoRoute.InputMonthRange,
            },
            {
                section: 'Components',
                title: 'InputNumber',
                keywords:
                    'поле, инпут, number, число, форма, ввод, input, money, деньги, ' +
                    'cash, копейки, рубли, доллары, евро, control, контрол',
                route: DemoRoute.InputNumber,
            },
            {
                section: 'Components',
                title: 'InputPhone',
                keywords: 'поле, инпут, форма, ввод, input, phone, телефон, номера',
                route: DemoRoute.InputPhone,
            },
            {
                section: 'Components',
                title: 'InputPhoneInternational',
                keywords:
                    'поле, инпут, форма, ввод, input, phone, телефон, страны, номера,',
                route: DemoRoute.InputPhoneInternational,
            },
            {
                section: 'Components',
                title: 'InputRange',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputRange,
            },
            {
                section: 'Components',
                title: 'InputSlider',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputSlider,
            },
            {
                section: 'Components',
                title: 'InputTag',
                keywords: 'поле, инпут, форма, ввод, input, tag, тэг',
                route: DemoRoute.InputTag,
            },
            {
                section: 'Components',
                title: 'InputTime',
                keywords:
                    'поле, инпут, форма, ввод, input, time, hour, minute, время, час, минута',
                route: DemoRoute.InputTime,
            },
            {
                section: 'Components',
                title: 'InputYear',
                keywords: 'поле, инпут, форма, ввод, input, год, дата',
                route: DemoRoute.InputYear,
            },
            {
                section: 'Components',
                title: 'PrimitiveTextfield',
                keywords: 'текст, инпут, база, input',
                route: DemoRoute.PrimitiveTextfield,
            },
            {
                section: 'Components',
                title: 'Textarea',
                keywords: 'поле, инпут, форма, ввод, textarea, area',
                route: DemoRoute.Textarea,
            },
            {
                section: 'Components',
                title: 'InputFiles',
                keywords: 'input-files, files, file, файлы',
                route: DemoRoute.InputFiles,
            },
            {
                section: 'Components',
                title: 'InputColor',
                keywords:
                    'input-color, gradient, picker, color, цвет, выбор, градиент, gradient, палитра',
                route: DemoRoute.InputColor,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Island',
        keywords: 'Island, остров, плашка',
        route: DemoRoute.Island,
    },
    {
        section: 'Components',
        title: 'ItemsWithMore',
        keywords: 'список, list, items, элементы, more, больше, overflow',
        route: DemoRoute.ItemsWithMore,
    },
    {
        section: 'Components',
        title: 'Label',
        keywords: 'лэйбл, метка, форма, label',
        route: DemoRoute.Label,
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
    },
    {
        section: 'Components',
        title: 'Loader',
        keywords:
            'загрузка, крутилка, лоадер, спиннер, спинер, крутится, мутится, spinner, loader',
        route: DemoRoute.Loader,
    },
    {
        section: 'Components',
        title: 'Notification',
        keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
        route: DemoRoute.Notification,
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
                title: 'MobileDialog',
                keywords:
                    'мобильный, ios, android, alert, сообщение, dialog, modal, popup, попап, диалог',
                route: DemoRoute.MobileDialog,
            },
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
        ],
    },
    {
        section: 'Components',
        title: 'PdfViewer',
        keywords: 'попап, модал, popup, pdf, preview, dialog, диалог, modal, окно',
        route: DemoRoute.PdfViewer,
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
            },
            {
                section: 'Components',
                title: 'ProgressCircle',
                keywords:
                    'progress, circle, ring, progress-circle, progress-ring, индикатор, загрузка, прогресс',
                route: DemoRoute.ProgressCircle,
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
        title: 'Confirm',
        keywords:
            'попап, модал, popup, dialog, диалог, modal, окно, confirm, approve, prompt, подтверждение',
        route: DemoRoute.Confirm,
    },
    {
        section: 'Components',
        title: 'Rating',
        keywords: 'рейтинг, оценка, звезда, rating, star, rate',
        route: DemoRoute.Rating,
    },
    {
        section: 'Components',
        title: 'Pulse',
        keywords: 'сигнал, пульс, pulse, signal',
        route: DemoRoute.Pulse,
    },
    {
        section: 'Components',
        title: 'Selects',
        subPages: [
            {
                section: 'Components',
                title: 'ComboBox',
                keywords:
                    'инпут, форма, ввод, select, селект, выбор, комбобокс, combobox',
                route: DemoRoute.ComboBox,
            },
            {
                section: 'Components',
                title: 'MultiSelect',
                keywords:
                    'инпут, форма, ввод, select, селект, выбор, multiselect, мультиселект',
                route: DemoRoute.MultiSelect,
            },
            {
                section: 'Components',
                title: 'Select',
                keywords: 'инпут, форма, ввод, select, селект, выбор',
                route: DemoRoute.Select,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Scrollbar',
        keywords: 'scroll, scrollbar, скролл, скроллбар',
        route: DemoRoute.Scrollbar,
    },
    {
        section: 'Components',
        title: 'Sheet',
        keywords: 'mobile, dialog, popup, map, details, шторка',
        route: DemoRoute.Sheet,
    },
    {
        section: 'Components',
        title: 'SheetDialog',
        keywords: 'mobile, dialog, popup, map, details, шторка',
        route: DemoRoute.SheetDialog,
    },
    {
        section: 'Components',
        title: 'Sliders',
        subPages: [
            {
                section: 'Components',
                title: 'InputRange',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputRange,
            },
            {
                section: 'Components',
                title: 'InputSlider',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: DemoRoute.InputSlider,
            },
            {
                section: 'Components',
                title: 'Slider',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: DemoRoute.Slider,
            },
            {
                section: 'Components',
                title: 'Range',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: DemoRoute.Range,
            },
        ],
    },
    {
        section: 'Components',
        title: 'Preview',
        keywords:
            'popup, dialog, диалог, попап, модалка, modal, просмотр, превью, предпросмотр, ' +
            'предпоказ, показ, pdf, jpg, png, viewer, файл',
        route: DemoRoute.Preview,
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
        title: 'Tag',
        keywords: 'tag, тэг',
        route: DemoRoute.Tag,
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
        section: 'Layout',
        title: 'BlockDetails',
        keywords: 'details, block, детали, блок',
        route: DemoRoute.BlockDetails,
    },
    {
        section: 'Layout',
        title: 'Cell',
        keywords: 'cell, feed, item',
        route: DemoRoute.Cell,
    },
    {
        section: 'Components',
        title: 'Chip',
        keywords: 'tag, тэг, badge',
        route: DemoRoute.Chip,
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
        keywords: 'header, заголовок, item',
        route: DemoRoute.Header,
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
        keywords: 'tabs, control, radio, navigation, навигация, beaver, вкладки, таб',
        route: DemoRoute.Segmented,
    },
    {
        section: 'Components',
        title: 'Surface',
        keywords: 'card, container, wrapper, image, blur, overlay',
        route: DemoRoute.Surface,
    },
    {
        section: 'Components',
        title: 'SwipeActions',
        keywords: 'swipe, action, свайп, card, действие',
        route: DemoRoute.SwipeActions,
    },
    {
        section: 'Components',
        title: 'Textfield',
        keywords:
            'form, input, select, textarea, combobox, ввод, форма, поле, password, inputpassword, пароль, код, шифр, copy, inputcopy',
        route: DemoRoute.Textfield,
    },
    {
        section: 'Components',
        title: 'Title',
        keywords: 'subtitle, заголовок, caption, description, подзаголовок',
        route: DemoRoute.Title,
    },
    {
        section: 'Layout',
        title: 'CardMedium',
        keywords: 'card, card-medium, medium, block, карточка, блок',
        route: DemoRoute.CardMedium,
    },
    {
        section: 'Layout',
        title: 'CardLarge',
        keywords: 'card, card-large, large, block, карточка, блок',
        route: DemoRoute.CardLarge,
    },
    {
        section: 'Layout',
        title: 'Navigation',
        keywords: 'шапка, header, sidebar, aside, сайдбар, навигация',
        route: DemoRoute.Navigation,
    },
    {
        section: 'Layout',
        title: 'Search',
        keywords: 'шапка, header, filter, table, beaver, поиск, фильтр, таблица',
        route: DemoRoute.Search,
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
        title: 'AppBar',
        keywords: 'mobile, ios, android, header, bar, navigation',
        route: DemoRoute.AppBar,
    },
    {
        section: 'Navigation',
        title: 'Breadcrumbs',
        keywords: 'шаги, навигация, nav, хлебные, крошки, breadcrumbs',
        route: DemoRoute.Breadcrumbs,
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
    },
    {
        section: 'Navigation',
        title: 'Tabs',
        keywords: 'mobile, ios, android, шаги, таб, tab, tabs, vertical, navigation',
        route: DemoRoute.Tabs,
    },
    // Customization
    {
        section: 'Customization',
        title: 'i18n',
        keywords: 'i18n, internationalization, local, translate, language',
        route: DemoRoute.I18N,
    },
    {
        section: 'Customization',
        title: 'Variables',
        keywords: 'colors, css, vars, custom, properties, style',
        route: DemoRoute.Variables,
    },
    {
        section: 'Customization',
        title: 'Appearances',
        keywords: 'colors, css, theme, custom, style',
        route: DemoRoute.Appearances,
    },
    {
        section: 'Customization',
        title: 'Dialog',
        subPages: [
            {
                section: 'Customization',
                title: 'Custom',
                keywords: 'dialog, modal, popup, theme, custom, style',
                route: DemoRoute.DialogCustom,
            },
            {
                section: 'Customization',
                title: 'Routable',
                keywords: 'dialog, modal, navigation, route, eager',
                route: DemoRoute.DialogRoutable,
            },
            {
                section: 'Customization',
                title: 'LazyRoutable',
                keywords: 'dialog, modal, navigation, route, lazy',
                route: DemoRoute.DialogLazyRoutable,
            },
        ],
    },
    {
        section: 'Customization',
        title: 'Portals',
        keywords: 'portal, custom, theme, style',
        route: DemoRoute.Portals,
    },
    {
        section: 'Customization',
        title: 'Viewport',
        keywords:
            'viewport, вьюпорт, портал, контекст, выпадашка, дропдаун, portal, dropdown',
        route: DemoRoute.Viewport,
    },
    // Tools
    {
        section: 'Tools',
        title: 'Animations',
        keywords: 'animation, animations, анимация, анимации',
        route: DemoRoute.Animations,
    },
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
                title: 'AutoFocus',
                keywords: 'focus, blur, фокус, авто',
                route: DemoRoute.AutoFocus,
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
                title: 'LazyLoading',
                keywords: 'img, skeleton, скелетон, загрузка, картинки',
                route: DemoRoute.LazyLoading,
            },
            {
                section: 'Tools',
                title: 'Let',
                keywords:
                    'let, переменная, шаблон, геттер, getter, pipe, пайп, async, подписка',
                route: DemoRoute.Let,
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
                title: 'Sidebar',
                keywords:
                    'sidebar, hamburger, drawer menu, mobile, смартфон, pwa, native, hybrid, сайдбар, меню',
                route: DemoRoute.Sidebar,
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
            },
            {
                section: 'Tools',
                title: 'Skeleton',
                keywords:
                    'верстка, markup, скелетон, loader, загрузка, skeleton, shimmer',
                route: DemoRoute.Skeleton,
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
                title: 'FormatDate',
                keywords:
                    'format, форматирование, преобразование, дата, date, timestamp, пайп, pipe',
                route: DemoRoute.FormatDate,
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
                title: 'IsPresent',
                keywords:
                    'present, существует, ngif, if, пайп, pipe, null, undefined, nil',
                route: DemoRoute.IsPresent,
            },
            {
                section: 'Tools',
                title: 'Mapper',
                keywords: 'mapper, мап, преобразование, пайп, pipe',
                route: DemoRoute.Mapper,
            },
            {
                section: 'Tools',
                title: 'FieldError',
                keywords: 'error, field, hint, ошибка, преобразование, пайп, pipe',
                route: DemoRoute.FieldError,
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
            },
            {
                section: 'Tools',
                title: 'Emails',
                keywords: 'dadata, ввод, email, подсказка',
                route: DemoRoute.Emails,
            },
        ],
    },
    {
        section: 'Tools',
        title: 'Services',
        subPages: [
            {
                section: 'Tools',
                title: 'BreakpointService',
                keywords:
                    'breakpoint, breakpoints, media, query, брейкпоинты, responsive, adaptive, адаптив',
                route: DemoRoute.BreakpointService,
            },
            {
                section: 'Tools',
                title: 'KeyboardService',
                keywords: 'сервис, service, keyboard, virtual, screen, ios, android',
                route: '/services/keyboard-service',
            },
            {
                section: 'Tools',
                title: 'ScrollService',
                keywords: 'scroll, прокрутка, скролл',
                route: DemoRoute.ScrollService,
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
                title: 'Browser',
                keywords:
                    'Инструменты, утилиты, browser, браузер, firefox, ie, edge, ios, chrome',
                route: DemoRoute.Browser,
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
            {
                section: 'Tools',
                title: 'Pure',
                keywords:
                    'Инструменты, утилиты, lazy, calculation, optimization, pipe, memoization',
                route: DemoRoute.Pure,
            },
        ],
    },
] as const;
