import type {Provider, Type} from '@angular/core';
import {inject} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory, tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiRectAccessor} from '@taiga-ui/core/classes';

/**
 * Viewport accessor
 */
export const TUI_VIEWPORT = tuiCreateTokenFromFactory<TuiRectAccessor>(() => {
    const win = inject(WA_WINDOW);

    return {
        type: 'viewport',
        getClientRect() {
            const rect = {
                top: 0,
                left: 0,
                right: win.innerWidth,
                bottom: win.innerHeight,
                width: win.innerWidth,
                height: win.innerHeight,
                x: 0,
                y: 0,
            };

            return {
                ...rect,
                toJSON: () => JSON.stringify(rect),
            };
        },
    };
});

export function tuiAsViewport(accessor: Type<TuiRectAccessor>): Provider {
    return tuiProvide(TUI_VIEWPORT, accessor);
}
