import type {TuiZoomOptions} from '@taiga-ui/cdk/types';
import {tuiCreateToken} from '@taiga-ui/cdk/utils';

/**
 * Zoom options
 */
export const TUI_ZOOM_OPTIONS = tuiCreateToken<TuiZoomOptions>({
    wheelSensitivity: 0.01,
});
