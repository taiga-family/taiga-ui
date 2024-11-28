import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

/**
 * Localized months names
 */
export const TUI_MONTHS = tuiCreateTokenFromFactory(tuiExtractI18n('months'));

/**
 * i18n 'close' word
 */
export const TUI_CLOSE_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('close'));

/**
 * i18n 'clear' word
 */
export const TUI_CLEAR_WORD = tuiCreateTokenFromFactory(tuiExtractI18n('clear'));

/**
 * i18n 'Nothing found' message
 */
export const TUI_NOTHING_FOUND_MESSAGE = tuiCreateTokenFromFactory(
    tuiExtractI18n('nothingFoundMessage'),
);

/**
 * i18n of error message
 */
export const TUI_DEFAULT_ERROR_MESSAGE = tuiCreateTokenFromFactory(
    tuiExtractI18n('defaultErrorMessage'),
);

/**
 * spin i18n texts
 */
export const TUI_SPIN_TEXTS = tuiCreateTokenFromFactory(tuiExtractI18n('spinTexts'));

/**
 * calendars i18n texts
 */
export const TUI_SHORT_WEEK_DAYS = tuiCreateTokenFromFactory(
    tuiExtractI18n('shortWeekDays'),
);
