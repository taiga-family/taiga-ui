import {Directive} from '@angular/core';
import {TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost, tuiAsTextfieldHost} from '@taiga-ui/core';

import {TuiInputTimeComponent} from './input-time.component';

@Directive({
    selector: 'tui-input-time',
    providers: [tuiAsTextfieldHost(TuiInputTimeDirective)],
})
export class TuiInputTimeDirective extends AbstractTuiTextfieldHost<TuiInputTimeComponent> {
    override get value(): string {
        return this.host.computedValue;
    }

    get mode(): TuiTimeMode {
        return this.host.mode;
    }

    get items(): readonly TuiTime[] {
        return this.host.items;
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
