import type {FactoryProvider, Type} from '@angular/core';
import {inject, InjectionToken} from '@angular/core';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_DROPDOWN_COMPONENT} from '@taiga-ui/core/directives/dropdown';

/**
 * A component for mobile data picker
 */
export const TUI_MOBILE_CALENDAR = new InjectionToken<Type<unknown>>(
    '[TUI_MOBILE_CALENDAR]',
);

export const TUI_MOBILE_CALENDAR_PROVIDER: FactoryProvider = {
    provide: TUI_DROPDOWN_COMPONENT,
    useFactory: () =>
        (inject(TUI_IS_MOBILE) && inject(TUI_MOBILE_CALENDAR, {optional: true})) ||
        inject(TUI_DROPDOWN_COMPONENT, {skipSelf: true}),
};
