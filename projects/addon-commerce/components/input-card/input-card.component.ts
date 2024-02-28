import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    ViewChild,
} from '@angular/core';
import {MaskitoOptions} from '@maskito/core';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {tuiAsControl, tuiAsFocusableItemAccessor} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';

import {AbstractTuiInputCard} from './abstract-input-card';
import {TUI_INPUT_CARD_OPTIONS} from './input-card.options';

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

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly maskOptions: MaskitoOptions = {
        mask: TUI_CARD_MASK,
    };

    constructor() {
        super(inject(TUI_INPUT_CARD_OPTIONS));
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    public get card(): string {
        return this.value ?? '';
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    public onValueChange(value: string): void {
        const parsed = value.split(' ').join('');
        const currentBin = this.bin;

        this.value = parsed;

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public override writeValue(value: string | null): void {
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
