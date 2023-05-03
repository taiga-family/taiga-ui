import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {tuiAsControl, tuiAsFocusableItemAccessor, tuiPure} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent, TuiTextMaskOptions} from '@taiga-ui/core';

import {AbstractTuiInputCard} from './abstract-input-card';
import {TUI_INPUT_CARD_OPTIONS, TuiInputCardOptions} from './input-card.providers';

@Component({
    selector: 'tui-input-card',
    templateUrl: './input-card.template.html',
    styleUrls: ['./input-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCardComponent),
        tuiAsControl(TuiInputCardComponent),
    ],
})
export class TuiInputCardComponent extends AbstractTuiInputCard<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    readonly textMaskOptions: TuiTextMaskOptions = {
        mask: TUI_CARD_MASK,
        guide: false,
        pipe: conformedValue => conformedValue.trim(),
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_INPUT_CARD_OPTIONS) options: TuiInputCardOptions,
    ) {
        super(control, cdr, options);
    }

    get card(): string {
        return this.value ?? '';
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.input ? this.input.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    get formattedCard(): string {
        return this.getFormattedCard(this.card);
    }

    onValueChange(value: string): void {
        const parsed = value.split(' ').join('');
        const currentBin = this.bin;

        this.value = parsed;

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    override writeValue(value: string | null): void {
        const currentBin = this.bin;

        super.writeValue(value);

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    protected override getFallbackValue(): string {
        return '';
    }

    @tuiPure
    private getFormattedCard(cardNumber: string): string {
        return cardNumber
            .split('')
            .map((char, index) => (index && index % 4 === 0 ? ` ${char}` : char))
            .join('');
    }
}
