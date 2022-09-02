import {
    ChangeDetectorRef,
    Component,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {AbstractTuiControl} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';

@Component({
    selector: `tui-primitive-textfield-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPrimitiveTextfieldExample1 extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private isPasswordHidden = true;

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
        return this.isPasswordHidden ? `tuiIconHideLarge` : `tuiIconShowLarge`;
    }

    get hint(): string {
        return this.isPasswordHidden ? `Show password` : `Hide password`;
    }

    get inputType(): string {
        return this.isPasswordHidden ? `password` : `text`;
    }

    onValueChange(textValue: string): void {
        this.updateValue(textValue);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return ``;
    }
}
