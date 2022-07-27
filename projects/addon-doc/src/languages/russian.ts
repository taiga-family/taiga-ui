import {Provider} from '@angular/core';

import {
    TUI_DOC_DEMO_TEXTS,
    TUI_DOC_DOCUMENTATION_TEXTS,
    TUI_DOC_EXAMPLE_TEXTS,
    TUI_DOC_MENU_TEXT,
    TUI_DOC_SEARCH_TEXT,
    TUI_DOC_SEE_ALSO_TEXT,
    TUI_DOC_SOURCE_CODE_TEXT,
} from '../tokens/i18n';

// TODO: 3.0 remove in ivy compilation
export const DEMO_TEXTS = [`Сделано с помощью директивы: `, `Фон`, `Детали формы`];
export const DOC_TEXTS = [
    `Аргумент`,
    `Тип`,
    `Имя и описание`,
    `Значение`,
    `Для работы с динамическими шаблонами используется`,
];
export const EXAMPLE_TEXTS = [`Превью`, `Ссылка на пример скопирована`, `Готово`];

export const TUI_DOC_RUSSIAN: Provider[] = [
    {
        provide: TUI_DOC_DEMO_TEXTS,
        useValue: DEMO_TEXTS,
    },
    {
        provide: TUI_DOC_DOCUMENTATION_TEXTS,
        useValue: DOC_TEXTS,
    },
    {
        provide: TUI_DOC_EXAMPLE_TEXTS,
        useValue: EXAMPLE_TEXTS,
    },
    {
        provide: TUI_DOC_MENU_TEXT,
        useValue: `Меню`,
    },
    {
        provide: TUI_DOC_SEARCH_TEXT,
        useValue: `Поиск`,
    },
    {
        provide: TUI_DOC_SEE_ALSO_TEXT,
        useValue: `Смотрите также`,
    },
    {
        provide: TUI_DOC_SOURCE_CODE_TEXT,
        useValue: `Исходный код`,
    },
];
