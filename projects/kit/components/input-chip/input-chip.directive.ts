import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiGetClipboardDataText, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldBase,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownDirective,
    TuiDropdownOpen,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {TUI_ITEMS_HANDLERS} from '@taiga-ui/core/directives/items-handlers';
import {filter} from 'rxjs';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';

// TODO(v5): remove base component after angular update
@Directive({
    standalone: true,
    host: {
        enterkeyhint: 'enter',
        '[disabled]': 'disabled()',
        '(keydown.enter.prevent)': 'onEnter()',
        '(keydown.zoneless)': 'onBackspace($event.key)',
        '(input)': 'onInput()',
        '(paste.prevent)': 'onPaste($event)',
        '(drop.prevent)': 'onPaste($event)',
    },
})
export class TuiInputChipBaseDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>
{
    private readonly options = inject(TUI_INPUT_CHIP_OPTIONS);
    private readonly mobile = inject(TUI_IS_MOBILE);
    private readonly dropdown = inject(TuiDropdownDirective);

    protected readonly textfield = inject(TuiTextfieldMultiComponent);
    protected readonly open = tuiDropdownOpen();
    protected readonly handlers: TuiItemsHandlers<T> = inject(TUI_ITEMS_HANDLERS);
    protected readonly enabled = tuiDirectiveBinding(
        TuiDropdownOpen,
        'tuiDropdownEnabled',
        this.interactive,
        {},
    );

    protected readonly sub = inject(TuiActiveZone)
        .tuiActiveZoneChange.pipe(
            filter((active) => !active && !this.el.matches('select')),
            takeUntilDestroyed(),
        )
        .subscribe(() => {
            this.onEnter();
            this.textfield.value.set('');
        });

    @Input()
    public separator = this.options.separator;

    @Input()
    public unique = this.options.unique;

    public readonly el = tuiInjectElement<HTMLInputElement>();

    public setValue(value: T[]): void {
        this.textfield.value.set('');
        this.onChange(
            this.unique ? Array.from(new Set(value.reverse())).reverse() : value,
        );
    }

    protected onEnter(): void {
        const value = this.textfield.value().trim();
        const items: any[] = this.separator ? value.split(this.separator) : [value];
        const valid = items.filter(
            (item) => item && !this.handlers.disabledItemHandler()(item),
        );

        if (!value || !valid.length) {
            return;
        }

        this.setValue([...this.value(), ...valid]);
        this.scrollTo();
    }

    protected onInput(): void {
        this.open.set(!!this.dropdown.content);

        if (this.separator && this.textfield.value().match(this.separator)) {
            this.onEnter();
        } else {
            this.scrollTo();
        }
    }

    protected onPaste(event: ClipboardEvent | DragEvent): void {
        const value =
            'dataTransfer' in event
                ? event.dataTransfer?.getData('text/plain') || ''
                : tuiGetClipboardDataText(event);

        this.textfield.value.set(value);
        this.onEnter();
    }

    protected onBackspace(key: string): void {
        // (keydown.backspace) doesn't emit event on empty input in ios safari
        if (
            key === 'Backspace' &&
            !this.textfield.value() &&
            this.interactive() &&
            (this.mobile || !this.textfield.item)
        ) {
            this.onChange(this.value().slice(0, -1));
        }
    }

    protected scrollTo(): void {
        const sign = this.textfield.el.matches('[dir="rtl"] :scope') ? -1 : 1;

        // Allow change detection to run and add new tag to DOM
        setTimeout(() => {
            this.textfield.el.scrollTo({
                left: sign * Number.MAX_SAFE_INTEGER,
                top: Number.MAX_SAFE_INTEGER,
            });
        });
    }
}

@Directive({
    standalone: true,
    selector: 'input[tuiInputChip]',
    providers: [
        tuiAsControl(TuiInputChipDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputChipDirective),
    ],
    hostDirectives: [
        TuiNativeValidator,
        {
            directive: TuiTextfieldBase,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
})
export class TuiInputChipDirective<T> extends TuiInputChipBaseDirective<T> {}
