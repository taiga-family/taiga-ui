import {
    ChangeDetectionStrategy,
    Component,
    computed,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoMask} from '@maskito/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

export type TuiPincodeAppearance = 'dots' | 'numbers';

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
        ngSkipHydration: 'true',
        inputmode: 'numeric',
        spellcheck: 'false',
        '[attr.data-appearance]': 'appearance()',
        '[attr.data-mode]': 'mode()',
    },
})
export class TuiPincodeComponent {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly maskito = tuiMaskito(
        computed(() => ({mask: this.mask(), overwriteMode: 'replace'})),
    );

    public readonly appearance = input<TuiPincodeAppearance>('numbers');
    public readonly mode = input<TuiPincodeMode | null>(null);

    public readonly mask = input(/^\d+$/, {
        transform: (mask: MaskitoMask | string): MaskitoMask =>
            tuiIsString(mask) ? new RegExp(mask) : mask,
    });

    protected getStyle(index: number): Record<string, string> {
        const n = this.el.maxLength;
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

    protected onClick(index: number): void {
        this.el.focus();
        this.el.setSelectionRange(index, index + 1);
    }

    protected onSelection(): void {
        const pos = this.el.value.length;

        if (this.el.selectionStart !== pos) {
            this.el.setSelectionRange(pos, pos);
        }
    }

    protected isFocused(index: number): boolean {
        return (
            tuiIsFocused(this.el) &&
            index === Math.min(this.el.value.length, this.el.maxLength - 1)
        );
    }
}
