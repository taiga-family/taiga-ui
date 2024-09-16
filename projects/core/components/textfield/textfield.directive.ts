import {computed, Directive, inject, Input, type OnChanges, signal} from '@angular/core';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive()
export class TuiTextfieldBase<T> implements OnChanges {
    // TODO: refactor to signal inputs after Angular update
    private readonly focused = signal<boolean | null>(null);

    protected readonly a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    protected readonly s = tuiAppearanceState(null);
    protected readonly m = tuiAppearanceMode(this.mode);
    protected readonly f = tuiAppearanceFocus(
        computed(() => this.focused() || this.textfield.focused()),
    );

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly textfield: TuiTextfieldComponent<T> =
        inject(TuiTextfieldComponent);

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

    // TODO: refactor to signal inputs after Angular update
    public ngOnChanges(): void {
        this.m.set(this.mode);
    }

    public setValue(value: T | null): void {
        this.el.value = value == null ? '' : this.textfield.stringify(value);
        this.el.dispatchEvent(new Event('input', {bubbles: true}));
    }
}

@Directive({
    standalone: true,
    selector: 'input[tuiTextfield]',
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly',
        '[class._empty]': 'el.value === ""',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
})
export class TuiTextfieldDirective<T> extends TuiTextfieldBase<T> {}
