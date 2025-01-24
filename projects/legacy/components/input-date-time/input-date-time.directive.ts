import {Directive} from '@angular/core';
import type {TuiDay, TuiTime} from '@taiga-ui/cdk/date-time';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputDateTimeComponent} from './input-date-time.component';

@Directive({
    standalone: false,
    selector: 'tui-input-date-time',
    providers: [tuiAsTextfieldHost(TuiInputDateTimeDirective)],
})
export class TuiInputDateTimeDirective extends AbstractTuiTextfieldHost<TuiInputDateTimeComponent> {
    public override get value(): string {
        return this.host.computedValue;
    }

    public get rawValue(): [TuiDay | null, TuiTime | null] | null {
        return this.host.value ?? null;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public writeValue(value: [TuiDay | null, TuiTime | null] | null): void {
        this.host.writeValue(value);
    }

    public override process(input: HTMLInputElement): void {
        input.inputMode = this.host.timeMode.includes('AA') ? 'text' : 'numeric';
    }
}
