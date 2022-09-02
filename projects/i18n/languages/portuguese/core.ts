import type {TuiLanguageCore} from '@taiga-ui/i18n/interfaces';

import {TUI_PORTUGUESE_LANGUAGE_COUNTRIES} from './countries';

export const TUI_PORTUGUESE_LANGUAGE_CORE: TuiLanguageCore = {
    months: [
        `Janeiro`,
        `Fevereiro`,
        `Março`,
        `Abril`,
        `Maio`,
        `Junho`,
        `Julho`,
        `Agosto`,
        `Setembro`,
        `Outubro`,
        `Novembro`,
        `Dezembro`,
    ],
    close: `Fechar`,
    nothingFoundMessage: `Nada encontrado`,
    defaultErrorMessage: `Valor é inválido`,
    spinTexts: [`Anterior`, `Próximo`],
    shortWeekDays: [`Seg`, `Ter`, `Qua`, `Qui`, `Sex`, `Sáb`, `Dom`],
    countries: TUI_PORTUGUESE_LANGUAGE_COUNTRIES,
};
