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

export const TUI_DOC_RUSSIAN: Provider[] = [
    {
        provide: TUI_DOC_DEMO_TEXTS,
        useValue: ['Сделано с помощью директивы: ', 'Фон', 'Детали формы'],
    },
    {
        provide: TUI_DOC_DOCUMENTATION_TEXTS,
        useValue: [
            'Аргумент',
            'Тип',
            'Имя и описание',
            'Значение',
            'Для работы с динамическими шаблонами используется',
        ],
    },
    {
        provide: TUI_DOC_EXAMPLE_TEXTS,
        useValue: ['Превью', 'Ссылка на пример скопирована', 'Готово'],
    },
    {
        provide: TUI_DOC_MENU_TEXT,
        useValue: 'Меню',
    },
    {
        provide: TUI_DOC_SEARCH_TEXT,
        useValue: 'Поиск',
    },
    {
        provide: TUI_DOC_SEE_ALSO_TEXT,
        useValue: 'Смотрите также',
    },
    {
        provide: TUI_DOC_SOURCE_CODE_TEXT,
        useValue: 'Исходный код',
    },
];
