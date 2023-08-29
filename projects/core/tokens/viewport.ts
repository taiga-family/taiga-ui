import {inject, InjectionToken, Provider, Type} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiRectAccessor} from '@taiga-ui/core/abstract';

/**
 * Viewport accessor
 */
export const TUI_VIEWPORT = new InjectionToken<TuiRectAccessor>(`[TUI_VIEWPORT]`, {
    factory: () => {
        const win = inject(WINDOW);

        return {
            getClientRect() {
                return {
                    bottom: win.innerHeight,
                    height: win.innerHeight,
                    left: 0,
                    right: win.innerWidth,
                    top: 0,
                    width: win.innerWidth,
                };
            },
            type: `viewport`,
        };
    },
});

export function tuiAsViewport(useExisting: Type<TuiRectAccessor>): Provider {
    return {
        provide: TUI_VIEWPORT,
        useExisting,
    };
}
