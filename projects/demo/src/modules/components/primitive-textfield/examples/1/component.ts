import {
    ChangeDetectorRef,
    Component,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';
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
        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';
    }

    get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }

    get inputType(): string {
        return this.isPasswordHidden ? 'password' : 'text';
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
