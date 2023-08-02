import {InjectionToken} from '@angular/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiSpinIcons {
    readonly decrement: PolymorpheusContent;
    readonly increment: PolymorpheusContent;
}

export const TUI_SPIN_ICONS = new InjectionToken<TuiSpinIcons>(``, {
    factory: () => ({
        decrement: `tuiIconChevronLeft`,
        increment: `tuiIconChevronRight`,
    }),
});
