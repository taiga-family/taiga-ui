import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import type {TuiInputPhoneComponent} from './input-phone.component';

@Directive({
    selector: `tui-input-phone`,
    providers: [tuiAsTextfieldHost(TuiInputPhoneDirective)],
})
export class TuiInputPhoneDirective
    extends AbstractTuiTextfieldHost<TuiInputPhoneComponent>
    implements DoCheck
{
    input?: HTMLInputElement;

    override get value(): string {
        return this.host.computedValue;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
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
