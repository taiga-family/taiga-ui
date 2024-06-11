import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {tuiAsTextfieldHost} from '@taiga-ui/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';

import type {TuiInputDateRangeComponent} from './input-date-range.component';

@Directive({
    selector: 'tui-input-date-range',
    providers: [tuiAsTextfieldHost(TuiInputDateRangeDirective)],
})
export class TuiInputDateRangeDirective
    extends AbstractTuiTextfieldHost<TuiInputDateRangeComponent>
    implements DoCheck
{
    public override get value(): string {
        return this.host.computedValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public override process(input: HTMLInputElement): void {
        input.inputMode = 'numeric';
    }

    public ngDoCheck(): void {
        if (this.host.nativeFocusableElement) {
            this.host.nativeFocusableElement.placeholder = this.host.computedExampleText;
        }
    }
}
