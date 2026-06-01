import {computed, Directive, inject, input, signal} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoMask} from '@maskito/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiInputPinContent} from './input-pin-content.component';

@Directive({
    selector: 'input[tuiInputPin]',
    providers: [tuiAsTextfieldContent(TuiInputPinContent)],
    hostDirectives: [MaskitoDirective, TuiTextfieldContent],
    host: {
        inputmode: 'numeric',
        spellcheck: 'false',
        '(input)': 'value.set(el.value)',
        '(pointerdown.prevent)': 'onClick(0)',
        '(selectionchange)': 'onSelection()',
    },
})
export class TuiInputPinComponent {
    private readonly selectionStart = signal<number | null>(null);

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    public readonly control = inject(NgControl);
    public readonly value = signal('');

    protected readonly focused = tuiFocusedIn(this.el);

    protected readonly maskito = tuiMaskito(
        computed(() => ({mask: this.mask(), overwriteMode: 'replace'})),
    );

    public readonly mask = input(/^\d+$/, {
        transform: (mask: MaskitoMask | string): MaskitoMask =>
            tuiIsString(mask) ? new RegExp(mask) : mask,
    });

    public onClick(index: number): void {
        this.el.focus();
        this.el.setSelectionRange(index, index + 1);
    }

    public onSelection(): void {
        this.selectionStart.set(this.el.selectionStart);

        if (this.el.selectionStart === this.el.maxLength) {
            this.el.setSelectionRange(this.el.maxLength - 1, this.el.maxLength - 1);
        }
    }

    public isFocused(index: number): boolean {
        const start = this.selectionStart() ?? this.el.selectionStart;

        return (
            this.focused() &&
            (start === index ||
                (start === this.el.maxLength && index === this.el.maxLength - 1))
        );
    }
}
