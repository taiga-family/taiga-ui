import {computed, Directive, inject, Input, signal} from '@angular/core';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive()
export class TuiTextfieldBase {
    // TODO: refactor to signal inputs after Angular update
    private readonly focused = signal<boolean | null>(null);

    protected readonly a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    protected readonly s = tuiAppearanceState(null);
    protected readonly f = tuiAppearanceFocus(
        computed(() => this.focused() || this.textfield.focused()),
    );

    protected readonly textfield = inject(TuiTextfieldComponent);
    protected readonly id = inject(TuiIdService).generate();
    protected readonly el = tuiInjectElement<HTMLInputElement>();

    @Input()
    public readOnly = false;

    @Input()
    public invalid: boolean | null = null;

    @Input('focused')
    public set focusedSetter(focused: boolean | null) {
        this.focused.set(focused);
    }

    @Input('state')
    public set stateSetter(state: TuiInteractiveState | null) {
        this.s.set(state);
    }

    public get mode(): string | null {
        if (this.readOnly) {
            return 'readonly';
        }

        if (this.invalid === false) {
            return 'valid';
        }

        if (this.invalid) {
            return 'invalid';
        }

        return null;
    }

    public setValue(value: string): void {
        this.el.value = value;
        this.el.dispatchEvent(new Event('input'));
    }
}

@Directive({
    standalone: true,
    selector: 'input[tuiTextfield]',
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'el.id || id',
        '[readOnly]': 'readOnly',
        '[class._empty]': 'el.value === ""',
        '[attr.data-mode]': 'mode',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
})
export class TuiTextfieldDirective extends TuiTextfieldBase {}
