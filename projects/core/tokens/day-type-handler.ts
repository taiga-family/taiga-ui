import type {TuiDay} from '@taiga-ui/cdk/date-time';
import type {TuiHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * Token for adding data-type attribute to calendar cell
 */
export const TUI_DAY_TYPE_HANDLER = tuiCreateToken<TuiHandler<TuiDay, string>>(day =>
    day.isWeekend ? 'weekend' : 'weekday',
);
