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
import {MaskitoOptions} from '@maskito/core';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {tuiAsControl, tuiAsFocusableItemAccessor} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';

import {AbstractTuiInputCard} from './abstract-input-card';
import {TUI_INPUT_CARD_OPTIONS, TuiInputCardOptions} from './input-card.options';

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

    readonly maskOptions: MaskitoOptions = {
        mask: TUI_CARD_MASK,
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
}
