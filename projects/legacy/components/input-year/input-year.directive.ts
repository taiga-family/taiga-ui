import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputYearComponent} from './input-year.component';

/**
 * @deprecated: drop in v5.0
 */
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
