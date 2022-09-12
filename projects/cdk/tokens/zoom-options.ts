import {InjectionToken} from '@angular/core';
import {TuiZoomOptions} from '@taiga-ui/cdk/interfaces';

export const TUI_ZOOM_OPTIONS = new InjectionToken<TuiZoomOptions>(
    `[TUI_ZOOM_OPTIONS]: Zoom options`,
    {
        factory: () => ({
            wheelSensitivity: 0.01,
        }),
    },
);
