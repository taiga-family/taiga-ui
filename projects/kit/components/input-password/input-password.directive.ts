import {Directive, DoCheck, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputPasswordComponent} from './input-password.component';

@Directive({
    selector: `tui-input-password`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputPasswordDirective),
        },
    ],
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
