import {Directive} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateComponent} from './input-date.component';

@Directive({
    selector: 'tui-input-date',
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
})
export class TuiInputDateDirective extends AbstractTuiTextfieldHost<TuiInputDateComponent> {
    override get value(): string {
        return this.host.computedValue;
    }

    get max(): TuiDay {
        return this.host.max;
    }

    get min(): TuiDay {
        return this.host.min;
    }

    onValueChange(value: string): void {
        if (!value) {
            this.host.nativeValue = '';
        }

        this.host.onValueChange(value);
    }

    override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
