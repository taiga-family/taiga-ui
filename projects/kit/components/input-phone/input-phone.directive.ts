import {Directive, DoCheck} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputPhoneComponent} from './input-phone.component';

@Directive({
    selector: `tui-input-phone`,
    providers: [tuiAsTextfieldHost(TuiInputPhoneDirective)],
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
