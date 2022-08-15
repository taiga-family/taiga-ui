import {Directive, DoCheck} from '@angular/core';
import {TuiAbstractTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputNumberComponent} from './input-number.component';

@Directive({
    selector: `tui-input-number`,
    providers: [tuiAsTextfieldHost(TuiInputNumberDirective)],
})
export class TuiInputNumberDirective
    extends TuiAbstractTextfieldHost<TuiInputNumberComponent>
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

        this.input.maxLength = this.host.calculatedMaxLength;
        this.input.inputMode = `decimal`;
    }
}
