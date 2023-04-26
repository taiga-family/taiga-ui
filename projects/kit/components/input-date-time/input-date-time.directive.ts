import {Directive} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateTimeComponent} from './input-date-time.component';

@Directive({
    selector: 'tui-input-date-time',
    providers: [tuiAsTextfieldHost(TuiInputDateTimeDirective)],
})
export class TuiInputDateTimeDirective extends AbstractTuiTextfieldHost<TuiInputDateTimeComponent> {
    override get value(): string {
        return this.host.computedValue;
    }

    get rawValue(): [TuiDay | null, TuiTime | null] {
        return this.host.value;
    }

    onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    writeValue(value: [TuiDay | null, TuiTime | null]): void {
        this.host.writeValue(value);
    }

    override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
