import {Directive, inject, Input} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiGetClipboardDataText, tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import type {TuiTextfieldAccessor} from '@taiga-ui/core/components/textfield';
import {
    tuiAsTextfieldAccessor,
    TuiTextfieldBase,
    TuiTextfieldMultiComponent,
} from '@taiga-ui/core/components/textfield';
import {tuiDropdownOpen} from '@taiga-ui/core/directives/dropdown';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';

import {TUI_INPUT_CHIP_OPTIONS} from './input-chip.options';

@Directive({
    standalone: true,
    selector: 'input[tuiInputChip]',
    providers: [
        tuiAsControl(TuiInputChipDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputChipDirective),
        tuiAsAuxiliary(TuiInputChipDirective),
    ],
    hostDirectives: [
        TuiNativeValidator,
        {
            directive: TuiTextfieldBase,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
    host: {
        enterkeyhint: 'enter',
        '[disabled]': 'disabled()',
        '(blur)': 'onEnter();',
        '(keydown.enter.prevent)': 'onEnter()',
        '(keydown.zoneless)': 'onBackspace($event.key)',
        '(input)': 'onInput()',
        '(paste.prevent)': 'onPaste($event)',
        '(drop.prevent)': 'onPaste($event)',
    },
})
export class TuiInputChipDirective<T>
    extends TuiControl<T[]>
    implements TuiTextfieldAccessor<T[]>
{
    private readonly options = inject(TUI_INPUT_CHIP_OPTIONS);
    private readonly mobile = inject(TUI_IS_MOBILE);
    private readonly textfield = inject(TuiTextfieldMultiComponent);
    private readonly open = tuiDropdownOpen();

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

        this.setValue([...this.value(), ...items.filter(Boolean)]);
        this.scrollTo();
    }

    protected onInput(): void {
        this.open.set(true);

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
        // Allow change detection to run and add new tag to DOM
        setTimeout(() => {
            this.textfield.items?.nativeElement.scrollTo({
                top: Number.MAX_SAFE_INTEGER,
                left: Number.MAX_SAFE_INTEGER,
            });
        });
    }
}
