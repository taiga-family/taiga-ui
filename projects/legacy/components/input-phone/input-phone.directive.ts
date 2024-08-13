import type {DoCheck} from '@angular/core';
import {Directive} from '@angular/core';
import {AbstractTuiTextfieldHost} from '@taiga-ui/legacy/classes';
import {tuiAsTextfieldHost} from '@taiga-ui/legacy/tokens';

import type {TuiInputPhoneComponent} from './input-phone.component';

@Directive({
    selector: 'tui-input-phone',
    providers: [tuiAsTextfieldHost(TuiInputPhoneDirective)],
})
export class TuiInputPhoneDirective
    extends AbstractTuiTextfieldHost<TuiInputPhoneComponent>
    implements DoCheck
{
    protected input?: HTMLInputElement;

    public override get value(): string {
        return this.host.nativeValue;
    }

    public onValueChange(value: string): void {
        this.host.onValueChange(value);
    }

    public override process(input: HTMLInputElement): void {
        this.input = input;
    }

    public ngDoCheck(): void {
        if (!this.input) {
            return;
        }

        this.input.type = 'tel';
        this.input.inputMode = this.host.inputMode;
    }
}
