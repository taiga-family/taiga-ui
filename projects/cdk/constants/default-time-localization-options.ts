import {DAY_OF_WEEK_INDEX} from '../enums';
import {TuiTimeLocalizationOptions} from '../interfaces';

export const DEFAULT_TIME_LOCALIZATION_OPTIONS: Required<TuiTimeLocalizationOptions> = {
    startWeekDayIndex: DAY_OF_WEEK_INDEX.MONDAY,
};
