import {InjectionToken} from '@angular/core';
import type {TuiZoomOptions} from '@taiga-ui/cdk/interfaces';

export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>(`Zoom options`, {
    factory: () => ({
        wheelSensitivity: 0.01,
    }),
});
