import {InjectionToken} from '@angular/core';
import {TuiDateMode} from '@taiga-ui/cdk';
import {TuiCountryIsoCode, tuiExtractI18n} from '@taiga-ui/i18n';
import {Observable} from 'rxjs';

export const TUI_CANCEL_WORD = new InjectionToken(
    `[TUI_CANCEL_WORD]: i18n 'cancel' word`,
    {
        factory: tuiExtractI18n(`cancel`),
    },
);

export const TUI_DONE_WORD = new InjectionToken(`[TUI_DONE_WORD]: i18n 'done' word`, {
    factory: tuiExtractI18n(`done`),
});

export const TUI_MORE_WORD = new InjectionToken(`[TUI_MORE_WORD]: i18n 'more' word`, {
    factory: tuiExtractI18n(`more`),
});

export const TUI_HIDE_TEXT = new InjectionToken(`[TUI_HIDE_TEXT]: i18n 'hide' word`, {
    factory: tuiExtractI18n(`hide`),
});

export const TUI_SHOW_ALL_TEXT = new InjectionToken(
    `[TUI_SHOW_ALL_TEXT]: i18n 'show all' word`,
    {
        factory: tuiExtractI18n(`showAll`),
    },
);

export const TUI_OTHER_DATE_TEXT = new InjectionToken(
    `[TUI_OTHER_DATE_TEXT]: i18n 'Other date' text`,
    {
        factory: tuiExtractI18n(`otherDate`),
    },
);

export const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = new InjectionToken(
    `[TUI_CHOOSE_DAY_OR_RANGE_TEXTS]: choose day or range i18n texts`,
    {
        factory: tuiExtractI18n(`mobileCalendarTexts`),
    },
);

export const TUI_FROM_TO_TEXTS = new InjectionToken(
    `[TUI_FROM_TO_TEXTS]: from and to i18n texts`,
    {
        factory: tuiExtractI18n(`range`),
    },
);

export const TUI_PLUS_MINUS_TEXTS = new InjectionToken(
    `[TUI_PLUS_MINUS_TEXTS]: plus and minus i18n texts`,
    {
        factory: tuiExtractI18n(`countTexts`),
    },
);

export const TUI_TIME_TEXTS = new InjectionToken(`[TUI_TIME_TEXTS]: time i18n texts`, {
    factory: tuiExtractI18n(`time`),
});

export const TUI_DATE_TEXTS = new InjectionToken<Observable<Record<TuiDateMode, string>>>(
    `[TUI_DATE_TEXTS]: date format i18n texts`,
    {
        factory: tuiExtractI18n(`dateTexts`),
    },
);

export const TUI_DIGITAL_INFORMATION_UNITS = new InjectionToken(
    `[TUI_DIGITAL_INFORMATION_UNITS]: short bytes, kilobytes and megabytes i18n texts`,
    {
        factory: tuiExtractI18n(`digitalInformationUnits`),
    },
);

export const TUI_COPY_TEXTS = new InjectionToken(`[TUI_COPY_TEXTS]: copy i18n texts`, {
    factory: tuiExtractI18n(`copyTexts`),
});

export const TUI_PASSWORD_TEXTS = new InjectionToken(
    `[TUI_PASSWORD_TEXTS]: password i18n texts`,
    {
        factory: tuiExtractI18n(`passwordTexts`),
    },
);

export const TUI_CALENDAR_MONTHS = new InjectionToken(
    `[TUI_CALENDAR_MONTHS]: short calendar months i18n`,
    {
        factory: tuiExtractI18n(`shortCalendarMonths`),
    },
);

export const TUI_FILE_TEXTS = new InjectionToken(`[TUI_FILE_TEXTS]: file i18n texts`, {
    factory: tuiExtractI18n(`fileTexts`),
});

export const TUI_PAGINATION_TEXTS = new InjectionToken(
    `[TUI_PAGINATION_TEXTS]: pagination i18n texts`,
    {
        factory: tuiExtractI18n(`pagination`),
    },
);

export const TUI_INPUT_FILE_TEXTS = new InjectionToken(
    `[TUI_INPUT_FILE_TEXTS]: tui-input-file i18n texts`,
    {
        factory: tuiExtractI18n(`inputFileTexts`),
    },
);

export const TUI_MULTI_SELECT_TEXTS = new InjectionToken(
    `[TUI_MULTI_SELECT_TEXTS]: tui-multi-select i18n texts`,
    {
        factory: tuiExtractI18n(`multiSelectTexts`),
    },
);

export const TUI_COUNTRIES: InjectionToken<
    Observable<Record<TuiCountryIsoCode, string>>
> = new InjectionToken(`[TUI_COUNTRIES]: Localized countries names`, {
    factory: tuiExtractI18n(`countries`),
});
