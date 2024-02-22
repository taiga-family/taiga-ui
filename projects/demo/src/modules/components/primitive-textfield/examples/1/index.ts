import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';

@Component({
    selector: 'tui-primitive-textfield-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPrimitiveTextfieldExample1 extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private isPasswordHidden = true;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get icon(): string {
        return this.isPasswordHidden ? 'tuiIconEyeLarge' : 'tuiIconEyeOffLarge';
    }

    public get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }

    public get inputType(): string {
        return this.isPasswordHidden ? 'password' : 'text';
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    public togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
