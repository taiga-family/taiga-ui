import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/appearance.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-appearance',
    },
})
class TuiAppearanceStyles {}

@Directive({
    standalone: true,
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'appearance()',
        '[attr.data-state]': 'state()',
        '[attr.data-focus]': 'focus()',
    },
})
export class TuiAppearance {
    protected readonly nothing = tuiWithStyles(TuiAppearanceStyles);

    // TODO: refactor to signal inputs after Angular update
    public readonly appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    public readonly state = signal<TuiInteractiveState | null>(null);
    public readonly focus = signal<boolean | null>(null);

    @Input()
    public set tuiAppearance(appearance: string) {
        this.appearance.set(appearance);
    }

    @Input()
    public set tuiAppearanceState(state: TuiInteractiveState | null) {
        this.state.set(state);
    }

    @Input()
    public set tuiAppearanceFocus(focus: boolean | null) {
        this.focus.set(focus);
    }
}
