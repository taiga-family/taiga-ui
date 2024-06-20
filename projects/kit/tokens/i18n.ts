import type {TuiDateMode} from '@taiga-ui/cdk/date-time';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiCountryIsoCode} from '@taiga-ui/i18n/enums';
import {tuiExtractI18n} from '@taiga-ui/i18n/tools';
import type {Observable} from 'rxjs';

export const TUI_CONFIRM_WORDS = tuiCreateTokenFromFactory(tuiExtractI18n('confirm'));

export const TUI_CANCEL_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('cancel'));

export const TUI_DONE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('done'));

export const TUI_MORE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('more'));

export const TUI_HIDE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('hide'));

export const TUI_SHOW_ALL_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('showAll'));

export const TUI_OTHER_DATE_TEXT = tuiCreateTokenFromFactory(tuiExtractI18n('otherDate'));

export const TUI_CHOOSE_DAY_OR_RANGE_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('mobileCalendarTexts'),
);

export const TUI_FROM_TO_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('range'));

export const TUI_PLUS_MINUS_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('countTexts'),
);

export const TUI_TIME_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('time'));

export const TUI_DATE_TEXTS = tuiCreateTokenFromFactory<
    Observable<Record<TuiDateMode, string>>
>(tuiExtractI18n('dateTexts'));

export const TUI_DIGITAL_INFORMATION_UNITS = tuiCreateTokenFromFactory(
    tuiExtractI18n('digitalInformationUnits'),
);

export const TUI_COPY_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('copyTexts'));

export const TUI_PASSWORD_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('passwordTexts'),
);

export const TUI_CALENDAR_MONTHS = tuiCreateTokenFromFactory(
    tuiExtractI18n('shortCalendarMonths'),
);

export const TUI_FILE_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('fileTexts'));

export const TUI_PAGINATION_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('pagination'),
);

export const TUI_INPUT_FILE_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('inputFileTexts'),
);

export const TUI_MULTI_SELECT_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('multiSelectTexts'),
);

export const TUI_COUNTRIES = tuiCreateTokenFromFactory<
    Observable<Record<TuiCountryIsoCode, string>>
>(tuiExtractI18n('countries'));

export const TUI_PREVIEW_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('previewTexts'),
);

export const TUI_PREVIEW_ZOOM_TEXTS = tuiCreateTokenFromFactory(
    tuiExtractI18n('zoomTexts'),
);
