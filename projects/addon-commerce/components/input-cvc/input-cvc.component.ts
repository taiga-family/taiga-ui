import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiCodeCVCLength} from '@taiga-ui/addon-commerce/types';
import {
    AbstractTuiControl,
    tuiAsFocusableItemAccessor,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
    tuiRequiredSetter,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldLabelOutsideDirective,
} from '@taiga-ui/core';
import {TextMaskConfig} from 'angular2-text-mask';

@Component({
    selector: `tui-input-cvc`,
    templateUrl: `./input-cvc.template.html`,
    styleUrls: [`./input-cvc.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsFocusableItemAccessor(TuiInputCVCComponent)],
})
export class TuiInputCVCComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    @Input()
    @tuiRequiredSetter()
    set length(length: TuiCodeCVCLength) {
        this.exampleText = `0`.repeat(length);
        this.textMaskOptions = {
            mask: new Array(length).fill(TUI_DIGIT_REGEXP),
            guide: false,
        };
    }

    exampleText = `000`;

    textMaskOptions: TextMaskConfig = {
        mask: new Array(3).fill(TUI_DIGIT_REGEXP),
        guide: false,
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_LABEL_OUTSIDE)
        private readonly textfieldLabelOutside: TuiTextfieldLabelOutsideDirective,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.input ? this.input.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    get autocomplete(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcCsc
            : TuiCreditCardAutofillName.Off;
    }

    get computedExampleText(): string {
        return this.textfieldLabelOutside.labelOutside ? `` : this.exampleText;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onCopy(): void {}

    onValueChange(value: string): void {
        this.updateValue(value);
    }

    protected getFallbackValue(): string {
        return ``;
    }
}
