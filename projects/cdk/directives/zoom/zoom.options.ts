import {tuiCreateToken} from '@taiga-ui/cdk/utils';

import type {TuiZoomOptions} from './zoom.types';

/**
 * Zoom options
 */
export const TUI_ZOOM_OPTIONS = tuiCreateToken<TuiZoomOptions>({
    wheelSensitivity: 0.01,
});
