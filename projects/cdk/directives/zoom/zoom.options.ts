import {InjectionToken} from '@angular/core';

import {type TuiZoomOptions} from './zoom.types';

/**
 * Zoom options
 */
export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>(
    ngDevMode ? 'TUI_ZOOM_OPTIONS' : '',
    {
        factory: () => ({
            wheelSensitivity: 0.01,
        }),
    },
);
