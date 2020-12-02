import {TuiDocPages} from '@taiga-ui/addon-doc';

export const pages: TuiDocPages = [
    {
        section: 'Документация',
        title: 'Начало работы',
        keywords: 'главная, начало, инструкция',
        route: 'getting-started',
    },
    {
        section: 'Документация',
        title: 'Поддержка браузеров',
        keywords: 'chrome, safari, ie, edge, firefox',
        route: 'browser-support',
    },
    {
        section: 'Документация',
        title: 'История релизов',
        keywords: 'release, change, changelog, archive, history',
        route: 'changelog',
    },
    {
        section: 'Документация',
        title: 'Собственная витрина',
        keywords:
            'doc, документация, демо, портал, story, боковая, панель, навигация, примеры',
        route: 'tui-doc',
    },
    {
        section: 'Документация',
        title: 'Дружественные библиотеки',
        keywords: 'related, libraries, other, friendly, npm, packages',
        route: 'related',
    },
    {
        section: 'Общее',
        title: 'Типографика',
        keywords:
            'верстка, markup, font, текст, шрифты, поиграться, гельветика, comic sans, typography',
        route: '/typography',
    },
    {
        section: 'Общее',
        title: 'Цвета',
        keywords: 'верстка, markup, цвет, палитра, colors',
        route: '/colors',
    },
    {
        section: 'Общее',
        title: 'Сетка',
        keywords: 'верстка, markup, layout, grid, сетка, стили',
        route: '/grid',
    },
    {
        section: 'Общее',
        title: 'Иконки',
        keywords: 'верстка, markup, icons, картинка, свг, svg, графика',
        route: '/icons',
    },
    {
        section: 'Общее',
        title: 'Миксины',
        keywords: 'верстка, markup, примеси, стили, тень, тени, скрол, mixins',
        route: '/mixins',
    },
    {
        section: 'Общее',
        title: 'Стили',
        subPages: [
            {
                section: 'Общее',
                title: 'Контейнеры',
                keywords: 'верстка, markup, цвет, палитра, colors, контейнер, container',
                route: '/containers',
            },
            {
                section: 'Общее',
                title: 'Тени',
                keywords: 'верстка, markup, тень, shadows',
                route: '/shadows',
            },
            {
                section: 'Общее',
                title: 'Списки',
                keywords:
                    'верстка, markup, списки, стили, список, точки, list, ul, li, немаркированный, маркированный',
                route: '/lists',
            },
            {
                section: 'Общее',
                title: 'Отступы',
                keywords:
                    'верстка, markup, отступы, margin, padding, маржин, падинг, spaces',
                route: '/spaces',
            },
            {
                section: 'Общее',
                title: 'Таблицы',
                keywords: 'верстка, markup, таблицы, tables',
                route: '/tables',
            },
            {
                section: 'Общее',
                title: 'Темы',
                keywords: 'тема, custom, themes',
                route: '/theme',
            },
            {
                section: 'Общее',
                title: 'Скелетон',
                keywords: 'верстка, markup, скелетон, loader, загрузка, skeleton',
                route: '/skeleton',
            },
            {
                section: 'Общее',
                title: 'Форма',
                keywords: 'верстка, markup, форма, ввод, пример, input, form',
                route: '/form',
            },
            {
                section: 'Общее',
                title: 'Темы для IOS и Android PWA',
                keywords: 'верстка, pwa, мобильные, нативные',
                route: '/mobile-themes',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Accordion',
        keywords: 'молекулы, аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/tui-accordion',
    },
    {
        section: 'Компоненты',
        title: 'Action',
        keywords: 'молекулы, кнопка, button, ссылка, link, действие, icon, иконка',
        route: '/tui-action',
    },
    {
        section: 'Компоненты',
        title: 'Avatar',
        keywords: 'атомы, аватар, картинка, изображение, avatar',
        route: '/tui-avatar',
    },
    {
        section: 'Компоненты',
        title: 'Badges',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Badge',
                keywords: 'атомы, бэдж, овал, badge',
                route: '/tui-badge',
            },
            {
                section: 'Компоненты',
                title: 'BadgedContent',
                keywords: 'атомы, бэдж, овал, badge, нотификация',
                route: '/tui-badged-content',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Button',
        keywords: 'атомы, кнопка, button, icon-button, иконка',
        route: '/tui-button',
    },
    {
        section: 'Компоненты',
        title: 'Calendars',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Calendar',
                keywords:
                    'атомы, календарь, форма, день, неделя, месяц, год, дата, calendar, датапикер, datepicker',
                route: '/tui-calendar',
            },
            {
                section: 'Компоненты',
                title: 'CalendarRange',
                keywords: 'календарь, calendar, даты, период',
                route: '/tui-calendar-range',
            },
            {
                section: 'Компоненты',
                title: 'CalendarMonth',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-calendar-month',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Card',
        keywords:
            'карта, карточка, card, visa, mastercard, credit, дебетовая, кредитная, иконка, логотип',
        route: '/tui-card',
    },
    {
        section: 'Компоненты',
        title: 'Charts',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Axes',
                keywords:
                    'график, чарт, chart, graph, line, столбик, диаграмма, оси, координаты',
                route: '/tui-axes',
            },
            {
                section: 'Компоненты',
                title: 'Bar',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar',
            },
            {
                section: 'Компоненты',
                title: 'BarChart',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar-chart',
            },
            {
                section: 'Компоненты',
                title: 'BarSet',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar-set',
            },
            {
                section: 'Компоненты',
                title: 'LegendItem',
                keywords: 'график, легенда, подпись, диаграмма',
                route: '/tui-legend-item',
            },
            {
                section: 'Компоненты',
                title: 'LineChart',
                keywords: 'график, линия, кривая, диаграмма',
                route: '/tui-line-chart',
            },
            {
                section: 'Компоненты',
                title: 'LineDaysChart',
                keywords: 'график, линия, кривая, диаграмма, год, месяц',
                route: '/tui-line-days-chart',
            },
            {
                section: 'Компоненты',
                title: 'PieChart',
                keywords: 'график, чарт, chart, graph, пирог, круг, диаграмма',
                route: '/tui-pie-chart',
            },
            {
                section: 'Компоненты',
                title: 'RingChart',
                keywords: 'график, чарт, chart, graph, кольцо, круг, диаграмма',
                route: '/tui-ring-chart',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Checkboxes',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Checkbox',
                keywords: 'атомы, чек, ввод, форма, checkbox',
                route: '/tui-checkbox',
            },
            {
                section: 'Компоненты',
                title: 'CheckboxBlock',
                keywords: 'молекулы, кнопка, чек, форма, ввод, checkbox, CheckboxBlock',
                route: '/tui-checkbox-block',
            },
            {
                section: 'Компоненты',
                title: 'CheckboxLabeled',
                keywords: 'молекулы, label, чек, форма, ввод, checkbox, checkboxLabeled',
                route: '/tui-checkbox-labeled',
            },
            {
                section: 'Компоненты',
                title: 'PrimitiveCheckbox',
                keywords: 'атомы, чек, checkbox, внутренние',
                route: '/tui-primitive-checkbox',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'ColorPicker',
        keywords: 'атомы, цвет, выбор, градиент, gradient, палитра, input, inputcolor',
        route: '/tui-color-picker',
    },
    {
        section: 'Компоненты',
        title: 'Dropdown',
        subPages: [
            {
                section: 'Компоненты',
                title: 'DataList',
                keywords:
                    'молекулы, контекст, выпадашка, дропдаун, меню, Context, ContextMenu, option,' +
                    'optGroup, опции, tuiOption, варианты',
                route: '/tui-data-list',
            },
            {
                section: 'Компоненты',
                title: 'HostedDropdown',
                keywords: 'молекулы, dropdown, контекст, выпадашка, дропдаун, меню, menu',
                route: '/tui-hosted-dropdown',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Errors',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Error',
                keywords: 'атомы, error, ошибка',
                route: '/tui-error',
            },
            {
                section: 'Компоненты',
                title: 'FieldError',
                keywords: 'атомы, field, поле, форма, error, ошибка, field-error',
                route: '/tui-field-error',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Expand',
        keywords: 'атомы, аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/tui-expand',
    },
    {
        section: 'Компоненты',
        title: 'Filter',
        keywords: 'фильтр, filters',
        route: '/tui-filter',
    },
    {
        section: 'Компоненты',
        title: 'Group',
        keywords:
            'молекулы, buttongroup, форма, поле, кнопка, группировка, группа, Group',
        route: '/tui-group',
    },
    {
        section: 'Компоненты',
        title: 'MarkerIcon',
        keywords: 'молекулы, icon, картинка, свг, иконка, svg, графика',
        route: '/tui-marker-icon',
    },
    {
        section: 'Компоненты',
        title: 'Inputs',
        subPages: [
            {
                section: 'Компоненты',
                title: 'InputInline',
                keywords: 'input',
                route: '/tui-input-inline',
            },
            {
                section: 'Компоненты',
                title: 'Input',
                keywords: 'атомы, поле, инпут, форма, ввод, input, table, таблица',
                route: '/tui-input',
            },
            {
                section: 'Компоненты',
                title: 'InputDate',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar',
                route: '/tui-input-date',
            },
            {
                section: 'Компоненты',
                title: 'InputCard',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/tui-input-card',
            },
            {
                section: 'Компоненты',
                title: 'InputCardGrouped',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/tui-input-card-grouped',
            },
            {
                section: 'Компоненты',
                title: 'InputCopy',
                keywords: 'поле, инпут, форма, копия, скопировать, ввод, input, copy',
                route: '/tui-input-copy',
            },
            {
                section: 'Компоненты',
                title: 'InputCount',
                keywords: 'молекулы, селект, форма, числа, ввод, input, select, count',
                route: '/tui-input-count',
            },
            {
                section: 'Компоненты',
                title: 'InputDateTime',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, время, часы, минуты, секунды, мс',
                route: '/tui-input-date-time',
            },
            {
                section: 'Компоненты',
                title: 'InputFile',
                keywords:
                    'молекулы, селект, форма, файл, загрузка, ввод, input, file, attach, load',
                route: '/tui-input-file',
            },
            {
                section: 'Компоненты',
                title: 'InputMonth',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-input-month',
            },
            {
                section: 'Компоненты',
                title: 'InputMonthRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-input-month-range',
            },
            {
                section: 'Компоненты',
                title: 'InputNumber',
                keywords:
                    'молекулы, поле, инпут, number, число, форма, ввод, input, money, деньги, ' +
                    'cash, копейки, рубли, доллары, евро, control, контрол',
                route: '/tui-input-number',
            },
            {
                section: 'Компоненты',
                title: 'InputPassword',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, password, пароль, код, шифр',
                route: '/tui-input-password',
            },
            {
                section: 'Компоненты',
                title: 'InputPhone',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, phone, телефон, номера',
                route: '/tui-input-phone',
            },
            {
                section: 'Компоненты',
                title: 'InputRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-range',
            },
            {
                section: 'Компоненты',
                title: 'InputDateRange',
                keywords: 'calendar, календарь, даты, период',
                route: '/tui-input-date-range',
            },
            {
                section: 'Компоненты',
                title: 'InputSlider',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-slider',
            },
            {
                section: 'Компоненты',
                title: 'InputTag',
                keywords: 'молекулы, поле, инпут, форма, ввод, input, tag, тэг',
                route: '/tui-input-tag',
            },
            {
                section: 'Компоненты',
                title: 'InputTime',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, time, hour, minute, время, час, минута',
                route: '/tui-input-time',
            },
            {
                section: 'Компоненты',
                title: 'InputPhoneInternational',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, phone, телефон, страны, номера,',
                route: '/tui-input-phone-international',
            },
            {
                section: 'Компоненты',
                title: 'PrimitiveTextfield',
                keywords: 'атомы, текст, инпут, база, input',
                route: '/tui-primitive-textfield',
            },
            {
                section: 'Компоненты',
                title: 'TextArea',
                keywords: 'атомы, поле, инпут, форма, ввод, text-area, area',
                route: '/tui-text-area',
            },
            {
                section: 'Компоненты',
                title: 'Editor',
                keywords:
                    'wysiwyg, редактор, текст, html, rich, text, input, инпут, ввод',
                route: '/tui-editor',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Island',
        keywords: 'молекулы, Island, остров, плашка',
        route: '/tui-island',
    },
    {
        section: 'Компоненты',
        title: 'Label',
        keywords: 'молекулы, лэйбл, метка, форма, label',
        route: '/tui-label',
    },
    {
        section: 'Компоненты',
        title: 'LineClamp',
        keywords: 'обрезание, текст, ticker, тикер, overflow',
        route: '/tui-line-clamp',
    },
    {
        section: 'Компоненты',
        title: 'Link',
        keywords: 'атомы, href, anchor, ссылка, псевдо, pseudo, link',
        route: '/tui-link',
    },
    {
        section: 'Компоненты',
        title: 'Loader',
        keywords:
            'атомы, загрузка, крутилка, лоадер, спиннер, спинер, крутится, мутится, spinner, loader',
        route: '/tui-loader',
    },
    {
        section: 'Компоненты',
        title: 'Money',
        keywords: 'атомы, money, деньги, cash, копейки, рубли, доллары, евро',
        route: '/tui-money',
    },
    {
        section: 'Компоненты',
        title: 'Notification',
        keywords: 'атомы, уведомление, нотификация, бабл, облачко, alert, notification',
        route: '/tui-notification',
    },
    {
        section: 'Компоненты',
        title: 'Mobile',
        subPages: [
            {
                section: 'Компоненты',
                title: 'MobileDialog',
                keywords:
                    'мобильный, ios, android, alert, сообщение, dialog, modal, popup, попап, диалог',
                route: '/tui-mobile-dialog',
            },
            {
                section: 'Компоненты',
                title: 'MobileCalendar',
                keywords:
                    'молекулы, календарь, день, неделя, месяц, год, дата, calendar, datapicker, data, picker',
                route: '/tui-mobile-calendar',
            },
            {
                section: 'Компоненты',
                title: 'PullToRefresh',
                keywords:
                    'mobile, потянуть, обновление, лоадер, loader, крутилка, загрузка',
                route: '/tui-pull-to-refresh',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Radio',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Radio',
                keywords: 'атомы, инпут, форма, ввод, radio, радио',
                route: '/tui-radio',
            },
            {
                section: 'Компоненты',
                title: 'RadioBlock',
                keywords:
                    'молекулы, инпут, кнопка, форма, ввод, radio, радио, radio-boxed',
                route: '/tui-radio-block',
            },
            {
                section: 'Компоненты',
                title: 'RadioLabeled',
                keywords: 'молекулы, инпут, форма, ввод, radio, радио, label, лэйбл',
                route: '/tui-radio-labeled',
            },
            {
                section: 'Компоненты',
                title: 'RadioList',
                keywords: 'инпут, форма, ввод, radio, радио, список, list',
                route: '/tui-radio-list',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Selects',
        subPages: [
            {
                section: 'Компоненты',
                title: 'ComboBox',
                keywords:
                    'атомы, инпут, форма, ввод, select, селект, выбор, комбобокс, combobox',
                route: '/tui-combo-box',
            },
            {
                section: 'Компоненты',
                title: 'MultiSelect',
                keywords:
                    'атомы, инпут, форма, ввод, select, селект, выбор, multiselect, мультиселект',
                route: '/tui-multi-select',
            },
            {
                section: 'Компоненты',
                title: 'Select',
                keywords: 'атомы, инпут, форма, ввод, select, селект, выбор',
                route: '/tui-select',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Scrollbar',
        keywords: 'scroll, scrollbar, скролл, скроллбар',
        route: '/tui-scrollbar',
    },
    {
        section: 'Компоненты',
        title: 'Sliders',
        subPages: [
            {
                section: 'Компоненты',
                title: 'InputRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-range',
            },
            {
                section: 'Компоненты',
                title: 'InputSlider',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-slider',
            },
            {
                section: 'Компоненты',
                title: 'Slider',
                keywords:
                    'атомы, инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/tui-slider',
            },
            {
                section: 'Компоненты',
                title: 'Range',
                keywords:
                    'атомы, инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/tui-range',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Svg',
        keywords: 'атомы, icon, картинка, свг, иконка, svg, графика',
        route: '/tui-svg',
    },
    {
        section: 'Компоненты',
        title: 'Table',
        subPages: [
            {
                section: 'Компоненты',
                title: 'Reorder',
                keywords: 'таблица, столбцы, порядок, order, выбор',
                route: '/tui-reorder',
            },
            {
                section: 'Компоненты',
                title: 'ResizableColumn',
                keywords: 'таблица, столбцы, размер, table, size, column',
                route: '/tui-resizable-column',
            },
            {
                section: 'Компоненты',
                title: 'TablePagination',
                keywords: 'таблица, страницы, pagination, page',
                route: '/tui-table-pagination',
            },
        ],
    },
    {
        section: 'Компоненты',
        title: 'Tag',
        keywords: 'молекулы, атомы, tag, тэг',
        route: '/tui-tag',
    },
    {
        section: 'Компоненты',
        title: 'ThemeSwitcher',
        keywords: 'атомы, тема, blue, цвета, стили, кастомизация, синий, синяя',
        route: '/tui-theme-switcher',
    },
    {
        section: 'Компоненты',
        title: 'Toggle',
        keywords: 'атомы, инпут, форма, ввод, toggle, переключение',
        route: '/tui-toggle',
    },
    {
        section: 'Компоненты',
        title: 'Tooltip',
        keywords: 'атомы, tooltip, тултип, hint, подсказка, помощь, help',
        route: '/tui-tooltip',
    },
    {
        section: 'Компоненты',
        title: 'Toolbar',
        keywords: 'editor, редактор, текст, html, rich, text, input, инпут, ввод',
        route: '/tui-toolbar',
    },
    {
        section: 'Навигация',
        title: 'Breadcrumbs',
        keywords: 'атомы, шаги, навигация, nav, хлебные, крошки, breadcrumbs',
        route: '/tui-breadcrumbs',
    },
    {
        section: 'Навигация',
        title: 'Pagination',
        keywords:
            'атомы, пагинатор, страницы, пэйджы, навигация, navigation, paginator, pagination',
        route: '/tui-pagination',
    },
    {
        section: 'Навигация',
        title: 'Stepper',
        keywords: 'молекулы, stepper, step, группа, group, шаг, check',
        route: '/tui-stepper',
    },
    {
        section: 'Навигация',
        title: 'Tabs',
        keywords: 'mobile, ios, android, атомы, шаги, таб, tab, tabs',
        route: '/tui-tabs',
    },
    {
        section: 'Инструменты',
        title: 'Декораторы',
        subPages: [
            {
                section: 'Инструменты',
                title: 'DefaultProp',
                keywords:
                    'декоратор, decorator, guard, undefined, type, check, contact, assert, контракт',
                route: '/tui-default-prop',
            },
            {
                section: 'Инструменты',
                title: 'Pure',
                keywords:
                    'декоратор, decorator, lazy, calculation, optimization, pipe, memoization',
                route: '/tui-pure',
            },
            {
                section: 'Инструменты',
                title: 'RequiredSetter',
                keywords:
                    'декоратор, decorator, guard, undefined, type, check, contact, assert, контракт',
                route: '/tui-required-setter',
            },
        ],
    },
    {
        section: 'Инструменты',
        title: 'Директивы',
        subPages: [
            {
                section: 'Инструменты',
                title: 'ActiveZone',
                keywords: 'атомы, focus, blur, фокус, activeElement',
                route: '/tui-active-zone',
            },
            {
                section: 'Инструменты',
                title: 'AutoFocus',
                keywords: 'focus, blur, фокус, авто',
                route: '/tui-auto-focus',
            },
            {
                section: 'Инструменты',
                title: 'Color',
                keywords: 'цвет, текст, фон',
                route: '/tui-color',
            },
            {
                section: 'Инструменты',
                title: 'Dropdown',
                keywords: 'атомы, dropdown, контекст, выпадашка, дропдаун, Context',
                route: '/tui-dropdown',
            },
            {
                section: 'Инструменты',
                title: 'DropdownSelection',
                keywords:
                    'атомы, dropdown, контекст, selection, выделение, выпадашка, дропдаун, Context',
                route: '/tui-dropdown-selection',
            },
            {
                section: 'Инструменты',
                title: 'ElasticSticky',
                keywords:
                    'масштаб, sticky, заголовок, шапка, mobile, смартфон, pwa, native, hybrid',
                route: '/tui-elastic-sticky',
            },
            {
                section: 'Инструменты',
                title: 'Element',
                keywords: 'element, elementref, nativeelement, tag',
                route: '/tui-element',
            },
            {
                section: 'Инструменты',
                title: 'Highlight',
                keywords: 'поиск, подсветка, search, find, найти',
                route: '/tui-highlight',
            },
            {
                section: 'Инструменты',
                title: 'Hint',
                keywords: 'атомы, tooltip, тултип, hint, подсказка, помощь, help, хинт',
                route: '/tui-hint',
            },
            {
                section: 'Инструменты',
                title: 'LazyLoading',
                keywords: 'img, skeleton, скелетон, загрузка, картинки',
                route: '/tui-lazy-loading',
            },
            {
                section: 'Инструменты',
                title: 'ManualHint',
                keywords:
                    'атомы, tooltip, тултип, hint, подсказка, помощь, help, manual, программный, хинт',
                route: '/tui-manual-hint',
            },
            {
                section: 'Инструменты',
                title: 'PointerHint',
                keywords:
                    'атомы, tooltip, тултип, hint, подсказка, помощь, help, хинт, курсор',
                route: '/tui-pointer-hint',
            },
            {
                section: 'Инструменты',
                title: 'Let',
                keywords:
                    'атомы, let, переменная, шаблон, геттер, getter, pipe, пайп, async, подписка',
                route: '/tui-let',
            },
            {
                section: 'Инструменты',
                title: 'Media',
                keywords: 'player, video, audio, mp3, wav, html5, mp4, hd, 4k, dpi',
                route: '/tui-media',
            },
            {
                section: 'Инструменты',
                title: 'Mode',
                keywords: 'атомы, фон, вид, цвет',
                route: '/tui-mode',
            },
            {
                section: 'Инструменты',
                title: 'Present',
                keywords: 'атомы, DOM, директива, появление, наличие, присутствие',
                route: '/tui-present',
            },
            {
                section: 'Инструменты',
                title: 'Ripple',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, android',
                route: '/tui-ripple',
            },
            {
                section: 'Инструменты',
                title: 'DropdownController',
                keywords:
                    'контроллер, ввод, параметры, настройка, выпадашка, список, айтемы, items',
                route: '/tui-dropdown-controller',
            },
            {
                section: 'Инструменты',
                title: 'HintController',
                keywords:
                    'контроллер, ввод, параметры, настройка, hint, tooltip, подсказка',
                route: '/tui-hint-controller',
            },
            {
                section: 'Инструменты',
                title: 'TextfieldController',
                keywords:
                    'контроллер, ввод, параметры, настройка, cleaner, autocomplete, exampleText, inputMode, ' +
                    'inputMode, labelOutside, size, type, нативные, инпут',
                route: '/tui-textfield-controller',
            },
            {
                section: 'Инструменты',
                title: 'Touchable',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, ios',
                route: '/tui-touchable',
            },
            {
                section: 'Инструменты',
                title: 'Validator',
                keywords: 'form, форма, валидация',
                route: '/tui-validator',
            },
        ],
    },
    {
        section: 'Инструменты',
        title: 'Пайпы',
        subPages: [
            {
                section: 'Инструменты',
                title: 'Filter',
                keywords: 'filter, совпадения, ngfor, for, match, пайп, pipe',
                route: '/tui-filter',
            },
            {
                section: 'Инструменты',
                title: 'FormatNumber',
                keywords:
                    'format, форматирование, преобразование, пробелы, тысячи, пайп, pipe',
                route: '/tui-format-number',
            },
            {
                section: 'Инструменты',
                title: 'FormatPhone',
                keywords:
                    'format, форматирование, преобразование, phone, телефон, пайп, pipe',
                route: '/tui-format-phone',
            },
            {
                section: 'Инструменты',
                title: 'Mapper',
                keywords: 'mapper, мап, преобразование, пайп, pipe',
                route: '/tui-mapper',
            },
            {
                section: 'Инструменты',
                title: 'Pluralize',
                keywords:
                    'pluralize, склонение, преобразование, слова, существительные, пайп, pipe',
                route: '/tui-pluralize',
            },
        ],
    },
    {
        section: 'Инструменты',
        title: 'Сервисы',
        subPages: [
            {
                section: 'Инструменты',
                title: 'NotificationsService',
                keywords:
                    'атомы, уведомление, нотификация, бабл, облачко, alert, notification',
                route: '/tui-notifications-service',
            },
            {
                section: 'Инструменты',
                title: 'DialogService',
                keywords:
                    'атомы, молекулы, попап, модал, popup, dialog, диалог, modal, окно',
                route: '/tui-dialog-service',
            },
            {
                section: 'Инструменты',
                title: 'ScrollService',
                keywords: 'scroll, прокрутка, скролл',
                route: '/tui-scroll-service',
            },
            {
                section: 'Инструменты',
                title: 'SvgService',
                keywords: 'svg, иконки, картинка, свг, иконка, графика',
                route: '/tui-svg-service',
            },
            {
                section: 'Инструменты',
                title: 'TableBarsService',
                keywords:
                    'молекула, уведомление, нотификация, бабл, облачко, alert, table, bar',
                route: '/tui-table-bars-service',
            },
        ],
    },
    {
        section: 'Инструменты',
        title: 'Утилиты',
        subPages: [
            {
                section: 'Инструменты',
                title: 'Математические',
                keywords: `Инструменты, утилиты, математические, utils, utilits, math,
                           round, clamp, inRange, normalizeToIntNumber, quantize`,
                route: '/math',
            },
            {
                section: 'Инструменты',
                title: 'Форматирующие',
                keywords: `Инструменты, утилиты, форматирующие, format, px, padStart, getCurrencySymbol, capitalize,
                           formatPhone`,
                route: '/format',
            },
            {
                section: 'Инструменты',
                title: 'DOM',
                keywords: `Инструменты, утилиты, DOM, checkFixedPosition, customEvent, getActualTarget,
                           getDocumentOrShadowRoot, getScrollParent, isElementAtPoint, isElementObscured, ДОМ,
                           getClipboardDataText`,
                route: '/dom',
            },
            {
                section: 'Инструменты',
                title: 'Браузер',
                keywords: `Инструменты, утилиты, browser, браузер, firefox, ie, edge, ios, chrome`,
                route: '/browser',
            },
            {
                section: 'Инструменты',
                title: 'Прочие',
                keywords: `Инструменты, утилиты, miscellaneous, прочие, assert, isNil, isPresent, flatLength,
                           getPaymentSystem, syncObject`,
                route: '/miscellaneous',
            },
        ],
    },
];
