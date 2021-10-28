import {InjectionToken} from '@angular/core';
import {TuiZoomOptions} from '@taiga-ui/cdk/interfaces';

export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>('Zoom options', {
    factory: () => ({
        touchSensitivity: 0.01,
        wheelSensitivity: 0.01,
    }),
});
