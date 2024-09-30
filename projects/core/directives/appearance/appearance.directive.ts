import {
    afterNextRender,
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import type {TuiAppearanceOptions} from './appearance.options';
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
        class: 'tui-appearance-initializing',
        tuiAppearance: '',
        '[attr.data-appearance]': 'appearance()',
        '[attr.data-state]': 'state()',
        '[attr.data-focus]': 'focus()',
        '[attr.data-mode]': 'modes()',
    },
})
export class TuiAppearance {
    private readonly el = tuiInjectElement();

    protected readonly nothing = tuiWithStyles(TuiAppearanceStyles);
    protected readonly modes = computed((mode = this.mode()) =>
        !mode || tuiIsString(mode) ? mode : mode.join(' '),
    );

    // TODO: refactor to signal inputs after Angular update
    public readonly appearance = signal(inject(TUI_APPEARANCE_OPTIONS).appearance);
    public readonly state = signal<TuiInteractiveState | null>(null);
    public readonly focus = signal<boolean | null>(null);
    public readonly mode = signal<string | readonly string[] | null>(null);

    constructor() {
        afterNextRender(() => {
            this.el.classList.toggle(
                'tui-appearance-initializing',
                // Triggering reflow so there's no transition
                // eslint-disable-next-line
                !!this.el.offsetWidth && false,
            );
        });
    }

    @Input()
    public set tuiAppearance(appearance: TuiAppearanceOptions['appearance']) {
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

    @Input()
    public set tuiAppearanceMode(mode: string | readonly string[] | null) {
        this.mode.set(mode);
    }
}
