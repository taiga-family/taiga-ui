import {
    ChangeDetectionStrategy,
    Component,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

export type TuiPincodeMode =
    | 'dismissing'
    | 'invalid'
    | 'pending'
    | 'submitting'
    | 'success';

// item width (1.25rem) + gap (0.625rem)
const PITCH = 1.875;

@Component({
    selector: 'input[tuiPincode]',
    imports: [TuiTextfieldContent],
    templateUrl: './pincode.template.html',
    styleUrl: './pincode.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [MaskitoDirective],
    host: {
        autocomplete: 'one-time-code',
        inputmode: 'numeric',
        maxlength: '4',
        ngSkipHydration: 'true',
        spellcheck: 'false',
        '[attr.data-mode]': 'mode()',
        '(selectionchange)': 'onSelection()',
    },
})
export class TuiPincodeComponent {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly maskito = tuiMaskito({mask: /^\d+$/, overwriteMode: 'replace'});
    public readonly mode = input<TuiPincodeMode | null>(null);

    protected getStyle(index: number): Record<string, string> {
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

    protected isFocused(index: number): boolean {
        return (
            tuiIsFocused(this.el) &&
            index === Math.min(this.el.value.length, this.el.maxLength - 1)
        );
    }

    protected onSelection(): void {
        const {value, maxLength} = this.el;
        const end = value.length;
        const start = end === maxLength ? end - 1 : end;

        if (this.el.selectionStart !== start || this.el.selectionEnd !== end) {
            this.el.setSelectionRange(start, end);
        }
    }
}
