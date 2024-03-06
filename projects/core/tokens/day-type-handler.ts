import type {TuiDay, TuiHandler} from '@taiga-ui/cdk';
import {tuiCreateToken} from '@taiga-ui/cdk';

/**
 * Token for adding data-type attribute to calendar cell
 */
export const TUI_DAY_TYPE_HANDLER = tuiCreateToken<TuiHandler<TuiDay, string>>(day =>
    day.isWeekend ? 'weekend' : 'weekday',
);
