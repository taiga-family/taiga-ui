import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    TuiPrimitiveTextfieldComponent,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-primitive-textfield-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTextfieldOptionsProvider({iconCleaner: 'tuiIconEdit2', hintOnDisabled: true}),
    ],
})
export class TuiPrimitiveTextfieldExample2 extends AbstractTuiControl<string> {
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
