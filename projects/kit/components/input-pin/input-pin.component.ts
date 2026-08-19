import {computed, Directive, input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoMask} from '@maskito/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement, tuiValue} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiInputPinContent} from './input-pin-content.component';

@Directive({
    selector: 'input[tuiInputPin]',
    providers: [tuiAsTextfieldContent(() => TuiInputPinContent)],
    hostDirectives: [MaskitoDirective, TuiTextfieldContent],
    host: {
        'data-tui-version': TUI_VERSION,
        inputmode: 'numeric',
        maxlength: '4',
        spellcheck: 'false',
        '(pointerdown.prevent)': 'onClick(0)',
        '(selectionchange)': 'onSelection()',
    },
})
// TODO(v6): rename to TuiInputPinDirective
export class TuiInputPinComponent {
    private readonly selectionStart = signal<number | null>(null);

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly value = tuiValue(this.el);

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
        const {selectionStart, selectionEnd, maxLength, value} = this.el;

        if (selectionStart === maxLength) {
            this.el.setSelectionRange(maxLength - 1, maxLength - 1);
        } else if (!selectionStart && !selectionEnd && value) {
            this.el.setSelectionRange(0, 1);
        }

        this.selectionStart.set(this.el.selectionStart);
    }

    public isFocused(index: number): boolean {
        return (
            this.focused() && (this.selectionStart() ?? this.el.selectionStart) === index
        );
    }
}
