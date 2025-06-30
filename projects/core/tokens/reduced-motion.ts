import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const TUI_REDUCED_MOTION = new InjectionToken('TUI_REDUCED_MOTION', {
    factory: () =>
        inject(DOCUMENT).defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)')
            .matches ?? false,
});
