import type {OnChanges} from '@angular/core';
import {computed, Directive, inject, Input, signal} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {
    TuiAppearance,
    tuiAppearance,
    tuiAppearanceFocus,
    tuiAppearanceMode,
    tuiAppearanceState,
} from '@taiga-ui/core/directives/appearance';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiTextfieldComponent} from './textfield.component';
import {TUI_TEXTFIELD_OPTIONS} from './textfield.options';
import type {TuiTextfieldAccessor} from './textfield-accessor';
import {tuiAsTextfieldAccessor} from './textfield-accessor';

@Directive()
export class TuiTextfieldBase<T> implements OnChanges, TuiTextfieldAccessor<T> {
    // TODO: refactor to signal inputs after Angular update
    private readonly focused = signal<boolean | null>(null);

    protected readonly control = inject(NgControl, {optional: true});
    protected readonly a = tuiAppearance(inject(TUI_TEXTFIELD_OPTIONS).appearance);
    protected readonly s = tuiAppearanceState(null);
    protected readonly m = tuiAppearanceMode(this.mode);
    protected readonly f = tuiAppearanceFocus(
        computed(() => this.focused() ?? this.textfield.focused()),
    );

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly itemsHandlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly textfield: TuiTextfieldComponent<T> =
        inject(TuiTextfieldComponent);

    @Input()
    public readOnly = false;

    @Input()
    public invalid: boolean | null = null;

    public readonly value = tuiValue(this.el);

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
                this.itemsHandlers.stringify()(value),
            );
        }
    }
}

@Directive({
    standalone: true,
    // TODO: Remove :not in v.5
    selector:
        'input[tuiTextfield]:not([tuiInputCard]):not([tuiInputExpire]):not([tuiInputCVC])',
    providers: [tuiAsTextfieldAccessor(TuiTextfieldDirective)],
    hostDirectives: [TuiNativeValidator, TuiAppearance],
    host: {
        '[id]': 'textfield.id',
        '[readOnly]': 'readOnly',
        '[class._empty]': 'value() === ""',
        '(input)': '0',
        '(focusin)': '0',
        '(focusout)': '0',
    },
})
export class TuiTextfieldDirective<T> extends TuiTextfieldBase<T> {}

@Directive({
    standalone: true,
    hostDirectives: [
        {
            directive: TuiTextfieldDirective,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
})
export class TuiWithTextfield {}
