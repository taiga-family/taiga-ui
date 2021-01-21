import {
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TuiAccountAutofillName,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiDirection,
    TuiHintMode,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-primitive-textfield-example-1',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiPrimitiveTextfieldExample1 extends AbstractTuiControl<string> {
    @Input()
    exampleText = '';

    @Input()
    labelOutside = false;

    @Input()
    autocomplete: TuiAccountAutofillName | null = null;

    @Input()
    hintContent: PolymorpheusContent | null = null;

    @Input()
    hintDirection: TuiDirection = 'bottom-left';

    @Input()
    hintMode: TuiHintMode | null = null;

    @Input()
    maxLength: number | null = null;

    @Input()
    size: TuiSizeS | TuiSizeL = 'l';

    private isPasswordHidden = true;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get icon(): string {
        if (this.size === 's') {
            return this.isPasswordHidden ? 'tuiIconEyeClosed' : 'tuiIconEyeOpen';
        }

        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';
    }

    get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }

    get inputType(): string {
        return this.isPasswordHidden || !this.hasEyeIcon ? 'password' : 'text';
    }

    get hasEyeIcon(): boolean {
        return !(this.disabled || this.readOnly);
    }

    onValueChange(textValue: string) {
        this.updateValue(textValue);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    togglePasswordVisibility() {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
