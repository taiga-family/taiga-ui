import {Directive, DoCheck} from '@angular/core';
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
        if (this.input) {
            this.input.type = this.host.isPasswordHidden ? `password` : `text`;
        }
    }
}
