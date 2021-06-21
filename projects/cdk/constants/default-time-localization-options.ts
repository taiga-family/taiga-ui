import {TuiDayOfWeek} from '../enums';
import {TuiTimeLocalizationOptions} from '../interfaces';

export const DEFAULT_TIME_LOCALIZATION_OPTIONS: Required<TuiTimeLocalizationOptions> = {
    startWeekDayIndex: TuiDayOfWeek.Monday,
};
