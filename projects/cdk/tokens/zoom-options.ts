import {InjectionToken} from '@angular/core';
import type {TuiZoomOptions} from '@taiga-ui/cdk/interfaces';

/**
 * Zoom options
 */
export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>(`[TUI_ZOOM_OPTIONS]`, {
    factory: () => ({
        wheelSensitivity: 0.01,
    }),
});
