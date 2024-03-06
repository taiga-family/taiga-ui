import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import type {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import type {
    TuiAutofillFieldName,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {
    TUI_DIGIT_REGEXP,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-cvc',
    templateUrl: './input-cvc.template.html',
    styleUrls: ['./input-cvc.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputCVCComponent),
        tuiAsControl(TuiInputCVCComponent),
    ],
})
export class TuiInputCVCComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    private readonly textfieldLabelOutside = inject(TUI_TEXTFIELD_LABEL_OUTSIDE);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public autocompleteEnabled = false;

    public exampleText = '000';

    public maskOptions: MaskitoOptions = {
        mask: new Array(3).fill(TUI_DIGIT_REGEXP),
    };

    @Input()
    public set length(length: TuiCodeCVCLength) {
        this.exampleText = '0'.repeat(length);
        this.maskOptions = {
            mask: new Array(length).fill(TUI_DIGIT_REGEXP),
        };
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? 'cc-csc' : 'off';
    }

    protected get computedPlaceholder(): string {
        return this.textfieldLabelOutside.labelOutside ? '' : this.exampleText;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    /** deprecated use 'value' setter */
    protected onValueChange(value: string): void {
        this.value = value;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
