import {Directive} from '@angular/core';
import type {TuiDay} from '@taiga-ui/cdk';
import type {TuiDateFormatSettings} from '@taiga-ui/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiInputDateComponent} from './input-date.component';

@Directive({
    selector: 'tui-input-date:not([multiple])',
    providers: [tuiAsTextfieldHost(TuiInputDateDirective)],
})
export class TuiInputDateDirective extends AbstractTuiTextfieldHost<TuiInputDateComponent> {
    public override get value(): string {
        return this.host.computedValue;
    }

    public get max(): TuiDay {
        return this.host.computedMax;
    }

    public get min(): TuiDay {
        return this.host.computedMin;
    }

    public get format(): TuiDateFormatSettings {
        return this.host.dateFormat;
    }

    public onValueChange(value: string): void {
        if (!value) {
            this.host.nativeValue = '';
        }

        this.host.onValueChange(value);
    }

    public override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
