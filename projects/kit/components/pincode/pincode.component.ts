import {afterRender, Directive, input, signal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiFocusedIn} from '@taiga-ui/cdk/utils/focus';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiPincodeContent} from './pincode-content.component';

export type TuiPincodeMode = 'invalid' | 'submitting' | 'success';

// item width (1.25rem) + gap (0.625rem)
const PITCH = 1.875;

@Directive({
    selector: 'input[tuiPincode]',
    providers: [tuiAsTextfieldContent(TuiPincodeContent)],
    hostDirectives: [MaskitoDirective, TuiTextfieldContent],
    host: {
        autocomplete: 'one-time-code',
        inputmode: 'numeric',
        maxlength: '4',
        spellcheck: 'false',
        '[attr.data-mode]': 'effectiveMode',
        '(input)': 'value.set(el.value)',
        '(selectionchange)': 'onSelection()',
    },
})
export class TuiPincodeComponent {
    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly value = signal('');
    public readonly focused = tuiFocusedIn(this.el);
    protected readonly maskito = tuiMaskito({mask: /^\d+$/, overwriteMode: 'replace'});
    public readonly mode = input<TuiPincodeMode | null>(null);

    constructor() {
        afterRender(() => {
            if (this.value() !== this.el.value) {
                this.value.set(this.el.value);
            }
        });
    }

    public get effectiveMode(): TuiPincodeMode | 'pending' | null {
        const mode = this.mode();

        if (mode !== null) {
            return mode;
        }

        const {maxLength} = this.el;

        return maxLength > 0 && this.value().length === maxLength ? 'pending' : null;
    }

    public getStyle(index: number): Record<string, string> {
        const n = this.el.maxLength;
        const offset = index - (n - 1) / 2;
        // spec: 400ms anim + (n-1)*100ms stagger + 300ms pause
        const cycle = 400 + (n - 1) * 100 + 300;

        return {
            '--t-animation-delay': `${index * 100}ms`,
            '--t-animation-cycle': `${cycle}ms`,
            '--t-spread-tx': `${offset * (PITCH / 3)}rem`,
            '--t-collapse-tx': `${-offset * PITCH}rem`,
        };
    }

    public isFocused(index: number): boolean {
        return (
            this.focused() &&
            index === Math.min(this.value().length, this.el.maxLength - 1)
        );
    }

    protected onSelection(): void {
        const {maxLength} = this.el;
        const end = this.el.value.length;
        const start = end === maxLength ? end - 1 : end;

        if (this.el.selectionStart !== start || this.el.selectionEnd !== end) {
            this.el.setSelectionRange(start, end);
        }
    }
}
