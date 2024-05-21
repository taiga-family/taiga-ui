import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    ViewChild,
} from '@angular/core';
import {MaskitoDirective, MaskitoPipe} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {TUI_CARD_MASK} from '@taiga-ui/addon-commerce/constants';
import {tuiAsControl, tuiAsFocusableItemAccessor} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS, TuiTextfieldHost} from '@taiga-ui/core';
import {
    TUI_TEXTFIELD_SIZE,
    tuiAsTextfieldHost,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiValueAccessorModule} from '@taiga-ui/kit';

import {AbstractTuiInputCard} from './abstract-input-card';
import {TUI_INPUT_CARD_OPTIONS} from './input-card.options';

@Component({
    standalone: true,
    selector: 'tui-input-card',
    imports: [
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiValueAccessorModule,
        MaskitoDirective,
        MaskitoPipe,
        TuiSvgComponent,
    ],
    templateUrl: './input-card.template.html',
    styleUrls: ['./input-card.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCardComponent),
        tuiAsControl(TuiInputCardComponent),
        tuiAsTextfieldHost(TuiInputCardComponent),
    ],
})
export class TuiInputCardComponent
    extends AbstractTuiInputCard<string>
    implements AfterViewInit, TuiTextfieldHost
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected readonly maskOptions: MaskitoOptions = {
        mask: TUI_CARD_MASK,
    };

    constructor() {
        super(inject(TUI_INPUT_CARD_OPTIONS));
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

    public get inputMode(): TuiTextfieldHost['inputMode'] {
        return 'text';
    }

    public override get value(): string {
        return super.value ?? '';
    }

    public override set value(value: string | null) {
        super.value = value ?? '';
    }

    public process(_input: HTMLInputElement): void {}

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

    public ngAfterViewInit(): void {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.inputMode = 'numeric';
        this.nativeFocusableElement.placeholder =
            this.nativeFocusableElement.placeholder || '0000 0000 0000 0000';
    }

    public override writeValue(value: string | null): void {
        const currentBin = this.bin;

        super.writeValue(value);

        const newBin = this.bin;

        if (currentBin !== newBin) {
            this.binChange.emit(newBin);
        }
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected override getFallbackValue(): string {
        return '';
    }
}
