import {TuiDocPages} from '@taiga-ui/addon-doc';

export const pages: TuiDocPages = [
    {
        section: $localize`Documentation`,
        title: $localize`Getting started`,
        keywords: 'intro, how to, guide, main, главная, начало, инструкция',
        route: 'getting-started',
    },
    {
        section: $localize`Documentation`,
        title: $localize`Browser support`,
        keywords: 'chrome, safari, ie, edge, firefox',
        route: 'browser-support',
    },
    {
        section: $localize`Documentation`,
        title: $localize`Changelog`,
        keywords: 'release, change, changelog, archive, history',
        route: 'changelog',
    },
    {
        section: $localize`Documentation`,
        title: $localize`Documentation engine`,
        keywords:
            'doc, book, samples, demo, документация, демо, портал, story, боковая, панель, навигация, примеры',
        route: 'tui-doc',
    },
    {
        section: $localize`Documentation`,
        title: $localize`Friendly libraries`,
        keywords: 'related, libraries, other, friendly, npm, packages',
        route: 'related',
    },
    {
        section: $localize`Common`,
        title: 'Типографика',
        keywords:
            'верстка, markup, font, текст, шрифты, поиграться, гельветика, comic sans, typography',
        route: '/typography',
    },
    {
        section: $localize`Common`,
        title: 'Цвета',
        keywords: 'верстка, markup, цвет, палитра, colors',
        route: '/colors',
    },
    {
        section: $localize`Common`,
        title: 'Сетка',
        keywords: 'верстка, markup, layout, grid, сетка, стили',
        route: '/grid',
    },
    {
        section: $localize`Common`,
        title: 'Иконки',
        keywords: 'верстка, markup, icons, картинка, свг, svg, графика',
        route: '/icons',
    },
    {
        section: $localize`Common`,
        title: 'Миксины',
        keywords: 'верстка, markup, примеси, стили, тень, тени, скрол, mixins',
        route: '/mixins',
    },
    {
        section: $localize`Common`,
        title: 'Стили',
        subPages: [
            {
                section: $localize`Common`,
                title: 'Контейнеры',
                keywords: 'верстка, markup, цвет, палитра, colors, контейнер, container',
                route: '/containers',
            },
            {
                section: $localize`Common`,
                title: 'Тени',
                keywords: 'верстка, markup, тень, shadows',
                route: '/shadows',
            },
            {
                section: $localize`Common`,
                title: 'Списки',
                keywords:
                    'верстка, markup, списки, стили, список, точки, list, ul, li, немаркированный, маркированный',
                route: '/lists',
            },
            {
                section: $localize`Common`,
                title: 'Отступы',
                keywords:
                    'верстка, markup, отступы, margin, padding, маржин, падинг, spaces',
                route: '/spaces',
            },
            {
                section: $localize`Common`,
                title: 'Таблицы',
                keywords: 'верстка, markup, таблицы, tables',
                route: '/tables',
            },
            {
                section: $localize`Common`,
                title: 'Темы',
                keywords: 'тема, custom, themes',
                route: '/theme',
            },
            {
                section: $localize`Common`,
                title: 'Скелетон',
                keywords: 'верстка, markup, скелетон, loader, загрузка, skeleton',
                route: '/skeleton',
            },
            {
                section: $localize`Common`,
                title: 'Форма',
                keywords: 'верстка, markup, форма, ввод, пример, input, form',
                route: '/form',
            },
            {
                section: $localize`Common`,
                title: 'Темы для IOS и Android PWA',
                keywords: 'верстка, pwa, мобильные, нативные',
                route: '/mobile-themes',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Accordion',
        keywords: 'молекулы, аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/tui-accordion',
    },
    {
        section: $localize`Components`,
        title: 'Action',
        keywords: 'молекулы, кнопка, button, ссылка, link, действие, icon, иконка',
        route: '/tui-action',
    },
    {
        section: $localize`Components`,
        title: 'Avatar',
        keywords: 'атомы, аватар, картинка, изображение, avatar',
        route: '/tui-avatar',
    },
    {
        section: $localize`Components`,
        title: 'Badges',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Badge',
                keywords: 'атомы, бэдж, овал, badge',
                route: '/tui-badge',
            },
            {
                section: $localize`Components`,
                title: 'BadgedContent',
                keywords: 'атомы, бэдж, овал, badge, нотификация',
                route: '/tui-badged-content',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Button',
        keywords: 'атомы, кнопка, button, icon-button, иконка',
        route: '/tui-button',
    },
    {
        section: $localize`Components`,
        title: 'Calendars',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Calendar',
                keywords:
                    'атомы, календарь, форма, день, неделя, месяц, год, дата, calendar, датапикер, datepicker',
                route: '/tui-calendar',
            },
            {
                section: $localize`Components`,
                title: 'CalendarRange',
                keywords: 'календарь, calendar, даты, период',
                route: '/tui-calendar-range',
            },
            {
                section: $localize`Components`,
                title: 'CalendarMonth',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-calendar-month',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Card',
        keywords:
            'карта, карточка, card, visa, mastercard, credit, дебетовая, кредитная, иконка, логотип',
        route: '/tui-card',
    },
    {
        section: $localize`Components`,
        title: 'Charts',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Axes',
                keywords:
                    'график, чарт, chart, graph, line, столбик, диаграмма, оси, координаты',
                route: '/tui-axes',
            },
            {
                section: $localize`Components`,
                title: 'Bar',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar',
            },
            {
                section: $localize`Components`,
                title: 'BarChart',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar-chart',
            },
            {
                section: $localize`Components`,
                title: 'BarSet',
                keywords: 'график, чарт, chart, graph, line, столбик, диаграмма',
                route: '/tui-bar-set',
            },
            {
                section: $localize`Components`,
                title: 'LegendItem',
                keywords: 'график, легенда, подпись, диаграмма',
                route: '/tui-legend-item',
            },
            {
                section: $localize`Components`,
                title: 'LineChart',
                keywords: 'график, линия, кривая, диаграмма',
                route: '/tui-line-chart',
            },
            {
                section: $localize`Components`,
                title: 'LineDaysChart',
                keywords: 'график, линия, кривая, диаграмма, год, месяц',
                route: '/tui-line-days-chart',
            },
            {
                section: $localize`Components`,
                title: 'PieChart',
                keywords: 'график, чарт, chart, graph, пирог, круг, диаграмма',
                route: '/tui-pie-chart',
            },
            {
                section: $localize`Components`,
                title: 'RingChart',
                keywords: 'график, чарт, chart, graph, кольцо, круг, диаграмма',
                route: '/tui-ring-chart',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Checkboxes',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Checkbox',
                keywords: 'атомы, чек, ввод, форма, checkbox',
                route: '/tui-checkbox',
            },
            {
                section: $localize`Components`,
                title: 'CheckboxBlock',
                keywords: 'молекулы, кнопка, чек, форма, ввод, checkbox, CheckboxBlock',
                route: '/tui-checkbox-block',
            },
            {
                section: $localize`Components`,
                title: 'CheckboxLabeled',
                keywords: 'молекулы, label, чек, форма, ввод, checkbox, checkboxLabeled',
                route: '/tui-checkbox-labeled',
            },
            {
                section: $localize`Components`,
                title: 'PrimitiveCheckbox',
                keywords: 'атомы, чек, checkbox, внутренние',
                route: '/tui-primitive-checkbox',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'ColorPicker',
        keywords: 'атомы, цвет, выбор, градиент, gradient, палитра, input, inputcolor',
        route: '/tui-color-picker',
    },
    {
        section: $localize`Components`,
        title: 'Dropdown',
        subPages: [
            {
                section: $localize`Components`,
                title: 'DataList',
                keywords:
                    'молекулы, контекст, выпадашка, дропдаун, меню, Context, ContextMenu, option,' +
                    'optGroup, опции, tuiOption, варианты',
                route: '/tui-data-list',
            },
            {
                section: $localize`Components`,
                title: 'HostedDropdown',
                keywords: 'молекулы, dropdown, контекст, выпадашка, дропдаун, меню, menu',
                route: '/tui-hosted-dropdown',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Errors',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Error',
                keywords: 'атомы, error, ошибка',
                route: '/tui-error',
            },
            {
                section: $localize`Components`,
                title: 'FieldError',
                keywords: 'атомы, field, поле, форма, error, ошибка, field-error',
                route: '/tui-field-error',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Expand',
        keywords: 'атомы, аккордеон, expand, раскрывашка, spoiler, cut',
        route: '/tui-expand',
    },
    {
        section: $localize`Components`,
        title: 'Filter',
        keywords: 'фильтр, filters',
        route: '/tui-filter',
    },
    {
        section: $localize`Components`,
        title: 'Group',
        keywords:
            'молекулы, buttongroup, форма, поле, кнопка, группировка, группа, Group',
        route: '/tui-group',
    },
    {
        section: $localize`Components`,
        title: 'MarkerIcon',
        keywords: 'молекулы, icon, картинка, свг, иконка, svg, графика',
        route: '/tui-marker-icon',
    },
    {
        section: $localize`Components`,
        title: 'Inputs',
        subPages: [
            {
                section: $localize`Components`,
                title: 'InputInline',
                keywords: 'input',
                route: '/tui-input-inline',
            },
            {
                section: $localize`Components`,
                title: 'Input',
                keywords: 'атомы, поле, инпут, форма, ввод, input, table, таблица',
                route: '/tui-input',
            },
            {
                section: $localize`Components`,
                title: 'InputDate',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar',
                route: '/tui-input-date',
            },
            {
                section: $localize`Components`,
                title: 'InputCard',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/tui-input-card',
            },
            {
                section: $localize`Components`,
                title: 'InputCardGrouped',
                keywords:
                    'карта, visa, mastercard, credit, card, срок, expire, код, cvc, cvv',
                route: '/tui-input-card-grouped',
            },
            {
                section: $localize`Components`,
                title: 'InputCopy',
                keywords: 'поле, инпут, форма, копия, скопировать, ввод, input, copy',
                route: '/tui-input-copy',
            },
            {
                section: $localize`Components`,
                title: 'InputCount',
                keywords: 'молекулы, селект, форма, числа, ввод, input, select, count',
                route: '/tui-input-count',
            },
            {
                section: $localize`Components`,
                title: 'InputDateTime',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, календарь, день, ' +
                    'неделя, месяц, год, дата, calendar, время, часы, минуты, секунды, мс',
                route: '/tui-input-date-time',
            },
            {
                section: $localize`Components`,
                title: 'InputFile',
                keywords:
                    'молекулы, селект, форма, файл, загрузка, ввод, input, file, attach, load',
                route: '/tui-input-file',
            },
            {
                section: $localize`Components`,
                title: 'InputMonth',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-input-month',
            },
            {
                section: $localize`Components`,
                title: 'InputMonthRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, month, месяц, год, дата',
                route: '/tui-input-month-range',
            },
            {
                section: $localize`Components`,
                title: 'InputNumber',
                keywords:
                    'молекулы, поле, инпут, number, число, форма, ввод, input, money, деньги, ' +
                    'cash, копейки, рубли, доллары, евро, control, контрол',
                route: '/tui-input-number',
            },
            {
                section: $localize`Components`,
                title: 'InputPassword',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, password, пароль, код, шифр',
                route: '/tui-input-password',
            },
            {
                section: $localize`Components`,
                title: 'InputPhone',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, phone, телефон, номера',
                route: '/tui-input-phone',
            },
            {
                section: $localize`Components`,
                title: 'InputRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-range',
            },
            {
                section: $localize`Components`,
                title: 'InputDateRange',
                keywords: 'calendar, календарь, даты, период',
                route: '/tui-input-date-range',
            },
            {
                section: $localize`Components`,
                title: 'InputSlider',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-slider',
            },
            {
                section: $localize`Components`,
                title: 'InputTag',
                keywords: 'молекулы, поле, инпут, форма, ввод, input, tag, тэг',
                route: '/tui-input-tag',
            },
            {
                section: $localize`Components`,
                title: 'InputTime',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, time, hour, minute, время, час, минута',
                route: '/tui-input-time',
            },
            {
                section: $localize`Components`,
                title: 'InputPhoneInternational',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, phone, телефон, страны, номера,',
                route: '/tui-input-phone-international',
            },
            {
                section: $localize`Components`,
                title: 'PrimitiveTextfield',
                keywords: 'атомы, текст, инпут, база, input',
                route: '/tui-primitive-textfield',
            },
            {
                section: $localize`Components`,
                title: 'TextArea',
                keywords: 'атомы, поле, инпут, форма, ввод, text-area, area',
                route: '/tui-text-area',
            },
            {
                section: $localize`Components`,
                title: 'Editor',
                keywords:
                    'wysiwyg, редактор, текст, html, rich, text, input, инпут, ввод',
                route: '/tui-editor',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Island',
        keywords: 'молекулы, Island, остров, плашка',
        route: '/tui-island',
    },
    {
        section: $localize`Components`,
        title: 'Label',
        keywords: 'молекулы, лэйбл, метка, форма, label',
        route: '/tui-label',
    },
    {
        section: $localize`Components`,
        title: 'LineClamp',
        keywords: 'обрезание, текст, ticker, тикер, overflow',
        route: '/tui-line-clamp',
    },
    {
        section: $localize`Components`,
        title: 'Link',
        keywords: 'атомы, href, anchor, ссылка, псевдо, pseudo, link',
        route: '/tui-link',
    },
    {
        section: $localize`Components`,
        title: 'Loader',
        keywords:
            'атомы, загрузка, крутилка, лоадер, спиннер, спинер, крутится, мутится, spinner, loader',
        route: '/tui-loader',
    },
    {
        section: $localize`Components`,
        title: 'Money',
        keywords: 'атомы, money, деньги, cash, копейки, рубли, доллары, евро',
        route: '/tui-money',
    },
    {
        section: $localize`Components`,
        title: 'Notification',
        keywords: 'атомы, уведомление, нотификация, бабл, облачко, alert, notification',
        route: '/tui-notification',
    },
    {
        section: $localize`Components`,
        title: 'Mobile',
        subPages: [
            {
                section: $localize`Components`,
                title: 'MobileDialog',
                keywords:
                    'мобильный, ios, android, alert, сообщение, dialog, modal, popup, попап, диалог',
                route: '/tui-mobile-dialog',
            },
            {
                section: $localize`Components`,
                title: 'MobileCalendar',
                keywords:
                    'молекулы, календарь, день, неделя, месяц, год, дата, calendar, datapicker, data, picker',
                route: '/tui-mobile-calendar',
            },
            {
                section: $localize`Components`,
                title: 'PullToRefresh',
                keywords:
                    'mobile, потянуть, обновление, лоадер, loader, крутилка, загрузка',
                route: '/tui-pull-to-refresh',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Radio',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Radio',
                keywords: 'атомы, инпут, форма, ввод, radio, радио',
                route: '/tui-radio',
            },
            {
                section: $localize`Components`,
                title: 'RadioBlock',
                keywords:
                    'молекулы, инпут, кнопка, форма, ввод, radio, радио, radio-boxed',
                route: '/tui-radio-block',
            },
            {
                section: $localize`Components`,
                title: 'RadioLabeled',
                keywords: 'молекулы, инпут, форма, ввод, radio, радио, label, лэйбл',
                route: '/tui-radio-labeled',
            },
            {
                section: $localize`Components`,
                title: 'RadioList',
                keywords: 'инпут, форма, ввод, radio, радио, список, list',
                route: '/tui-radio-list',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Selects',
        subPages: [
            {
                section: $localize`Components`,
                title: 'ComboBox',
                keywords:
                    'атомы, инпут, форма, ввод, select, селект, выбор, комбобокс, combobox',
                route: '/tui-combo-box',
            },
            {
                section: $localize`Components`,
                title: 'MultiSelect',
                keywords:
                    'атомы, инпут, форма, ввод, select, селект, выбор, multiselect, мультиселект',
                route: '/tui-multi-select',
            },
            {
                section: $localize`Components`,
                title: 'Select',
                keywords: 'атомы, инпут, форма, ввод, select, селект, выбор',
                route: '/tui-select',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Scrollbar',
        keywords: 'scroll, scrollbar, скролл, скроллбар',
        route: '/tui-scrollbar',
    },
    {
        section: $localize`Components`,
        title: 'Sliders',
        subPages: [
            {
                section: $localize`Components`,
                title: 'InputRange',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-range',
            },
            {
                section: $localize`Components`,
                title: 'InputSlider',
                keywords:
                    'молекулы, поле, инпут, форма, ввод, input, range, slider, диапазон',
                route: '/tui-input-slider',
            },
            {
                section: $localize`Components`,
                title: 'Slider',
                keywords:
                    'атомы, инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/tui-slider',
            },
            {
                section: $localize`Components`,
                title: 'Range',
                keywords:
                    'атомы, инпут, числа, форма, ввод, slider, слайдер, range, диапазон',
                route: '/tui-range',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Svg',
        keywords: 'атомы, icon, картинка, свг, иконка, svg, графика',
        route: '/tui-svg',
    },
    {
        section: $localize`Components`,
        title: 'Table',
        subPages: [
            {
                section: $localize`Components`,
                title: 'Reorder',
                keywords: 'таблица, столбцы, порядок, order, выбор',
                route: '/tui-reorder',
            },
            {
                section: $localize`Components`,
                title: 'ResizableColumn',
                keywords: 'таблица, столбцы, размер, table, size, column',
                route: '/tui-resizable-column',
            },
            {
                section: $localize`Components`,
                title: 'TablePagination',
                keywords: 'таблица, страницы, pagination, page',
                route: '/tui-table-pagination',
            },
        ],
    },
    {
        section: $localize`Components`,
        title: 'Tag',
        keywords: 'молекулы, атомы, tag, тэг',
        route: '/tui-tag',
    },
    {
        section: $localize`Components`,
        title: 'ThemeSwitcher',
        keywords: 'атомы, тема, blue, цвета, стили, кастомизация, синий, синяя',
        route: '/tui-theme-switcher',
    },
    {
        section: $localize`Components`,
        title: 'Toggle',
        keywords: 'атомы, инпут, форма, ввод, toggle, переключение',
        route: '/tui-toggle',
    },
    {
        section: $localize`Components`,
        title: 'Tooltip',
        keywords: 'атомы, tooltip, тултип, hint, подсказка, помощь, help',
        route: '/tui-tooltip',
    },
    {
        section: $localize`Components`,
        title: 'Toolbar',
        keywords: 'editor, редактор, текст, html, rich, text, input, инпут, ввод',
        route: '/tui-toolbar',
    },
    {
        section: $localize`Navigation`,
        title: 'Breadcrumbs',
        keywords: 'атомы, шаги, навигация, nav, хлебные, крошки, breadcrumbs',
        route: '/tui-breadcrumbs',
    },
    {
        section: $localize`Navigation`,
        title: 'Pagination',
        keywords:
            'атомы, пагинатор, страницы, пэйджы, навигация, navigation, paginator, pagination',
        route: '/tui-pagination',
    },
    {
        section: $localize`Navigation`,
        title: 'Stepper',
        keywords: 'молекулы, stepper, step, группа, group, шаг, check',
        route: '/tui-stepper',
    },
    {
        section: $localize`Navigation`,
        title: 'Tabs',
        keywords: 'mobile, ios, android, атомы, шаги, таб, tab, tabs',
        route: '/tui-tabs',
    },
    {
        section: $localize`Tools`,
        title: 'Декораторы',
        subPages: [
            {
                section: $localize`Tools`,
                title: 'DefaultProp',
                keywords:
                    'декоратор, decorator, guard, undefined, type, check, contact, assert, контракт',
                route: '/tui-default-prop',
            },
            {
                section: $localize`Tools`,
                title: 'Pure',
                keywords:
                    'декоратор, decorator, lazy, calculation, optimization, pipe, memoization',
                route: '/tui-pure',
            },
            {
                section: $localize`Tools`,
                title: 'RequiredSetter',
                keywords:
                    'декоратор, decorator, guard, undefined, type, check, contact, assert, контракт',
                route: '/tui-required-setter',
            },
        ],
    },
    {
        section: $localize`Tools`,
        title: 'Директивы',
        subPages: [
            {
                section: $localize`Tools`,
                title: 'ActiveZone',
                keywords: 'атомы, focus, blur, фокус, activeElement',
                route: '/tui-active-zone',
            },
            {
                section: $localize`Tools`,
                title: 'AutoFocus',
                keywords: 'focus, blur, фокус, авто',
                route: '/tui-auto-focus',
            },
            {
                section: $localize`Tools`,
                title: 'Color',
                keywords: 'цвет, текст, фон',
                route: '/tui-color',
            },
            {
                section: $localize`Tools`,
                title: 'Dropdown',
                keywords: 'атомы, dropdown, контекст, выпадашка, дропдаун, Context',
                route: '/tui-dropdown',
            },
            {
                section: $localize`Tools`,
                title: 'DropdownSelection',
                keywords:
                    'атомы, dropdown, контекст, selection, выделение, выпадашка, дропдаун, Context',
                route: '/tui-dropdown-selection',
            },
            {
                section: $localize`Tools`,
                title: 'ElasticSticky',
                keywords:
                    'масштаб, sticky, заголовок, шапка, mobile, смартфон, pwa, native, hybrid',
                route: '/tui-elastic-sticky',
            },
            {
                section: $localize`Tools`,
                title: 'Element',
                keywords: 'element, elementref, nativeelement, tag',
                route: '/tui-element',
            },
            {
                section: $localize`Tools`,
                title: 'Highlight',
                keywords: 'поиск, подсветка, search, find, найти',
                route: '/tui-highlight',
            },
            {
                section: $localize`Tools`,
                title: 'Hint',
                keywords: 'атомы, tooltip, тултип, hint, подсказка, помощь, help, хинт',
                route: '/tui-hint',
            },
            {
                section: $localize`Tools`,
                title: 'LazyLoading',
                keywords: 'img, skeleton, скелетон, загрузка, картинки',
                route: '/tui-lazy-loading',
            },
            {
                section: $localize`Tools`,
                title: 'ManualHint',
                keywords:
                    'атомы, tooltip, тултип, hint, подсказка, помощь, help, manual, программный, хинт',
                route: '/tui-manual-hint',
            },
            {
                section: $localize`Tools`,
                title: 'PointerHint',
                keywords:
                    'атомы, tooltip, тултип, hint, подсказка, помощь, help, хинт, курсор',
                route: '/tui-pointer-hint',
            },
            {
                section: $localize`Tools`,
                title: 'Let',
                keywords:
                    'атомы, let, переменная, шаблон, геттер, getter, pipe, пайп, async, подписка',
                route: '/tui-let',
            },
            {
                section: $localize`Tools`,
                title: 'Media',
                keywords: 'player, video, audio, mp3, wav, html5, mp4, hd, 4k, dpi',
                route: '/tui-media',
            },
            {
                section: $localize`Tools`,
                title: 'Mode',
                keywords: 'атомы, фон, вид, цвет',
                route: '/tui-mode',
            },
            {
                section: $localize`Tools`,
                title: 'Present',
                keywords: 'атомы, DOM, директива, появление, наличие, присутствие',
                route: '/tui-present',
            },
            {
                section: $localize`Tools`,
                title: 'Ripple',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, android',
                route: '/tui-ripple',
            },
            {
                section: $localize`Tools`,
                title: 'DropdownController',
                keywords:
                    'контроллер, ввод, параметры, настройка, выпадашка, список, айтемы, items',
                route: '/tui-dropdown-controller',
            },
            {
                section: $localize`Tools`,
                title: 'HintController',
                keywords:
                    'контроллер, ввод, параметры, настройка, hint, tooltip, подсказка',
                route: '/tui-hint-controller',
            },
            {
                section: $localize`Tools`,
                title: 'TextfieldController',
                keywords:
                    'контроллер, ввод, параметры, настройка, cleaner, autocomplete, exampleText, inputMode, ' +
                    'inputMode, labelOutside, size, type, нативные, инпут',
                route: '/tui-textfield-controller',
            },
            {
                section: $localize`Tools`,
                title: 'Touchable',
                keywords: 'touch, mobile, смартфон, pwa, native, hybrid, ios',
                route: '/tui-touchable',
            },
            {
                section: $localize`Tools`,
                title: 'Validator',
                keywords: 'form, форма, валидация',
                route: '/tui-validator',
            },
        ],
    },
    {
        section: $localize`Tools`,
        title: 'Пайпы',
        subPages: [
            {
                section: $localize`Tools`,
                title: 'Filter',
                keywords: 'filter, совпадения, ngfor, for, match, пайп, pipe',
                route: '/tui-filter',
            },
            {
                section: $localize`Tools`,
                title: 'FormatNumber',
                keywords:
                    'format, форматирование, преобразование, пробелы, тысячи, пайп, pipe',
                route: '/tui-format-number',
            },
            {
                section: $localize`Tools`,
                title: 'FormatPhone',
                keywords:
                    'format, форматирование, преобразование, phone, телефон, пайп, pipe',
                route: '/tui-format-phone',
            },
            {
                section: $localize`Tools`,
                title: 'Mapper',
                keywords: 'mapper, мап, преобразование, пайп, pipe',
                route: '/tui-mapper',
            },
            {
                section: $localize`Tools`,
                title: 'Pluralize',
                keywords:
                    'pluralize, склонение, преобразование, слова, существительные, пайп, pipe',
                route: '/tui-pluralize',
            },
        ],
    },
    {
        section: $localize`Tools`,
        title: 'Сервисы',
        subPages: [
            {
                section: $localize`Tools`,
                title: 'NotificationsService',
                keywords:
                    'атомы, уведомление, нотификация, бабл, облачко, alert, notification',
                route: '/tui-notifications-service',
            },
            {
                section: $localize`Tools`,
                title: 'DialogService',
                keywords:
                    'атомы, молекулы, попап, модал, popup, dialog, диалог, modal, окно',
                route: '/tui-dialog-service',
            },
            {
                section: $localize`Tools`,
                title: 'ScrollService',
                keywords: 'scroll, прокрутка, скролл',
                route: '/tui-scroll-service',
            },
            {
                section: $localize`Tools`,
                title: 'SvgService',
                keywords: 'svg, иконки, картинка, свг, иконка, графика',
                route: '/tui-svg-service',
            },
            {
                section: $localize`Tools`,
                title: 'TableBarsService',
                keywords:
                    'молекула, уведомление, нотификация, бабл, облачко, alert, table, bar',
                route: '/tui-table-bars-service',
            },
        ],
    },
    {
        section: $localize`Tools`,
        title: 'Утилиты',
        subPages: [
            {
                section: $localize`Tools`,
                title: 'Математические',
                keywords: `Инструменты, утилиты, математические, utils, utilits, math,
                           round, clamp, inRange, normalizeToIntNumber, quantize`,
                route: '/math',
            },
            {
                section: $localize`Tools`,
                title: 'Форматирующие',
                keywords: `Инструменты, утилиты, форматирующие, format, px, padStart, getCurrencySymbol, capitalize,
                           formatPhone`,
                route: '/format',
            },
            {
                section: $localize`Tools`,
                title: 'DOM',
                keywords: `Инструменты, утилиты, DOM, checkFixedPosition, customEvent, getActualTarget,
                           getDocumentOrShadowRoot, getScrollParent, isElementAtPoint, isElementObscured, ДОМ,
                           getClipboardDataText`,
                route: '/dom',
            },
            {
                section: $localize`Tools`,
                title: 'Браузер',
                keywords: `Инструменты, утилиты, browser, браузер, firefox, ie, edge, ios, chrome`,
                route: '/browser',
            },
            {
                section: $localize`Tools`,
                title: 'Прочие',
                keywords: `Инструменты, утилиты, miscellaneous, прочие, assert, isNil, isPresent, flatLength,
                           getPaymentSystem, syncObject`,
                route: '/miscellaneous',
            },
        ],
    },
];
