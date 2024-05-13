import {tuiCreateToken} from '@taiga-ui/cdk/utils';

import type {TuiSwipeOptions} from './swipe.types';

export const TUI_SWIPE_OPTIONS = tuiCreateToken<TuiSwipeOptions>({
    timeout: 500,
    threshold: 30,
});
