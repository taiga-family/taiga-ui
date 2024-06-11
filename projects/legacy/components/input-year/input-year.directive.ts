import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiInputYearComponent} from './input-year.component';

@Directive({
    selector: 'tui-input-year',
    providers: [tuiAsTextfieldHost(TuiInputYearDirective)],
})
export class TuiInputYearDirective extends AbstractTuiTextfieldHost<TuiInputYearComponent> {
    public override get value(): string {
        return this.host.nativeValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
        this.host.nativeValue = value;
    }

    public override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }
}
