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

    protected get length(): 4 | 5 | 6 {
        return this.el.maxLength === 5 || this.el.maxLength === 6 ? this.el.maxLength : 4;
    }

    protected getStyle(index: number): Record<string, string> {
        const n = this.length;
        const offset = index - (n - 1) / 2;
        // spec: 400ms anim + (n-1)*100ms stagger + 300ms pause
        const cycle = 400 + (n - 1) * 100 + 300;

        return {
            '--tui-animation-delay': `${index * 100}ms`,
            '--tui-animation-cycle': `${cycle}ms`,
            '--tui-spread-tx': `${offset * (PITCH / 3)}rem`,
            '--tui-collapse-tx': `${-offset * PITCH}rem`,
        };
    }

    protected isFocused(index: number): boolean {
        return (
            tuiIsFocused(this.el) &&
            index === Math.min(this.el.value.length, this.length - 1)
        );
    }

    protected onSelection(): void {
        const pos = Math.min(this.el.value.length, this.length - 1);

        if (this.el.selectionStart !== pos) {
            this.el.setSelectionRange(pos, pos);
        }
    }
}
