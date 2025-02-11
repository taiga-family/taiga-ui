import {TuiDocPages} from '@taiga-ui/addon-doc';

export const pages: TuiDocPages = [
    // Documentation
    {
        section: 'Documentation',
        title: 'Getting started',
        keywords: 'intro, how to, guide, main, главная, начало, инструкция',
        route: '/getting-started',
    },
    {
        section: 'Documentation',
        title: 'Browser support',
        keywords: 'chrome, safari, ie, edge, firefox',
        route: '/browser-support',
    },
    {
        section: 'Documentation',
        title: 'Changelog',
        keywords: 'release, change, changelog, archive, history',
        route: '/changelog',
    },
    {
        section: 'Documentation',
        title: 'Server Side Rendering',
        keywords: 'ssr, server, prerender, back, node, universal',
        route: '/ssr',
    },
    {
        section: 'Documentation',
        title: 'Documentation engine',
        keywords:
            'doc, book, samples, demo, документация, демо, портал, story, боковая, панель, навигация, примеры',
        route: '/tui-doc',
    },
    {
        section: 'Documentation',
        title: 'Taiga UI family',
        keywords: 'related, libraries, other, friendly, npm, packages',
        route: '/related',
    },
    {
        section: 'Documentation',
        title: 'StackBlitz',
        keywords: 'reproduce, issue, bug, sandbox, playground, test',
        route: '/stackblitz',
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
                route: '/testing/jest',
            },
            {
                section: 'Documentation',
                title: 'Disable animation',
                keywords:
                    'test, tests, testing, cypress, тестирование, тесты, тест, tips, советы',
                route: '/testing/disable-animation',
            },
            {
                section: 'Documentation',
                title: 'Our screenshot bot',
                keywords:
                    'test, tests, testing, cypress, тестирование, тесты, тест, tips, советы, github, github-app, bot, screenshot',
                route: '/testing/screenshot-bot',
            },
        ],
    },
    // Foundations
    {
        section: 'Foundations',
        title: 'Typography',
        keywords:
            'layout, text, верстка, markup, font, текст, шрифты, гельветика, sans, typography',
        route: '/typography',
    },
    {
        section: 'Foundations',
        title: 'Breakpoints',
        keywords:
            'css, breakpoint, breakpoints, media, query, брейкпоинты, responsive, adaptive, адаптив',
        route: '/breakpoints',
    },
    {
        section: 'Foundations',
        title: 'Colors',
        keywords: 'layout, верстка, palette, markup, цвет, палитра',
        route: '/colors',
    },
    {
        section: 'Foundations',
        title: 'Styles',
        subPages: [
            {
                section: 'Foundations',
                title: 'Shadows',
                keywords: 'layout, markup, тень, shadows',
                route: '/shadows',
            },
            {
                section: 'Foundations',
                title: 'Lists',
                keywords:
                    'layout, markup, списки, стили, список, точки, list, ol, ul, li, немаркированный, маркированный',
                route: '/lists',
            },
            {
                section: 'Foundations',
                title: 'Spaces',
                keywords:
                    'layout, markup, отступы, margin, padding, маржин, падинг, spaces',
                route: '/spaces',
            },
            {
                section: 'Foundations',
                title: 'Tables',
                keywords: 'верстка, markup, таблицы, tables',
                route: '/tables',
            },
            {
                section: 'Foundations',
                title: 'Skeleton',
                keywords: 'верстка, markup, скелетон, loader, загрузка, skeleton',
                route: '/skeleton',
            },
            {
                section: 'Foundations',
                title: 'Form',
                keywords: 'верстка, markup, форма, ввод, пример, input, form',
                route: '/form',
            },
        ],
    },
    // Components
    {
        section: 'Components',
        title: 'Accordion',
        keywords: 'open, аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/components/accordion',
    },
    {
        section: 'Components',
        title: 'Action',
        keywords: 'кнопка, button, ссылка, link, действие, icon, иконка',
        route: '/components/action',
    },
    {
        section: 'Components',
        title: 'Avatar',
        keywords: 'аватар, image, pic, картинка, изображение, avatar, stack',
        route: '/components/avatar',
    },
    {
        section: 'Components',
        title: 'Badges',
        subPages: [
            {
                section: 'Components',
                title: 'Badge',
                keywords: 'бэдж, овал, badge',
                route: '/components/badge',
            },
            {
                section: 'Components',
                title: 'BadgedContent',
                keywords: 'бэдж, овал, badge, нотификация',
                route: '/components/badged-content',
            },
        ],
    },
    {
        section: 'Layout',
        title: 'BlockStatus',
        keywords: 'блок, статус, block, status, block-status, blockstatus, layout',
        route: '/layout/block-status',
    },
    {
        section: 'Components',
        title: 'BottomSheet',
        keywords: 'mobile, dialog, popup, map, details, шторка, sheet',
        route: '/components/bottom-sheet',
    },
    {
        section: 'Components',
        title: 'Button',
        keywords: 'кнопка, button, icon-button, иконка',
        route: '/components/button',
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
                route: '/components/calendar',
            },
            {
                section: 'Components',
                title: 'CalendarRange',
                keywords: 'календарь, calendar, даты, период, day, week, month, year',
                route: '/components/calendar-range',
            },
            {
                section: 'Components',
                title: 'CalendarMonth',
                keywords:
                    'поле, инпут, форма, ввод, input, month, месяц, год, дата, day, week, month, year',
                route: '/components/calendar-month',
            },
        ],
    },
    {
        section: 'Components',
        title: 'ThumbnailCard',
        keywords:
            'карта, карточка, card, visa, mastercard, credit, icon, logo, дебетовая, кредитная, иконка, логотип',
        route: '/components/thumbnail-card',
    },
    {
        section: 'Components',
        title: 'Carousel',
        keywords: 'карусель, слайдер, slider, carousel',
        route: '/components/carousel',
    },
    {
        section: 'Components',
        title: 'Checkboxes',
        subPages: [
            {
                section: 'Components',
                title: 'Checkbox',
                keywords: 'чек, ввод, форма, form, checkbox',
                route: '/components/checkbox',
            },
            {
                section: 'Components',
                title: 'CheckboxBlock',
                keywords: 'кнопка, чек, форма, form, ввод, checkbox, CheckboxBlock',
                route: '/components/checkbox-block',
            },
            {
                section: 'Components',
                title: 'CheckboxLabeled',
                keywords: 'label, чек, форма, form, ввод, checkbox, checkboxLabeled',
                route: '/components/checkbox-labeled',
            },
            {
                section: 'Components',
                title: 'PrimitiveCheckbox',
                keywords: 'чек, checkbox, box, внутренние',
                route: '/components/primitive-checkbox',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Dialog',
        keywords: 'попап, модал, popup, dialog, диалог, modal, окно',
        route: '/components/dialog',
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
                route: '/components/data-list',
            },
            {
                section: 'Components',
                title: 'DataListWrapper',
                keywords:
                    'контекст, выпадашка, дропдаун, меню, Context, ContextMenu, option,' +
                    'optGroup, опции, tuiOption, варианты, dropdown, menu',
                route: '/components/data-list-wrapper',
            },
            {
                section: 'Components',
                title: 'HostedDropdown',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, меню, menu',
                route: '/components/hosted-dropdown',
            },
            {
                section: 'Tools',
                title: 'Dropdown',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, Context',
                route: '/directives/dropdown',
            },
            {
                section: 'Tools',
                title: 'DropdownContext',
                keywords: 'dropdown, контекст, выпадашка, дропдаун, Context, right-click',
                route: '/directives/dropdown-context',
            },
            {
                section: 'Tools',
                title: 'DropdownHover',
                keywords: 'dropdown, hover, выпадашка, дропдаун',
                route: '/directives/dropdown-hover',
            },
            {
                section: 'Tools',
                title: 'DropdownSelection',
                keywords:
                    'dropdown, контекст, selection, выделение, выпадашка, дропдаун, Context',
                route: '/directives/dropdown-selection',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Error',
        keywords: 'error, ошибка',
        route: '/components/error',
    },
    {
        section: 'Components',
        title: 'Expand',
        keywords: 'аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/components/expand',
    },
    {
        section: 'Components',
        title: 'ElasticContainer',
        keywords: 'container, height, transition, expand, контейнер, высота, анимация',
        route: '/components/elastic-container',
    },
    {
        section: 'Components',
        title: 'Filter',
        keywords: 'фильтр, filters',
        route: '/components/filter',
    },
    {
        section: 'Components',
        title: 'Group',
        keywords: 'buttongroup, форма, поле, кнопка, группировка, группа, Group',
        route: '/components/group',
    },
    {
        section: 'Components',
        title: 'Hint',
        subPages: [
            {
                section: 'Components',
                title: 'Tooltip',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help',
                route: '/components/tooltip',
            },
            {
                section: 'Tools',
                title: 'Hint',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help, хинт',
                route: '/directives/hint',
            },
            {
                section: 'Tools',
                title: 'HintDescribe',
                keywords:
                    'tooltip, тултип, hint, подсказка, помощь, help, хинт, accessibility, a11y, доступность',
                route: '/directives/hint-describe',
            },
            {
                section: 'Tools',
                title: 'HintManual',
                keywords:
                    'tooltip, тултип, hint, подсказка, помощь, help, manual, программный, хинт',
                route: '/directives/hint-manual',
            },
            {
                section: 'Tools',
                title: 'HintPointer',
                keywords: 'tooltip, тултип, hint, подсказка, помощь, help, хинт, курсор',
                route: '/directives/hint-pointer',
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
                route: '/components/input',
            },
            {
                section: 'Components',
                title: 'InputCard',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/components/input-card',
            },
            {
                section: 'Components',
                title: 'InputCardGrouped',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/components/input-card-grouped',
            },
            {
                section: 'Components',
                title: 'InputCopy',
                keywords: 'поле, инпут, форма, копия, скопировать, ввод, input, copy',
                route: '/components/input-copy',
            },
            {
                section: 'Components',
                title: 'InputCount',
                keywords: 'селект, форма, числа, ввод, input, select, count',
                route: '/components/input-count',
            },
            {
                section: 'Components',
                title: 'InputDate',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar',
                route: '/components/input-date',
            },
            {
                section: 'Components',
                title: 'InputDateMulti',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, multiple',
                route: '/components/input-date-multi',
            },
            {
                section: 'Components',
                title: 'InputDateRange',
                keywords: 'calendar, календарь, даты, период',
                route: '/components/input-date-range',
            },
            {
                section: 'Components',
                title: 'InputDateTime',
                keywords:
                    'поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, время, часы, минуты, секунды, мс',
                route: '/components/input-date-time',
            },
            {
                section: 'Components',
                title: 'InputInline',
                keywords: 'input',
                route: '/components/input-inline',
            },
            {
                section: 'Components',
                title: 'InputMonth',
                keywords: 'поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/components/input-month',
            },
            {
                section: 'Components',
                title: 'InputMonthRange',
                keywords: 'поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/components/input-month-range',
            },
            {
                section: 'Components',
                title: 'InputNumber',
                keywords:
                    'поле, инпут, number, число, форма, ввод, input, money, деньги, ' +
                    'cash, копейки, рубли, доллары, евро, control, контрол',
                route: '/components/input-number',
            },
            {
                section: 'Components',
                title: 'InputPassword',
                keywords: 'поле, инпут, форма, ввод, input, password, пароль, код, шифр',
                route: '/components/input-password',
            },
            {
                section: 'Components',
                title: 'InputPhone',
                keywords: 'поле, инпут, форма, ввод, input, phone, телефон, номера',
                route: '/components/input-phone',
            },
            {
                section: 'Components',
                title: 'InputPhoneInternational',
                keywords:
                    'поле, инпут, форма, ввод, input, phone, телефон, страны, номера,',
                route: '/components/input-phone-international',
            },
            {
                section: 'Components',
                title: 'InputRange',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/components/input-range',
            },
            {
                section: 'Components',
                title: 'InputSlider',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/components/input-slider',
            },
            {
                section: 'Components',
                title: 'InputTag',
                keywords: 'поле, инпут, форма, ввод, input, tag, тэг',
                route: '/components/input-tag',
            },
            {
                section: 'Components',
                title: 'InputTime',
                keywords:
                    'поле, инпут, форма, ввод, input, time, hour, minute, время, час, минута',
                route: '/components/input-time',
            },
            {
                section: 'Components',
                title: 'InputYear',
                keywords: 'поле, инпут, форма, ввод, input, год, дата',
                route: '/components/input-year',
            },
            {
                section: 'Components',
                title: 'PrimitiveTextfield',
                keywords: 'текст, инпут, база, input',
                route: '/components/primitive-textfield',
            },
            {
                section: 'Components',
                title: 'Textarea',
                keywords: 'поле, инпут, форма, ввод, textarea, area',
                route: '/components/textarea',
            },
            {
                section: 'Components',
                title: 'InputFiles',
                keywords: 'input-files, files, file, файлы',
                route: '/components/input-files',
            },
        ],
    },
    {
        section: 'Components',
        title: 'ColorPicker',
        keywords: 'color, picker, input, color',
        route: 'https://taiga-family.github.io/editor/color-picker',
        target: '_blank',
    },
    {
        section: 'Components',
        title: 'Island',
        keywords: 'Island, остров, плашка',
        route: '/components/island',
    },
    {
        section: 'Components',
        title: 'ItemsWithMore',
        keywords: 'список, list, items, элементы, more, больше, overflow',
        route: '/components/items-with-more',
    },
    {
        section: 'Components',
        title: 'Label',
        keywords: 'лэйбл, метка, форма, label',
        route: '/components/label',
    },
    {
        section: 'Components',
        title: 'LineClamp',
        keywords: 'обрезание, текст, ticker, тикер, overflow',
        route: '/components/line-clamp',
    },
    {
        section: 'Components',
        title: 'Link',
        keywords: 'href, anchor, ссылка, псевдо, pseudo, link',
        route: '/components/link',
    },
    {
        section: 'Components',
        title: 'Loader',
        keywords:
            'загрузка, крутилка, лоадер, спиннер, спинер, крутится, мутится, spinner, loader',
        route: '/components/loader',
    },
    {
        section: 'Components',
        title: 'Money',
        keywords: 'money, деньги, cash, копейки, рубли, доллары, евро',
        route: '/components/money',
    },
    {
        section: 'Components',
        title: 'Notification',
        keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
        route: '/components/notification',
    },
    {
        section: 'Components',
        title: 'Push',
        keywords: 'push, пуш, нотификация, notification, alert',
        route: '/components/push',
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
                route: '/components/mobile-dialog',
            },
            {
                section: 'Components',
                title: 'MobileCalendar',
                keywords:
                    'календарь, день, неделя, месяц, год, дата, calendar, datapicker, data, picker',
                route: '/components/mobile-calendar',
            },
            {
                section: 'Components',
                title: 'PullToRefresh',
                keywords:
                    'mobile, потянуть, обновление, лоадер, loader, крутилка, загрузка',
                route: '/components/pull-to-refresh',
            },
        ],
    },
    {
        section: 'Components',
        title: 'PdfViewer',
        keywords: 'попап, модал, popup, pdf, preview, dialog, диалог, modal, окно',
        route: '/components/pdf-viewer',
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
                route: '/components/progress-bar',
            },
            {
                section: 'Components',
                title: 'ProgressCircle',
                keywords:
                    'progress, circle, ring, progress-circle, progress-ring, индикатор, загрузка, прогресс',
                route: '/components/progress-circle',
            },
            {
                section: 'Components',
                title: 'ProgressSegmented',
                keywords:
                    'progress, progress-segmented, индикатор, загрузка, прогресс, segment, segments, segmented',
                route: '/components/progress-segmented',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Prompt',
        keywords:
            'попап, модал, popup, dialog, диалог, modal, окно, confirm, approve, подтверждение',
        route: '/components/prompt',
    },
    {
        section: 'Components',
        title: 'Radio',
        subPages: [
            {
                section: 'Components',
                title: 'Radio',
                keywords: 'инпут, форма, ввод, radio, радио',
                route: '/components/radio',
            },
            {
                section: 'Components',
                title: 'RadioBlock',
                keywords: 'инпут, кнопка, форма, ввод, radio, радио, radio-boxed',
                route: '/components/radio-block',
            },
            {
                section: 'Components',
                title: 'RadioLabeled',
                keywords: 'инпут, форма, ввод, radio, радио, label, лэйбл',
                route: '/components/radio-labeled',
            },
            {
                section: 'Components',
                title: 'RadioList',
                keywords: 'инпут, форма, ввод, radio, радио, список, list',
                route: '/components/radio-list',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Rating',
        keywords: 'рейтинг, оценка, звезда, rating, star, rate',
        route: '/components/rating',
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
                route: '/components/combo-box',
            },
            {
                section: 'Components',
                title: 'MultiSelect',
                keywords:
                    'инпут, форма, ввод, select, селект, выбор, multiselect, мультиселект',
                route: '/components/multi-select',
            },
            {
                section: 'Components',
                title: 'Select',
                keywords: 'инпут, форма, ввод, select, селект, выбор',
                route: '/components/select',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Scrollbar',
        keywords: 'scroll, scrollbar, скролл, скроллбар',
        route: '/components/scrollbar',
    },
    {
        section: 'Components',
        title: 'Sheet',
        keywords: 'mobile, dialog, popup, map, details, шторка',
        route: '/components/sheet',
    },
    {
        section: 'Components',
        title: 'SheetDialog',
        keywords: 'mobile, dialog, popup, map, details, шторка',
        route: '/components/sheet-dialog',
    },
    {
        section: 'Components',
        title: 'Sliders',
        subPages: [
            {
                section: 'Components',
                title: 'InputRange',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/components/input-range',
            },
            {
                section: 'Components',
                title: 'InputSlider',
                keywords: 'поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/components/input-slider',
            },
            {
                section: 'Components',
                title: 'Slider',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/components/slider',
            },
            {
                section: 'Components',
                title: 'Range',
                keywords: 'инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/components/range',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Preview',
        keywords:
            'popup, dialog, диалог, попап, модалка, modal, просмотр, превью, предпросмотр, ' +
            'предпоказ, показ, pdf, jpg, png, viewer, файл',
        route: '/components/preview',
    },
    {
        section: 'Components',
        title: 'Status',
        keywords: 'dot, точка, бейдж, badge, success, failure, error',
        route: '/experimental/status',
    },
    {
        section: 'Components',
        title: 'Table',
        subPages: [
            {
                section: 'Components',
                title: 'Reorder',
                keywords: 'таблица, столбцы, порядок, order, выбор',
                route: '/components/reorder',
            },
            {
                section: 'Components',
                title: 'TablePagination',
                keywords: 'таблица, страницы, pagination, page',
                route: '/components/table-pagination',
            },
            {
                section: 'Components',
                title: 'TableFilters',
                keywords: 'таблица, filter, фильтр',
                route: '/components/table-filters',
            },
            {
                section: 'Components',
                title: 'Table',
                keywords: 'таблица, data, cell, tr, th, td, row, col, grid',
                route: '/components/table',
            },
        ],
    },
    {
        section: 'Components',
        title: 'Tag',
        keywords: 'tag, тэг',
        route: '/components/tag',
    },
    {
        section: 'Components',
        title: 'ThemeNight',
        keywords: 'theme, dark, night, тема, тэг',
        route: '/components/theme-night',
    },
    {
        section: 'Components',
        title: 'ThemeSwitcher',
        keywords: 'тема, blue, цвета, стили, кастомизация, синий, синяя',
        route: '/components/theme-switcher',
    },
    {
        section: 'Components',
        title: 'Tiles',
        keywords: 'tile, grid, грид, widgets, drag, drop',
        route: '/components/tiles',
    },
    {
        section: 'Components',
        title: 'Toggle',
        keywords: 'инпут, форма, ввод, toggle, переключение',
        route: '/components/toggle',
    },
    {
        section: 'Components',
        title: 'Tree',
        keywords: 'tree, view, multi, recursive, folders, рекурсия, дерево, папки',
        route: '/components/tree',
    },
    {
        section: 'Components',
        title: 'Svg',
        keywords: 'svg, свг',
        route: '/icons/overview/Component',
    },
    // Experimental
    {
        section: 'Experimental',
        title: 'AppBar',
        keywords: 'mobile, ios, android, header, bar, navigation',
        route: '/experimental/app-bar',
    },
    {
        section: 'Experimental',
        title: 'ActionBar',
        keywords: 'bar, action, tablebar, бар, multi',
        route: '/experimental/action-bar',
    },
    {
        section: 'Experimental',
        title: 'Avatar ',
        keywords: 'аватар, image, pic, icon, картинка, изображение, avatar, stack',
        route: '/experimental/avatar',
    },
    {
        section: 'Experimental',
        title: 'Badge',
        subPages: [
            {
                section: 'Experimental',
                title: 'Badge ',
                keywords: 'бэдж, бейдж, овал, badge, нотификация',
                route: '/experimental/badge',
            },
            {
                section: 'Experimental',
                title: 'BadgeNotification',
                keywords: 'бэдж, бейдж, circle, круг, badge, alert, нотификация',
                route: '/experimental/badge-notification',
            },
            {
                section: 'Experimental',
                title: 'BadgedContent ',
                keywords: 'бэдж, бейдж, circle, овал, круг, badge, нотификация',
                route: '/experimental/badged-content',
            },
        ],
    },
    {
        section: 'Experimental',
        title: 'BlockDetails',
        keywords: 'details, block, детали, блок',
        route: '/experimental/block-details',
    },
    {
        section: 'Experimental',
        title: 'Button',
        subPages: [
            {
                section: 'Experimental',
                title: 'Button ',
                keywords: 'кнопка, button, icon-button, иконка',
                route: '/experimental/button',
            },
            {
                section: 'Experimental',
                title: 'ButtonVertical',
                keywords: 'кнопка, button, vertical-button, вертикальная',
                route: '/experimental/button-vertical',
            },
            {
                section: 'Experimental',
                title: 'ButtonClose',
                keywords: 'кнопка, button, close, закрыть',
                route: '/experimental/button-close',
            },
            {
                section: 'Experimental',
                title: 'ButtonGroup',
                keywords: 'кнопка, button, group, группа',
                route: '/experimental/button-group',
            },
        ],
    },
    {
        section: 'Experimental',
        title: 'Cell',
        keywords: 'cell, feed, item',
        route: '/experimental/cell',
    },
    {
        section: 'Experimental',
        title: 'Chip',
        keywords: 'tag, тэг, badge',
        route: '/experimental/chip',
    },
    {
        section: 'Experimental',
        title: 'Comment',
        keywords: 'comment, tip, коммент',
        route: '/experimental/comment',
    },
    {
        section: 'Experimental',
        title: 'Compass',
        keywords: 'compass, user, point, dot, карта, точка',
        route: '/experimental/compass',
    },
    {
        section: 'Experimental',
        title: 'Fade',
        keywords: 'overflow, ellipsis, gradient, clamp, line',
        route: '/experimental/fade',
    },
    {
        section: 'Experimental',
        title: 'Icon',
        keywords: 'icons, image, картинка, свг, svg, графика, иконка',
        route: '/experimental/icon',
    },
    {
        section: 'Experimental',
        title: 'Header',
        keywords: 'header, заголовок, item',
        route: '/experimental/header',
    },
    {
        section: 'Experimental',
        title: 'ProgressSegmented ',
        keywords:
            'progress, progress-segmented, индикатор, загрузка, прогресс, segment, segments, segmented',
        route: '/experimental/progress-segmented',
    },
    {
        section: 'Experimental',
        title: 'Rating ',
        keywords: 'рейтинг, оценка, звезда, rating, star, rate',
        route: '/experimental/rating',
    },
    {
        section: 'Experimental',
        title: 'Segmented',
        keywords: 'tabs, control, radio, navigation, навигация, вкладки, таб',
        route: '/experimental/segmented',
    },
    {
        section: 'Experimental',
        title: 'Sensitive',
        keywords: 'sensitive, pixel, mask, пиксель, маска',
        route: '/experimental/sensitive',
    },
    {
        section: 'Experimental',
        title: 'Skeleton ',
        keywords: 'верстка, markup, скелетон, loader, загрузка, skeleton, shimmer',
        route: '/experimental/skeleton',
    },
    {
        section: 'Experimental',
        title: 'Surface',
        keywords: 'card, container, wrapper, image, blur, overlay',
        route: '/experimental/surface',
    },
    {
        section: 'Experimental',
        title: 'SwipeActions',
        keywords: 'swipe, action, свайп, card, действие',
        route: '/experimental/swipe-actions',
    },
    {
        section: 'Experimental',
        title: 'Title',
        keywords: 'subtitle, заголовок, caption, description, подзаголовок',
        route: '/experimental/title',
    },
    {
        section: 'Experimental',
        title: 'ThumbnailCard ',
        keywords:
            'карта, карточка, card, visa, mastercard, credit, icon, logo, дебетовая, кредитная, иконка, логотип',
        route: '/experimental/thumbnail-card',
    },
    {
        section: 'Experimental',
        title: 'Checkbox ',
        keywords: 'чек, радио, ввод, форма, form, checkbox, radio, toggle',
        route: '/experimental/checkbox',
    },
    {
        section: 'Experimental',
        title: 'Radio ',
        keywords: 'чек, радио, ввод, форма, form, checkbox, radio, toggle',
        route: '/experimental/radio',
    },
    {
        section: 'Experimental',
        title: 'Toggle ',
        keywords: 'чек, радио, ввод, форма, form, checkbox, radio, toggle',
        route: '/experimental/toggle',
    },
    {
        section: 'Experimental',
        title: 'Amount ',
        keywords:
            'amount, money, деньги, сумма, количество, cash, копейки, рубли, доллары, евро',
        route: '/experimental/amount',
    },
    {
        section: 'Experimental',
        title: 'Appearance',
        keywords: 'colors, css, theme, custom, style',
        route: '/experimental/appearance',
    },
    {
        section: 'Experimental',
        title: 'CardMedium',
        keywords: 'card, card-medium, medium, block, карточка, блок',
        route: '/experimental/card-medium',
    },
    {
        section: 'Experimental',
        title: 'CardLarge',
        keywords: 'card, card-large, large, block, карточка, блок',
        route: '/experimental/card-large',
    },
    {
        section: 'Experimental',
        title: 'Navigation',
        keywords: 'шапка, header, sidebar, aside, сайдбар, навигация',
        route: '/experimental/navigation',
    },
    {
        section: 'Experimental',
        title: 'Pin',
        keywords: 'пин, pin, map, карта, точка, dot, point',
        route: '/experimental/pin',
    },
    // Charts
    {
        section: 'Charts',
        title: 'ArcChart',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма, дуга, кольцо',
        route: '/charts/arc-chart',
    },
    {
        section: 'Charts',
        title: 'Axes',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма, оси, координаты',
        route: '/charts/axes',
    },
    {
        section: 'Charts',
        title: 'Bar',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: '/charts/bar',
    },
    {
        section: 'Charts',
        title: 'BarChart',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: '/charts/bar-chart',
    },
    {
        section: 'Charts',
        title: 'BarSet',
        keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
        route: '/charts/bar-set',
    },
    {
        section: 'Charts',
        title: 'LegendItem',
        keywords: 'график, chart, легенда, подпись, диаграмма',
        route: '/charts/legend-item',
    },
    {
        section: 'Charts',
        title: 'LineChart',
        keywords: 'график, chart, линия, кривая, диаграмма',
        route: '/charts/line-chart',
    },
    {
        section: 'Charts',
        title: 'LineDaysChart',
        keywords: 'график, chart, линия, кривая, диаграмма, год, месяц',
        route: '/charts/line-days-chart',
    },
    {
        section: 'Charts',
        title: 'PieChart',
        keywords: 'график, чарт, chart, graph, пирог, круг, диаграмма',
        route: '/charts/pie-chart',
    },
    {
        section: 'Charts',
        title: 'RingChart',
        keywords: 'график, чарт, chart, graph, кольцо, круг, диаграмма',
        route: '/charts/ring-chart',
    },
    // Icons
    {
        section: 'Icons',
        title: 'Overview',
        keywords:
            'icons, icon, free, pack, markup, icons, image, картинка, свг, svg, графика',
        route: '/icons/overview',
    },
    {
        section: 'Icons',
        title: 'Mapping',
        keywords:
            'icons, icon, mapping, mapped, mapper, material, svg, TUI_SVG_OPTIONS, tuiSvgOptionsProvider, иконки, картинка, свг, иконка, графика',
        route: '/icons/mapping',
    },
    {
        section: 'Icons',
        title: 'Bundled',
        keywords:
            'icons, icon, bundled, svg, SvgService, define, иконки, картинка, свг, иконка, графика',
        route: '/icons/bundled',
    },
    {
        section: 'Icons',
        title: 'Customization',
        keywords:
            'icons, icon, svg, customization, стили, иконки, картинка, свг, иконка, графика',
        route: '/icons/customization',
    },
    {
        section: 'Icons',
        title: 'MarkerIcon',
        keywords: 'icons, icon, marker, иконки, картинка, свг, иконка, графика',
        route: '/icons/marker-icon',
    },
    // Navigation
    {
        section: 'Navigation',
        title: 'Breadcrumbs',
        keywords: 'шаги, навигация, nav, хлебные, крошки, breadcrumbs',
        route: '/navigation/breadcrumbs',
    },
    {
        section: 'Navigation',
        title: 'Pagination',
        keywords:
            'пагинатор, страницы, пэйджы, навигация, navigation, paginator, pagination',
        route: '/navigation/pagination',
    },
    {
        section: 'Navigation',
        title: 'Stepper',
        keywords: 'stepper, step, группа, group, шаг, check',
        route: '/navigation/stepper',
    },
    {
        section: 'Navigation',
        title: 'TabBar',
        keywords: 'mobile, ios, android, шаги, таб, tab, tabs, bar, navigation',
        route: '/navigation/tab-bar',
    },
    {
        section: 'Navigation',
        title: 'Tabs',
        keywords: 'mobile, ios, android, шаги, таб, tab, tabs, vertical, navigation',
        route: '/navigation/tabs',
    },
    // Customization
    {
        section: 'Customization',
        title: 'i18n',
        keywords: 'i18n, internationalization, local, translate, language',
        route: '/i18n',
    },
    {
        section: 'Customization',
        title: 'Variables',
        keywords: 'colors, css, vars, custom, properties, style',
        route: '/variables',
    },
    {
        section: 'Customization',
        title: 'Wrapper',
        keywords: 'colors, css, theme, custom, style',
        route: '/wrapper',
    },
    {
        section: 'Customization',
        title: 'Dialog',
        subPages: [
            {
                section: 'Customization',
                title: 'Custom',
                keywords: 'dialog, modal, popup, theme, custom, style',
                route: '/dialog/custom',
            },
            {
                section: 'Customization',
                title: 'Routable',
                keywords: 'dialog, modal, navigation, route, eager',
                route: '/dialog/routable',
            },
            {
                section: 'Customization',
                title: 'LazyRoutable',
                keywords: 'dialog, modal, navigation, route, lazy',
                route: '/dialog/lazy-routable',
            },
        ],
    },
    {
        section: 'Customization',
        title: 'Portals',
        keywords: 'portal, custom, theme, style',
        route: '/portals',
    },
    {
        section: 'Customization',
        title: 'Viewport',
        keywords:
            'viewport, вьюпорт, портал, контекст, выпадашка, дропдаун, portal, dropdown',
        route: '/viewport',
    },
    // Tools
    {
        section: 'Tools',
        title: 'Animations',
        keywords: 'animation, animations, анимация, анимации',
        route: '/animations',
    },
    {
        section: 'Tools',
        title: 'Directives',
        subPages: [
            {
                section: 'Tools',
                title: 'ActiveZone',
                keywords: 'focus, blur, фокус, activeElement',
                route: '/directives/active-zone',
            },
            {
                section: 'Tools',
                title: 'AutoFocus',
                keywords: 'focus, blur, фокус, авто',
                route: '/directives/auto-focus',
            },
            {
                section: 'Tools',
                title: 'CopyProcessor',
                keywords: 'copy, clipboard, копия, буфер',
                route: '/directives/copy-processor',
            },
            {
                section: 'Tools',
                title: 'ElasticSticky',
                keywords:
                    'масштаб, sticky, заголовок, шапка, mobile, смартфон, pwa, native, hybrid',
                route: '/directives/elastic-sticky',
            },
            {
                section: 'Tools',
                title: 'Element',
                keywords: 'element, elementref, nativeelement, tag',
                route: 'directives/element',
            },
            {
                section: 'Tools',
                title: 'For',
                keywords: 'loading, cycle, empty, list, iterate',
                route: 'directives/for',
            },
            {
                section: 'Tools',
                title: 'Highlight',
                keywords: 'поиск, подсветка, search, find, найти',
                route: '/directives/highlight',
            },
            {
                section: 'Tools',
                title: 'LazyLoading',
                keywords: 'img, skeleton, скелетон, загрузка, картинки',
                route: '/directives/lazy-loading',
            },
            {
                section: 'Tools',
                title: 'Let',
                keywords:
                    'let, переменная, шаблон, геттер, getter, pipe, пайп, async, подписка',
                route: '/directives/let',
            },
            {
                section: 'Tools',
                title: 'Media',
                keywords: 'player, video, audio, mp3, wav, html5, mp4, hd, 4k, dpi',
                route: '/directives/media',
            },
            {
                section: 'Tools',
                title: 'Mode',
                keywords: 'фон, вид, цвет',
                route: '/directives/mode',
            },
            {
                section: 'Tools',
                title: 'Overscroll',
                keywords: 'overscroll, scroll, скролл',
                route: '/directives/overscroll',
            },
            {
                section: 'Tools',
                title: 'Pan',
                keywords: 'pan, panning, панарамирование, пан',
                route: '/directives/pan',
            },
            {
                section: 'Tools',
                title: 'Portal',
                keywords: 'template, шаблон, портал',
                route: '/directives/portal',
            },
            {
                section: 'Tools',
                title: 'Present',
                keywords: 'DOM, директива, появление, наличие, присутствие',
                route: '/directives/present',
            },
            {
                section: 'Tools',
                title: 'HoveredChange',
                keywords: 'DOM, директива, наведение, курсор, pointer, mouse',
                route: '/directives/hovered-change',
            },
            {
                section: 'Tools',
                title: 'Resizer',
                keywords: 'scale, drag, размер, ресайз',
                route: '/directives/resizer',
            },
            {
                section: 'Tools',
                title: 'Ripple',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, android',
                route: '/directives/ripple',
            },
            {
                section: 'Tools',
                title: 'Sidebar',
                keywords:
                    'sidebar, hamburger, drawer menu, mobile, смартфон, pwa, native, hybrid, сайдбар, меню',
                route: '/directives/sidebar',
            },
            {
                section: 'Tools',
                title: 'Swipe',
                keywords: 'swipe, свайп',
                route: '/directives/swipe',
            },
            {
                section: 'Tools',
                title: 'TextfieldController',
                keywords:
                    'контроллер, ввод, параметры, настройка, cleaner, autocomplete, exampleText, inputMode, ' +
                    'inputMode, labelOutside, size, type, нативные, инпут',
                route: '/directives/textfield-controller',
            },
            {
                section: 'Tools',
                title: 'Touchable',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, ios',
                route: '/directives/touchable',
            },
            {
                section: 'Tools',
                title: 'Validator',
                keywords: 'form, форма, валидация',
                route: '/directives/validator',
            },
            {
                section: 'Tools',
                title: 'ValueChanges',
                keywords: 'control, form, output, emit, value, changes',
                route: '/directives/value-changes',
            },
            {
                section: 'Tools',
                title: 'Zoom',
                keywords: 'zoom, scale, pinch, зум, масштаб',
                route: '/directives/zoom',
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
                route: '/pipes/currency',
            },
            {
                section: 'Tools',
                title: 'Filters an array',
                keywords: 'filter, совпадения, ngfor, for, match, пайп, pipe',
                route: '/pipes/filter',
            },
            {
                section: 'Tools',
                title: 'FilterByInput',
                keywords:
                    'filter, совпадения, ngfor, for, match, пайп, pipe, input, combobox',
                route: '/pipes/filter-by-input',
            },
            {
                section: 'Tools',
                title: 'Flag',
                keywords: 'flag, country, state',
                route: '/pipes/flag',
            },
            {
                section: 'Tools',
                title: 'FormatDate',
                keywords:
                    'format, форматирование, преобразование, дата, date, timestamp, пайп, pipe',
                route: '/pipes/format-date',
            },
            {
                section: 'Tools',
                title: 'FormatNumber',
                keywords:
                    'format, форматирование, преобразование, пробелы, тысячи, пайп, pipe',
                route: '/pipes/format-number',
            },
            {
                section: 'Tools',
                title: 'FormatPhone',
                keywords:
                    'format, форматирование, преобразование, phone, телефон, пайп, pipe',
                route: '/pipes/format-phone',
            },
            {
                section: 'Tools',
                title: 'IsPresent',
                keywords:
                    'present, существует, ngif, if, пайп, pipe, null, undefined, nil',
                route: '/pipes/is-present',
            },
            {
                section: 'Tools',
                title: 'Mapper',
                keywords: 'mapper, мап, преобразование, пайп, pipe',
                route: '/pipes/mapper',
            },
            {
                section: 'Tools',
                title: 'FieldError',
                keywords: 'error, field, hint, ошибка, преобразование, пайп, pipe',
                route: '/pipes/field-error',
            },
            {
                section: 'Tools',
                title: 'Stringify',
                keywords: 'string, tostring, мап, преобразование, пайп, pipe',
                route: '/pipes/stringify',
            },
            {
                section: 'Tools',
                title: 'StringifyContent',
                keywords:
                    'string, tostring, content, polymorpheus, мап, преобразование, пайп, pipe',
                route: '/pipes/stringify-content',
            },
        ],
    },
    {
        section: 'Tools',
        title: 'Services',
        subPages: [
            {
                section: 'Tools',
                title: 'AlertService',
                keywords: 'уведомление, нотификация, бабл, облачко, alert, notification',
                route: '/services/alert-service',
            },
            {
                section: 'Tools',
                title: 'BreakpointService',
                keywords:
                    'breakpoint, breakpoints, media, query, брейкпоинты, responsive, adaptive, адаптив',
                route: '/services/breakpoint-service',
            },
            {
                section: 'Tools',
                title: 'DestroyService',
                keywords: 'сервис',
                route: '/services/destroy-service',
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
                route: '/services/scroll-service',
            },
            {
                section: 'Tools',
                title: 'TableBarsService',
                keywords:
                    'молекула, уведомление, нотификация, бабл, облачко, alert, table, bar',
                route: '/services/table-bars-service',
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
                route: '/utils/math',
            },
            {
                section: 'Tools',
                title: 'Format',
                keywords: `Инструменты, утилиты, форматирующие, format, px, getCurrencySymbol, capitalize,
                           formatPhone`,
                route: '/utils/format',
            },
            {
                section: 'Tools',
                title: 'DOM',
                keywords: `Инструменты, утилиты, DOM, checkFixedPosition, customEvent, getActualTarget,
                           getDocumentOrShadowRoot, getScrollParent, isElementAtPoint, isElementObscured, ДОМ,
                           getClipboardDataText`,
                route: '/utils/dom',
            },
            {
                section: 'Tools',
                title: 'Browser',
                keywords:
                    'Инструменты, утилиты, browser, браузер, firefox, ie, edge, ios, chrome',
                route: '/utils/browser',
            },
            {
                section: 'Tools',
                title: 'Miscellaneous',
                keywords: `Инструменты, утилиты, miscellaneous, прочие, assert, isNil, isPresent, flatLength,
                           getPaymentSystem, syncObject`,
                route: '/utils/miscellaneous',
            },
            {
                section: 'Tools',
                title: 'Tokens',
                keywords: 'токены tokens',
                route: '/utils/tokens',
            },
            {
                section: 'Tools',
                title: 'Pure',
                keywords:
                    'Инструменты, утилиты, lazy, calculation, optimization, pipe, memoization',
                route: '/utils/pure',
            },
        ],
    },
] as const;
