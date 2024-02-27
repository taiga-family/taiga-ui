import {Directive} from '@angular/core';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateTimeComponent} from './input-date-time.component';

@Directive({
    selector: 'tui-input-date-time',
    providers: [tuiAsTextfieldHost(TuiInputDateTimeDirective)],
})
export class TuiInputDateTimeDirective extends AbstractTuiTextfieldHost<TuiInputDateTimeComponent> {
    public override get value(): string {
        return this.host.computedValue;
    }

    public get rawValue(): [TuiDay | null, TuiTime | null] {
        return this.host.value;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public writeValue(value: [TuiDay | null, TuiTime | null]): void {
        this.host.writeValue(value);
    }

    public override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
