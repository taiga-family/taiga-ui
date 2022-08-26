import {Directive, DoCheck} from '@angular/core';
import {tuiIsInput} from '@taiga-ui/cdk';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputPasswordComponent} from './input-password.component';

@Directive({
    selector: `tui-input-password`,
    providers: [tuiAsTextfieldHost(TuiInputPasswordDirective)],
})
export class TuiInputPasswordDirective
    extends TuiAbstractTextfieldHost<TuiInputPasswordComponent>
    implements DoCheck
{
    input?: HTMLInputElement;

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement): void {
        this.input = input;
    }

    ngDoCheck(): void {
        if (
            this.host.nativeFocusableElement &&
            tuiIsInput(this.host.nativeFocusableElement)
        ) {
            this.host.nativeFocusableElement.type = this.host.inputType;
        }
    }
}
