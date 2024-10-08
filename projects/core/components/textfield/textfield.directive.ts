import type {OnChanges} from '@angular/core';
import {computed, Directive, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import type {TuiInteractiveState} from '@taiga-ui/core/types';
import {fromEvent, map, merge, switchMap, timer} from 'rxjs';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';

@Directive()
export class TuiTextfieldBase<T> implements OnChanges {
    // TODO: refactor to signal inputs after Angular update
    private readonly focused = signal<boolean | null>(null);

    protected readonly control = inject(NgControl, {optional: true});
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

    public nativeValue = toSignal(
        merge(
            fromEvent(this.el, 'input'),
            timer(0) // https://github.com/angular/angular/issues/54418
                .pipe(switchMap(() => tuiControlValue(this.control))),
        ).pipe(map(() => this.el.value)),
        {initialValue: this.el.value},
    );

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
        this.el.focus();
        this.el.select();

        if (value == null) {
            this.el.ownerDocument.execCommand('delete');
        } else {
            this.el.ownerDocument.execCommand(
                'insertText',
                false,
                this.textfield.stringify(value),
            );
        }
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
