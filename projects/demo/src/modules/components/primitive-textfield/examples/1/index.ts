import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiHintDirective} from '@taiga-ui/core';
import type {TuiNativeFocusableElement} from '@taiga-ui/legacy';
import {
    AbstractTuiControl,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-primitive-textfield-example-1',
    imports: [
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiButtonDirective,
        TuiHintDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private isPasswordHidden = true;

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    protected get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    protected get icon(): string {
        return this.isPasswordHidden ? '@tui.eye' : '@tui.eye-off';
    }

    protected get hint(): string {
        return this.isPasswordHidden ? 'Show password' : 'Hide password';
    }

    protected get inputType(): string {
        return this.isPasswordHidden ? 'password' : 'text';
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected togglePasswordVisibility(): void {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
