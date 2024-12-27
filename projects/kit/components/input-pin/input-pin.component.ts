import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoMask} from '@maskito/core';
import {
    tuiInjectElement,
    tuiIsNativeFocused,
    tuiIsString,
    TuiRepeatTimes,
} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_OPTIONS, TuiAppearance} from '@taiga-ui/core';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    selector: 'input[tuiInputPin]',
    templateUrl: './input-pin.template.html',
    styleUrls: ['./input-pin.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiTextfieldContent, TuiRepeatTimes, TuiAppearance],
    hostDirectives: [MaskitoDirective],
    host: {
        '(selectionchange)': 'onSelection()',
        '(keydown.arrowLeft)': 'onArrow()',
    },
})
export class TuiInputPin {
    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly mask = signal<MaskitoMask>(/^\d+$/);
    protected readonly appearance = inject(TUI_TEXTFIELD_OPTIONS).appearance;
    protected readonly control = inject(NgControl);

    protected readonly maskito = tuiMaskito(
        computed(() => ({
            mask: this.mask(),
            overwriteMode: 'replace',
        })),
    );

    @Input('mask')
    set maskSetter(mask: MaskitoMask | string) {
        this.mask.set(tuiIsString(mask) ? new RegExp(mask) : mask);
    }

    onClick(index: number): void {
        this.el.focus();
        this.el.setSelectionRange(index, index + 1);
    }

    onSelection(): void {
        if (this.el.selectionStart === this.el.maxLength) {
            this.el.setSelectionRange(this.el.maxLength - 1, this.el.maxLength);
        }
    }

    onArrow(): void {
        if (
            this.el.selectionStart === this.el.maxLength - 1 &&
            this.el.selectionEnd === this.el.maxLength
        ) {
            this.el.setSelectionRange(this.el.maxLength - 2, this.el.maxLength - 2);
        }
    }

    isFocused(index: number): boolean {
        return (
            tuiIsNativeFocused(this.el) &&
            (this.el.selectionStart === index ||
                (this.el.selectionStart === this.el.maxLength &&
                    index === this.el.maxLength - 1))
        );
    }
}
