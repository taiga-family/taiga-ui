import {Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import type {TuiNativeFocusableElement} from '@taiga-ui/legacy';
import {
    AbstractTuiControl,
    TuiPrimitiveTextfieldComponent,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'tui-primitive-textfield-example-2',
    imports: [TuiTextfieldControllerModule, TuiPrimitiveTextfieldModule, TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTextfieldOptionsProvider({
            iconCleaner: '@tui.pencil',
            hintOnDisabled: true,
        }),
    ],
})
export default class Example extends AbstractTuiControl<string> {
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
