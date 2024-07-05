import {Directive, inject, Input, isSignal, signal} from '@angular/core';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Directive({
    standalone: true,
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'appearance()',
        '[attr.data-state]': 'tuiAppearanceState',
        '[attr.data-focus]': 'tuiAppearanceFocus',
    },
})
export class TuiAppearance {
    private readonly options = inject(TUI_APPEARANCE_OPTIONS);

    protected readonly appearance = isSignal(this.options.appearance)
        ? this.options.appearance
        : signal(this.options.appearance);

    @Input()
    public set tuiAppearance(appearance: string) {
        this.appearance.set(appearance);
    }

    @Input()
    public tuiAppearanceState: TuiInteractiveState | null = null;

    @Input()
    public tuiAppearanceFocus: boolean | null = null;
}
