import {type FactoryProvider, inject, InjectionToken, type Type} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/portals/dropdown';

/**
 * A component for mobile data picker
 */
export const TUI_MOBILE_CALENDAR = new InjectionToken<Type<unknown>>(
    ngDevMode ? 'TUI_MOBILE_CALENDAR' : '',
);

export const TUI_MOBILE_CALENDAR_PROVIDER: FactoryProvider = {
    provide: TUI_DROPDOWN_COMPONENT,
    useFactory: () =>
        (inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {optional: true})) ||
        inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
};
