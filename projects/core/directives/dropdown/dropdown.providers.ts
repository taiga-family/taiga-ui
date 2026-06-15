import {type ElementRef, InjectionToken, type Type} from '@angular/core';

import {TuiDropdownComponent} from './dropdown.component';

/**
 * A component to display a dropdown
 */
export const TUI_DROPDOWN_COMPONENT = new InjectionToken<Type<any>>(
    ngDevMode ? 'TUI_DROPDOWN_COMPONENT' : '',
    {
        factory: () => TuiDropdownComponent,
    },
);

export const TUI_DROPDOWN_CONTEXT = new InjectionToken<Record<any, any>>(
    ngDevMode ? 'TUI_DROPDOWN_CONTEXT' : '',
);

export const TUI_DROPDOWN_HOST = new InjectionToken<ElementRef<Element>>(
    ngDevMode ? 'TUI_DROPDOWN_HOST' : '',
);

export interface TuiDropdownActiveZoneCloseGuard {
    readonly canClose: () => boolean;
}

export const TUI_DROPDOWN_ACTIVE_ZONE_CLOSE_GUARD = new InjectionToken<
    readonly TuiDropdownActiveZoneCloseGuard[]
>(ngDevMode ? 'TUI_DROPDOWN_ACTIVE_ZONE_CLOSE_GUARD' : '', {
    factory: () => [],
});
