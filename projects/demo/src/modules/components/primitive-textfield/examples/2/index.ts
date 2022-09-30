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
import {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    TuiPrimitiveTextfieldComponent,
    tuiPrimitiveTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    selector: `tui-primitive-textfield-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiPrimitiveTextfieldOptionsProvider({
            iconCleaner: `tuiIconChevronUp`,
        }),
    ],
})
export class TuiPrimitiveTextfieldExample2 extends AbstractTuiControl<string> {
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

    onValueChange(textValue: string): void {
        this.updateValue(textValue);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return ``;
    }
}
