import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {tuiIsInput} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiInputPasswordComponent} from './input-password.component';

@Directive({
    selector: `tui-input-password`,
    providers: [tuiAsTextfieldHost(TuiInputPasswordDirective)],
})
export class TuiInputPasswordDirective
    extends AbstractTuiTextfieldHost<TuiInputPasswordComponent>
    implements DoCheck
{
    input?: HTMLInputElement;

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
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
