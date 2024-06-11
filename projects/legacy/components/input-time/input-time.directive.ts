import {Directive} from '@angular/core';
import type {TuiTime, TuiTimeMode} from '@taiga-ui/cdk';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputTimeComponent} from './input-time.component';

@Directive({
    selector: 'tui-input-time',
    providers: [tuiAsTextfieldHost(TuiInputTimeDirective)],
})
export class TuiInputTimeDirective extends AbstractTuiTextfieldHost<TuiInputTimeComponent> {
    public override get value(): string {
        return this.host.computedValue;
    }

    public get mode(): TuiTimeMode {
        return this.host.mode;
    }

    public get items(): readonly TuiTime[] {
        return this.host.items;
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
