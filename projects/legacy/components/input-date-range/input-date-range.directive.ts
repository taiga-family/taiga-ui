import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputDateRangeComponent} from './input-date-range.component';

/**
 * @deprecated: drop in v5.0
 */
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
