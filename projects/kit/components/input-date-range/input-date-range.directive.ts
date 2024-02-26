import {Directive, DoCheck} from '@angular/core';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputDateRangeComponent} from './input-date-range.component';

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
