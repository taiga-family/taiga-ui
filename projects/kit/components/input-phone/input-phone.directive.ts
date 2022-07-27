import {Directive, DoCheck, forwardRef} from '@angular/core';
import {TUI_TEXTFIELD_HOST, TuiAbstractTextfieldHost} from '@taiga-ui/core';

import {TuiInputPhoneComponent} from './input-phone.component';

@Directive({
    selector: `tui-input-phone`,
    providers: [
        {
            provide: TUI_TEXTFIELD_HOST,
            useExisting: forwardRef(() => TuiInputPhoneDirective),
        },
    ],
})
export class TuiInputPhoneDirective
    extends TuiAbstractTextfieldHost<TuiInputPhoneComponent>
    implements DoCheck
{
    input?: HTMLInputElement;

    get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    process(input: HTMLInputElement): void {
        this.input = input;
    }

    ngDoCheck(): void {
        if (!this.input) {
            return;
        }

        this.input.type = `tel`;
        this.input.inputMode = this.host.inputMode;
    }
}
