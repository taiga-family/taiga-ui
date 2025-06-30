import type {TuiZoomOptions} from './zoom.types';
import {InjectionToken} from '@angular/core';

/**
 * Zoom options
 */
export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>('TUI_ZOOM_OPTIONS', {
    factory: () => ({
        wheelSensitivity: 0.01,
    }),
});
