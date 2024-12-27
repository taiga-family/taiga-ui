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
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfieldContent,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Component({
    standalone: true,
    selector: 'input[tuiInputPin]',
    imports: [TuiAppearance, TuiRepeatTimes, TuiTextfieldContent],
    templateUrl: './input-pin.template.html',
    styleUrls: ['./input-pin.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    public set maskSetter(mask: MaskitoMask | string) {
        this.mask.set(tuiIsString(mask) ? new RegExp(mask) : mask);
    }

    public onClick(index: number): void {
        this.el.focus();
        this.el.setSelectionRange(index, index + 1);
    }

    public onSelection(): void {
        if (this.el.selectionStart === this.el.maxLength) {
            this.el.setSelectionRange(this.el.maxLength - 1, this.el.maxLength);
        }
    }

    public onArrow(): void {
        if (
            this.el.selectionStart === this.el.maxLength - 1 &&
            this.el.selectionEnd === this.el.maxLength
        ) {
            this.el.setSelectionRange(this.el.maxLength - 2, this.el.maxLength - 2);
        }
    }

    public isFocused(index: number): boolean {
        return (
            tuiIsNativeFocused(this.el) &&
            (this.el.selectionStart === index ||
                (this.el.selectionStart === this.el.maxLength &&
                    index === this.el.maxLength - 1))
        );
    }
}
