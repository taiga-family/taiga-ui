import {InjectionToken} from '@angular/core';

export interface TuiSpinIcons {
    readonly decrement: string;
    readonly increment: string;
}

export const TUI_SPIN_ICONS = new InjectionToken<TuiSpinIcons>('TUI_SPIN_ICONS', {
    factory: () => ({
        decrement: '@tui.chevron-left',
        increment: '@tui.chevron-right',
    }),
});
